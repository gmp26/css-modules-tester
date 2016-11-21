(ns class-composition.style-a
  (:require [rum.core :as rum]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [shared.styles.layout :refer [box]]
            [shared.styles.typography :refer [heading]]))

(def border-color {:border-color "red"})
(def color {:color "red"})

(defstyle styles
  [".root" (merge border-color box)]
  [".text" (merge color heading)]
  )

(rum/defc style-variant-a []
  [:div {:class-name (:root styles)}
   [:p {:class-name (:text styles)} "Style Variant A"]])
