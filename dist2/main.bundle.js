webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/content/comments/comments.module": [
		"../../../../../src/app/main/content/comments/comments.module.ts",
		"common",
		"comments.module"
	],
	"./main/content/users/users.module": [
		"../../../../../src/app/main/content/users/users.module.ts",
		"common",
		"users.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/@fuse/animations/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fuseAnimations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var customAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* animation */])([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
var fuseAnimations = [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('animate', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => *', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["q" /* useAnimation */])(customAnimation)])]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('animateStagger', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('50', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])('*')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('100', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])('*')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('200', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])('*')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => 50', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('@*', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* stagger */])('50ms', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])()
            ])
        ], { optional: true })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => 100', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('@*', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* stagger */])('100ms', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])()
            ])
        ], { optional: true })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => 200', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('@*', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* stagger */])('200ms', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])()
            ])
        ], { optional: true }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('fadeInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            display: 'none',
            opacity: 0
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            display: 'block',
            opacity: 1
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('1 => 0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('slideInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            height: '0px',
            display: 'none'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            height: '*',
            display: 'block'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('1 => 0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('slideIn', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => left', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(100%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(0)'
            }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('left => void', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(0)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(-100%)'
            }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => right', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(-100%)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(0)'
            }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('right => void', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(0)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                transform: 'translateX(100%)'
            }))
        ]),
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('slideInLeft', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateX(-100%)',
            display: 'none'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateX(0)',
            display: 'flex'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('slideInRight', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateX(100%)',
            display: 'none'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateX(0)',
            display: 'flex'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('slideInTop', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateY(-100%)',
            display: 'none'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateY(0)',
            display: 'flex'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('slideInBottom', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateY(100%)',
            display: 'none'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            transform: 'translateY(0)',
            display: 'flex'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('expandCollapse', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            height: '0px'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
            height: '*'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out')),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in'))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('routerTransitionLeft', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter, fuse-content > :leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    transform: 'translateX(100%)',
                    opacity: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* sequence */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* group */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateX(0)',
                            opacity: 1
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateX(-100%)',
                            opacity: 0
                        }))
                    ], { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({ transform: 'translateX(100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateX(0%)',
                            opacity: 1
                        }))
                    ], { optional: true })
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
            ])
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('routerTransitionRight', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter, fuse-content > :leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    transform: 'translateX(-100%)',
                    opacity: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* sequence */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* group */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateX(0)',
                            opacity: 1
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateX(100%)',
                            opacity: 0
                        }))
                    ], { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({ transform: 'translateX(-100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateX(0%)',
                            opacity: 1
                        }))
                    ], { optional: true })
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
            ])
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('routerTransitionUp', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter, fuse-content > :leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    transform: 'translateY(100%)',
                    opacity: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                        transform: 'translateY(0)',
                        opacity: 1
                    }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                        transform: 'translateY(-100%)',
                        opacity: 0
                    }))
                ], { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({ transform: 'translateY(100%)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                        transform: 'translateY(0%)',
                        opacity: 1
                    }))
                ], { optional: true })
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('routerTransitionDown', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter, fuse-content > :leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    transform: 'translateY(-100%)',
                    opacity: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* sequence */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* group */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateY(0)',
                            opacity: 1
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateY(100%)',
                            opacity: 0
                        }))
                    ], { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({ transform: 'translateY(-100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                            transform: 'translateY(0%)',
                            opacity: 1
                        }))
                    ], { optional: true })
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
            ])
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["p" /* trigger */])('routerTransitionFade', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter, fuse-content > :leave ', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    opacity: 0
                })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    opacity: 1
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    opacity: 0
                }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    opacity: 0
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* style */])({
                    opacity: 1
                }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* query */])('fuse-content > :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animateChild */])(), { optional: true })
        ]))
    ])
];


/***/ }),

/***/ "../../../../../src/@fuse/components/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>Confirm</h1>\n<div mat-dialog-content>{{confirmMessage}}</div>\n<div mat-dialog-actions class=\"pt-24\">\n    <button mat-raised-button class=\"mat-accent mr-16\" (click)=\"dialogRef.close(true)\">Confirm</button>\n    <button mat-button (click)=\"dialogRef.close(false)\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/@fuse/components/confirm-dialog/confirm-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseConfirmDialogComponent = /** @class */ (function () {
    function FuseConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    FuseConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-confirm-dialog',
            template: __webpack_require__("../../../../../src/@fuse/components/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/confirm-dialog/confirm-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */]])
    ], FuseConfirmDialogComponent);
    return FuseConfirmDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/confirm-dialog/confirm-dialog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FuseConfirmDialogModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FuseConfirmDialogModule = /** @class */ (function () {
    function FuseConfirmDialogModule() {
    }
    FuseConfirmDialogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__fuse_components_confirm_dialog_confirm_dialog_component__["a" /* FuseConfirmDialogComponent */]
            ],
        })
    ], FuseConfirmDialogModule);
    return FuseConfirmDialogModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/countdown/countdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fuse-countdown\">\n\n    <div class=\"time days\">\n        <div class=\"value\">\n            {{countdown.days}}\n        </div>\n        <div class=\"title\">\n            days\n        </div>\n    </div>\n\n    <div class=\"time hours\">\n        <div class=\"value\">\n            {{countdown.hours}}\n        </div>\n        <div class=\"title\">\n            hours\n        </div>\n    </div>\n\n    <div class=\"time minutes\">\n        <div class=\"value\">\n            {{countdown.minutes}}\n        </div>\n        <div class=\"title\">\n            minutes\n        </div>\n    </div>\n\n    <div class=\"time seconds\">\n        <div class=\"value\">\n            {{countdown.seconds}}\n        </div>\n        <div class=\"title\">\n            seconds\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/@fuse/components/countdown/countdown.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  :host .fuse-countdown {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center; }\n  :host .fuse-countdown .time {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 0 12px; }\n  :host .fuse-countdown .time .value {\n        font-size: 34px;\n        line-height: 34px;\n        padding-bottom: 8px; }\n  :host .fuse-countdown .time .title {\n        color: rgba(0, 0, 0, 0.54); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/countdown/countdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCountdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseCountdownComponent = /** @class */ (function () {
    function FuseCountdownComponent() {
        this.countdown = {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };
    }
    FuseCountdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currDate = __WEBPACK_IMPORTED_MODULE_3_moment__();
        var eventDate = __WEBPACK_IMPORTED_MODULE_3_moment__(this.eventDate);
        var diff = eventDate.diff(currDate, 'seconds');
        var countDown = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]
            .interval(1000)
            .map(function (value) {
            return diff = diff - 1;
        })
            .map(function (value) {
            var timeLeft = __WEBPACK_IMPORTED_MODULE_3_moment__["duration"](value, 'seconds');
            return {
                days: timeLeft.asDays().toFixed(0),
                hours: timeLeft.hours(),
                minutes: timeLeft.minutes(),
                seconds: timeLeft.seconds()
            };
        });
        countDown.subscribe(function (value) {
            _this.countdown = value;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('eventDate'),
        __metadata("design:type", Object)
    ], FuseCountdownComponent.prototype, "eventDate", void 0);
    FuseCountdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-countdown',
            template: __webpack_require__("../../../../../src/@fuse/components/countdown/countdown.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/countdown/countdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseCountdownComponent);
    return FuseCountdownComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/countdown/countdown.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FuseCountdownModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_components_countdown_countdown_component__ = __webpack_require__("../../../../../src/@fuse/components/countdown/countdown.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FuseCountdownModule = /** @class */ (function () {
    function FuseCountdownModule() {
    }
    FuseCountdownModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__fuse_components_countdown_countdown_component__["a" /* FuseCountdownComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__fuse_components_countdown_countdown_component__["a" /* FuseCountdownComponent */]
            ],
        })
    ], FuseCountdownModule);
    return FuseCountdownModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/demo/demo-content/demo-content.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- DEMO CONTENT -->\n<div class=\"demo-content\">\n\n    <img src=\"assets/images/beach.jpg\" alt=\"beach\" style=\"max-width: 640px; width: 100%;\">\n\n    <h1>Early Sunrise</h1>\n    <h4 class=\"secondary-text\">Demo Content</h4>\n\n    <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor nibh, convallis sed purus nec,\n        auctor venenatis nisl. Suspendisse potenti. Nullam sagittis nulla in diam finibus, sed pharetra velit\n        vestibulum. Suspendisse euismod in urna eu posuere.\n    </p>\n\n    <blockquote>\n        <p>\n            Nunc vel lacinia lorem. Nullam tincidunt sed purus eu placerat. Donec id dictum erat. Etiam enim ex, dapibus\n            et tortor id, posuere pretium est. Maecenas fringilla ipsum vitae neque elementum, at eleifend ante\n            sollicitudin. Donec viverra augue dolor, a venenatis tellus consectetur sit amet.\n        </p>\n        <footer>\n            John Doe\n        </footer>\n    </blockquote>\n\n    <p>\n        Ut ornare sit amet velit vel congue. Ut nec tristique eros. Lorem ipsum dolor sit amet, consectetur adipiscing\n        elit. Vivamus sed lorem quis nibh porta iaculis. Vestibulum ut eleifend ante, at semper mi. Nam imperdiet est\n        nisi, quis hendrerit tellus convallis et. Morbi in luctus neque. Curabitur elementum ut est et gravida. In hac\n        habitasse platea dictumst.\n    </p>\n\n    <p>\n        In et placerat eros, eu tempor turpis. Curabitur ac felis finibus, elementum lectus vitae, venenatis est.\n        Integer mollis nisl a eros scelerisque varius. Etiam venenatis lectus vel erat condimentum tristique vel vel mi.\n        Nulla id euismod mi, et mollis tellus.\n    </p>\n\n    <p>\n        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti\n        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae sagittis odio.\n        Suspendisse ullamcorper nunc non pellentesque laoreet. Curabitur eu tortor id quam pretium mattis. Proin ut quam\n        velit.\n    </p>\n\n    <p>\n        Quisque sit amet risus enim. Aliquam sit amet interdum justo, at ultricies sapien. Suspendisse et semper urna,\n        in gravida eros. Quisque id nibh iaculis, euismod urna sed, egestas nisi. Donec eros metus, congue a imperdiet\n        feugiat, sagittis nec ipsum. Quisque dapibus mollis felis non tristique.\n    </p>\n\n    <p>\n        Ut auctor, metus sed dapibus tempus, urna diam auctor odio, in malesuada odio risus vitae nisi. Etiam blandit\n        ante urna, vitae placerat massa mollis in. Duis nec urna ac purus semper dictum ut eget justo. Aenean non\n        sagittis augue. Sed venenatis rhoncus enim eget ornare. Donec viverra sed felis at venenatis. Mauris aliquam\n        fringilla nulla, sit amet congue felis dignissim at.\n    </p>\n\n    <p>\n        Quisque accumsan augue tempor ante mollis, sed placerat diam porttitor. Vestibulum dignissim sem vel velit\n        eleifend, non pellentesque quam convallis. Pellentesque est dolor, dignissim ac tortor tristique, hendrerit\n        iaculis metus. Praesent pulvinar quam eu leo consectetur faucibus. Vestibulum purus diam, gravida sagittis\n        feugiat sit amet, tincidunt in ligula. Sed semper vestibulum magna. Lorem ipsum dolor sit amet, consectetur\n        adipiscing elit. Suspendisse tortor nibh, convallis sed purus nec, auctor venenatis nisl. Suspendisse potenti.\n    </p>\n\n    <p>\n        Nullam sagittis nulla in diam finibus, sed pharetra velit vestibulum. Suspendisse euismod in urna eu posuere.\n        Etiam blandit nunc arcu, et consectetur orci blandit a. Aliquam condimentum pharetra quam at ultricies. Nunc vel\n        lacinia lorem. Nullam tincidunt sed purus eu placerat. Donec id dictum erat. Etiam enim ex, dapibus et tortor\n        id, posuere pretium est. Maecenas fringilla ipsum vitae neque elementum, at eleifend ante sollicitudin. Donec\n        viverra augue dolor, a venenatis tellus consectetur sit amet...\n    </p>\n</div>\n<!-- / DEMO CONTENT -->\n"

/***/ }),

/***/ "../../../../../src/@fuse/components/demo/demo-content/demo-content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/demo/demo-content/demo-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseDemoContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseDemoContentComponent = /** @class */ (function () {
    function FuseDemoContentComponent() {
    }
    FuseDemoContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-demo-content',
            template: __webpack_require__("../../../../../src/@fuse/components/demo/demo-content/demo-content.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/demo/demo-content/demo-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseDemoContentComponent);
    return FuseDemoContentComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/demo/demo-sidenav/demo-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-sidenav\">\n    <mat-list>\n        <h3 matSubheader>Sidenav Demo</h3>\n\n        <mat-list-item>\n            <span>Sidenav Item 1</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 2</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 3</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 4</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 5</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 6</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 7</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 8</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 9</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 10</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 11</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 12</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 13</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 14</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 15</span>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n        <mat-list-item>\n            <span>Sidenav Item 16</span>\n        </mat-list-item>\n\n    </mat-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/@fuse/components/demo/demo-sidenav/demo-sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/demo/demo-sidenav/demo-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseDemoSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseDemoSidenavComponent = /** @class */ (function () {
    function FuseDemoSidenavComponent() {
    }
    FuseDemoSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-demo-sidenav',
            template: __webpack_require__("../../../../../src/@fuse/components/demo/demo-sidenav/demo-sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/demo/demo-sidenav/demo-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseDemoSidenavComponent);
    return FuseDemoSidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FuseDemoModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_content_demo_content_component__ = __webpack_require__("../../../../../src/@fuse/components/demo/demo-content/demo-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_sidenav_demo_sidenav_component__ = __webpack_require__("../../../../../src/@fuse/components/demo/demo-sidenav/demo-sidenav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FuseDemoModule = /** @class */ (function () {
    function FuseDemoModule() {
    }
    FuseDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__demo_content_demo_content_component__["a" /* FuseDemoContentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__demo_sidenav_demo_sidenav_component__["a" /* FuseDemoSidenavComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatListModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__demo_content_demo_content_component__["a" /* FuseDemoContentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__demo_sidenav_demo_sidenav_component__["a" /* FuseDemoSidenavComponent */]
            ]
        })
    ], FuseDemoModule);
    return FuseDemoModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/highlight/highlight.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 8px;\n  background: #263238;\n  cursor: text; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/highlight/highlight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseHighlightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_prism__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_prism__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prism_languages__ = __webpack_require__("../../../../../src/@fuse/components/highlight/prism-languages.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseHighlightComponent = /** @class */ (function () {
    function FuseHighlightComponent(elementRef, http) {
        this.elementRef = elementRef;
        this.http = http;
    }
    FuseHighlightComponent.prototype.ngOnInit = function () {
        var _this = this;
        // If there is no language defined, return...
        if (!this.lang) {
            return;
        }
        // If the path is defined...
        if (this.path) {
            // Get the source
            this.http.get(this.path, { responseType: 'text' }).subscribe(function (response) {
                // Highlight it
                _this.highlight(response);
            });
        }
        // If the path is not defined and the source element exists...
        if (!this.path && this.source) {
            // Highlight it
            this.highlight(this.source.nativeElement.value);
        }
    };
    FuseHighlightComponent.prototype.highlight = function (sourceCode) {
        // Split the source into lines
        var sourceLines = sourceCode.split('\n');
        // Remove the first and the last line of the source
        // code if they are blank lines. This way, the html
        // can be formatted properly while using fuse-highlight
        // component
        if (!sourceLines[0].trim()) {
            sourceLines.shift();
        }
        if (!sourceLines[sourceLines.length - 1].trim()) {
            sourceLines.pop();
        }
        // Find the first non-whitespace char index in
        // the first line of the source code
        var indexOfFirstChar = sourceLines[0].search(/\S|$/);
        // Generate the trimmed source
        var source = '';
        // Iterate through all the lines
        sourceLines.forEach(function (line, index) {
            // Trim the beginning white space depending on the index
            // and concat the source code
            source = source + line.substr(indexOfFirstChar, line.length);
            // If it's not the last line...
            if (index !== sourceLines.length - 1) {
                // Add a line break at the end
                source = source + '\n';
            }
        });
        // Generate the highlighted code
        var highlightedCode = __WEBPACK_IMPORTED_MODULE_2_prismjs_prism__["highlight"](source, __WEBPACK_IMPORTED_MODULE_2_prismjs_prism__["languages"][this.lang]);
        // Replace the innerHTML of the component with the highlighted code
        this.elementRef.nativeElement.innerHTML =
            '<pre><code class="highlight language-' + this.lang + '">' + highlightedCode + '</code></pre>';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])('source'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], FuseHighlightComponent.prototype, "source", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('lang'),
        __metadata("design:type", String)
    ], FuseHighlightComponent.prototype, "lang", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('path'),
        __metadata("design:type", String)
    ], FuseHighlightComponent.prototype, "path", void 0);
    FuseHighlightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-highlight',
            template: ' ',
            styles: [__webpack_require__("../../../../../src/@fuse/components/highlight/highlight.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FuseHighlightComponent);
    return FuseHighlightComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/highlight/highlight.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FuseHighlightModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_components_highlight_highlight_component__ = __webpack_require__("../../../../../src/@fuse/components/highlight/highlight.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FuseHighlightModule = /** @class */ (function () {
    function FuseHighlightModule() {
    }
    FuseHighlightModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__fuse_components_highlight_highlight_component__["a" /* FuseHighlightComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__fuse_components_highlight_highlight_component__["a" /* FuseHighlightComponent */]
            ],
        })
    ], FuseHighlightModule);
    return FuseHighlightModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/highlight/prism-languages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs_prism__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs_prism__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_c__ = __webpack_require__("../../../../prismjs/components/prism-c.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_c___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs_components_prism_c__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_cpp__ = __webpack_require__("../../../../prismjs/components/prism-cpp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_cpp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_cpp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_csharp__ = __webpack_require__("../../../../prismjs/components/prism-csharp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_csharp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_csharp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_css__ = __webpack_require__("../../../../prismjs/components/prism-css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_diff__ = __webpack_require__("../../../../prismjs/components/prism-diff.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_diff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_diff__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_markup__ = __webpack_require__("../../../../prismjs/components/prism-markup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_markup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prismjs_components_prism_markup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prismjs_components_prism_java__ = __webpack_require__("../../../../prismjs/components/prism-java.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prismjs_components_prism_java___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prismjs_components_prism_java__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prismjs_components_prism_javascript__ = __webpack_require__("../../../../prismjs/components/prism-javascript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prismjs_components_prism_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prismjs_components_prism_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prismjs_components_prism_json__ = __webpack_require__("../../../../prismjs/components/prism-json.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prismjs_components_prism_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prismjs_components_prism_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prismjs_components_prism_perl__ = __webpack_require__("../../../../prismjs/components/prism-perl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prismjs_components_prism_perl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prismjs_components_prism_perl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prismjs_components_prism_php__ = __webpack_require__("../../../../prismjs/components/prism-php.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prismjs_components_prism_php___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prismjs_components_prism_php__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prismjs_components_prism_python__ = __webpack_require__("../../../../prismjs/components/prism-python.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prismjs_components_prism_python___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prismjs_components_prism_python__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prismjs_components_prism_sass__ = __webpack_require__("../../../../prismjs/components/prism-sass.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prismjs_components_prism_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_prismjs_components_prism_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_prismjs_components_prism_scss__ = __webpack_require__("../../../../prismjs/components/prism-scss.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_prismjs_components_prism_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_prismjs_components_prism_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prismjs_components_prism_typescript__ = __webpack_require__("../../../../prismjs/components/prism-typescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_prismjs_components_prism_typescript__);


















/***/ }),

/***/ "../../../../../src/@fuse/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confirm_dialog_confirm_dialog_module__ = __webpack_require__("../../../../../src/@fuse/components/confirm-dialog/confirm-dialog.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__countdown_countdown_module__ = __webpack_require__("../../../../../src/@fuse/components/countdown/countdown.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_demo_module__ = __webpack_require__("../../../../../src/@fuse/components/demo/demo.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__highlight_highlight_module__ = __webpack_require__("../../../../../src/@fuse/components/highlight/highlight.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_color_picker_material_color_picker_module__ = __webpack_require__("../../../../../src/@fuse/components/material-color-picker/material-color-picker.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__ = __webpack_require__("../../../../../src/@fuse/components/navigation/navigation.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_bar_search_bar_module__ = __webpack_require__("../../../../../src/@fuse/components/search-bar/search-bar.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__search_bar_search_bar_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shortcuts_shortcuts_module__ = __webpack_require__("../../../../../src/@fuse/components/shortcuts/shortcuts.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__shortcuts_shortcuts_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/@fuse/components/sidebar/sidebar.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme_options_theme_options_module__ = __webpack_require__("../../../../../src/@fuse/components/theme-options/theme-options.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__theme_options_theme_options_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__widget_widget_module__ = __webpack_require__("../../../../../src/@fuse/components/widget/widget.module.ts");
/* unused harmony namespace reexport */













/***/ }),

/***/ "../../../../../src/@fuse/components/material-color-picker/material-color-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button\n        type=\"button\"\n        class=\"mat-elevation-z1\"\n        [matMenuTriggerFor]=\"colorMenu\"\n        (menuOpened)=\"onMenuOpen()\"\n        [ngClass]=\"'mat-'+selectedPalette+'-'+selectedHue+'-bg'\">\n    <mat-icon>palette</mat-icon>\n</button>\n\n<mat-menu #colorMenu=\"matMenu\" class=\"fuse-material-color-picker-menu\">\n\n    <header [ngClass]=\"selectedColor?.class || 'mat-accent-bg'\" class=\"mat-elevation-z4\"\n            fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <button mat-icon-button\n                [style.visibility]=\"view==='hues'?'visible':'hidden'\"\n                (click)=\"$event.stopPropagation();backToPaletteSelection()\" aria-label=\"Palette\">\n            <mat-icon class=\"s-20\">arrow_back</mat-icon>\n        </button>\n\n        <span *ngIf=\"selectedColor?.palette\">\n            {{selectedColor.palette}} {{selectedColor.hue}}\n        </span>\n\n        <span *ngIf=\"!selectedColor?.palette\">\n            Select Color\n        </span>\n\n        <button mat-icon-button\n                class=\"remove-color-button\"\n                (click)=\"$event.stopPropagation();removeColor()\"\n                aria-label=\"Remove Color\">\n            <mat-icon class=\"s-20\">delete</mat-icon>\n        </button>\n    </header>\n\n\n    <div [ngSwitch]=\"view\" class=\"views\">\n\n        <div class=\"view\" *ngSwitchCase=\"'palettes'\">\n\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" class=\"colors\" fusePerfectScrollbar>\n                <div class=\"color\"\n                     [ngClass]=\"'mat-'+color.key+'-bg'\"\n                     *ngFor=\"let color of (colors | keys)\"\n                     (click)=\"$event.stopPropagation();selectPalette(color.key)\"\n                     fxLayout=\"row\" fxLayoutAlign=\"start end\" mat-ink-ripple>\n                    <span class=\"label\">\n                        {{color.key}}\n                    </span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"view\" *ngSwitchCase=\"'hues'\" >\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" class=\"colors\" fusePerfectScrollbar>\n                <div class=\"color\" *ngFor=\"let hue of hues\"\n                     [fxHide]=\"selectedPalette === 'white' && hue !== '500'|| selectedPalette === 'black' && hue !== '500'\"\n                     [ngClass]=\"'mat-'+selectedPalette+'-'+hue+'-bg'\"\n                     (click)=\"selectHue(hue)\" fxLayout=\"row\" fxLayoutAlign=\"start end\" mat-ink-ripple>\n                    <span class=\"label\">\n                        {{hue}}\n                    </span>\n                    <mat-icon *ngIf=\"selectedHue === hue\" class=\"s-16\">check</mat-icon>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/@fuse/components/material-color-picker/material-color-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fuse-material-color-picker-menu {\n  width: 208px; }\n  .fuse-material-color-picker-menu .mat-menu-content {\n    padding: 0; }\n  .fuse-material-color-picker-menu .mat-menu-content .views {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      position: relative;\n      overflow: hidden;\n      min-height: 258px;\n      height: 308px;\n      background-color: #F7F7F7; }\n  .fuse-material-color-picker-menu .mat-menu-content .views .view {\n        position: absolute;\n        width: 208px;\n        height: 100%;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0; }\n  .fuse-material-color-picker-menu .mat-menu-content .views .view .colors {\n          position: relative;\n          padding: 4px; }\n  .fuse-material-color-picker-menu .mat-menu-content .views .view .colors .color {\n            position: relative;\n            width: 46px;\n            height: 46px;\n            margin: 2px;\n            border-radius: 0;\n            cursor: pointer; }\n  .fuse-material-color-picker-menu .mat-menu-content .views .view .colors .color .label {\n              padding: 2px;\n              font-size: 10px; }\n  .fuse-material-color-picker-menu .mat-menu-content .views .view .colors .color mat-icon {\n              position: absolute;\n              top: 2px;\n              right: 2px;\n              font-size: 16px;\n              opacity: 0.7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/material-color-picker/material-color-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMaterialColorPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_animations__ = __webpack_require__("../../../../../src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_mat_colors__ = __webpack_require__("../../../../../src/@fuse/mat-colors/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseMaterialColorPickerComponent = /** @class */ (function () {
    function FuseMaterialColorPickerComponent() {
        this.view = 'palettes';
        this.selectedPalette = '';
        this.selectedHue = '';
        this.selectedFg = '';
        this.onValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.selectedPaletteChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.selectedHueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.selectedClassChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.selectedBgChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.selectedFgChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this._selectedClass = '';
        this._selectedBg = '';
        this.colors = __WEBPACK_IMPORTED_MODULE_2__fuse_mat_colors__["a" /* MatColors */].all;
        this.hues = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'];
    }
    Object.defineProperty(FuseMaterialColorPickerComponent.prototype, "selectedClass", {
        get: function () {
            return this._selectedClass;
        },
        set: function (value) {
            if (value && value !== '' && this._selectedClass !== value) {
                var color = value.split('-');
                if (color.length >= 5) {
                    this.selectedPalette = color[1] + '-' + color[2];
                    this.selectedHue = color[3];
                }
                else {
                    this.selectedPalette = color[1];
                    this.selectedHue = color[2];
                }
            }
            this._selectedClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FuseMaterialColorPickerComponent.prototype, "selectedBg", {
        get: function () {
            return this._selectedBg;
        },
        set: function (value) {
            if (value && value !== '' && this._selectedBg !== value) {
                for (var palette in this.colors) {
                    if (!this.colors.hasOwnProperty(palette)) {
                        continue;
                    }
                    for (var _i = 0, _a = this.hues; _i < _a.length; _i++) {
                        var hue = _a[_i];
                        if (this.colors[palette][hue] === value) {
                            this.selectedPalette = palette;
                            this.selectedHue = hue;
                            break;
                        }
                    }
                }
            }
            this._selectedBg = value;
        },
        enumerable: true,
        configurable: true
    });
    FuseMaterialColorPickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedBg && changes.selectedBg.currentValue === '' ||
            changes.selectedClass && changes.selectedClass.currentValue === '' ||
            changes.selectedPalette && changes.selectedPalette.currentValue === '') {
            this.removeColor();
            return;
        }
        if (changes.selectedPalette || changes.selectedHue || changes.selectedClass || changes.selectedBg) {
            this.updateSelectedColor();
        }
    };
    FuseMaterialColorPickerComponent.prototype.selectPalette = function (palette) {
        this.selectedPalette = palette;
        this.updateSelectedColor();
        this.view = 'hues';
    };
    FuseMaterialColorPickerComponent.prototype.selectHue = function (hue) {
        this.selectedHue = hue;
        this.updateSelectedColor();
    };
    FuseMaterialColorPickerComponent.prototype.removeColor = function () {
        this.selectedPalette = '';
        this.selectedHue = '';
        this.updateSelectedColor();
        this.view = 'palettes';
    };
    FuseMaterialColorPickerComponent.prototype.updateSelectedColor = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.selectedColor && _this.selectedPalette === _this.selectedColor.palette && _this.selectedHue === _this.selectedColor.hue) {
                return;
            }
            if (_this.selectedPalette !== '' && _this.selectedHue !== '') {
                _this.selectedBg = __WEBPACK_IMPORTED_MODULE_2__fuse_mat_colors__["a" /* MatColors */].getColor(_this.selectedPalette)[_this.selectedHue];
                _this.selectedFg = __WEBPACK_IMPORTED_MODULE_2__fuse_mat_colors__["a" /* MatColors */].getColor(_this.selectedPalette).contrast[_this.selectedHue];
                _this.selectedClass = 'mat-' + _this.selectedPalette + '-' + _this.selectedHue + '-bg';
            }
            else {
                _this.selectedBg = '';
                _this.selectedFg = '';
            }
            _this.selectedColor = {
                palette: _this.selectedPalette,
                hue: _this.selectedHue,
                class: _this.selectedClass,
                bg: _this.selectedBg,
                fg: _this.selectedFg
            };
            _this.selectedPaletteChange.emit(_this.selectedPalette);
            _this.selectedHueChange.emit(_this.selectedHue);
            _this.selectedClassChange.emit(_this.selectedClass);
            _this.selectedBgChange.emit(_this.selectedBg);
            _this.selectedFgChange.emit(_this.selectedFg);
            _this.value = _this.selectedColor;
            _this.onValueChange.emit(_this.selectedColor);
        });
    };
    FuseMaterialColorPickerComponent.prototype.backToPaletteSelection = function () {
        this.view = 'palettes';
    };
    FuseMaterialColorPickerComponent.prototype.onMenuOpen = function () {
        if (this.selectedPalette === '') {
            this.view = 'palettes';
        }
        else {
            this.view = 'hues';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedPalette", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedHue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedFg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "onValueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedPaletteChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedHueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedClassChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedBgChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], FuseMaterialColorPickerComponent.prototype, "selectedFgChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FuseMaterialColorPickerComponent.prototype, "selectedClass", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FuseMaterialColorPickerComponent.prototype, "selectedBg", null);
    FuseMaterialColorPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-material-color-picker',
            template: __webpack_require__("../../../../../src/@fuse/components/material-color-picker/material-color-picker.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/material-color-picker/material-color-picker.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_1__fuse_animations__["a" /* fuseAnimations */],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], FuseMaterialColorPickerComponent);
    return FuseMaterialColorPickerComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/material-color-picker/material-color-picker.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMaterialColorPickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_pipes_pipes_module__ = __webpack_require__("../../../../../src/@fuse/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components_material_color_picker_material_color_picker_component__ = __webpack_require__("../../../../../src/@fuse/components/material-color-picker/material-color-picker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FuseMaterialColorPickerModule = /** @class */ (function () {
    function FuseMaterialColorPickerModule() {
    }
    FuseMaterialColorPickerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__fuse_components_material_color_picker_material_color_picker_component__["a" /* FuseMaterialColorPickerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_pipes_pipes_module__["a" /* FusePipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__fuse_components_material_color_picker_material_color_picker_component__["a" /* FuseMaterialColorPickerComponent */]
            ],
        })
    ], FuseMaterialColorPickerModule);
    return FuseMaterialColorPickerModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n    <mat-icon class=\"collapse-arrow\">keyboard_arrow_right</mat-icon>\n</a>\n\n<div class=\"children\" [ngClass]=\"{'open': isOpen}\">\n\n    <div class=\"{{fuseSettings.colorClasses.navbar}}\">\n\n        <ng-container *ngFor=\"let item of item.children\">\n            <fuse-nav-horizontal-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-horizontal-item>\n            <fuse-nav-horizontal-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-horizontal-collapse>\n            <fuse-nav-horizontal-collapse *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-horizontal-collapse>\n        </ng-container>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavHorizontalCollapseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_index__ = __webpack_require__("../../../../../src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__("../../../../../src/@fuse/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseNavHorizontalCollapseComponent = /** @class */ (function () {
    function FuseNavHorizontalCollapseComponent(fuseConfig) {
        var _this = this;
        this.fuseConfig = fuseConfig;
        this.isOpen = false;
        this.classes = 'nav-item nav-collapse';
        this.onConfigChanged =
            this.fuseConfig.onConfigChanged
                .subscribe(function (newSettings) {
                _this.fuseSettings = newSettings;
            });
    }
    FuseNavHorizontalCollapseComponent.prototype.open = function () {
        this.isOpen = true;
    };
    FuseNavHorizontalCollapseComponent.prototype.close = function () {
        this.isOpen = false;
    };
    FuseNavHorizontalCollapseComponent.prototype.ngOnDestroy = function () {
        this.onConfigChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], FuseNavHorizontalCollapseComponent.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FuseNavHorizontalCollapseComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseNavHorizontalCollapseComponent.prototype, "open", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseNavHorizontalCollapseComponent.prototype, "close", null);
    FuseNavHorizontalCollapseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-nav-horizontal-collapse',
            template: __webpack_require__("../../../../../src/@fuse/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_1__animations_index__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_config_service__["b" /* FuseConfigService */]])
    ], FuseNavHorizontalCollapseComponent);
    return FuseNavHorizontalCollapseComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/horizontal/nav-item/nav-horizontal-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" *ngIf=\"item.url\" [routerLink]=\"[item.url]\" routerLinkActive=\"active\"\n   [routerLinkActiveOptions]=\"{exact: item.exactMatch || false}\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n</a>\n\n<span class=\"nav-link\" *ngIf=\"item.function\" (click)=\"item.function()\" matRipple>\n    <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n    <span class=\"nav-link-title\">{{item.title}}</span>\n    <span class=\"nav-link-badge\" *ngIf=\"item.badge\"\n          [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n        {{item.badge.title}}\n    </span>\n</span>"

/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/horizontal/nav-item/nav-horizontal-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/horizontal/nav-item/nav-horizontal-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavHorizontalItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseNavHorizontalItemComponent = /** @class */ (function () {
    function FuseNavHorizontalItemComponent() {
        this.classes = 'nav-item';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], FuseNavHorizontalItemComponent.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FuseNavHorizontalItemComponent.prototype, "item", void 0);
    FuseNavHorizontalItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-nav-horizontal-item',
            template: __webpack_require__("../../../../../src/@fuse/components/navigation/horizontal/nav-item/nav-horizontal-item.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/navigation/horizontal/nav-item/nav-horizontal-item.component.scss")]
        })
    ], FuseNavHorizontalItemComponent);
    return FuseNavHorizontalItemComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-navigation\" class=\"nav\"\n     [ngClass]=\"{'horizontal':layout === 'horizontal', 'vertical':layout === 'vertical'}\">\n\n    <!-- Vertical Navigation Layout -->\n    <ng-container *ngIf=\"layout === 'vertical'\">\n\n        <ng-container *ngFor=\"let item of navigation\">\n\n            <fuse-nav-vertical-group *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-vertical-group>\n            <fuse-nav-vertical-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-vertical-collapse>\n            <fuse-nav-vertical-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-vertical-item>\n\n        </ng-container>\n\n    </ng-container>\n    <!-- / Vertical Navigation Layout -->\n\n    <!-- Horizontal Navigation Layout -->\n    <ng-container *ngIf=\"layout === 'horizontal'\">\n\n        <ng-container *ngFor=\"let item of navigation\">\n\n            <fuse-nav-horizontal-collapse *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-horizontal-collapse>\n            <fuse-nav-horizontal-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-horizontal-collapse>\n            <fuse-nav-horizontal-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-horizontal-item>\n\n        </ng-container>\n\n    </ng-container>\n    <!-- / Horizontal Navigation Layout -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-navigation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\nfuse-navigation #main-navigation {\n    margin: 0;\n    padding: 0;\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseNavigationComponent = /** @class */ (function () {
    function FuseNavigationComponent() {
        this.layout = 'vertical';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FuseNavigationComponent.prototype, "layout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FuseNavigationComponent.prototype, "navigation", void 0);
    FuseNavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-navigation',
            template: __webpack_require__("../../../../../src/@fuse/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/navigation/navigation.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], FuseNavigationComponent);
    return FuseNavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_component__ = __webpack_require__("../../../../../src/@fuse/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vertical_nav_item_nav_vertical_item_component__ = __webpack_require__("../../../../../src/@fuse/components/navigation/vertical/nav-item/nav-vertical-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vertical_nav_collapse_nav_vertical_collapse_component__ = __webpack_require__("../../../../../src/@fuse/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vertical_nav_group_nav_vertical_group_component__ = __webpack_require__("../../../../../src/@fuse/components/navigation/vertical/nav-group/nav-vertical-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__horizontal_nav_item_nav_horizontal_item_component__ = __webpack_require__("../../../../../src/@fuse/components/navigation/horizontal/nav-item/nav-horizontal-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__horizontal_nav_collapse_nav_horizontal_collapse_component__ = __webpack_require__("../../../../../src/@fuse/components/navigation/horizontal/nav-collapse/nav-horizontal-collapse.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FuseNavigationModule = /** @class */ (function () {
    function FuseNavigationModule() {
    }
    FuseNavigationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatRippleModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__navigation_component__["a" /* FuseNavigationComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__navigation_component__["a" /* FuseNavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__vertical_nav_group_nav_vertical_group_component__["a" /* FuseNavVerticalGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_5__vertical_nav_item_nav_vertical_item_component__["a" /* FuseNavVerticalItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__vertical_nav_collapse_nav_vertical_collapse_component__["a" /* FuseNavVerticalCollapseComponent */],
                __WEBPACK_IMPORTED_MODULE_8__horizontal_nav_item_nav_horizontal_item_component__["a" /* FuseNavHorizontalItemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__horizontal_nav_collapse_nav_horizontal_collapse_component__["a" /* FuseNavHorizontalCollapseComponent */]
            ]
        })
    ], FuseNavigationModule);
    return FuseNavigationModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/navigation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseNavigationService = /** @class */ (function () {
    function FuseNavigationService() {
        this.flatNavigation = [];
        this.onItemCollapsed = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */];
        this.onItemCollapseToggled = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */];
    }
    /**
     * Get flattened navigation array
     * @param navigation
     * @returns {any[]}
     */
    FuseNavigationService.prototype.getFlatNavigation = function (navigation) {
        for (var _i = 0, navigation_1 = navigation; _i < navigation_1.length; _i++) {
            var navItem = navigation_1[_i];
            if (navItem.type === 'item') {
                this.flatNavigation.push({
                    title: navItem.title,
                    type: navItem.type,
                    icon: navItem.icon || false,
                    url: navItem.url
                });
                continue;
            }
            if (navItem.type === 'collapse' || navItem.type === 'group') {
                if (navItem.children) {
                    this.getFlatNavigation(navItem.children);
                }
            }
        }
        return this.flatNavigation;
    };
    FuseNavigationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FuseNavigationService);
    return FuseNavigationService;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.hidden\">\n\n    <a class=\"nav-link\" matRipple (click)=\"toggleOpen($event)\">\n        <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n        <span class=\"nav-link-title\">{{item.title}}</span>\n        <span class=\"nav-link-badge\" *ngIf=\"item.badge\" [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n            {{item.badge.title}}\n        </span>\n        <mat-icon class=\"collapse-arrow\">keyboard_arrow_right</mat-icon>\n    </a>\n\n    <div class=\"children\" [@slideInOut]=\"isOpen\">\n        <ng-container *ngFor=\"let item of item.children\">\n            <fuse-nav-vertical-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-vertical-item>\n            <fuse-nav-vertical-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-vertical-collapse>\n            <fuse-nav-vertical-group *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-vertical-group>\n        </ng-container>\n    </div>\n\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folded:not(.unfolded) :host .nav-link > span {\n  opacity: 0;\n  -webkit-transition: opacity 200ms ease;\n  transition: opacity 200ms ease; }\n\n.folded:not(.unfolded) :host.open .children {\n  display: none !important; }\n\n:host .nav-link .collapse-arrow {\n  -webkit-transition: opacity .25s ease-in-out .1s, -webkit-transform .3s ease-in-out;\n  transition: opacity .25s ease-in-out .1s, -webkit-transform .3s ease-in-out;\n  transition: transform .3s ease-in-out, opacity .25s ease-in-out .1s;\n  transition: transform .3s ease-in-out, opacity .25s ease-in-out .1s, -webkit-transform .3s ease-in-out;\n  -webkit-transform: rotate(0);\n          transform: rotate(0); }\n\n:host > .children {\n  overflow: hidden; }\n\n:host.open > .nav-link .collapse-arrow {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavVerticalCollapseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_service__ = __webpack_require__("../../../../../src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_index__ = __webpack_require__("../../../../../src/@fuse/animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseNavVerticalCollapseComponent = /** @class */ (function () {
    function FuseNavVerticalCollapseComponent(navigationService, router) {
        var _this = this;
        this.navigationService = navigationService;
        this.router = router;
        this.classes = 'nav-collapse nav-item';
        this.isOpen = false;
        // Listen for route changes
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                // Check if the url can be found in
                // one of the children of this item
                if (_this.isUrlInChildren(_this.item, event.urlAfterRedirects)) {
                    _this.expand();
                }
                else {
                    _this.collapse();
                }
            }
        });
        // Listen for collapsing of any navigation item
        this.navigationService.onItemCollapsed
            .subscribe(function (clickedItem) {
            if (clickedItem && clickedItem.children) {
                // Check if the clicked item is one
                // of the children of this item
                if (_this.isChildrenOf(_this.item, clickedItem)) {
                    return;
                }
                // Check if the url can be found in
                // one of the children of this item
                if (_this.isUrlInChildren(_this.item, _this.router.url)) {
                    return;
                }
                // If the clicked item is not this item, collapse...
                if (_this.item !== clickedItem) {
                    _this.collapse();
                }
            }
        });
    }
    FuseNavVerticalCollapseComponent.prototype.ngOnInit = function () {
        // Check if the url can be found in
        // one of the children of this item
        if (this.isUrlInChildren(this.item, this.router.url)) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    /**
     * Toggle collapse
     *
     * @param ev
     */
    FuseNavVerticalCollapseComponent.prototype.toggleOpen = function (ev) {
        ev.preventDefault();
        this.isOpen = !this.isOpen;
        // Navigation collapse toggled...
        this.navigationService.onItemCollapsed.next(this.item);
        this.navigationService.onItemCollapseToggled.next();
    };
    /**
     * Expand the collapsable navigation
     */
    FuseNavVerticalCollapseComponent.prototype.expand = function () {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        this.navigationService.onItemCollapseToggled.next();
    };
    /**
     * Collapse the collapsable navigation
     */
    FuseNavVerticalCollapseComponent.prototype.collapse = function () {
        if (!this.isOpen) {
            return;
        }
        this.isOpen = false;
        this.navigationService.onItemCollapseToggled.next();
    };
    /**
     * Check if the given parent has the
     * given item in one of its children
     *
     * @param parent
     * @param item
     * @return {any}
     */
    FuseNavVerticalCollapseComponent.prototype.isChildrenOf = function (parent, item) {
        if (!parent.children) {
            return false;
        }
        if (parent.children.indexOf(item) !== -1) {
            return true;
        }
        for (var _i = 0, _a = parent.children; _i < _a.length; _i++) {
            var children = _a[_i];
            if (children.children) {
                return this.isChildrenOf(children, item);
            }
        }
    };
    /**
     * Check if the given url can be found
     * in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {any}
     */
    FuseNavVerticalCollapseComponent.prototype.isUrlInChildren = function (parent, url) {
        if (!parent.children) {
            return false;
        }
        for (var i = 0; i < parent.children.length; i++) {
            if (parent.children[i].children) {
                if (this.isUrlInChildren(parent.children[i], url)) {
                    return true;
                }
            }
            if (parent.children[i].url === url || url.includes(parent.children[i].url)) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FuseNavVerticalCollapseComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], FuseNavVerticalCollapseComponent.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.open'),
        __metadata("design:type", Object)
    ], FuseNavVerticalCollapseComponent.prototype, "isOpen", void 0);
    FuseNavVerticalCollapseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-nav-vertical-collapse',
            template: __webpack_require__("../../../../../src/@fuse/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/navigation/vertical/nav-collapse/nav-vertical-collapse.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__animations_index__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__navigation_service__["a" /* FuseNavigationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], FuseNavVerticalCollapseComponent);
    return FuseNavVerticalCollapseComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/vertical/nav-group/nav-vertical-group.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.hidden\">\n\n    <div class=\"group-title\">\n        <span class=\"hint-text\">{{ item.title }}</span>\n    </div>\n\n    <div class=\"group-items\">\n        <ng-container *ngFor=\"let item of item.children\">\n            <fuse-nav-vertical-group *ngIf=\"item.type=='group'\" [item]=\"item\"></fuse-nav-vertical-group>\n            <fuse-nav-vertical-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></fuse-nav-vertical-collapse>\n            <fuse-nav-vertical-item *ngIf=\"item.type=='item'\" [item]=\"item\"></fuse-nav-vertical-item>\n        </ng-container>\n    </div>\n\n</ng-container>"

/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/vertical/nav-group/nav-vertical-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folded:not(.unfolded) :host > .group-title {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .folded:not(.unfolded) :host > .group-title > span {\n    opacity: 0;\n    -webkit-transition: opacity 200ms ease;\n    transition: opacity 200ms ease; }\n  .folded:not(.unfolded) :host > .group-title:before {\n    content: '';\n    display: block;\n    position: absolute;\n    min-width: 1.6rem;\n    border-top: 2px solid;\n    opacity: 0.2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/vertical/nav-group/nav-vertical-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavVerticalGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseNavVerticalGroupComponent = /** @class */ (function () {
    function FuseNavVerticalGroupComponent() {
        this.classes = 'nav-group nav-item';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], FuseNavVerticalGroupComponent.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FuseNavVerticalGroupComponent.prototype, "item", void 0);
    FuseNavVerticalGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-nav-vertical-group',
            template: __webpack_require__("../../../../../src/@fuse/components/navigation/vertical/nav-group/nav-vertical-group.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/navigation/vertical/nav-group/nav-vertical-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseNavVerticalGroupComponent);
    return FuseNavVerticalGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/vertical/nav-item/nav-vertical-item.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.hidden\">\n\n    <a class=\"nav-link\" *ngIf=\"item.url\" [routerLink]=\"[item.url]\" routerLinkActive=\"active\"\n       [routerLinkActiveOptions]=\"{exact: item.exactMatch || false}\" matRipple>\n        <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n        <span class=\"nav-link-title\">{{item.title}}</span>\n        <span class=\"nav-link-badge\" *ngIf=\"item.badge\"\n              [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n            {{item.badge.title}}\n        </span>\n    </a>\n\n    <span class=\"nav-link\" *ngIf=\"item.function\" (click)=\"item.function()\" matRipple>\n        <mat-icon class=\"nav-link-icon\" *ngIf=\"item.icon\">{{item.icon}}</mat-icon>\n        <span class=\"nav-link-title\">{{item.title}}</span>\n        <span class=\"nav-link-badge\" *ngIf=\"item.badge\"\n              [ngStyle]=\"{'background-color': item.badge.bg,'color': item.badge.fg}\">\n            {{item.badge.title}}\n        </span>\n    </span>\n\n</ng-container>"

/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/vertical/nav-item/nav-vertical-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folded:not(.unfolded) :host .nav-link > .nav-link-title,\n.folded:not(.unfolded) :host .nav-link > .nav-link-badge {\n  opacity: 0;\n  -webkit-transition: opacity 200ms ease;\n  transition: opacity 200ms ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/navigation/vertical/nav-item/nav-vertical-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavVerticalItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseNavVerticalItemComponent = /** @class */ (function () {
    function FuseNavVerticalItemComponent() {
        this.classes = 'nav-item';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], FuseNavVerticalItemComponent.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FuseNavVerticalItemComponent.prototype, "item", void 0);
    FuseNavVerticalItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-nav-vertical-item',
            template: __webpack_require__("../../../../../src/@fuse/components/navigation/vertical/nav-item/nav-vertical-item.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/navigation/vertical/nav-item/nav-vertical-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseNavVerticalItemComponent);
    return FuseNavVerticalItemComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fuse-search-bar\" [ngClass]=\"{'expanded':!collapsed}\" fxFlex=\"0 1 auto\">\n    <div [ngClass]=\"toolbarColor\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n        <label for=\"fuse-search-bar-input\">\n            <button mat-icon-button class=\"fuse-search-bar-expander\" aria-label=\"Expand Search Bar\" (click)=\"expand()\"\n                    *ngIf=\"collapsed\">\n                <mat-icon class=\"s-24\">search</mat-icon>\n            </button>\n            <!--<span class=\"fuse-search-bar-loader\" fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"!collapsed\">\n                <mat-progress-spinner color=\"mat-accent\" mode=\"indeterminate\"></mat-progress-spinner>\n            </span>-->\n        </label>\n\n        <input id=\"fuse-search-bar-input\" class=\"ml-24\" type=\"text\" placeholder=\"Search\" (input)=\"search($event)\" fxFlex>\n\n        <button mat-icon-button class=\"fuse-search-bar-collapser mat-icon-button\" (click)=\"collapse()\"\n                aria-label=\"Collapse Search Bar\">\n            <mat-icon class=\"s-24\">close</mat-icon>\n        </button>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/@fuse/components/search-bar/search-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .fuse-search-bar {\n  min-width: 64px;\n  height: 64px;\n  font-size: 13px; }\n@media (max-width: 959px) {\n    :host .fuse-search-bar {\n      height: 56px; } }\n:host .fuse-search-bar .fuse-search-bar-expander,\n  :host .fuse-search-bar .fuse-search-bar-collapser {\n    cursor: pointer;\n    padding: 0 20px;\n    margin: 0;\n    width: 64px !important;\n    height: 64px !important;\n    line-height: 64px !important; }\n@media (max-width: 959px) {\n      :host .fuse-search-bar .fuse-search-bar-expander,\n      :host .fuse-search-bar .fuse-search-bar-collapser {\n        height: 56px !important;\n        line-height: 56px !important; } }\n:host .fuse-search-bar .fuse-search-bar-loader {\n    width: 64px !important;\n    height: 64px !important;\n    line-height: 64px !important; }\n@media (max-width: 959px) {\n      :host .fuse-search-bar .fuse-search-bar-loader {\n        height: 56px !important;\n        line-height: 56px !important; } }\n:host .fuse-search-bar .fuse-search-bar-collapser {\n    display: none; }\n:host .fuse-search-bar #fuse-search-bar-input {\n    display: none;\n    min-height: 64px;\n    background-color: transparent;\n    font-size: 16px; }\n:host .fuse-search-bar.expanded {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 10; }\n:host .fuse-search-bar.expanded #fuse-search-bar-input {\n      display: block; }\n:host .fuse-search-bar.expanded .fuse-search-bar-collapser {\n      display: block; }\n:host body.fuse-search-bar-expanded #toolbar {\n  z-index: 999 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__ = __webpack_require__("../../../../../src/@fuse/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseSearchBarComponent = /** @class */ (function () {
    function FuseSearchBarComponent(fuseConfig) {
        var _this = this;
        this.fuseConfig = fuseConfig;
        this.onInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.collapsed = true;
        this.onConfigChanged =
            this.fuseConfig.onConfigChanged
                .subscribe(function (newSettings) {
                _this.toolbarColor = newSettings.colorClasses.toolbar;
            });
    }
    FuseSearchBarComponent.prototype.collapse = function () {
        this.collapsed = true;
    };
    FuseSearchBarComponent.prototype.expand = function () {
        this.collapsed = false;
    };
    FuseSearchBarComponent.prototype.search = function (event) {
        var value = event.target.value;
        this.onInput.emit(value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], FuseSearchBarComponent.prototype, "onInput", void 0);
    FuseSearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-search-bar',
            template: __webpack_require__("../../../../../src/@fuse/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/search-bar/search-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__["b" /* FuseConfigService */]])
    ], FuseSearchBarComponent);
    return FuseSearchBarComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/search-bar/search-bar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSearchBarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_bar_component__ = __webpack_require__("../../../../../src/@fuse/components/search-bar/search-bar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FuseSearchBarModule = /** @class */ (function () {
    function FuseSearchBarModule() {
    }
    FuseSearchBarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__search_bar_component__["a" /* FuseSearchBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatIconModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__search_bar_component__["a" /* FuseSearchBarComponent */]
            ]
        })
    ], FuseSearchBarModule);
    return FuseSearchBarModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/shortcuts/shortcuts.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fuse-shortcuts\" #shortcuts>\n\n    <div class=\"shortcuts-mobile-toggle\" *ngIf=\"!mobileShortcutsPanelActive\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n         fxHide fxShow.lt-md>\n        <button mat-icon-button (click)=\"showMobileShortcutsPanel()\">\n            <mat-icon class=\"amber-600-fg\">star</mat-icon>\n        </button>\n    </div>\n\n    <div class=\"shortcuts\" fxHide fxShow.gt-sm [ngClass]=\"toolbarColor\">\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlex=\"0 1 auto\">\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <div class=\"w-40 h-40 p-4\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\n                     *ngFor=\"let shortcutItem of shortcutItems\">\n\n                    <a mat-icon-button matTooltip=\"{{shortcutItem.title}}\" [routerLink]=\"shortcutItem.url\">\n                        <mat-icon *ngIf=\"shortcutItem.icon\">{{shortcutItem.icon}}</mat-icon>\n                        <span *ngIf=\"!shortcutItem.icon\" class=\"h2 secondary-text text-bold\">\n                            {{shortcutItem.title.substr(0, 1).toUpperCase()}}\n                        </span>\n                    </a>\n\n                </div>\n\n                <button mat-icon-button [matMenuTriggerFor]=\"addMenu\" matTooltip=\"Click to add/remove shortcut\"\n                        (menuOpened)=\"onMenuOpen()\">\n                    <mat-icon class=\"amber-600-fg\">star</mat-icon>\n                </button>\n\n            </div>\n\n            <div class=\"shortcuts-mobile-close\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide fxShow.lt-md>\n                <button mat-icon-button (click)=\"hideMobileShortcutsPanel()\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            </div>\n\n        </div>\n\n        <mat-menu #addMenu=\"matMenu\" class=\"w-240\">\n\n            <mat-form-field class=\"px-16 w-100-p\" (click)=\"$event.stopPropagation()\" floatPlaceholder=\"never\">\n                <input #searchInput matInput placeholder=\"Search for an app or a page\" (input)=\"search($event)\">\n            </mat-form-field>\n\n            <mat-divider></mat-divider>\n            <mat-nav-list *ngIf=\"!searching\" style=\"max-height: 312px; overflow: auto\" fusePerfectScrollbar>\n\n                <mat-list-item *ngFor=\"let shortcutItem of shortcutItems\"\n                               (click)=\"toggleShortcut($event, shortcutItem)\">\n                    <div class=\"w-100-p\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon mat-list-icon class=\"mr-8\" *ngIf=\"shortcutItem.icon\">{{shortcutItem.icon}}</mat-icon>\n                        <span class=\"h2 w-32 h-32 p-4 mr-8 secondary-text text-bold\" fxLayout=\"row\"\n                              fxLayoutAlign=\"center center\" *ngIf=\"!shortcutItem.icon\">\n                            {{shortcutItem.title.substr(0, 1).toUpperCase()}}\n                        </span>\n                        <p matLine fxFlex>{{shortcutItem.title}}</p>\n                        <mat-icon class=\"ml-8\">star</mat-icon>\n                    </div>\n                </mat-list-item>\n                <mat-list-item *ngIf=\"shortcutItems.length === 0\">\n                    <p>\n                        <small>No shortcuts yet!</small>\n                    </p>\n                </mat-list-item>\n            </mat-nav-list>\n\n            <mat-nav-list *ngIf=\"searching\" style=\"max-height: 312px; overflow: auto\" fusePerfectScrollbar>\n                <mat-list-item *ngFor=\"let navigationItem of filteredNavigationItems\"\n                               (click)=\"toggleShortcut($event, navigationItem)\">\n                    <div class=\"w-100-p\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <mat-icon mat-list-icon class=\"mr-8\" *ngIf=\"navigationItem.icon\">{{navigationItem.icon}}</mat-icon>\n                        <span class=\"h2 w-32 h-32 p-4 mr-8 secondary-text text-bold\" fxLayout=\"row\"\n                              fxLayoutAlign=\"center center\" *ngIf=\"!navigationItem.icon\">\n                            {{navigationItem.title.substr(0, 1).toUpperCase()}}\n                        </span>\n                        <p matLine fxFlex>{{navigationItem.title}}</p>\n                        <mat-icon class=\"ml-8\" *ngIf=\"isInShortcuts(navigationItem)\">star</mat-icon>\n                    </div>\n                </mat-list-item>\n            </mat-nav-list>\n        </mat-menu>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/@fuse/components/shortcuts/shortcuts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n@media (max-width: 959px) {\n  :host #fuse-shortcuts.show-mobile-panel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 99;\n    padding: 0 8px; }\n    :host #fuse-shortcuts.show-mobile-panel .shortcuts {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      height: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/shortcuts/shortcuts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseShortcutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_services_match_media_service__ = __webpack_require__("../../../../../src/@fuse/services/match-media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components_navigation_navigation_service__ = __webpack_require__("../../../../../src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_services_config_service__ = __webpack_require__("../../../../../src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_navigation_navigation__ = __webpack_require__("../../../../../src/app/navigation/navigation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FuseShortcutsComponent = /** @class */ (function () {
    function FuseShortcutsComponent(renderer, observableMedia, fuseMatchMedia, fuseNavigationService, fuseConfig, cookieService) {
        var _this = this;
        this.renderer = renderer;
        this.observableMedia = observableMedia;
        this.fuseMatchMedia = fuseMatchMedia;
        this.fuseNavigationService = fuseNavigationService;
        this.fuseConfig = fuseConfig;
        this.cookieService = cookieService;
        this.shortcutItems = [];
        this.searching = false;
        this.mobileShortcutsPanelActive = false;
        this.filteredNavigationItems = this.navigationItems = this.fuseNavigationService.getFlatNavigation(__WEBPACK_IMPORTED_MODULE_6_app_navigation_navigation__["a" /* navigation */]);
        this.onConfigChanged =
            this.fuseConfig.onConfigChanged
                .subscribe(function (newSettings) {
                _this.toolbarColor = newSettings.colorClasses.toolbar;
            });
    }
    FuseShortcutsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cookieExists = this.cookieService.check('FUSE2.shortcuts');
        if (cookieExists) {
            this.shortcutItems = JSON.parse(this.cookieService.get('FUSE2.shortcuts'));
        }
        else {
            // User's shortcut items
            this.shortcutItems = [
                {
                    'title': 'Calendar',
                    'type': 'nav-item',
                    'icon': 'today',
                    'url': '/apps/calendar'
                },
                {
                    'title': 'Mail',
                    'type': 'nav-item',
                    'icon': 'email',
                    'url': '/apps/mail'
                },
                {
                    'title': 'Contacts',
                    'type': 'nav-item',
                    'icon': 'account_box',
                    'url': '/apps/contacts'
                },
                {
                    'title': 'To-Do',
                    'type': 'nav-item',
                    'icon': 'check_box',
                    'url': '/apps/todo'
                }
            ];
        }
        this.matchMediaSubscription =
            this.fuseMatchMedia.onMediaChange.subscribe(function () {
                if (_this.observableMedia.isActive('gt-sm')) {
                    _this.hideMobileShortcutsPanel();
                }
            });
    };
    FuseShortcutsComponent.prototype.ngOnDestroy = function () {
        this.matchMediaSubscription.unsubscribe();
    };
    FuseShortcutsComponent.prototype.search = function (event) {
        var value = event.target.value.toLowerCase();
        if (value === '') {
            this.searching = false;
            this.filteredNavigationItems = this.navigationItems;
            return;
        }
        this.searching = true;
        this.filteredNavigationItems = this.navigationItems.filter(function (navigationItem) {
            return navigationItem.title.toLowerCase().includes(value);
        });
    };
    FuseShortcutsComponent.prototype.toggleShortcut = function (event, itemToToggle) {
        event.stopPropagation();
        for (var i = 0; i < this.shortcutItems.length; i++) {
            if (this.shortcutItems[i].url === itemToToggle.url) {
                this.shortcutItems.splice(i, 1);
                // Save to the cookies
                this.cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));
                return;
            }
        }
        this.shortcutItems.push(itemToToggle);
        // Save to the cookies
        this.cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));
    };
    FuseShortcutsComponent.prototype.isInShortcuts = function (navigationItem) {
        return this.shortcutItems.find(function (item) {
            return item.url === navigationItem.url;
        });
    };
    FuseShortcutsComponent.prototype.onMenuOpen = function () {
        var _this = this;
        setTimeout(function () {
            _this.searchInputField.nativeElement.focus();
        });
    };
    FuseShortcutsComponent.prototype.showMobileShortcutsPanel = function () {
        this.mobileShortcutsPanelActive = true;
        this.renderer.addClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    };
    FuseShortcutsComponent.prototype.hideMobileShortcutsPanel = function () {
        this.mobileShortcutsPanelActive = false;
        this.renderer.removeClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('searchInput'),
        __metadata("design:type", Object)
    ], FuseShortcutsComponent.prototype, "searchInputField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('shortcuts'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], FuseShortcutsComponent.prototype, "shortcutsEl", void 0);
    FuseShortcutsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-shortcuts',
            template: __webpack_require__("../../../../../src/@fuse/components/shortcuts/shortcuts.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/shortcuts/shortcuts.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */],
            __WEBPACK_IMPORTED_MODULE_3__fuse_services_match_media_service__["a" /* FuseMatchMediaService */],
            __WEBPACK_IMPORTED_MODULE_4__fuse_components_navigation_navigation_service__["a" /* FuseNavigationService */],
            __WEBPACK_IMPORTED_MODULE_5__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
    ], FuseShortcutsComponent);
    return FuseShortcutsComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/shortcuts/shortcuts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseShortcutsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shortcuts_component__ = __webpack_require__("../../../../../src/@fuse/components/shortcuts/shortcuts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FuseShortcutsModule = /** @class */ (function () {
    function FuseShortcutsModule() {
    }
    FuseShortcutsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__shortcuts_component__["a" /* FuseShortcutsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatTooltipModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__shortcuts_component__["a" /* FuseShortcutsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]
            ]
        })
    ], FuseShortcutsModule);
    return FuseShortcutsModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/@fuse/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fuse-sidebar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  overflow: hidden;\n  width: 280px;\n  min-width: 280px;\n  max-width: 280px;\n  z-index: 1000;\n  -webkit-transition-property: width, min-width, max-width, -webkit-transform;\n  transition-property: width, min-width, max-width, -webkit-transform;\n  transition-property: transform, width, min-width, max-width;\n  transition-property: transform, width, min-width, max-width, -webkit-transform;\n  -webkit-transition-duration: 150ms;\n          transition-duration: 150ms;\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.35);\n          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.35); }\n  fuse-sidebar.left-aligned {\n    left: 0;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  fuse-sidebar.right-aligned {\n    right: 0;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  fuse-sidebar.open {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  fuse-sidebar.locked-open {\n    position: relative !important;\n    -webkit-transform: translateX(0) !important;\n            transform: translateX(0) !important; }\n  fuse-sidebar.folded {\n    position: absolute !important;\n    top: 0;\n    bottom: 0; }\n  fuse-sidebar.folded:not(.unfolded) {\n      width: 64px;\n      min-width: 64px;\n      max-width: 64px; }\n  .fuse-sidebar-overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 3;\n  background-color: rgba(0, 0, 0, 0.6);\n  opacity: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_service__ = __webpack_require__("../../../../../src/@fuse/components/sidebar/sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_services_match_media_service__ = __webpack_require__("../../../../../src/@fuse/services/match-media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_services_config_service__ = __webpack_require__("../../../../../src/@fuse/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FuseSidebarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {Renderer2} renderer
     * @param {ElementRef} elementRef
     * @param {AnimationBuilder} animationBuilder
     * @param {ObservableMedia} observableMedia
     * @param {FuseConfigService} fuseConfigService
     * @param {FuseSidebarService} fuseSidebarService
     * @param {FuseMatchMediaService} fuseMatchMediaService
     */
    function FuseSidebarComponent(renderer, elementRef, animationBuilder, observableMedia, fuseConfigService, fuseSidebarService, fuseMatchMediaService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.animationBuilder = animationBuilder;
        this.observableMedia = observableMedia;
        this.fuseConfigService = fuseConfigService;
        this.fuseSidebarService = fuseSidebarService;
        this.fuseMatchMediaService = fuseMatchMediaService;
        this._backdrop = null;
        // Set the defaults
        this.opened = false;
        this.folded = false;
        this.align = 'left';
    }
    Object.defineProperty(FuseSidebarComponent.prototype, "folded", {
        get: function () {
            return this._folded;
        },
        // Folded
        set: function (value) {
            // Only work if the sidebar is not closed
            if (!this.opened) {
                return;
            }
            // Set the folded
            this._folded = value;
            // Programmatically add/remove margin to the element
            // that comes after or before based on the alignment
            var sibling, styleRule;
            var styleValue = '64px';
            // Get the sibling and set the style rule
            if (this.align === 'left') {
                sibling = this.elementRef.nativeElement.nextElementSibling;
                styleRule = 'marginLeft';
            }
            else {
                sibling = this.elementRef.nativeElement.previousElementSibling;
                styleRule = 'marginRight';
            }
            // If there is no sibling, return...
            if (!sibling) {
                return;
            }
            // If folded...
            if (value) {
                // Set the style
                this.renderer.setStyle(sibling, styleRule, styleValue);
            }
            else {
                // Remove the style
                this.renderer.removeStyle(sibling, styleRule);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * On init
     */
    FuseSidebarComponent.prototype.ngOnInit = function () {
        // Register the sidebar
        this.fuseSidebarService.register(this.name, this);
        // Setup alignment
        this._setupAlignment();
        // Setup lockedOpen
        this._setupLockedOpen();
    };
    /**
     * On destroy
     */
    FuseSidebarComponent.prototype.ngOnDestroy = function () {
        // If the sidebar is folded, unfold it to revert modifications
        if (this.folded) {
            this.unfold();
        }
        // Unregister the sidebar
        this.fuseSidebarService.unregister(this.name);
        // Unsubscribe from the media watcher subscription
        this._onMediaChangeSubscription.unsubscribe();
    };
    /**
     * Set the sidebar alignment
     *
     * @private
     */
    FuseSidebarComponent.prototype._setupAlignment = function () {
        // Add the correct class name to the sidebar
        // element depending on the align attribute
        if (this.align === 'right') {
            this.renderer.addClass(this.elementRef.nativeElement, 'right-aligned');
        }
        else {
            this.renderer.addClass(this.elementRef.nativeElement, 'left-aligned');
        }
    };
    /**
     * Setup the lockedOpen handler
     *
     * @private
     */
    FuseSidebarComponent.prototype._setupLockedOpen = function () {
        var _this = this;
        // Return if the lockedOpen wasn't set
        if (!this.lockedOpen) {
            return;
        }
        // Set the wasActive for the first time
        this._wasActive = false;
        // Act on every media change
        this._onMediaChangeSubscription =
            this.fuseMatchMediaService.onMediaChange.subscribe(function () {
                // Get the active status
                var isActive = _this.observableMedia.isActive(_this.lockedOpen);
                // If the both status are the same, don't act
                if (_this._wasActive === isActive) {
                    return;
                }
                // Activate the lockedOpen
                if (isActive) {
                    // Set the lockedOpen status
                    _this.isLockedOpen = true;
                    // Force the the opened status to true
                    _this.opened = true;
                    // Read the folded setting from the config
                    // and fold the sidebar if it's true
                    if (_this.fuseConfigService.config.layout.navigationFolded) {
                        _this.fold();
                    }
                    // Hide the backdrop if any exists
                    _this.hideBackdrop();
                }
                else {
                    // Set the lockedOpen status
                    _this.isLockedOpen = false;
                    // Unfold the sidebar in case if it was folded
                    _this.unfold();
                    // Force the the opened status to close
                    _this.opened = false;
                }
                // Store the new active status
                _this._wasActive = isActive;
            });
    };
    /**
     * Open the sidebar
     */
    FuseSidebarComponent.prototype.open = function () {
        if (this.opened || this.isLockedOpen) {
            return;
        }
        // Show the backdrop
        this.showBackdrop();
        // Set the opened status
        this.opened = true;
    };
    /**
     * Close the sidebar
     */
    FuseSidebarComponent.prototype.close = function () {
        if (!this.opened || this.isLockedOpen) {
            return;
        }
        // Hide the backdrop
        this.hideBackdrop();
        // Set the opened status
        this.opened = false;
    };
    /**
     * Toggle open/close the sidebar
     */
    FuseSidebarComponent.prototype.toggleOpen = function () {
        if (this.opened) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Mouseenter
     */
    FuseSidebarComponent.prototype.onMouseEnter = function () {
        // Only work if the sidebar is folded
        if (!this.folded) {
            return;
        }
        // Unfold the sidebar temporarily
        this.unfolded = true;
    };
    /**
     * Mouseleave
     */
    FuseSidebarComponent.prototype.onMouseLeave = function () {
        // Only work if the sidebar is folded
        if (!this.folded) {
            return;
        }
        // Fold the sidebar back
        this.unfolded = false;
    };
    /**
     * Fold the sidebar permanently
     */
    FuseSidebarComponent.prototype.fold = function () {
        // Only work if the sidebar is not folded
        if (this.folded) {
            return;
        }
        // Fold
        this.folded = true;
    };
    /**
     * Unfold the sidebar permanently
     */
    FuseSidebarComponent.prototype.unfold = function () {
        // Only work if the sidebar is folded
        if (!this.folded) {
            return;
        }
        // Unfold
        this.folded = false;
    };
    /**
     * Toggle the sidebar fold/unfold permanently
     */
    FuseSidebarComponent.prototype.toggleFold = function () {
        if (this.folded) {
            this.unfold();
        }
        else {
            this.fold();
        }
    };
    /**
     * Show the backdrop
     */
    FuseSidebarComponent.prototype.showBackdrop = function () {
        var _this = this;
        // Create the backdrop element
        this._backdrop = this.renderer.createElement('div');
        // Add a class to the backdrop element
        this._backdrop.classList.add('fuse-sidebar-overlay');
        // Append the backdrop to the parent of the sidebar
        this.renderer.appendChild(this.elementRef.nativeElement.parentElement, this._backdrop);
        // Create the enter animation and attach it to the player
        this._player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* style */])({ opacity: 1 }))
            ]).create(this._backdrop);
        // Play the animation
        this._player.play();
        // Add an event listener to the overlay
        this._backdrop.addEventListener('click', function () {
            _this.close();
        });
    };
    /**
     * Hide the backdrop
     */
    FuseSidebarComponent.prototype.hideBackdrop = function () {
        var _this = this;
        if (!this._backdrop) {
            return;
        }
        // Create the leave animation and attach it to the player
        this._player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* style */])({ opacity: 0 }))
            ]).create(this._backdrop);
        // Play the animation
        this._player.play();
        // Once the animation is done...
        this._player.onDone(function () {
            // If the backdrop still exists...
            if (_this._backdrop) {
                // Remove the backdrop
                _this._backdrop.parentNode.removeChild(_this._backdrop);
                _this._backdrop = null;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FuseSidebarComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FuseSidebarComponent.prototype, "align", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.open'),
        __metadata("design:type", Boolean)
    ], FuseSidebarComponent.prototype, "opened", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FuseSidebarComponent.prototype, "lockedOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.locked-open'),
        __metadata("design:type", Boolean)
    ], FuseSidebarComponent.prototype, "isLockedOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.folded'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], FuseSidebarComponent.prototype, "folded", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.unfolded'),
        __metadata("design:type", Boolean)
    ], FuseSidebarComponent.prototype, "unfolded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseSidebarComponent.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseSidebarComponent.prototype, "onMouseLeave", null);
    FuseSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-sidebar',
            template: __webpack_require__("../../../../../src/@fuse/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/sidebar/sidebar.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* AnimationBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */],
            __WEBPACK_IMPORTED_MODULE_5__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_3__sidebar_service__["a" /* FuseSidebarService */],
            __WEBPACK_IMPORTED_MODULE_4__fuse_services_match_media_service__["a" /* FuseMatchMediaService */]])
    ], FuseSidebarComponent);
    return FuseSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_component__ = __webpack_require__("../../../../../src/@fuse/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FuseSidebarModule = /** @class */ (function () {
    function FuseSidebarModule() {
    }
    FuseSidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__sidebar_component__["a" /* FuseSidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__sidebar_component__["a" /* FuseSidebarComponent */]
            ]
        })
    ], FuseSidebarModule);
    return FuseSidebarModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/sidebar/sidebar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSidebarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseSidebarService = /** @class */ (function () {
    /**
     * Constructor
     */
    function FuseSidebarService() {
        // Private
        this._registry = {};
    }
    /**
     * Add the sidebar to the registry
     *
     * @param key
     * @param sidebar
     */
    FuseSidebarService.prototype.register = function (key, sidebar) {
        // Check if the key already being used
        if (this._registry[key]) {
            console.error("The sidebar with the key '" + key + "' already exists. Either unregister it first or use a unique key.");
            return;
        }
        // Add to the registry
        this._registry[key] = sidebar;
    };
    /**
     * Remove the sidebar from the registry
     *
     * @param key
     */
    FuseSidebarService.prototype.unregister = function (key) {
        // Check if the sidebar exists
        if (!this._registry[key]) {
            console.error("The sidebar with the key '" + key + "' doesn't exist in the registry.");
        }
        // Unregister the sidebar
        delete this._registry[key];
    };
    /**
     * Return the sidebar with the given key
     *
     * @param key
     */
    FuseSidebarService.prototype.getSidebar = function (key) {
        // Check if the sidebar exists
        if (!this._registry[key]) {
            console.error("The sidebar with the key '" + key + "' doesn't exist in the registry.");
            return;
        }
        // Return the sidebar
        return this._registry[key];
    };
    FuseSidebarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FuseSidebarService);
    return FuseSidebarService;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/theme-options/theme-options.component.html":
/***/ (function(module, exports) {

module.exports = "<button #openButton mat-icon-button class=\"open-button mat-primary-bg mat-elevation-z2\" (click)=\"openBar()\">\n    <mat-icon>settings</mat-icon>\n</button>\n\n<div class=\"theme-options-panel-overlay\" #overlay [fxHide]=\"barClosed\" [@fadeInOut]=\"!barClosed\"></div>\n\n<div #panel class=\"theme-options-panel mat-white-bg mat-elevation-z8\">\n\n    <button mat-icon-button class=\"close-button\" (click)=\"closeBar()\">\n        <mat-icon>close</mat-icon>\n    </button>\n\n    <div class=\"theme-options-panel-inner\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n\n        <h3>Navigation:</h3>\n        <mat-radio-group [(ngModel)]=\"config.layout.navigation\" (ngModelChange)=\"onSettingsChange()\"\n                         fxLayout=\"column\" fxLayout.gt-xs=\"row wrap\" fxLayoutAlign=\"start start\">\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"top\">Top</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"left\">Left</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"right\">Right</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"none\">None</mat-radio-button>\n        </mat-radio-group>\n\n        <h3>Navigation Fold (for vertical navigation):</h3>\n        <mat-slide-toggle [(ngModel)]=\"config.layout.navigationFolded\"\n                          (change)=\"onSettingsChange()\">\n            Folded\n        </mat-slide-toggle>\n\n        <h3 class=\"mt-24\">Toolbar:</h3>\n        <mat-radio-group [(ngModel)]=\"config.layout.toolbar\" (ngModelChange)=\"onSettingsChange()\"\n                         fxLayout=\"column\" fxLayout.gt-xs=\"row wrap\" fxLayoutAlign=\"start start\">\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"below\">Below</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"above\">Above</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"none\">None</mat-radio-button>\n        </mat-radio-group>\n\n        <h3 class=\"mt-24\">Footer:</h3>\n        <mat-radio-group [(ngModel)]=\"config.layout.footer\" (ngModelChange)=\"onSettingsChange()\"\n                         fxLayout=\"column\" fxLayout.gt-xs=\"row  wrap\" fxLayoutAlign=\"start start\">\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"below\">Below</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"above\">Above</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"none\">None</mat-radio-button>\n        </mat-radio-group>\n\n        <h3 class=\"mt-24\">Layout Mode:</h3>\n        <mat-radio-group [(ngModel)]=\"config.layout.mode\" (ngModelChange)=\"onSettingsChange()\"\n                         fxLayout=\"column\" fxLayout.gt-xs=\"row  wrap\" fxLayoutAlign=\"start start\">\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"boxed\">Boxed</mat-radio-button>\n            <mat-radio-button class=\"mr-8 mb-8\" value=\"fullwidth\">Fullwidth</mat-radio-button>\n        </mat-radio-group>\n\n        <mat-divider></mat-divider>\n\n        <h3>Colors:</h3>\n        <div class=\"colors\">\n\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <h4 class=\"mr-8\">Toolbar Color</h4>\n                <fuse-material-color-picker [(selectedClass)]=\"config.colorClasses.toolbar\"\n                                            (onValueChange)=\"onSettingsChange()\"></fuse-material-color-picker>\n            </div>\n\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <h4 class=\"mr-8\">Navigation Bar Color</h4>\n                <fuse-material-color-picker [(selectedClass)]=\"config.colorClasses.navbar\"\n                                            (onValueChange)=\"onSettingsChange()\"></fuse-material-color-picker>\n            </div>\n\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <h4 class=\"mr-8\">Footer Color</h4>\n                <fuse-material-color-picker [(selectedClass)]=\"config.colorClasses.footer\"\n                                            (onValueChange)=\"onSettingsChange()\"></fuse-material-color-picker>\n            </div>\n\n        </div>\n\n        <mat-divider></mat-divider>\n\n        <h3>Router Animation:</h3>\n        <mat-form-field class=\"w-100-p\">\n            <mat-select class=\"p-0\" [(ngModel)]=\"config.routerAnimation\">\n                <mat-option value=\"none\">\n                    None\n                </mat-option>\n                <mat-option value=\"slideUp\">\n                    Slide up\n                </mat-option>\n                <mat-option value=\"slideDown\">\n                    Slide down\n                </mat-option>\n                <mat-option value=\"slideRight\">\n                    Slide right\n                </mat-option>\n                <mat-option value=\"slideLeft\">\n                    Slide left\n                </mat-option>\n                <mat-option value=\"fadeIn\">\n                    Fade in\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/@fuse/components/theme-options/theme-options.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n@-webkit-keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n:host {\n  position: fixed;\n  display: block;\n  right: 0;\n  top: 160px;\n  z-index: 998; }\n:host.bar-closed .theme-options-panel {\n    display: none; }\n:host .theme-options-panel {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 360px;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n    z-index: 999;\n    max-height: calc(100vh - 200px);\n    padding: 24px;\n    overflow: auto; }\n@media (max-width: 599px) {\n      :host .theme-options-panel {\n        top: -120px;\n        max-height: calc(100vh - 100px);\n        width: 90vw; } }\n:host .theme-options-panel .close-button {\n      position: absolute;\n      top: 8px;\n      right: 8px; }\n:host .theme-options-panel h3 {\n      font-size: 14px;\n      font-weight: 500;\n      color: rgba(0, 0, 0, 0.54); }\n:host .theme-options-panel .mat-divider {\n      display: block !important;\n      width: 100%;\n      margin: 24px 0 16px 0; }\n:host .theme-options-panel .colors {\n      display: block !important;\n      width: 100%; }\n:host .theme-options-panel-overlay {\n    position: fixed;\n    display: block;\n    background: transparent;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 998; }\n@media (max-width: 959px) {\n      :host .theme-options-panel-overlay {\n        background: rgba(0, 0, 0, 0.37); } }\n:host .theme-options-panel-overlay.hidden {\n      display: none; }\n:host .mat-list .mat-list-item {\n    font-size: 15px; }\n:host .mat-divider {\n    margin: 16px; }\n:host .open-button {\n    position: absolute;\n    top: 0;\n    left: -48px;\n    width: 48px;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 0;\n    margin: 0;\n    pointer-events: auto;\n    opacity: .75;\n    z-index: 998; }\n:host .open-button mat-icon {\n      -webkit-animation: rotating 3s linear infinite;\n              animation: rotating 3s linear infinite; }\n:host .open-button:hover {\n      opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/theme-options/theme-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseThemeOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_animations__ = __webpack_require__("../../../../../src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_services_config_service__ = __webpack_require__("../../../../../src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components_navigation_navigation_service__ = __webpack_require__("../../../../../src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_navigation_navigation__ = __webpack_require__("../../../../../src/app/navigation/navigation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FuseThemeOptionsComponent = /** @class */ (function () {
    function FuseThemeOptionsComponent(animationBuilder, fuseConfig, navigationService, renderer) {
        var _this = this;
        this.animationBuilder = animationBuilder;
        this.fuseConfig = fuseConfig;
        this.navigationService = navigationService;
        this.renderer = renderer;
        this.barClosed = true;
        this.onConfigChanged =
            this.fuseConfig.onConfigChanged
                .subscribe(function (newConfig) {
                _this.config = newConfig;
            });
        // Get the nav model and add customize nav item
        // that opens the bar programmatically
        var nav = __WEBPACK_IMPORTED_MODULE_5_app_navigation_navigation__["a" /* navigation */];
        nav.push({
            'id': 'custom-function',
            'title': 'Custom Function',
            'type': 'group',
            'children': [
                {
                    'id': 'customize',
                    'title': 'Customize',
                    'type': 'item',
                    'icon': 'settings',
                    'function': function () {
                        _this.openBar();
                    }
                }
            ]
        });
    }
    FuseThemeOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.listen(this.overlay.nativeElement, 'click', function () {
            _this.closeBar();
        });
    };
    FuseThemeOptionsComponent.prototype.ngOnDestroy = function () {
        this.onConfigChanged.unsubscribe();
    };
    FuseThemeOptionsComponent.prototype.onSettingsChange = function () {
        this.fuseConfig.setConfig(this.config);
    };
    FuseThemeOptionsComponent.prototype.closeBar = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* style */])({ transform: 'translate3d(0,0,0)' }),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* style */])({ transform: 'translate3d(100%,0,0)' }))
            ]).create(this.panel.nativeElement);
        this.player.play();
        this.player.onDone(function () {
            _this.barClosed = true;
        });
    };
    FuseThemeOptionsComponent.prototype.openBar = function () {
        this.barClosed = false;
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* style */])({ transform: 'translate3d(100%,0,0)' }),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* style */])({ transform: 'translate3d(0,0,0)' }))
            ]).create(this.panel.nativeElement);
        this.player.play();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('openButton'),
        __metadata("design:type", Object)
    ], FuseThemeOptionsComponent.prototype, "openButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('panel'),
        __metadata("design:type", Object)
    ], FuseThemeOptionsComponent.prototype, "panel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('overlay'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], FuseThemeOptionsComponent.prototype, "overlay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.bar-closed'),
        __metadata("design:type", Boolean)
    ], FuseThemeOptionsComponent.prototype, "barClosed", void 0);
    FuseThemeOptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-theme-options',
            template: __webpack_require__("../../../../../src/@fuse/components/theme-options/theme-options.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/theme-options/theme-options.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_2__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* AnimationBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_4__fuse_components_navigation_navigation_service__["a" /* FuseNavigationService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */]])
    ], FuseThemeOptionsComponent);
    return FuseThemeOptionsComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/theme-options/theme-options.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseThemeOptionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components_material_color_picker_material_color_picker_module__ = __webpack_require__("../../../../../src/@fuse/components/material-color-picker/material-color-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_theme_options_theme_options_component__ = __webpack_require__("../../../../../src/@fuse/components/theme-options/theme-options.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FuseThemeOptionsModule = /** @class */ (function () {
    function FuseThemeOptionsModule() {
    }
    FuseThemeOptionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__fuse_components_theme_options_theme_options_component__["a" /* FuseThemeOptionsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_components_material_color_picker_material_color_picker_module__["a" /* FuseMaterialColorPickerModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__fuse_components_theme_options_theme_options_component__["a" /* FuseThemeOptionsComponent */]
            ]
        })
    ], FuseThemeOptionsModule);
    return FuseThemeOptionsModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/widget/widget-toggle.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseWidgetToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseWidgetToggleDirective = /** @class */ (function () {
    function FuseWidgetToggleDirective(el) {
        this.el = el;
    }
    FuseWidgetToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[fuseWidgetToggle]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], FuseWidgetToggleDirective);
    return FuseWidgetToggleDirective;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/widget/widget.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "../../../../../src/@fuse/components/widget/widget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fuse-widget {\n  display: block;\n  position: relative;\n  -webkit-perspective: 3000px;\n          perspective: 3000px;\n  padding: 12px; }\n  fuse-widget > div {\n    position: relative;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transition: -webkit-transform 1s;\n    transition: -webkit-transform 1s;\n    transition: transform 1s;\n    transition: transform 1s, -webkit-transform 1s; }\n  fuse-widget > .fuse-widget-front {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    position: relative;\n    overflow: hidden;\n    visibility: visible;\n    width: 100%;\n    opacity: 1;\n    z-index: 10;\n    border-radius: 2px;\n    -webkit-transition: visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s, -webkit-transform 0.5s ease-out 0s;\n    transition: visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s, -webkit-transform 0.5s ease-out 0s;\n    transition: transform 0.5s ease-out 0s, visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s;\n    transition: transform 0.5s ease-out 0s, visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s, -webkit-transform 0.5s ease-out 0s;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden; }\n  fuse-widget > .fuse-widget-back {\n    display: block;\n    position: absolute;\n    top: 12px;\n    right: 12px;\n    bottom: 12px;\n    left: 12px;\n    overflow: hidden;\n    visibility: hidden;\n    opacity: 0;\n    z-index: 10;\n    -webkit-transition: visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s, -webkit-transform 0.5s ease-out 0s;\n    transition: visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s, -webkit-transform 0.5s ease-out 0s;\n    transition: transform 0.5s ease-out 0s, visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s;\n    transition: transform 0.5s ease-out 0s, visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s, -webkit-transform 0.5s ease-out 0s;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden; }\n  fuse-widget > .fuse-widget-back [fuseWidgetToggle] {\n      position: absolute;\n      top: 0;\n      right: 0; }\n  fuse-widget.flipped > .fuse-widget-front {\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n  fuse-widget.flipped > .fuse-widget-back {\n    display: block;\n    visibility: visible;\n    opacity: 1;\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg); }\n  fuse-widget .mat-form-field.mat-form-field-type-mat-select .mat-input-wrapper {\n    padding: 16px 0; }\n  fuse-widget .mat-form-field.mat-form-field-type-mat-select .mat-input-wrapper .mat-input-infix {\n      border: none;\n      padding: 0; }\n  fuse-widget .mat-form-field.mat-form-field-type-mat-select .mat-input-underline {\n    display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/@fuse/components/widget/widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_toggle_directive__ = __webpack_require__("../../../../../src/@fuse/components/widget/widget-toggle.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseWidgetComponent = /** @class */ (function () {
    function FuseWidgetComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.flipped = false;
    }
    FuseWidgetComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.toggleButtons.forEach(function (flipButton) {
                _this.renderer.listen(flipButton.el.nativeElement, 'click', function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    _this.toggle();
                });
            });
        });
    };
    FuseWidgetComponent.prototype.toggle = function () {
        this.flipped = !this.flipped;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.flipped'),
        __metadata("design:type", Object)
    ], FuseWidgetComponent.prototype, "flipped", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__widget_toggle_directive__["a" /* FuseWidgetToggleDirective */], { descendants: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* QueryList */])
    ], FuseWidgetComponent.prototype, "toggleButtons", void 0);
    FuseWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-widget',
            template: __webpack_require__("../../../../../src/@fuse/components/widget/widget.component.html"),
            styles: [__webpack_require__("../../../../../src/@fuse/components/widget/widget.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */]])
    ], FuseWidgetComponent);
    return FuseWidgetComponent;
}());



/***/ }),

/***/ "../../../../../src/@fuse/components/widget/widget.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FuseWidgetModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_component__ = __webpack_require__("../../../../../src/@fuse/components/widget/widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_toggle_directive__ = __webpack_require__("../../../../../src/@fuse/components/widget/widget-toggle.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FuseWidgetModule = /** @class */ (function () {
    function FuseWidgetModule() {
    }
    FuseWidgetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__widget_component__["a" /* FuseWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_2__widget_toggle_directive__["a" /* FuseWidgetToggleDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__widget_component__["a" /* FuseWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_2__widget_toggle_directive__["a" /* FuseWidgetToggleDirective */]
            ],
        })
    ], FuseWidgetModule);
    return FuseWidgetModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/directives/directives.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseDirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_directives_fuse_if_on_dom_fuse_if_on_dom_directive__ = __webpack_require__("../../../../../src/@fuse/directives/fuse-if-on-dom/fuse-if-on-dom.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__ = __webpack_require__("../../../../../src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_directive__ = __webpack_require__("../../../../../src/@fuse/directives/fuse-mat-sidenav/fuse-mat-sidenav.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FuseDirectivesModule = /** @class */ (function () {
    function FuseDirectivesModule() {
    }
    FuseDirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__fuse_directives_fuse_if_on_dom_fuse_if_on_dom_directive__["a" /* FuseIfOnDomDirective */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_directive__["a" /* FuseMatSidenavHelperDirective */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_directive__["b" /* FuseMatSidenavTogglerDirective */],
                __WEBPACK_IMPORTED_MODULE_2__fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__fuse_directives_fuse_if_on_dom_fuse_if_on_dom_directive__["a" /* FuseIfOnDomDirective */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_directive__["a" /* FuseMatSidenavHelperDirective */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_directive__["b" /* FuseMatSidenavTogglerDirective */],
                __WEBPACK_IMPORTED_MODULE_2__fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */]
            ]
        })
    ], FuseDirectivesModule);
    return FuseDirectivesModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/directives/fuse-if-on-dom/fuse-if-on-dom.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseIfOnDomDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseIfOnDomDirective = /** @class */ (function () {
    function FuseIfOnDomDirective(templateRef, viewContainer, element) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.element = element;
        this.isCreated = false;
    }
    FuseIfOnDomDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (document.body.contains(this.element.nativeElement) && !this.isCreated) {
            setTimeout(function () {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }, 300);
            this.isCreated = true;
        }
        else if (this.isCreated && !document.body.contains(this.element.nativeElement)) {
            this.viewContainer.clear();
            this.isCreated = false;
        }
    };
    FuseIfOnDomDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[fuseIfOnDom]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], FuseIfOnDomDirective);
    return FuseIfOnDomDirective;
}());



/***/ }),

/***/ "../../../../../src/@fuse/directives/fuse-mat-sidenav/fuse-mat-sidenav.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMatSidenavHelperDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FuseMatSidenavTogglerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_services_match_media_service__ = __webpack_require__("../../../../../src/@fuse/services/match-media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_service__ = __webpack_require__("../../../../../src/@fuse/directives/fuse-mat-sidenav/fuse-mat-sidenav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuseMatSidenavHelperDirective = /** @class */ (function () {
    function FuseMatSidenavHelperDirective(fuseMatSidenavService, fuseMatchMedia, observableMedia, matSidenav) {
        this.fuseMatSidenavService = fuseMatSidenavService;
        this.fuseMatchMedia = fuseMatchMedia;
        this.observableMedia = observableMedia;
        this.matSidenav = matSidenav;
        this.isLockedOpen = true;
    }
    FuseMatSidenavHelperDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.fuseMatSidenavService.setSidenav(this.id, this.matSidenav);
        if (this.observableMedia.isActive(this.matIsLockedOpenBreakpoint)) {
            this.isLockedOpen = true;
            this.matSidenav.mode = 'side';
            this.matSidenav.toggle(true);
        }
        else {
            this.isLockedOpen = false;
            this.matSidenav.mode = 'over';
            this.matSidenav.toggle(false);
        }
        this.matchMediaSubscription = this.fuseMatchMedia.onMediaChange.subscribe(function () {
            if (_this.observableMedia.isActive(_this.matIsLockedOpenBreakpoint)) {
                _this.isLockedOpen = true;
                _this.matSidenav.mode = 'side';
                _this.matSidenav.toggle(true);
            }
            else {
                _this.isLockedOpen = false;
                _this.matSidenav.mode = 'over';
                _this.matSidenav.toggle(false);
            }
        });
    };
    FuseMatSidenavHelperDirective.prototype.ngOnDestroy = function () {
        this.matchMediaSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.mat-is-locked-open'),
        __metadata("design:type", Object)
    ], FuseMatSidenavHelperDirective.prototype, "isLockedOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('fuseMatSidenavHelper'),
        __metadata("design:type", String)
    ], FuseMatSidenavHelperDirective.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('mat-is-locked-open'),
        __metadata("design:type", String)
    ], FuseMatSidenavHelperDirective.prototype, "matIsLockedOpenBreakpoint", void 0);
    FuseMatSidenavHelperDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[fuseMatSidenavHelper]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_service__["a" /* FuseMatSidenavHelperService */],
            __WEBPACK_IMPORTED_MODULE_3__fuse_services_match_media_service__["a" /* FuseMatchMediaService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSidenav */]])
    ], FuseMatSidenavHelperDirective);
    return FuseMatSidenavHelperDirective;
}());

var FuseMatSidenavTogglerDirective = /** @class */ (function () {
    function FuseMatSidenavTogglerDirective(fuseMatSidenavService) {
        this.fuseMatSidenavService = fuseMatSidenavService;
    }
    FuseMatSidenavTogglerDirective.prototype.onClick = function () {
        this.fuseMatSidenavService.getSidenav(this.id).toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('fuseMatSidenavToggler'),
        __metadata("design:type", Object)
    ], FuseMatSidenavTogglerDirective.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FuseMatSidenavTogglerDirective.prototype, "onClick", null);
    FuseMatSidenavTogglerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[fuseMatSidenavToggler]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_service__["a" /* FuseMatSidenavHelperService */]])
    ], FuseMatSidenavTogglerDirective);
    return FuseMatSidenavTogglerDirective;
}());



/***/ }),

/***/ "../../../../../src/@fuse/directives/fuse-mat-sidenav/fuse-mat-sidenav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMatSidenavHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseMatSidenavHelperService = /** @class */ (function () {
    function FuseMatSidenavHelperService() {
        this.sidenavInstances = [];
    }
    FuseMatSidenavHelperService.prototype.setSidenav = function (id, instance) {
        this.sidenavInstances[id] = instance;
    };
    FuseMatSidenavHelperService.prototype.getSidenav = function (id) {
        return this.sidenavInstances[id];
    };
    FuseMatSidenavHelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FuseMatSidenavHelperService);
    return FuseMatSidenavHelperService;
}());



/***/ }),

/***/ "../../../../../src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusePerfectScrollbarDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_services_config_service__ = __webpack_require__("../../../../../src/@fuse/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FusePerfectScrollbarDirective = /** @class */ (function () {
    function FusePerfectScrollbarDirective(element, fuseConfig, platform) {
        this.element = element;
        this.fuseConfig = fuseConfig;
        this.platform = platform;
        this.isDisableCustomScrollbars = false;
        this.isMobile = false;
        this.isInitialized = true;
    }
    FusePerfectScrollbarDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.onConfigChanged =
            this.fuseConfig.onConfigChanged.subscribe(function (settings) {
                _this.isDisableCustomScrollbars = !settings.customScrollbars;
            });
        if (this.platform.ANDROID || this.platform.IOS) {
            this.isMobile = true;
        }
    };
    FusePerfectScrollbarDirective.prototype.ngAfterViewInit = function () {
        if (this.isMobile || this.isDisableCustomScrollbars) {
            this.isInitialized = false;
            return;
        }
        // Initialize the perfect-scrollbar
        this.ps = new __WEBPACK_IMPORTED_MODULE_2_perfect_scrollbar__["a" /* default */](this.element.nativeElement, {
            wheelPropagation: true
        });
    };
    FusePerfectScrollbarDirective.prototype.ngOnDestroy = function () {
        if (!this.isInitialized || !this.ps) {
            return;
        }
        this.onConfigChanged.unsubscribe();
        // Destroy the perfect-scrollbar
        this.ps.destroy();
    };
    FusePerfectScrollbarDirective.prototype.documentClick = function (event) {
        if (!this.isInitialized || !this.ps) {
            return;
        }
        // Update the scrollbar on document click..
        // This isn't the most elegant solution but there is no other way
        // of knowing when the contents of the scrollable container changes.
        // Therefore, we update scrollbars on every document click.
        this.ps.update();
    };
    FusePerfectScrollbarDirective.prototype.update = function () {
        if (!this.isInitialized) {
            return;
        }
        // Update the perfect-scrollbar
        this.ps.update();
    };
    FusePerfectScrollbarDirective.prototype.destroy = function () {
        this.ngOnDestroy();
    };
    FusePerfectScrollbarDirective.prototype.scrollToX = function (x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToY = function (y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToTop = function (offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToLeft = function (offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToRight = function (offset, speed) {
        var width = this.element.nativeElement.scrollWidth;
        this.animateScrolling('scrollLeft', width - (offset || 0), speed);
    };
    FusePerfectScrollbarDirective.prototype.scrollToBottom = function (offset, speed) {
        var height = this.element.nativeElement.scrollHeight;
        this.animateScrolling('scrollTop', height - (offset || 0), speed);
    };
    FusePerfectScrollbarDirective.prototype.animateScrolling = function (target, value, speed) {
        var _this = this;
        if (!speed) {
            this.element.nativeElement[target] = value;
            // PS has weird event sending order, this is a workaround for that
            this.update();
            this.update();
        }
        else if (value !== this.element.nativeElement[target]) {
            var newValue_1 = 0;
            var scrollCount_1 = 0;
            var oldTimestamp_1 = performance.now();
            var oldValue_1 = this.element.nativeElement[target];
            var cosParameter_1 = (oldValue_1 - value) / 2;
            var step_1 = function (newTimestamp) {
                scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                // Only continue animation if scroll position has not changed
                if (_this.element.nativeElement[target] === oldValue_1) {
                    if (scrollCount_1 >= Math.PI) {
                        _this.element.nativeElement[target] = value;
                        // PS has weird event sending order, this is a workaround for that
                        _this.update();
                        _this.update();
                    }
                    else {
                        _this.element.nativeElement[target] = oldValue_1 = newValue_1;
                        oldTimestamp_1 = newTimestamp;
                        window.requestAnimationFrame(step_1);
                    }
                }
            };
            window.requestAnimationFrame(step_1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], FusePerfectScrollbarDirective.prototype, "documentClick", null);
    FusePerfectScrollbarDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[fusePerfectScrollbar]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_platform__["a" /* Platform */]])
    ], FusePerfectScrollbarDirective);
    return FusePerfectScrollbarDirective;
}());



/***/ }),

/***/ "../../../../../src/@fuse/fuse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__ = __webpack_require__("../../../../../src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_copier_service__ = __webpack_require__("../../../../../src/@fuse/services/copier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_services_match_media_service__ = __webpack_require__("../../../../../src/@fuse/services/match-media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_service__ = __webpack_require__("../../../../../src/@fuse/directives/fuse-mat-sidenav/fuse-mat-sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components_navigation_navigation_service__ = __webpack_require__("../../../../../src/@fuse/components/navigation/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_components_sidebar_sidebar_service__ = __webpack_require__("../../../../../src/@fuse/components/sidebar/sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fuse_services_splash_screen_service__ = __webpack_require__("../../../../../src/@fuse/services/splash-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fuse_services_translation_loader_service__ = __webpack_require__("../../../../../src/@fuse/services/translation-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var FuseModule = /** @class */ (function () {
    function FuseModule(parentModule) {
        if (parentModule) {
            throw new Error('FuseModule is already loaded. Import it in the AppModule only!');
        }
    }
    FuseModule_1 = FuseModule;
    FuseModule.forRoot = function (config) {
        return {
            ngModule: FuseModule_1,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__["a" /* FUSE_CONFIG */],
                    useValue: config
                }
            ]
        };
    };
    FuseModule = FuseModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            entryComponents: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__fuse_services_config_service__["b" /* FuseConfigService */],
                __WEBPACK_IMPORTED_MODULE_2__fuse_services_copier_service__["a" /* FuseCopierService */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_services_match_media_service__["a" /* FuseMatchMediaService */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_service__["a" /* FuseMatSidenavHelperService */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_components_navigation_navigation_service__["a" /* FuseNavigationService */],
                __WEBPACK_IMPORTED_MODULE_6__fuse_components_sidebar_sidebar_service__["a" /* FuseSidebarService */],
                __WEBPACK_IMPORTED_MODULE_7__fuse_services_splash_screen_service__["a" /* FuseSplashScreenService */],
                __WEBPACK_IMPORTED_MODULE_8__fuse_services_translation_loader_service__["a" /* FuseTranslationLoaderService */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */])()),
        __metadata("design:paramtypes", [FuseModule])
    ], FuseModule);
    return FuseModule;
    var FuseModule_1;
}());



/***/ }),

/***/ "../../../../../src/@fuse/mat-colors/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatColors; });
var black87 = 'rgba(black, 0.87)';
var white87 = 'rgba(white, 0.87)';
var black12 = 'rgba(black, 0.12)';
var white12 = 'rgba(white, 0.12)';
var black6 = 'rgba(black, 0.06)';
var white6 = 'rgba(white, 0.06)';
var matColors = {
    'red': {
        50: '#ffebee',
        100: '#ffcdd2',
        200: '#ef9a9a',
        300: '#e57373',
        400: '#ef5350',
        500: '#f44336',
        600: '#e53935',
        700: '#d32f2f',
        800: '#c62828',
        900: '#b71c1c',
        A100: '#ff8a80',
        A200: '#ff5252',
        A400: '#ff1744',
        A700: '#d50000',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'pink': {
        50: '#fce4ec',
        100: '#f8bbd0',
        200: '#f48fb1',
        300: '#f06292',
        400: '#ec407a',
        500: '#e91e63',
        600: '#d81b60',
        700: '#c2185b',
        800: '#ad1457',
        900: '#880e4f',
        A100: '#ff80ab',
        A200: '#ff4081',
        A400: '#f50057',
        A700: '#c51162',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'purple': {
        50: '#f3e5f5',
        100: '#e1bee7',
        200: '#ce93d8',
        300: '#ba68c8',
        400: '#ab47bc',
        500: '#9c27b0',
        600: '#8e24aa',
        700: '#7b1fa2',
        800: '#6a1b9a',
        900: '#4a148c',
        A100: '#ea80fc',
        A200: '#e040fb',
        A400: '#d500f9',
        A700: '#aa00ff',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'deep-purple': {
        50: '#ede7f6',
        100: '#d1c4e9',
        200: '#b39ddb',
        300: '#9575cd',
        400: '#7e57c2',
        500: '#673ab7',
        600: '#5e35b1',
        700: '#512da8',
        800: '#4527a0',
        900: '#311b92',
        A100: '#b388ff',
        A200: '#7c4dff',
        A400: '#651fff',
        A700: '#6200ea',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: white87,
            A700: white87
        }
    },
    'indigo': {
        50: '#e8eaf6',
        100: '#c5cae9',
        200: '#9fa8da',
        300: '#7986cb',
        400: '#5c6bc0',
        500: '#3f51b5',
        600: '#3949ab',
        700: '#303f9f',
        800: '#283593',
        900: '#1a237e',
        A100: '#8c9eff',
        A200: '#536dfe',
        A400: '#3d5afe',
        A700: '#304ffe',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: white87
        }
    },
    'blue': {
        50: '#e3f2fd',
        100: '#bbdefb',
        200: '#90caf9',
        300: '#64b5f6',
        400: '#42a5f5',
        500: '#2196f3',
        600: '#1e88e5',
        700: '#1976d2',
        800: '#1565c0',
        900: '#0d47a1',
        A100: '#82b1ff',
        A200: '#448aff',
        A400: '#2979ff',
        A700: '#2962ff',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: 'white',
            A400: 'white',
            A700: 'white'
        }
    },
    'light-blue': {
        50: '#e1f5fe',
        100: '#b3e5fc',
        200: '#81d4fa',
        300: '#4fc3f7',
        400: '#29b6f6',
        500: '#03a9f4',
        600: '#039be5',
        700: '#0288d1',
        800: '#0277bd',
        900: '#01579b',
        A100: '#80d8ff',
        A200: '#40c4ff',
        A400: '#00b0ff',
        A700: '#0091ea',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: 'white'
        }
    },
    'cyan': {
        50: '#e0f7fa',
        100: '#b2ebf2',
        200: '#80deea',
        300: '#4dd0e1',
        400: '#26c6da',
        500: '#00bcd4',
        600: '#00acc1',
        700: '#0097a7',
        800: '#00838f',
        900: '#006064',
        A100: '#84ffff',
        A200: '#18ffff',
        A400: '#00e5ff',
        A700: '#00b8d4',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'teal': {
        50: '#e0f2f1',
        100: '#b2dfdb',
        200: '#80cbc4',
        300: '#4db6ac',
        400: '#26a69a',
        500: '#009688',
        600: '#00897b',
        700: '#00796b',
        800: '#00695c',
        900: '#004d40',
        A100: '#a7ffeb',
        A200: '#64ffda',
        A400: '#1de9b6',
        A700: '#00bfa5',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'green': {
        50: '#e8f5e9',
        100: '#c8e6c9',
        200: '#a5d6a7',
        300: '#81c784',
        400: '#66bb6a',
        500: '#4caf50',
        600: '#43a047',
        700: '#388e3c',
        800: '#2e7d32',
        900: '#1b5e20',
        A100: '#b9f6ca',
        A200: '#69f0ae',
        A400: '#00e676',
        A700: '#00c853',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'light-green': {
        50: '#f1f8e9',
        100: '#dcedc8',
        200: '#c5e1a5',
        300: '#aed581',
        400: '#9ccc65',
        500: '#8bc34a',
        600: '#7cb342',
        700: '#689f38',
        800: '#558b2f',
        900: '#33691e',
        A100: '#ccff90',
        A200: '#b2ff59',
        A400: '#76ff03',
        A700: '#64dd17',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: 'white',
            900: 'white',
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'lime': {
        50: '#f9fbe7',
        100: '#f0f4c3',
        200: '#e6ee9c',
        300: '#dce775',
        400: '#d4e157',
        500: '#cddc39',
        600: '#c0ca33',
        700: '#afb42b',
        800: '#9e9d24',
        900: '#827717',
        A100: '#f4ff81',
        A200: '#eeff41',
        A400: '#c6ff00',
        A700: '#aeea00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: black87,
            900: 'white',
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'yellow': {
        50: '#fffde7',
        100: '#fff9c4',
        200: '#fff59d',
        300: '#fff176',
        400: '#ffee58',
        500: '#ffeb3b',
        600: '#fdd835',
        700: '#fbc02d',
        800: '#f9a825',
        900: '#f57f17',
        A100: '#ffff8d',
        A200: '#ffff00',
        A400: '#ffea00',
        A700: '#ffd600',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: black87,
            900: black87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'amber': {
        50: '#fff8e1',
        100: '#ffecb3',
        200: '#ffe082',
        300: '#ffd54f',
        400: '#ffca28',
        500: '#ffc107',
        600: '#ffb300',
        700: '#ffa000',
        800: '#ff8f00',
        900: '#ff6f00',
        A100: '#ffe57f',
        A200: '#ffd740',
        A400: '#ffc400',
        A700: '#ffab00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: black87,
            900: black87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: black87
        }
    },
    'orange': {
        50: '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100',
        A100: '#ffd180',
        A200: '#ffab40',
        A400: '#ff9100',
        A700: '#ff6d00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: black87,
            700: black87,
            800: 'white',
            900: 'white',
            A100: black87,
            A200: black87,
            A400: black87,
            A700: 'black'
        }
    },
    'deep-orange': {
        50: '#fbe9e7',
        100: '#ffccbc',
        200: '#ffab91',
        300: '#ff8a65',
        400: '#ff7043',
        500: '#ff5722',
        600: '#f4511e',
        700: '#e64a19',
        800: '#d84315',
        900: '#bf360c',
        A100: '#ff9e80',
        A200: '#ff6e40',
        A400: '#ff3d00',
        A700: '#dd2c00',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: 'white',
            600: 'white',
            700: 'white',
            800: 'white',
            900: 'white',
            A100: black87,
            A200: black87,
            A400: 'white',
            A700: 'white'
        }
    },
    'brown': {
        50: '#efebe9',
        100: '#d7ccc8',
        200: '#bcaaa4',
        300: '#a1887f',
        400: '#8d6e63',
        500: '#795548',
        600: '#6d4c41',
        700: '#5d4037',
        800: '#4e342e',
        900: '#3e2723',
        A100: '#d7ccc8',
        A200: '#bcaaa4',
        A400: '#8d6e63',
        A700: '#5d4037',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: 'white',
            A700: white87
        }
    },
    'grey': {
        0: '#ffffff',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        1000: '#000000',
        A100: '#ffffff',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161',
        contrast: {
            0: black87,
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: black87,
            500: black87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            1000: white87,
            A100: black87,
            A200: black87,
            A400: black87,
            A700: white87
        }
    },
    'blue-grey': {
        50: '#eceff1',
        100: '#cfd8dc',
        200: '#b0bec5',
        300: '#90a4ae',
        400: '#78909c',
        500: '#607d8b',
        600: '#546e7a',
        700: '#455a64',
        800: '#37474f',
        900: '#263238',
        A100: '#cfd8dc',
        A200: '#b0bec5',
        A400: '#78909c',
        A700: '#455a64',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: black87,
            400: 'white',
            500: 'white',
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: black87,
            A400: 'white',
            A700: white87
        }
    },
    'fuse-dark': {
        50: '#ECECEE',
        100: '#C5C6CB',
        200: '#9EA1A9',
        300: '#7D818C',
        400: '#5C616F',
        500: '#3C4252',
        600: '#353A48',
        700: '#2D323E',
        800: '#262933',
        900: '#1E2129',
        A100: '#C5C6CB',
        A200: '#9EA1A9',
        A400: '#5C616F',
        A700: '#2D323E',
        contrast: {
            50: black87,
            100: black87,
            200: black87,
            300: 'white',
            400: 'white',
            500: white87,
            600: white87,
            700: white87,
            800: white87,
            900: white87,
            A100: black87,
            A200: white87,
            A400: white87,
            A700: white87
        }
    },
    white: {
        500: 'white',
        contrast: {
            500: black87
        }
    },
    black: {
        500: 'black',
        contrast: {
            500: 'white'
        }
    }
};
// tslint:disable-next-line
var matPresetColors = [
    '#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000', '#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162', '#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea', '#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff', '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4', '#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00', '#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723', '#d7ccc8', '#bcaaa4', '#8d6e63', '#5d4037', '#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121', '#ffffff', '#eeeeee', '#bdbdbd', '#616161', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#455a64', '#37474f', '#263238', '#cfd8dc', '#b0bec5', '#78909c', '#455a64'
];
/**
 // Color palettes from the Material Design spec.
 // See https://www.google.com/design/spec/style/color.html
 */
var MatColors = /** @class */ (function () {
    function MatColors() {
    }
    MatColors.getColor = function (colorName) {
        if (matColors[colorName]) {
            return matColors[colorName];
        }
        return false;
    };
    MatColors.all = matColors;
    MatColors.presets = matPresetColors;
    return MatColors;
}());



/***/ }),

/***/ "../../../../../src/@fuse/pipes/camelCaseToDash.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamelCaseToDashPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CamelCaseToDashPipe = /** @class */ (function () {
    function CamelCaseToDashPipe() {
    }
    CamelCaseToDashPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        return value ? String(value).replace(/([A-Z])/g, function (g) { return "-" + g[0].toLowerCase(); }) : '';
    };
    CamelCaseToDashPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'camelCaseToDash' })
    ], CamelCaseToDashPipe);
    return CamelCaseToDashPipe;
}());



/***/ }),

/***/ "../../../../../src/@fuse/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_utils__ = __webpack_require__("../../../../../src/@fuse/utils/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (mainArr, searchText, property) {
        return __WEBPACK_IMPORTED_MODULE_1__fuse_utils__["a" /* FuseUtils */].filterArrayByString(mainArr, searchText);
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'filter' })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/@fuse/pipes/getById.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetByIdPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetByIdPipe = /** @class */ (function () {
    function GetByIdPipe() {
    }
    GetByIdPipe.prototype.transform = function (value, id, property) {
        var foundItem = value.find(function (item) {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (foundItem) {
            return foundItem[property];
        }
    };
    GetByIdPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'getById',
            pure: false
        })
    ], GetByIdPipe);
    return GetByIdPipe;
}());



/***/ }),

/***/ "../../../../../src/@fuse/pipes/htmlToPlaintext.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlToPlaintextPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HtmlToPlaintextPipe = /** @class */ (function () {
    function HtmlToPlaintextPipe() {
    }
    HtmlToPlaintextPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        return value ? String(value).replace(/<[^>]+>/gm, '') : '';
    };
    HtmlToPlaintextPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'htmlToPlaintext' })
    ], HtmlToPlaintextPipe);
    return HtmlToPlaintextPipe;
}());



/***/ }),

/***/ "../../../../../src/@fuse/pipes/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({
                    key: key,
                    value: value[key]
                });
            }
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'keys' })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "../../../../../src/@fuse/pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusePipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_pipe__ = __webpack_require__("../../../../../src/@fuse/pipes/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getById_pipe__ = __webpack_require__("../../../../../src/@fuse/pipes/getById.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__htmlToPlaintext_pipe__ = __webpack_require__("../../../../../src/@fuse/pipes/htmlToPlaintext.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_pipe__ = __webpack_require__("../../../../../src/@fuse/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__camelCaseToDash_pipe__ = __webpack_require__("../../../../../src/@fuse/pipes/camelCaseToDash.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FusePipesModule = /** @class */ (function () {
    function FusePipesModule() {
    }
    FusePipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_2__getById_pipe__["a" /* GetByIdPipe */],
                __WEBPACK_IMPORTED_MODULE_3__htmlToPlaintext_pipe__["a" /* HtmlToPlaintextPipe */],
                __WEBPACK_IMPORTED_MODULE_4__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_5__camelCaseToDash_pipe__["a" /* CamelCaseToDashPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_2__getById_pipe__["a" /* GetByIdPipe */],
                __WEBPACK_IMPORTED_MODULE_3__htmlToPlaintext_pipe__["a" /* HtmlToPlaintextPipe */],
                __WEBPACK_IMPORTED_MODULE_4__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_5__camelCaseToDash_pipe__["a" /* CamelCaseToDashPipe */]
            ]
        })
    ], FusePipesModule);
    return FusePipesModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/services/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FUSE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FuseConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// Define the default config
var DEFAULT_CONFIG = {
    layout: {
        navigation: 'left',
        navigationFolded: false,
        toolbar: 'below',
        footer: 'below',
        mode: 'fullwidth' // 'boxed', 'fullwidth'
    },
    colorClasses: {
        toolbar: 'mat-white-500-bg',
        navbar: 'mat-fuse-dark-700-bg',
        footer: 'mat-fuse-dark-900-bg'
    },
    customScrollbars: true,
    routerAnimation: 'fadeIn' // fadeIn, slideUp, slideDown, slideRight, slideLeft, none
};
// Create the injection token for the custom config
var FUSE_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('fuseCustomConfig');
var FuseConfigService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param router
     * @param platform
     * @param config
     */
    function FuseConfigService(router, platform, config) {
        var _this = this;
        this.router = router;
        this.platform = platform;
        // Set the default settings from the constant
        this.defaultConfig = DEFAULT_CONFIG;
        // If custom config provided with forRoot,
        // use them as default config...
        if (config) {
            this.defaultConfig = config;
        }
        /**
         * Disable Custom Scrollbars if Browser is Mobile
         */
        if (this.platform.ANDROID || this.platform.IOS) {
            this.defaultConfig.customScrollbars = false;
        }
        // Set the config from the default config
        this.config = __assign({}, this.defaultConfig);
        // Reload the default settings for the
        // layout on every navigation start
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                _this.setConfig({
                    layout: _this.defaultConfig.layout
                });
            }
        });
        // Create the behavior subject
        this.onConfigChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.config);
    }
    /**
     * Set the new config from given object
     *
     * @param config
     */
    FuseConfigService.prototype.setConfig = function (config) {
        // Set the config from the given object
        // Ugly, but works for now...
        this.config = __assign({}, this.config, config, { layout: __assign({}, this.config.layout, config.layout), colorClasses: __assign({}, this.config.colorClasses, config.colorClasses) });
        // Trigger the event
        this.onConfigChanged.next(this.config);
    };
    FuseConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(FUSE_CONFIG)), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_cdk_platform__["a" /* Platform */], Object])
    ], FuseConfigService);
    return FuseConfigService;
}());



/***/ }),

/***/ "../../../../../src/@fuse/services/copier.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseCopierService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This class is based on the code in the following projects:
 *
 * - https://github.com/zenorocha/select
 * - https://github.com/zenorocha/clipboard.js/
 *
 * Both released under MIT license - © Zeno Rocha
 */

var FuseCopierService = /** @class */ (function () {
    function FuseCopierService() {
    }
    /** Copy the text value to the clipboard. */
    FuseCopierService.prototype.copyText = function (text) {
        this.createTextareaAndSelect(text);
        var copySuccessful = document.execCommand('copy');
        this.removeFake();
        return copySuccessful;
    };
    /**
     * Creates a hidden textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    FuseCopierService.prototype.createTextareaAndSelect = function (text) {
        // Create a fake element to hold the contents to copy
        this.textarea = document.createElement('textarea');
        // Prevent zooming on iOS
        this.textarea.style.fontSize = '12pt';
        // Hide the element
        this.textarea.classList.add('cdk-visually-hidden');
        // Move element to the same position vertically
        var yPosition = window.pageYOffset || document.documentElement.scrollTop;
        this.textarea.style.top = yPosition + 'px';
        this.textarea.setAttribute('readonly', '');
        this.textarea.value = text;
        document.body.appendChild(this.textarea);
        this.textarea.select();
        this.textarea.setSelectionRange(0, this.textarea.value.length);
    };
    /** Remove the text area from the DOM. */
    FuseCopierService.prototype.removeFake = function () {
        if (this.textarea) {
            document.body.removeChild(this.textarea);
            this.textarea = null;
        }
    };
    FuseCopierService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], FuseCopierService);
    return FuseCopierService;
}());



/***/ }),

/***/ "../../../../../src/@fuse/services/match-media.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMatchMediaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseMatchMediaService = /** @class */ (function () {
    function FuseMatchMediaService(observableMedia) {
        var _this = this;
        this.observableMedia = observableMedia;
        this.onMediaChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.activeMediaQuery = '';
        this.observableMedia.subscribe(function (change) {
            if (_this.activeMediaQuery !== change.mqAlias) {
                _this.activeMediaQuery = change.mqAlias;
                _this.onMediaChange.next(change.mqAlias);
            }
        });
    }
    FuseMatchMediaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__["b" /* ObservableMedia */]])
    ], FuseMatchMediaService);
    return FuseMatchMediaService;
}());



/***/ }),

/***/ "../../../../../src/@fuse/services/splash-screen.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSplashScreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FuseSplashScreenService = /** @class */ (function () {
    function FuseSplashScreenService(animationBuilder, document, router) {
        var _this = this;
        this.animationBuilder = animationBuilder;
        this.document = document;
        this.router = router;
        // Get the splash screen element
        this.splashScreenEl = this.document.body.querySelector('#fuse-splash-screen');
        // If the splash screen element exists...
        if (this.splashScreenEl) {
            // Hide it on the first NavigationEnd event
            var hideOnLoad_1 = this.router.events.subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]) {
                    setTimeout(function () {
                        _this.hide();
                        // Unsubscribe from this event so it
                        // won't get triggered again
                        hideOnLoad_1.unsubscribe();
                    }, 0);
                }
            });
        }
    }
    FuseSplashScreenService.prototype.show = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["n" /* style */])({
                    opacity: '0',
                    zIndex: '99999'
                }),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["n" /* style */])({ opacity: '1' }))
            ]).create(this.splashScreenEl);
        setTimeout(function () {
            _this.player.play();
        }, 0);
    };
    FuseSplashScreenService.prototype.hide = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["n" /* style */])({ opacity: '1' }),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["n" /* style */])({
                    opacity: '0',
                    zIndex: '-10'
                }))
            ]).create(this.splashScreenEl);
        setTimeout(function () {
            _this.player.play();
        }, 0);
    };
    FuseSplashScreenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* AnimationBuilder */], Object, __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]])
    ], FuseSplashScreenService);
    return FuseSplashScreenService;
}());



/***/ }),

/***/ "../../../../../src/@fuse/services/translation-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseTranslationLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseTranslationLoaderService = /** @class */ (function () {
    function FuseTranslationLoaderService(translate) {
        this.translate = translate;
    }
    FuseTranslationLoaderService.prototype.loadTranslations = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var locales = args.slice();
        locales.forEach(function (locale) {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            _this.translate.setTranslation(locale.lang, locale.data, true);
        });
    };
    FuseTranslationLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateService */]])
    ], FuseTranslationLoaderService);
    return FuseTranslationLoaderService;
}());



/***/ }),

/***/ "../../../../../src/@fuse/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseSharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_directives_directives__ = __webpack_require__("../../../../../src/@fuse/directives/directives.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_pipes_pipes_module__ = __webpack_require__("../../../../../src/@fuse/pipes/pipes.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FuseSharedModule = /** @class */ (function () {
    function FuseSharedModule() {
    }
    FuseSharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_directives_directives__["a" /* FuseDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_pipes_pipes_module__["a" /* FusePipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_directives_directives__["a" /* FuseDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_pipes_pipes_module__["a" /* FusePipesModule */]
            ]
        })
    ], FuseSharedModule);
    return FuseSharedModule;
}());



/***/ }),

/***/ "../../../../../src/@fuse/utils/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseUtils; });
var FuseUtils = /** @class */ (function () {
    function FuseUtils() {
    }
    FuseUtils.filterArrayByString = function (mainArr, searchText, ignoreProperty) {
        var _this = this;
        if (searchText === '') {
            return mainArr;
        }
        searchText = searchText.toLowerCase();
        return mainArr.filter(function (itemObj) {
            var newObj = Object.assign({}, itemObj);
            delete newObj[ignoreProperty];
            return _this.searchInObj(newObj, searchText);
        });
    };
    FuseUtils.searchInObj = function (itemObj, searchText) {
        for (var prop in itemObj) {
            if (!itemObj.hasOwnProperty(prop)) {
                continue;
            }
            var value = itemObj[prop];
            if (typeof value === 'string') {
                if (this.searchInString(value, searchText)) {
                    return true;
                }
            }
            else if (Array.isArray(value)) {
                if (this.searchInArray(value, searchText)) {
                    return true;
                }
            }
            if (typeof value === 'object') {
                if (this.searchInObj(value, searchText)) {
                    return true;
                }
            }
        }
    };
    FuseUtils.searchInArray = function (arr, searchText) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var value = arr_1[_i];
            if (typeof value === 'string') {
                if (this.searchInString(value, searchText)) {
                    return true;
                }
            }
            if (typeof value === 'object') {
                if (this.searchInObj(value, searchText)) {
                    return true;
                }
            }
        }
    };
    FuseUtils.searchInString = function (value, searchText) {
        return value.toLowerCase().includes(searchText);
    };
    FuseUtils.generateGUID = function () {
        function S4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return S4() + S4();
    };
    FuseUtils.toggleInArray = function (item, array) {
        if (array.indexOf(item) === -1) {
            array.push(item);
        }
        else {
            array.splice(array.indexOf(item), 1);
        }
    };
    FuseUtils.handleize = function (text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    };
    return FuseUtils;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<fuse-main></fuse-main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_services_splash_screen_service__ = __webpack_require__("../../../../../src/@fuse/services/splash-screen.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_components_navigation_navigation_service__ = __webpack_require__("../../../../../src/@fuse/components/navigation/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(fuseNavigationService, fuseSplashScreen) {
        this.fuseNavigationService = fuseNavigationService;
        this.fuseSplashScreen = fuseSplashScreen;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_components_navigation_navigation_service__["a" /* FuseNavigationService */],
            __WEBPACK_IMPORTED_MODULE_1__fuse_services_splash_screen_service__["a" /* FuseSplashScreenService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fuse_fuse_module__ = __webpack_require__("../../../../../src/@fuse/fuse.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fuse_shared_module__ = __webpack_require__("../../../../../src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fuse_config__ = __webpack_require__("../../../../../src/app/fuse-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_content_not_found_not_found_module__ = __webpack_require__("../../../../../src/app/main/content/not-found/not-found.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_content_login_login_module__ = __webpack_require__("../../../../../src/app/main/content/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_content_login_auth_guard_service__ = __webpack_require__("../../../../../src/app/main/content/login/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'comments',
        canLoad: [__WEBPACK_IMPORTED_MODULE_16__main_content_login_auth_guard_service__["a" /* AuthGuardService */]],
        loadChildren: './main/content/comments/comments.module#CommentsModule'
    },
    {
        path: 'users',
        canLoad: [__WEBPACK_IMPORTED_MODULE_16__main_content_login_auth_guard_service__["a" /* AuthGuardService */]],
        loadChildren: './main/content/users/users.module#UsersModule'
    },
    {
        path: '**',
        redirectTo: '404'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
                // Fuse Main and Shared modules
                __WEBPACK_IMPORTED_MODULE_6__fuse_fuse_module__["a" /* FuseModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__fuse_config__["a" /* fuseConfig */]),
                __WEBPACK_IMPORTED_MODULE_7__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_10__main_main_module__["a" /* FuseMainModule */],
                __WEBPACK_IMPORTED_MODULE_11__main_content_not_found_not_found_module__["a" /* NotFoundModule */],
                __WEBPACK_IMPORTED_MODULE_12__main_content_login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyBlqWTVqH0OG_Pu4QMfJLr-TD7Jk7nDaW8",
                    authDomain: "ngx-fuse.firebaseapp.com",
                    databaseURL: "https://ngx-fuse.firebaseio.com",
                    projectId: "ngx-fuse",
                    storageBucket: "",
                    messagingSenderId: "989974715446"
                }),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__main_content_login_auth_guard_service__["a" /* AuthGuardService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* HashLocationStrategy */] }
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/fuse-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fuseConfig; });
/**
 * Default Fuse Configuration
 *
 * You can edit these options to change the default options. All these options also can be changed per component
 * basis. See `app/main/content/pages/authentication/login/login.component.ts` constructor method to learn more
 * about changing these options per component basis.
 */
var fuseConfig = {
    layout: {
        navigation: 'left',
        navigationFolded: false,
        toolbar: 'below',
        footer: 'below',
        mode: 'fullwidth' // 'boxed', 'fullwidth'
    },
    colorClasses: {
        toolbar: 'mat-white-500-bg',
        navbar: 'mat-fuse-dark-700-bg',
        footer: 'mat-fuse-dark-900-bg'
    },
    customScrollbars: true,
    routerAnimation: 'fadeIn' // fadeIn, slideUp, slideDown, slideRight, slideLeft, none
};


/***/ }),

/***/ "../../../../../src/app/main/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/main/content/content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  z-index: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_animations_index__ = __webpack_require__("../../../../../src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_services_config_service__ = __webpack_require__("../../../../../src/@fuse/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FuseContentComponent = /** @class */ (function () {
    function FuseContentComponent(router, activatedRoute, fuseConfig) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fuseConfig = fuseConfig;
        this.routeAnimationUp = false;
        this.routeAnimationDown = false;
        this.routeAnimationRight = false;
        this.routeAnimationLeft = false;
        this.routeAnimationFade = false;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .subscribe(function (event) {
            switch (_this.fuseSettings.routerAnimation) {
                case 'fadeIn':
                    _this.routeAnimationFade = !_this.routeAnimationFade;
                    break;
                case 'slideUp':
                    _this.routeAnimationUp = !_this.routeAnimationUp;
                    break;
                case 'slideDown':
                    _this.routeAnimationDown = !_this.routeAnimationDown;
                    break;
                case 'slideRight':
                    _this.routeAnimationRight = !_this.routeAnimationRight;
                    break;
                case 'slideLeft':
                    _this.routeAnimationLeft = !_this.routeAnimationLeft;
                    break;
            }
        });
        this.onConfigChanged =
            this.fuseConfig.onConfigChanged
                .subscribe(function (newSettings) {
                _this.fuseSettings = newSettings;
            });
    }
    FuseContentComponent.prototype.ngOnDestroy = function () {
        this.onConfigChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('@routerTransitionUp'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationUp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('@routerTransitionDown'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationDown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('@routerTransitionRight'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('@routerTransitionLeft'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('@routerTransitionFade'),
        __metadata("design:type", Object)
    ], FuseContentComponent.prototype, "routeAnimationFade", void 0);
    FuseContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-content',
            template: __webpack_require__("../../../../../src/app/main/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/content.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_4__fuse_animations_index__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__fuse_services_config_service__["b" /* FuseConfigService */]])
    ], FuseContentComponent);
    return FuseContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/content.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseContentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__ = __webpack_require__("../../../../../src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_main_content_content_component__ = __webpack_require__("../../../../../src/app/main/content/content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FuseContentModule = /** @class */ (function () {
    function FuseContentModule() {
    }
    FuseContentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3_app_main_content_content_component__["a" /* FuseContentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__["a" /* FuseSharedModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3_app_main_content_content_component__["a" /* FuseContentComponent */]
            ]
        })
    ], FuseContentModule);
    return FuseContentModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/login/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/main/content/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canLoad = function (route) {
        var _this = this;
        return this.authService.hasPermission.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* take */])(1), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (loggedIn) {
            if (!loggedIn) {
                _this.router.navigate(['/login']);
            }
        }));
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/login/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs) {
        this.afAuth = afAuth;
        this.afs = afs;
    }
    Object.defineProperty(AuthService.prototype, "authState", {
        /**
         * firebase auth state
         */
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        /**
         * firebase current user
         */
        get: function () {
            return this.afAuth.auth.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Googleplus Authentication
    */
    AuthService.prototype.signInWithGoogleplus = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    /**
     * Email Authentication
     *
     * @param email
     * @param password
     */
    AuthService.prototype.signInWithEmailAndPassword = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    Object.defineProperty(AuthService.prototype, "hasPermission", {
        get: function () {
            var _this = this;
            return this.authState.switchMap(function (auth) {
                if (!auth) {
                    return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(false);
                }
                return _this.afs.doc("supervisors/" + auth.uid).valueChanges().map(function (res) { return !!res; });
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sign out
     */
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <div id=\"login-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div id=\"login-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n            <div class=\"logo\">\n                <img src=\"assets/images/logos/logo-black.png\">\n            </div>\n\n            <div class=\"title\">LOGIN TO YOUR ACCOUNT</div>\n\n            <form name=\"loginForm\" [formGroup]=\"loginForm\" novalidate>\n\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\n                    <mat-error *ngIf=\"loginFormErrors.email.required\">\n                        Email is required\n                    </mat-error>\n                    <mat-error *ngIf=\"!loginFormErrors.email.required && loginFormErrors.email.email\">\n                        Please enter a valid email address\n                    </mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                    <mat-error *ngIf=\"loginFormErrors.password.required\">\n                        Password is required\n                    </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button color=\"accent\" (click)=\"signInWithEmailAndPassword()\" class=\"submit-button\" aria-label=\"LOG IN\"\n                        [disabled]=\"loginForm.invalid\">\n                    LOGIN\n                </button>\n\n            </form>\n\n            <div class=\"separator\">\n                <span class=\"text\">OR</span>\n            </div>\n\n            <button mat-raised-button (click)=\"signInWithGoogleplus()\" class=\"google\">\n                Log in with Google\n            </button>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/content/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #login {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #login #login-form-wrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #login #login-form-wrapper {\n        padding: 16px; } }\n:host #login #login-form-wrapper #login-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      background: #FFFFFF;\n      text-align: center;\n      -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #login #login-form-wrapper #login-form {\n          padding: 24px;\n          width: 100%; } }\n:host #login #login-form-wrapper #login-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #login #login-form-wrapper #login-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n:host #login #login-form-wrapper #login-form form {\n        width: 100%;\n        text-align: left; }\n:host #login #login-form-wrapper #login-form form mat-form-field {\n          width: 100%; }\n:host #login #login-form-wrapper #login-form form mat-checkbox {\n          margin: 0; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password {\n          font-size: 13px;\n          margin-top: 8px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .remember-me {\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password {\n            font-size: 13px;\n            font-weight: 500;\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form .submit-button {\n              width: 90%; } }\n:host #login #login-form-wrapper #login-form .register {\n        margin: 32px auto 24px auto;\n        font-weight: 500; }\n:host #login #login-form-wrapper #login-form .register .text {\n          margin-right: 8px; }\n:host #login #login-form-wrapper #login-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        color: rgba(0, 0, 0, 0.54); }\n:host #login #login-form-wrapper #login-form .separator .text {\n          display: -webkit-inline-box;\n          display: -ms-inline-flexbox;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #login #login-form-wrapper #login-form .separator .text:before, :host #login #login-form-wrapper #login-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #login #login-form-wrapper #login-form .separator .text:before {\n            right: 100%; }\n:host #login #login-form-wrapper #login-form .separator .text:after {\n            left: 100%; }\n:host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n        width: 192px;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n        :host #login #login-form-wrapper #login-form button {\n          width: 80%; } }\n:host #login #login-form-wrapper #login-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #login #login-form-wrapper #login-form button.facebook {\n        background-color: #3f5c9a; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__ = __webpack_require__("../../../../../src/@fuse/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_animations__ = __webpack_require__("../../../../../src/@fuse/animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/main/content/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fuseConfig, formBuilder, authService, router) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.loginFormErrors = {
            email: {},
            password: {}
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        this.loginForm.valueChanges.subscribe(function () {
            _this.onLoginFormValuesChanged();
        });
    };
    LoginComponent.prototype.onLoginFormValuesChanged = function () {
        for (var field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            var control = this.loginForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    };
    LoginComponent.prototype.signInWithEmailAndPassword = function () {
        var _this = this;
        this.authService.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(function () {
            _this.router.navigate(['/']);
        });
    };
    LoginComponent.prototype.signInWithGoogleplus = function () {
        var _this = this;
        this.authService.signInWithGoogleplus().then(function () {
            _this.router.navigate(['/']);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/main/content/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/login/login.component.scss")],
            animations: __WEBPACK_IMPORTED_MODULE_3__fuse_animations__["a" /* fuseAnimations */]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__ = __webpack_require__("../../../../../src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/main/content/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/main/content/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard_service__ = __webpack_require__("../../../../../src/app/main/content/login/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]
    }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__fuse_shared_module__["a" /* FuseSharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6__auth_guard_service__["a" /* AuthGuardService */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"error-404\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    \n  <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <div class=\"error-code\">404</div>\n\n      <div class=\"message\">Sorry but we could not find the page you are looking for</div>\n\n      <div class=\"search\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <mat-icon class=\"icon s-24\">search</mat-icon>\n          <input placeholder=\"Search for anything\" fxFlex>\n      </div>\n\n      <a class=\"back-link\" [routerLink]=\"'/'\">Go back to Home</a>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/content/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #error-404 {\n  width: 100%;\n  overflow: auto; }\n:host #error-404 .content {\n    width: 90%;\n    max-width: 512px !important; }\n:host #error-404 .content .error-code {\n      font-size: 112px;\n      text-align: center;\n      line-height: 1;\n      margin-bottom: 16px;\n      font-weight: 500; }\n:host #error-404 .content .message {\n      font-size: 24px;\n      text-align: center;\n      color: rgba(0, 0, 0, 0.54); }\n:host #error-404 .content .search {\n      width: 100%;\n      height: 56px;\n      line-height: 56px;\n      margin: 48px auto 16px auto;\n      padding: 16px;\n      background: #FFFFFF;\n      -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n:host #error-404 .content .search input {\n        padding: 0 0 0 16px; }\n:host #error-404 .content .back-link {\n      font-size: 15px;\n      text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/main/content/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/content/not-found/not-found.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("../../../../../src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_component__ = __webpack_require__("../../../../../src/app/main/content/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_4__not_found_component__["a" /* NotFoundComponent */]
    }
];
var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__not_found_component__["a" /* NotFoundComponent */]]
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutAlign.gt-xs=\"space-between center\" fxFlex></div>\n\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/main/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  z-index: 3; }\n  :host .mat-toolbar {\n    background: inherit;\n    color: inherit;\n    -webkit-box-shadow: 0px -1px 1px -1px rgba(0, 0, 0, 0.2), 0px 0px 1px 0px rgba(0, 0, 0, 0.14), 0px -1px 3px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px -1px 1px -1px rgba(0, 0, 0, 0.2), 0px 0px 1px 0px rgba(0, 0, 0, 0.14), 0px -1px 3px 0px rgba(0, 0, 0, 0.12); }\n  :host.above {\n    position: relative;\n    z-index: 99; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuseFooterComponent = /** @class */ (function () {
    function FuseFooterComponent() {
    }
    FuseFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-footer',
            template: __webpack_require__("../../../../../src/app/main/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseFooterComponent);
    return FuseFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseFooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("../../../../../src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_main_footer_footer_component__ = __webpack_require__("../../../../../src/app/main/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FuseFooterModule = /** @class */ (function () {
    function FuseFooterModule() {
    }
    FuseFooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4_app_main_footer_footer_component__["a" /* FuseFooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4_app_main_footer_footer_component__["a" /* FuseFooterComponent */]
            ]
        })
    ], FuseFooterModule);
    return FuseFooterModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n    <div id=\"fuse-main-content\">\n\n        <ng-container *ngIf=\"fuseSettings.layout.toolbar === 'above'\">\n            <fuse-toolbar class=\"above\" [ngClass]=\"fuseSettings.colorClasses.toolbar\"></fuse-toolbar>\n        </ng-container>\n\n        <fuse-navbar layout=\"horizontal\"\n                     class=\"top-navbar\" fxHide fxShow.gt-md\n                     [ngClass]=\"fuseSettings.colorClasses.navbar\"\n                     *ngIf=\"fuseSettings.layout.navigation === 'top'\">\n        </fuse-navbar>\n\n        <div id=\"wrapper\">\n\n            <fuse-sidebar [name]=\"'navbar'\"\n                          [folded]=\"fuseSettings.layout.navigationFolded\"\n                          [lockedOpen]=\"'gt-md'\"\n                          class=\"left-navbar\" [ngClass]=\"fuseSettings.colorClasses.navbar\"\n                          *ngIf=\"fuseSettings.layout.navigation === 'left' || fuseSettings.layout.navigation === 'top'\">\n                <fuse-navbar layout=\"vertical\"></fuse-navbar>\n            </fuse-sidebar>\n\n            <div class=\"content-wrapper\">\n\n                <ng-container *ngIf=\"fuseSettings.layout.toolbar === 'below'\">\n                    <fuse-toolbar class=\"below\" [ngClass]=\"fuseSettings.colorClasses.toolbar\"></fuse-toolbar>\n                </ng-container>\n\n                <fuse-content></fuse-content>\n\n            </div>\n\n            <fuse-sidebar [name]=\"'navbar'\" [align]=\"'right'\"\n                          [folded]=\"fuseSettings.layout.navigationFolded\"\n                          [lockedOpen]=\"'gt-md'\"\n                          class=\"right-navbar\" [ngClass]=\"fuseSettings.colorClasses.navbar\"\n                          *ngIf=\"fuseSettings.layout.navigation === 'right'\">\n                <fuse-navbar layout=\"vertical\"></fuse-navbar>\n            </fuse-sidebar>\n\n        </div>\n\n    </div>\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%; }\nfuse-main > .mat-sidenav-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content,\n    fuse-main > .mat-sidenav-container > .mat-drawer-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      overflow: hidden;\n      height: 100vh; }\n@media (max-width: 959px) {\n        fuse-main > .mat-sidenav-container > .mat-sidenav-content,\n        fuse-main > .mat-sidenav-container > .mat-drawer-content {\n          height: auto !important; } }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content,\n      fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        overflow: hidden; }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper,\n        fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          position: relative;\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          overflow: hidden; }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper .content-wrapper,\n          fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper .content-wrapper {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-flex: 1;\n                -ms-flex: 1;\n                    flex: 1;\n            overflow: hidden; }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper .content-wrapper fuse-content,\n            fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper .content-wrapper fuse-content {\n              position: relative;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-flex: 1;\n                  -ms-flex: 1;\n                      flex: 1;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              width: 100%;\n              overflow: hidden; }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper .content-wrapper fuse-content > *:not(router-outlet):not(.ps__scrollbar-x-rail):not(.ps__scrollbar-y-rail),\n              fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper .content-wrapper fuse-content > *:not(router-outlet):not(.ps__scrollbar-x-rail):not(.ps__scrollbar-y-rail) {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-flex: 1;\n                    -ms-flex: 1;\n                        flex: 1;\n                width: 100%;\n                min-width: 100%; }\nfuse-main > .mat-sidenav-container > .mat-sidenav-content #fuse-main-content #wrapper .content-wrapper fuse-content > *.ng-animating .mat-tab-body,\n              fuse-main > .mat-sidenav-container > .mat-drawer-content #fuse-main-content #wrapper .content-wrapper fuse-content > *.ng-animating .mat-tab-body {\n                height: 100vh; }\nfuse-main[fuse-layout-mode=\"boxed\"] {\n    max-width: 1200px;\n    margin: 0 auto;\n    -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_services_config_service__ = __webpack_require__("../../../../../src/@fuse/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FuseMainComponent = /** @class */ (function () {
    function FuseMainComponent(_renderer, _elementRef, fuseConfig, platform, document) {
        var _this = this;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.fuseConfig = fuseConfig;
        this.platform = platform;
        this.document = document;
        this.onConfigChanged =
            this.fuseConfig.onConfigChanged
                .subscribe(function (newSettings) {
                _this.fuseSettings = newSettings;
                _this.layoutMode = _this.fuseSettings.layout.mode;
            });
        if (this.platform.ANDROID || this.platform.IOS) {
            this.document.body.className += ' is-mobile';
        }
    }
    FuseMainComponent.prototype.ngOnDestroy = function () {
        this.onConfigChanged.unsubscribe();
    };
    FuseMainComponent.prototype.addClass = function (className) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    };
    FuseMainComponent.prototype.removeClass = function (className) {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('attr.fuse-layout-mode'),
        __metadata("design:type", Object)
    ], FuseMainComponent.prototype, "layoutMode", void 0);
    FuseMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__fuse_services_config_service__["b" /* FuseConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk_platform__["a" /* Platform */], Object])
    ], FuseMainComponent);
    return FuseMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseMainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("../../../../../src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components__ = __webpack_require__("../../../../../src/@fuse/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_main_content_content_module__ = __webpack_require__("../../../../../src/app/main/content/content.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_main_footer_footer_module__ = __webpack_require__("../../../../../src/app/main/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_main_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/main/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_main_toolbar_toolbar_module__ = __webpack_require__("../../../../../src/app/main/toolbar/toolbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FuseMainModule = /** @class */ (function () {
    function FuseMainModule() {
    }
    FuseMainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__main_component__["a" /* FuseMainComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["e" /* FuseThemeOptionsModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["a" /* FuseNavigationModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["b" /* FuseSearchBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["c" /* FuseShortcutsModule */],
                __WEBPACK_IMPORTED_MODULE_4__fuse_components__["d" /* FuseSidebarModule */],
                __WEBPACK_IMPORTED_MODULE_5_app_main_content_content_module__["a" /* FuseContentModule */],
                __WEBPACK_IMPORTED_MODULE_6_app_main_footer_footer_module__["a" /* FuseFooterModule */],
                __WEBPACK_IMPORTED_MODULE_7_app_main_navbar_navbar_module__["a" /* FuseNavbarModule */],
                __WEBPACK_IMPORTED_MODULE_8_app_main_toolbar_toolbar_module__["a" /* FuseToolbarModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__main_component__["a" /* FuseMainComponent */]
            ]
        })
    ], FuseMainModule);
    return FuseMainModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"layout == 'vertical'\">\n\n    <div class=\"navbar-vertical\">\n\n        <div class=\"navbar-header\">\n\n            <div class=\"logo\">\n                <img class=\"logo-icon\" src=\"assets/images/logos/logo-white.png\">\n                <span class=\"logo-text\">TALAT Admin</span>\n            </div>\n\n            <button mat-button class=\"toggle-button-navbar mat-icon-button\"\n                    (click)=\"toggleSidebarFolded('navbar')\" fxHide.lt-lg>\n                <mat-icon>menu</mat-icon>\n            </button>\n\n            <button mat-button class=\"toggle-button-navbar mat-icon-button\"\n                    (click)=\"toggleSidebarOpened('navbar')\" fxHide.gt-md>\n                <mat-icon>arrow_back</mat-icon>\n            </button>\n\n        </div>\n\n        <div class=\"navbar-content\" fusePerfectScrollbar>\n            <fuse-navigation [navigation]=\"navigation\" layout=\"vertical\"></fuse-navigation>\n        </div>\n\n    </div>\n\n</ng-container>\n\n<ng-container *ngIf=\"layout == 'horizontal'\">\n\n    <div class=\"navbar-horizontal\">\n        <fuse-navigation [navigation]=\"navigation\" layout=\"horizontal\"></fuse-navigation>\n    </div>\n\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/main/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nbody.fuse-sidebar-folded .content-wrapper:last-child {\n  padding-left: 64px !important; }\nbody.fuse-sidebar-folded .content-wrapper:first-child {\n  padding-right: 64px !important; }\nbody.fuse-sidebar-folded .content-wrapper:first-child:last-child {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\nfuse-sidebar.folded:not(.unfolded) .navbar-vertical .navbar-header {\n  padding: 0 13px; }\nfuse-sidebar.folded:not(.unfolded) .navbar-vertical .navbar-header .logo .logo-text {\n    opacity: 0;\n    -webkit-transition: opacity 200ms ease;\n    transition: opacity 200ms ease; }\nfuse-navbar:not(.top-navbar) {\n  height: 100%; }\nfuse-navbar .navbar-vertical {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%; }\nfuse-navbar .navbar-vertical .navbar-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    height: 64px;\n    min-height: 64px;\n    padding: 0 16px 0 24px;\n    -webkit-transition: padding 200ms ease;\n    transition: padding 200ms ease;\n    background-color: rgba(255, 255, 255, 0.05);\n    -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n            box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\nfuse-navbar .navbar-vertical .navbar-header .logo {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\nfuse-navbar .navbar-vertical .navbar-header .logo .logo-icon {\n        width: 38px;\n        height: 38px; }\nfuse-navbar .navbar-vertical .navbar-header .logo .logo-text {\n        margin-left: 8px;\n        font-size: 20px;\n        font-weight: 300;\n        letter-spacing: 0.4px; }\nfuse-navbar .navbar-vertical .navbar-content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n.top-navbar + #wrapper > .left-navbar {\n  display: none !important; }\n@media (max-width: 1279px) {\n    .top-navbar + #wrapper > .left-navbar {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__ = __webpack_require__("../../../../../src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuse_components_sidebar_sidebar_service__ = __webpack_require__("../../../../../src/@fuse/components/sidebar/sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_navigation_navigation__ = __webpack_require__("../../../../../src/app/navigation/navigation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fuse_components_navigation_navigation_service__ = __webpack_require__("../../../../../src/@fuse/components/navigation/navigation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuseNavbarComponent = /** @class */ (function () {
    function FuseNavbarComponent(sidebarService, navigationService) {
        this.sidebarService = sidebarService;
        this.navigationService = navigationService;
        // Navigation data
        this.navigation = __WEBPACK_IMPORTED_MODULE_3_app_navigation_navigation__["a" /* navigation */];
        // Default layout
        this.layout = 'vertical';
    }
    Object.defineProperty(FuseNavbarComponent.prototype, "directive", {
        set: function (theDirective) {
            var _this = this;
            if (!theDirective) {
                return;
            }
            this.fusePerfectScrollbar = theDirective;
            this.navigationServiceWatcher =
                this.navigationService.onItemCollapseToggled.subscribe(function () {
                    _this.fusePerfectScrollbarUpdateTimeout = setTimeout(function () {
                        _this.fusePerfectScrollbar.update();
                    }, 310);
                });
        },
        enumerable: true,
        configurable: true
    });
    FuseNavbarComponent.prototype.ngOnDestroy = function () {
        if (this.fusePerfectScrollbarUpdateTimeout) {
            clearTimeout(this.fusePerfectScrollbarUpdateTimeout);
        }
        if (this.navigationServiceWatcher) {
            this.navigationServiceWatcher.unsubscribe();
        }
    };
    FuseNavbarComponent.prototype.toggleSidebarOpened = function (key) {
        this.sidebarService.getSidebar(key).toggleOpen();
    };
    FuseNavbarComponent.prototype.toggleSidebarFolded = function (key) {
        this.sidebarService.getSidebar(key).toggleFold();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__["a" /* FusePerfectScrollbarDirective */]])
    ], FuseNavbarComponent.prototype, "directive", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FuseNavbarComponent.prototype, "layout", void 0);
    FuseNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-navbar',
            template: __webpack_require__("../../../../../src/app/main/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/navbar/navbar.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fuse_components_sidebar_sidebar_service__["a" /* FuseSidebarService */],
            __WEBPACK_IMPORTED_MODULE_4__fuse_components_navigation_navigation_service__["a" /* FuseNavigationService */]])
    ], FuseNavbarComponent);
    return FuseNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseNavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("../../../../../src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_main_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/main/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components__ = __webpack_require__("../../../../../src/@fuse/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FuseNavbarModule = /** @class */ (function () {
    function FuseNavbarModule() {
    }
    FuseNavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4_app_main_navbar_navbar_component__["a" /* FuseNavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_components__["a" /* FuseNavigationModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4_app_main_navbar_navbar_component__["a" /* FuseNavbarComponent */]
            ]
        })
    ], FuseNavbarModule);
    return FuseNavbarModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"p-0 mat-elevation-z1\">\n\n    <mat-progress-bar *ngIf=\"showLoadingBar\" class=\"loading-bar\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n\n    <div fxFlex fxFill fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <div fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <button mat-button class=\"toggle-button-navbar mat-icon-button\"\n                    *ngIf=\"!noNav\"\n                    (click)=\"toggleSidebarOpened('navbar')\" fxHide.gt-md>\n                <mat-icon>menu</mat-icon>\n            </button>\n\n            <div class=\"toolbar-separator\" fxHide.gt-md></div>\n\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"horizontalNav\">\n                <div class=\"logo ml-16\">\n                    <img class=\"logo-icon\" src=\"assets/images/logos/logo-black.png\">\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"\" fxFlex=\"0 1 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n            <div class=\"toolbar-separator\" fxHide fxShow.gt-xs></div>\n\n            <button mat-icon-button (click)=\"signOut()\" \n                    class=\"mat-icon-button exit-app-button\">\n                <mat-icon class=\"icon\">exit_to_app</mat-icon>\n            </button>\n\n        </div>\n    </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  z-index: 4; }\n:host.below {\n    z-index: 2; }\n:host .mat-toolbar {\n    background: inherit;\n    color: inherit;\n    position: relative; }\n:host .mat-toolbar .loading-bar {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      width: 100%; }\n:host .logo {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n:host .logo .logo-icon {\n      width: 38px; }\n:host .exit-app-button {\n    min-width: 64px;\n    height: 64px; }\n@media (max-width: 599px) {\n      :host .exit-app-button {\n        height: 56px; } }\n:host .toggle-button-navbar {\n    min-width: 56px;\n    height: 56px; }\n:host .toolbar-separator {\n    height: 64px;\n    width: 1px;\n    background: rgba(0, 0, 0, 0.12); }\n@media (max-width: 599px) {\n      :host .toolbar-separator {\n        height: 56px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_login_auth_service__ = __webpack_require__("../../../../../src/app/main/content/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_components_sidebar_sidebar_service__ = __webpack_require__("../../../../../src/@fuse/components/sidebar/sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseToolbarComponent = /** @class */ (function () {
    function FuseToolbarComponent(router, sidebarService, authService) {
        var _this = this;
        this.router = router;
        this.sidebarService = sidebarService;
        this.authService = authService;
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                _this.showLoadingBar = true;
            }
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.showLoadingBar = false;
            }
        });
    }
    FuseToolbarComponent.prototype.toggleSidebarOpened = function (key) {
        this.sidebarService.getSidebar(key).toggleOpen();
    };
    FuseToolbarComponent.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    FuseToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fuse-toolbar',
            template: __webpack_require__("../../../../../src/app/main/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__fuse_components_sidebar_sidebar_service__["a" /* FuseSidebarService */],
            __WEBPACK_IMPORTED_MODULE_2__content_login_auth_service__["a" /* AuthService */]])
    ], FuseToolbarComponent);
    return FuseToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/toolbar/toolbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuseToolbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__ = __webpack_require__("../../../../../src/@fuse/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_main_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/main/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fuse_components__ = __webpack_require__("../../../../../src/@fuse/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FuseToolbarModule = /** @class */ (function () {
    function FuseToolbarModule() {
    }
    FuseToolbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4_app_main_toolbar_toolbar_component__["a" /* FuseToolbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__fuse_shared_module__["a" /* FuseSharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_components__["b" /* FuseSearchBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__fuse_components__["c" /* FuseShortcutsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4_app_main_toolbar_toolbar_component__["a" /* FuseToolbarComponent */]
            ]
        })
    ], FuseToolbarModule);
    return FuseToolbarModule;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navigation; });
var navigation = [
    {
        'id': 'applications',
        'title': 'Main',
        'type': 'group',
        'children': [
            {
                'id': 'comments',
                'title': 'Comments',
                'type': 'item',
                'icon': 'message',
                'url': '/comments'
            },
            {
                'id': 'users',
                'title': 'Users',
                'type': 'item',
                'icon': 'people',
                'url': '/users'
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    hmr: false
};


/***/ }),

/***/ "../../../../../src/hmr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hmrBootstrap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__("../../../../@angularclass/hmr/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hmr__ = __webpack_require__("../../../../../src/hmr.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
var bootstrap = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]); };
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].hmr) {
    if (false) {
        hmrBootstrap(module, bootstrap);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map