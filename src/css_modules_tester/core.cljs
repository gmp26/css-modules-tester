(ns css-modules-tester.core
  (:require
    [cljs-css-modules.macro :refer-macros [defstyle]]
    [rum.core :as rum]
    [sablono.core :as sab :include-macros true]
    [scoped-selectors.demo :refer [scoped-selectors-demo]]
    [scoped-selectors.core :refer [scoped-selector]])
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

(defcard scoped-selector-in-snippet
  "```
(ns shared.snippet\n(:require [rum.core :as rum]\n          [scoped-selectors.core :refer [scoped-selector]]\n          [cljs-css-modules.macro :refer-macros [defstyle]]))\n\n(defstyle styles\n  [[\".root\" {:margin-top \"32px\"}]\n\n   [\".output\" {\n               :background       \"white\"\n               :color            \"#333\"\n               :max-width        \"700px\"\n               :border-radius    \"10px\"\n               :margin-bottom    \"20px\"\n               :border           \"1px solid #003957\"\n               :border-top-width 0\n               }]\n\n   [\".outputContent\" {:padding \"40px 30px\"}]\n   \n   [\".fileName\" {\n                 :background    \"#011E2D\"\n                 :color         \"#00B37D\"\n                 :padding       \"10px 20px\"\n                 :border-radius \" 10px 10px 0 0\"\n                 }]\n\n   ])\n\n(rum/defc snippet [children]\n  [:div {:class-name (:root styles)}\n   [:div {:class-name (:output styles)}\n    [:div {:class-name (:fileName styles)} \"Output\"]\n    [:div {:class-name (:outputContent styles)}\n     (for [child children] (child))]]])\n
(snippet [scoped-selector])
```"
  (scoped-selectors-demo)
  )

(defcard scoped-selectors
  "```clojure
(ns scoped-selectors.core\n(:require [rum.core :as rum]\n          [cljs-css-modules.macro :refer-macros [defstyle]]))\n\n(defstyle styles\n  [[\".root\" {\n             :border-width \"2px\"\n             :border-style \"solid\"\n             :border-color \"#777\"\n             :padding      \"0 20px\"\n             :margin0      \"6px\"\n             :max-width    \"400px\"\n             }]\n\n   [\".text\" {\n             :color                 \"#777\"\n             :font-size             \"24px\"\n             :font-familyhelvetica, \"arial, sans-serif\"\n             :font-weight           \"600\"\n             }]])\n\n(rum/defc scoped-selector []\n  [:div {:class-name (:root styles)}\n   [:p {:class-name (:text styles)} \"Scoped Selectors\"]])\n
  ```"
  (scoped-selector))


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

