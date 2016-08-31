(ns css-modules-tester.core
  (:require
    [cljs-css-modules.macro :refer-macros [defstyle]]
    [rum.core :as rum]
    [sablono.core :as sab :include-macros true]
    [scoped-selectors.demo :refer [scoped-selectors-demo]])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defstyle stylish
  [[".container" {:background-color "blue"
                  :font-size        "55px"
                  }
    [:a {:color "green"}]
    [:&:hover {:background-color "black"}]]

   [".text" {:font-size "14px"
             :color     "yellow"}]

   [".title" {:background-color "pink"
              :font-size        "40px"}]

   [".title2" {:font-size "20px"
               :color     "white"}]])

(rum/defc test-component []
  [:div {:class-name (:container stylish)}
   [:h1 {:class-name (:title stylish)} "I am a big title"]
   [:h1 {:class-name (:title2 stylish)} "I am smaller title"]
   [:p {:class-name (:text stylish)}
    "Here goes some random text"]])

#_(defcard first-card
  (sab/html [:div
             [:h1 "This is your first devcard!"]]))

#_(defcard css-modules
  (test-component)
  )

(defcard scoped-selectors
  (scoped-selectors-demo))


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

