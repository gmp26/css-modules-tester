(ns scoped-selectors.core
  (:require [rum.core :as rum]
            [cljs-css-modules.macro :refer-macros [defstyle]]))

(defstyle styles
  [[".root" {
             :border-width "2px"
             :border-style "solid"
             :border-color "#777"
             :padding      "0 20px"
             :margin0      "6px"
             :max-width    "400px"
             }]

   [".text" {
             :color                 "#777"
             :font-size             "24px"
             :font-familyhelvetica, "arial, sans-serif"
             :font-weight           "600"
             }]])

(rum/defc scoped-selector []
  [:div {:class-name (:root styles)}
   [:p {:class-name (:text styles)} "Scoped Selectors"]])
