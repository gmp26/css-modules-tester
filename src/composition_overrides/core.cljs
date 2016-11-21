(ns composition-overrides.core
                                                                             (:require [rum.core :as rum]
                                                                                       [cljs-css-modules.macro :refer-macros [defstyle]]
                                                                                       [shared.styles.layout :refer [box]]
                                                                                       [shared.styles.typography :refer [heading]]))

(defstyle styles
  [".root" (merge box {:border-style "dotted"
                       :border-color "green"})]

  [".text" (merge heading {:font-weight 200
                           :color       "green"})])

(rum/defc composition-override []
  [:div {:class-name (:root styles)}
   [:p {:class-name (:text styles)} "Class Composition with Overrides"]])