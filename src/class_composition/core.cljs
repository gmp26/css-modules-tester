(ns class-composition.core
  (:require [rum.core :as rum]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [class-composition.style-a :refer [style-variant-a]]
            [class-composition.style-b :refer [style-variant-b]]
            ))

(rum/defc class-composition []
  [:div
   (style-variant-a)
   [:br]
   (style-variant-b)])