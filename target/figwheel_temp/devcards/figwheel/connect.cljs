(ns figwheel.connect (:require [devcards.core :include-macros true] [figwheel.client] [figwheel.client.utils] [css-modules-tester.core]))
(figwheel.client/start {:devcards true, :build-id "devcards", :websocket-url "ws://localhost:3449/figwheel-ws"})
(devcards.core/start-devcard-ui!)

