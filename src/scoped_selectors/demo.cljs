(ns scoped-selectors.demo
  (:require [rum.core :as rum]
            [shared.snippet :refer [snippet]]
            [scoped-selectors.core :refer [scoped-selector]]))

(rum/defc scoped-selectors-demo []
  [:div "Scoped Selectors Demo"]
  (snippet [scoped-selector]))
