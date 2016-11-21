(ns scoped-animations.core
  (:require [rum.core :as rum]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [shared.styles.animations :refer [bounce]]))

(defstyle styles
  [".root" {:padding "20px 10px"}]

  [".ball" (merge {
                   :width         "40px"
                   :height        "40px"
                   :border-radius "20px"
                   :background    "rebeccapurple"
                   } bounce)])

(rum/defc scoped-animation []
  [:div {:class-name (:root styles)}
   [:div {:class-name (:ball styles)}]])
