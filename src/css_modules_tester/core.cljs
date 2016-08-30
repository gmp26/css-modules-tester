(ns css-modules-tester.core
  (:require
    [cljs-css-modules.macro :refer-macros [defstyle]]
    [rum.core :as rum]
    [sablono.core :as sab :include-macros true])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defstyle style
          [[".container" {:background-color "blue"
                          :font-size 55}
            [:a {:color "green"}]
            [:&:hover {:background-color "black"}]]

           [".text" {:font-size 14
                     :color "brown"}]

           [".title" {:background-color "blue"
                      :font-size 80}]

           [".title2" {:font-size 20
                       :color "red"}]])

(rum/defc test-component []
  [:div {:class-name (:container style)}
   [:h1 {:class-name (:title style)} "I am a big title"]
   [:h1 {:class-name (:title2 style)} "I am smaller title"]
   [:p {:class-name (:text style)}
    "Here goes some random text"]])

(defcard first-card
  (sab/html [:div
             [:h1 "This is your first devcard!"]]))

(defcard css-modules
         (test-component)
         )

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

