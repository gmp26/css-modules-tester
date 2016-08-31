(ns global-selectors.core
  (:require [rum.core :as rum]
            [cljs-css-modules.macro :refer-macros [defstyle]]))

(defstyle styles
  [[".root" {
     :border-width "2px"
     :border-style "solid"
     :border-color "brown"
     :padding      "0 20px"
     :margin       "0 6px"
     :max-width    "400px"
     }]])

(rum/defc global-selector []
  [:div {:class-name (:root styles)}
   [:p {:class "text"} "Global Selectors use ordinary css"]])
