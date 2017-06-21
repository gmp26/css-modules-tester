# Testing cljs-css-modules

## How?
Testing https://github.com/matthieu-beteille/cljs-css-modules by
porting parts of https://github.com/css-modules/webpack-demo into a set of devcards to understand how they both work, and whether I want to go this way.

###Getting started

Clone the repo, and run `lein cljsbuild once dev` in it. Start a local web server serving the `resources/public` folder, and then visit `cards.html`.


### Development

The repo is set up for figwheel devcards development in Intellij. If you use a different ide you'll probably want to remove the dependency on figwheel-sidecar, and add in the figwheel plugin instead.

### Conclusions

https://github.com/matthieu-beteille/cljs-css-modules works fine. Tests exists and pass and keyframe support is now present too.
