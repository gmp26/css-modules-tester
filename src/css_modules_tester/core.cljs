(ns css-modules-tester.core
  (:require
    [cljs-css-modules.macro :refer-macros [defstyle]]
    [rum.core :as rum]
    [devcards.core :as dc :refer-macros [defcard]]
    [sablono.core :as sab :include-macros true]
    [scoped-selectors.demo :refer [scoped-selectors-demo]]
    [scoped-selectors.core :refer [scoped-selector]]
    [global-selectors.core :refer [global-selector]]
    [class-composition.core :refer [class-composition]]
    [composition-overrides.core :refer [composition-override]]
    [scoped-animations.core :refer [scoped-animation]]
    )
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

(defcard scoped-selector-in-snippet-panel
  "```
(ns shared.snippet\n(:require [rum.core :as rum]\n          [scoped-selectors.core :refer [scoped-selector]]\n          [cljs-css-modules.macro :refer-macros [defstyle]]))\n\n(defstyle styles\n  [[\".root\" {:margin-top \"32px\"}]\n\n   [\".output\" {\n               :background       \"white\"\n               :color            \"#333\"\n               :max-width        \"700px\"\n               :border-radius    \"10px\"\n               :margin-bottom    \"20px\"\n               :border           \"1px solid #003957\"\n               :border-top-width 0\n               }]\n\n   [\".outputContent\" {:padding \"40px 30px\"}]\n   \n   [\".fileName\" {\n                 :background    \"#011E2D\"\n                 :color         \"#00B37D\"\n                 :padding       \"10px 20px\"\n                 :border-radius \" 10px 10px 0 0\"\n                 }]\n\n   ])\n\n(rum/defc snippet [children]\n  [:div {:class-name (:root styles)}\n   [:div {:class-name (:output styles)}\n    [:div {:class-name (:fileName styles)} \"Output\"]\n    [:div {:class-name (:outputContent styles)}\n     (for [child children] (child))]]])\n
(snippet [scoped-selector])    ;; rum/mount this or call from a devcard
```"
  (scoped-selectors-demo)
  )

(defcard scoped-selectors
  "```clojure
(ns scoped-selectors.core\n(:require [rum.core :as rum]\n          [cljs-css-modules.macro :refer-macros [defstyle]]))\n\n(defstyle styles\n  [[\".root\" {\n             :border-width \"2px\"\n             :border-style \"solid\"\n             :border-color \"#777\"\n             :padding      \"0 20px\"\n             :margin0      \"6px\"\n             :max-width    \"400px\"\n             }]\n\n   [\".text\" {\n             :color                 \"#777\"\n             :font-size             \"24px\"\n             :font-familyhelvetica, \"arial, sans-serif\"\n             :font-weight           \"600\"\n             }]])\n\n(rum/defc scoped-selector []\n  [:div {:class-name (:root styles)}\n   [:p {:class-name (:text styles)} \"Scoped Selectors\"]])\n
  ```"
  (scoped-selector))

(defcard global-selectors
  "###Define global styles in a style sheet as above, and reference them using `:class-name`
  ```
  .text {\n      :color       \"brown\"\n      :font-size   \"24px\"\n      :font-family \"helvetica, arial, sans-serif\"\n      :font-weight \"600\"\n  }
  ```
  ###Define localised styles as before.
```
(ns global-selectors.core\n(:require [rum.core :as rum]\n          [cljs-css-modules.macro :refer-macros [defstyle]]))\n\n(defstyle styles\n  [[\".root\" {\n     :border-width \"2px\"\n     :border-style \"solid\"\n     :border-color \"brown\"\n     :padding      \"0 20px\"\n     :margin       \"0 6px\"\n     :max-width    \"400px\"\n     }]])\n\n(rum/defc global-selector []\n  [:div {:class-name (:root styles)}\n   [:p {:class \"text\"} \"Global Selectors use ordinary css\"]])
  ```"
  (global-selector))

(defcard class-composition
  "Code for this mimics the structure of the js webpack original, but in clojure we could avoid the duplication.
```clojure

(ns class-composition.style-a\n(:require   [rum.core :as rum]\n            [cljs-css-modules.macro :refer-macros [defstyle]]\n            [shared.styles.layout :refer [box]]\n            [shared.styles.typography :refer [heading]]))\n\n(def border-color {:border-color \"red\"})\n(def color {:color \"red\"})\n\n(defstyle styles\n          [[\".root\" (merge border-color box)]\n           [\".text\" (merge color heading)]\n           ])\n\n(rum/defc style-variant-a []\n  [:div {:class-name (:root styles)}\n   [:p {:class-name (:text styles)} \"Style Variant A\"]])
```\n
... and repeat for variant b"
  (class-composition))

(defcard composition-overrides
  "Again, nothing much to it in clojure.
```
(ns composition-overrides.core\n(:require   [rum.core :as rum]\n            [cljs-css-modules.macro :refer-macros [defstyle]]\n            [shared.styles.layout :refer [box]]\n            [shared.styles.typography :refer [heading]]))\n\n(defstyle styles \n  [[\".root\" (merge box {:border-style \"dotted\"\n                        :border-color \"green\"})]\n\n   [\".text\" (merge heading {:font-weight 200\n                            :color       \"green\"})]])\n\n(rum/defc composition-override []\n  [:div {:class-name (:root styles)}\n   [:p {:class-name (:text styles)} \"Class Composition with Overrides\"]])```"
  (composition-override))

(defcard scoped-animations
  "This is currently a cheat as the keyframes are not localised to the component.

  We should be injecting something like:
```html
<div class=\"ScopedAnimations__root___31A0H\">
  <div class=\"ScopedAnimations__ball___1jrfA animations__bounce___1So7p\"></div>
</div>
```
but in fact we inject:
```html
<div class=\"root--G__24489\">
  <div class=\"ball--G__24489\"></div>
</div>
```
and the bounce keyframes remain global.
```clojure
```"
  (scoped-animation))


(defn main []
  (devcards.core/start-devcard-ui!)
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  #_(if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

