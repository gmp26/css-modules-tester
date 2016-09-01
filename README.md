# Testing cljs-css-modules

## How?
Testing https://github.com/matthieu-beteille/cljs-css-modules by
porting parts of https://github.com/css-modules/webpack-demo into a set of devcards to understand how they both work, and whether I want to go this way.

### Development

The repo is set up for figwheel devcards development in Intellij. If you use a different ide you'll probably want to remove the dependency on figwheel-sidecar, and add in the figwheel plugin instead.

### Conclusions

https://github.com/matthieu-beteille/cljs-css-modules works fine. Tests exists and pass. I'm not sure I would need a compose feature. I can see that localised keyframes would be good in some contexts, but it's not a deal breaker.


