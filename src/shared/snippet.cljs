(ns shared.snippet
  (:require [rum.core :as rum]
            [cljs-css-modules.macro :refer-macros [defstyle]]))

(defstyle styles
  [".root" {:margin-top "32px"}]

  [".output" {
              :background       "white"
              :color            "#333"
              :max-width        "700px"
              :border-radius    "10px"
              :margin-bottom    "20px"
              :border           "1px solid #003957"
              :border-top-width 0
              }]

  [".outputContent" {:padding "40px 30px"}]

  [".fileName" {
                :background    "#011E2D"
                :color         "#00B37D"
                :padding       "10px 20px"
                :border-radius " 10px 10px 0 0"
                }]

  )

(rum/defc snippet [children]
  [:div {:class-name (:root styles)}
   [:div {:class-name (:output styles)}
    [:div {:class-name (:fileName styles)} "Output"]
    [:div {:class-name (:outputContent styles)}
     (for [child children] (child))]]])
