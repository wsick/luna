var tiny;
(function (tiny) {
    var key;
    (function (key) {
        var NO_HANDLERS = {
            down: function (args) {
                return false;
            },
            up: function (args) {
                return false;
            },
        };
        var KeyInterop = (function () {
            function KeyInterop() {
                this.$handlers = NO_HANDLERS;
            }
            KeyInterop.prototype.attach = function () {
                var _this = this;
                document.onkeypress = function (e) { return _this.$handlePress(e); };
                document.onkeydown = function (e) { return _this.$handleDown(e); };
                return this;
            };
            KeyInterop.prototype.handle = function (handlers) {
                this.$handlers = handlers;
                return this;
            };
            KeyInterop.prototype.unhandle = function () {
                this.$handlers = NO_HANDLERS;
                return this;
            };
            KeyInterop.prototype.$handlePress = function (evt) {
                key.keyboard.refresh(evt);
                var args = this.createPressArgs(evt);
                if (!args)
                    return;
                Object.freeze(args);
                if (this.$handlers.down(args)) {
                    evt.preventDefault();
                    return false;
                }
            };
            KeyInterop.prototype.$handleDown = function (evt) {
                key.keyboard.refresh(evt);
                var args = this.createDownArgs(evt);
                if (!args)
                    return;
                Object.freeze(args);
                if (this.$handlers.down(args) && this.isPreventable(args)) {
                    evt.preventDefault();
                    return false;
                }
            };
            KeyInterop.prototype.isPreventable = function (args) {
                return true;
            };
            KeyInterop.prototype.createPressArgs = function (e) {
                return undefined;
            };
            KeyInterop.prototype.createDownArgs = function (e) {
                return undefined;
            };
            return KeyInterop;
        })();
        key.KeyInterop = KeyInterop;
    })(key = tiny.key || (tiny.key = {}));
})(tiny || (tiny = {}));
var tiny;
(function (tiny) {
    var key;
    (function (key) {
        (function (Key) {
            Key[Key["none"] = 0] = "none";
            Key[Key["back"] = 1] = "back";
            Key[Key["tab"] = 2] = "tab";
            Key[Key["enter"] = 3] = "enter";
            Key[Key["shift"] = 4] = "shift";
            Key[Key["ctrl"] = 5] = "ctrl";
            Key[Key["alt"] = 6] = "alt";
            Key[Key["capsLock"] = 7] = "capsLock";
            Key[Key["escape"] = 8] = "escape";
            Key[Key["space"] = 9] = "space";
            Key[Key["pageUp"] = 10] = "pageUp";
            Key[Key["pageDown"] = 11] = "pageDown";
            Key[Key["end"] = 12] = "end";
            Key[Key["home"] = 13] = "home";
            Key[Key["left"] = 14] = "left";
            Key[Key["up"] = 15] = "up";
            Key[Key["right"] = 16] = "right";
            Key[Key["down"] = 17] = "down";
            Key[Key["insert"] = 18] = "insert";
            Key[Key["delete"] = 19] = "delete";
            Key[Key["d0"] = 20] = "d0";
            Key[Key["d1"] = 21] = "d1";
            Key[Key["d2"] = 22] = "d2";
            Key[Key["d3"] = 23] = "d3";
            Key[Key["d4"] = 24] = "d4";
            Key[Key["d5"] = 25] = "d5";
            Key[Key["d6"] = 26] = "d6";
            Key[Key["d7"] = 27] = "d7";
            Key[Key["d8"] = 28] = "d8";
            Key[Key["d9"] = 29] = "d9";
            Key[Key["a"] = 30] = "a";
            Key[Key["b"] = 31] = "b";
            Key[Key["c"] = 32] = "c";
            Key[Key["d"] = 33] = "d";
            Key[Key["e"] = 34] = "e";
            Key[Key["f"] = 35] = "f";
            Key[Key["g"] = 36] = "g";
            Key[Key["h"] = 37] = "h";
            Key[Key["i"] = 38] = "i";
            Key[Key["j"] = 39] = "j";
            Key[Key["k"] = 40] = "k";
            Key[Key["l"] = 41] = "l";
            Key[Key["m"] = 42] = "m";
            Key[Key["n"] = 43] = "n";
            Key[Key["o"] = 44] = "o";
            Key[Key["p"] = 45] = "p";
            Key[Key["q"] = 46] = "q";
            Key[Key["r"] = 47] = "r";
            Key[Key["s"] = 48] = "s";
            Key[Key["t"] = 49] = "t";
            Key[Key["u"] = 50] = "u";
            Key[Key["v"] = 51] = "v";
            Key[Key["w"] = 52] = "w";
            Key[Key["x"] = 53] = "x";
            Key[Key["y"] = 54] = "y";
            Key[Key["z"] = 55] = "z";
            Key[Key["f1"] = 56] = "f1";
            Key[Key["f2"] = 57] = "f2";
            Key[Key["f3"] = 58] = "f3";
            Key[Key["f4"] = 59] = "f4";
            Key[Key["f5"] = 60] = "f5";
            Key[Key["f6"] = 61] = "f6";
            Key[Key["f7"] = 62] = "f7";
            Key[Key["f8"] = 63] = "f8";
            Key[Key["f9"] = 64] = "f9";
            Key[Key["f10"] = 65] = "f10";
            Key[Key["f11"] = 66] = "f11";
            Key[Key["f12"] = 67] = "f12";
            Key[Key["numPad0"] = 68] = "numPad0";
            Key[Key["numPad1"] = 69] = "numPad1";
            Key[Key["numPad2"] = 70] = "numPad2";
            Key[Key["numPad3"] = 71] = "numPad3";
            Key[Key["numPad4"] = 72] = "numPad4";
            Key[Key["numPad5"] = 73] = "numPad5";
            Key[Key["numPad6"] = 74] = "numPad6";
            Key[Key["numPad7"] = 75] = "numPad7";
            Key[Key["numPad8"] = 76] = "numPad8";
            Key[Key["numPad9"] = 77] = "numPad9";
            Key[Key["multiply"] = 78] = "multiply";
            Key[Key["add"] = 79] = "add";
            Key[Key["subtract"] = 80] = "subtract";
            Key[Key["decimal"] = 81] = "decimal";
            Key[Key["divide"] = 82] = "divide";
            Key[Key["unknown"] = 255] = "unknown";
        })(key.Key || (key.Key = {}));
        var Key = key.Key;
    })(key = tiny.key || (tiny.key = {}));
})(tiny || (tiny = {}));
/// <reference path="Key" />
/// <reference path="KeyInterop" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tiny;
(function (tiny) {
    var key;
    (function (key) {
        var udkie = [];
        udkie[41] = 48;
        udkie[33] = 49;
        udkie[64] = 50;
        udkie[35] = 51;
        udkie[36] = 52;
        udkie[37] = 53;
        udkie[94] = 54;
        udkie[38] = 55;
        udkie[42] = 56;
        udkie[34] = key.Key.unknown;
        var IEKeyInterop = (function (_super) {
            __extends(IEKeyInterop, _super);
            function IEKeyInterop() {
                _super.apply(this, arguments);
            }
            IEKeyInterop.prototype.createPressArgs = function (e) {
                if (!e["char"])
                    return;
                var modifiers = {
                    shift: e.shiftKey,
                    ctrl: e.ctrlKey,
                    alt: e.altKey
                };
                var keyCode = e.keyCode;
                var unshifted = udkie[keyCode];
                if (unshifted)
                    keyCode = unshifted;
                var args = new key.KeyEventArgs(modifiers, keyCode, key.keyFromBrowserCode(keyCode), e["char"]);
                if (args.key === key.Key.unknown && e.key) {
                    args.char = e.key;
                    var code = args.char.toUpperCase().charCodeAt(0);
                    args.key = key.keyFromBrowserCode(code);
                    if (args.key == null)
                        args.key = key.Key.unknown;
                }
                return args;
            };
            IEKeyInterop.prototype.createDownArgs = function (e) {
                if (e["char"] && e.keyCode !== 8 && e.keyCode !== 9 && !e.ctrlKey)
                    return;
                var modifiers = {
                    shift: e.shiftKey,
                    ctrl: e.ctrlKey,
                    alt: e.altKey
                };
                return new key.KeyEventArgs(modifiers, e.keyCode, key.keyFromBrowserCode(e.keyCode));
            };
            return IEKeyInterop;
        })(key.KeyInterop);
        key.IEKeyInterop = IEKeyInterop;
    })(key = tiny.key || (tiny.key = {}));
})(tiny || (tiny = {}));
/// <reference path="Key" />
/// <reference path="KeyInterop" />
var tiny;
(function (tiny) {
    var key;
    (function (key) {
        var sknet = [];
        sknet[8] = key.Key.back;
        sknet[9] = key.Key.tab;
        sknet[20] = key.Key.capsLock;
        sknet[27] = key.Key.escape;
        sknet[33] = key.Key.pageUp;
        sknet[34] = key.Key.pageDown;
        sknet[35] = key.Key.end;
        sknet[36] = key.Key.home;
        sknet[37] = key.Key.left;
        sknet[38] = key.Key.up;
        sknet[39] = key.Key.right;
        sknet[40] = key.Key.down;
        sknet[45] = key.Key.insert;
        sknet[46] = key.Key.delete;
        var udknet = [];
        udknet[41] = 48;
        udknet[33] = 49;
        udknet[64] = 50;
        udknet[35] = 51;
        udknet[36] = 52;
        udknet[37] = 53;
        udknet[94] = 54;
        udknet[38] = 55;
        udknet[42] = 56;
        udknet[34] = key.Key.unknown;
        var NetscapeKeyInterop = (function (_super) {
            __extends(NetscapeKeyInterop, _super);
            function NetscapeKeyInterop() {
                _super.apply(this, arguments);
            }
            NetscapeKeyInterop.prototype.createPressArgs = function (e) {
                var modifiers = {
                    shift: e.shiftKey,
                    ctrl: e.ctrlKey,
                    alt: e.altKey
                };
                var keyCode = e.keyCode;
                var unshifted = udknet[keyCode];
                if (unshifted)
                    keyCode = unshifted;
                var args = new key.KeyEventArgs(modifiers, keyCode, key.keyFromBrowserCode(keyCode), String.fromCharCode(e.which || e.keyCode));
                if (args.char === "'")
                    args.key = key.Key.unknown;
                return args;
            };
            NetscapeKeyInterop.prototype.createDownArgs = function (e) {
                if (sknet[e.keyCode] === undefined && !e.ctrlKey)
                    return null;
                var modifiers = {
                    shift: e.shiftKey,
                    ctrl: e.ctrlKey,
                    alt: e.altKey
                };
                return new key.KeyEventArgs(modifiers, e.keyCode, key.keyFromBrowserCode(e.keyCode));
            };
            NetscapeKeyInterop.prototype.isPreventable = function (args) {
                if (args.modifiers.ctrl && args.key === key.Key.v) {
                    return false;
                }
                return true;
            };
            return NetscapeKeyInterop;
        })(key.KeyInterop);
        key.NetscapeKeyInterop = NetscapeKeyInterop;
    })(key = tiny.key || (tiny.key = {}));
})(tiny || (tiny = {}));
var tiny;
(function (tiny) {
    var mouse;
    (function (mouse) {
        var NO_HANDLERS = {
            down: function (button, pos) {
                return false;
            },
            up: function (button, pos) {
            },
            leave: function (pos) {
            },
            move: function (pos) {
            },
            wheel: function (pos, delta) {
            },
        };
        var MouseInterop = (function () {
            function MouseInterop() {
                this.$canvasOffset = { x: 0, y: 0 };
                this.$isContextMenuDisabled = false;
                this.$handlers = NO_HANDLERS;
            }
            MouseInterop.prototype.attach = function (canvas) {
                var _this = this;
                this.$canvasOffset = this.calcOffset(canvas);
                canvas.addEventListener("contextmenu", function (e) { return _this.handleContextMenu(window.event ? window.event : e); });
                canvas.addEventListener("mousedown", function (e) { return _this.handleButtonPress(window.event ? window.event : e); });
                canvas.addEventListener("mouseup", function (e) { return _this.handleButtonRelease(window.event ? window.event : e); });
                canvas.addEventListener("mouseout", function (e) { return _this.handleOut(window.event ? window.event : e); });
                canvas.addEventListener("mousemove", function (e) { return _this.handleMove(window.event ? window.event : e); });
                canvas.addEventListener("mousewheel", function (e) { return _this.handleWheel(window.event ? window.event : e); });
                canvas.addEventListener("DOMMouseScroll", function (e) { return _this.handleWheel(window.event ? window.event : e); });
                return this;
            };
            MouseInterop.prototype.handle = function (handlers) {
                this.$handlers = handlers;
                return this;
            };
            MouseInterop.prototype.unhandle = function () {
                this.$handlers = NO_HANDLERS;
                return this;
            };
            MouseInterop.prototype.isLeftButton = function (button) {
                return button === 1;
            };
            MouseInterop.prototype.isRightButton = function (button) {
                return button === 2;
            };
            MouseInterop.prototype.disableNextContextMenu = function () {
                this.$isContextMenuDisabled = true;
            };
            MouseInterop.prototype.calcOffset = function (canvas) {
                var x = 0;
                var y = 0;
                var cur = canvas;
                if (cur.offsetParent) {
                    do {
                        x += cur.offsetLeft;
                        y += cur.offsetTop;
                    } while (cur = cur.offsetParent);
                }
                return { x: x, y: y };
            };
            MouseInterop.prototype.getMousePosition = function (evt) {
                return {
                    x: evt.clientX + window.pageXOffset + this.$canvasOffset.x,
                    y: evt.clientY + window.pageYOffset + this.$canvasOffset.y,
                };
            };
            MouseInterop.prototype.handleContextMenu = function (evt) {
                if (!this.$isContextMenuDisabled)
                    return;
                this.$isContextMenuDisabled = false;
                evt.stopPropagation && evt.stopPropagation();
                evt.preventDefault && evt.preventDefault();
                evt.cancelBubble = true;
                return false;
            };
            MouseInterop.prototype.handleButtonPress = function (evt) {
                tiny.key.keyboard.refresh(evt);
                var button = evt.which ? evt.which : evt.button;
                var pos = this.getMousePosition(evt);
                if (this.$handlers.down(button, pos))
                    this.disableNextContextMenu();
            };
            MouseInterop.prototype.handleButtonRelease = function (evt) {
                tiny.key.keyboard.refresh(evt);
                var button = evt.which ? evt.which : evt.button;
                var pos = this.getMousePosition(evt);
                this.$handlers.up(button, pos);
            };
            MouseInterop.prototype.handleOut = function (evt) {
                tiny.key.keyboard.refresh(evt);
                var pos = this.getMousePosition(evt);
                this.$handlers.leave(pos);
            };
            MouseInterop.prototype.handleMove = function (evt) {
                tiny.key.keyboard.refresh(evt);
                var pos = this.getMousePosition(evt);
                this.$handlers.move(pos);
            };
            MouseInterop.prototype.handleWheel = function (evt) {
                tiny.key.keyboard.refresh(evt);
                var delta = 0;
                if (evt.wheelDelta)
                    delta = evt.wheelDelta / 120;
                else if (evt.detail)
                    delta = -evt.detail / 3;
                if (evt.preventDefault)
                    evt.preventDefault();
                evt.returnValue = false;
                var pos = this.getMousePosition(evt);
                this.$handlers.wheel(pos, delta);
            };
            return MouseInterop;
        })();
        mouse.MouseInterop = MouseInterop;
    })(mouse = tiny.mouse || (tiny.mouse = {}));
})(tiny || (tiny = {}));
var tiny;
(function (tiny) {
    var mouse;
    (function (mouse) {
        var IEMouseInterop = (function (_super) {
            __extends(IEMouseInterop, _super);
            function IEMouseInterop() {
                _super.apply(this, arguments);
                this.$stopIEContextMenu = false;
            }
            IEMouseInterop.prototype.disableNextContextMenu = function () {
                _super.prototype.disableNextContextMenu.call(this);
                this.$stopIEContextMenu = true;
            };
            IEMouseInterop.prototype.attach = function (canvas) {
                var _this = this;
                canvas.oncontextmenu = function (e) { return _this.handleIEContextMenu(e); };
                return _super.prototype.attach.call(this, canvas);
            };
            IEMouseInterop.prototype.handleIEContextMenu = function (evt) {
                if (this.$stopIEContextMenu) {
                    this.$stopIEContextMenu = false;
                    return false;
                }
                return true;
            };
            return IEMouseInterop;
        })(mouse.MouseInterop);
        mouse.IEMouseInterop = IEMouseInterop;
    })(mouse = tiny.mouse || (tiny.mouse = {}));
})(tiny || (tiny = {}));
var tiny;
(function (tiny) {
    var mouse;
    (function (mouse) {
        var NetscapeMouseInterop = (function (_super) {
            __extends(NetscapeMouseInterop, _super);
            function NetscapeMouseInterop() {
                _super.apply(this, arguments);
            }
            NetscapeMouseInterop.prototype.isRightButton = function (button) {
                return button === 3;
            };
            return NetscapeMouseInterop;
        })(mouse.MouseInterop);
        mouse.NetscapeMouseInterop = NetscapeMouseInterop;
    })(mouse = tiny.mouse || (tiny.mouse = {}));
})(tiny || (tiny = {}));
var tiny;
(function (tiny) {
    var touch;
    (function (touch) {
        var NO_HANDLERS = {
            down: function (touches) {
            },
            up: function (touches) {
            },
            move: function (touches) {
            },
            enter: function (touches) {
            },
            leave: function (touches) {
            },
        };
        var TouchInterop = (function () {
            function TouchInterop() {
                this.$canvasOffset = null;
                this.$handlers = NO_HANDLERS;
                this.$active = [];
            }
            Object.defineProperty(TouchInterop.prototype, "offsetX", {
                get: function () {
                    return window.pageXOffset + this.$canvasOffset.x;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TouchInterop.prototype, "offsetY", {
                get: function () {
                    return window.pageYOffset + this.$canvasOffset.y;
                },
                enumerable: true,
                configurable: true
            });
            TouchInterop.prototype.attach = function (canvas) {
                this.$canvasOffset = this.calcOffset(canvas);
                return this;
            };
            TouchInterop.prototype.handle = function (handlers) {
                this.$handlers = handlers;
                return this;
            };
            TouchInterop.prototype.unhandle = function () {
                this.$handlers = NO_HANDLERS;
                return this;
            };
            TouchInterop.prototype.calcOffset = function (canvas) {
                var left = 0;
                var top = 0;
                var cur = canvas;
                if (cur.offsetParent) {
                    do {
                        left += cur.offsetLeft;
                        top += cur.offsetTop;
                    } while (cur = cur.offsetParent);
                }
                return { x: left, y: top };
            };
            TouchInterop.prototype.findTouch = function (identifier) {
                for (var at = this.$active, len = at.length, i = 0; i < len; i++) {
                    if (at[i].identifier === identifier)
                        return at[i];
                }
                return null;
            };
            TouchInterop.prototype.removeTouches = function (touches) {
                for (var i = 0, active = this.$active, len = touches.length; i < len; i++) {
                    var index = active.indexOf(touches[i]);
                    if (index > -1)
                        active.splice(index, 1);
                }
            };
            return TouchInterop;
        })();
        touch.TouchInterop = TouchInterop;
    })(touch = tiny.touch || (tiny.touch = {}));
})(tiny || (tiny = {}));
/// <reference path="TouchInterop" />
var tiny;
(function (tiny) {
    var touch;
    (function (touch) {
        var FakeTouchInterop = (function () {
            function FakeTouchInterop() {
            }
            FakeTouchInterop.prototype.attach = function (canvas) {
                return this;
            };
            FakeTouchInterop.prototype.handle = function (handlers) {
                return this;
            };
            FakeTouchInterop.prototype.unhandle = function () {
                return this;
            };
            return FakeTouchInterop;
        })();
        touch.FakeTouchInterop = FakeTouchInterop;
    })(touch = tiny.touch || (tiny.touch = {}));
})(tiny || (tiny = {}));
/// <reference path="TouchInterop" />
var tiny;
(function (tiny) {
    var touch;
    (function (touch) {
        var PointerTouchInterop = (function (_super) {
            __extends(PointerTouchInterop, _super);
            function PointerTouchInterop() {
                _super.apply(this, arguments);
            }
            PointerTouchInterop.prototype.attach = function (canvas) {
                var _this = this;
                _super.prototype.attach.call(this, canvas);
                canvas.style.msTouchAction = "none";
                canvas.style.touchAction = "none";
                canvas.addEventListener("selectstart", function (e) {
                    e.preventDefault();
                });
                if (navigator.msPointerEnabled) {
                    canvas.addEventListener("MSPointerDown", function (e) { return _this.handlePointerDown(window.event ? window.event : e); });
                    canvas.addEventListener("MSPointerUp", function (e) { return _this.handlePointerUp(window.event ? window.event : e); });
                    canvas.addEventListener("MSPointerMove", function (e) { return _this.handlePointerMove(window.event ? window.event : e); });
                    canvas.addEventListener("MSPointerEnter", function (e) { return _this.handlePointerEnter(window.event ? window.event : e); });
                    canvas.addEventListener("MSPointerLeave", function (e) { return _this.handlePointerLeave(window.event ? window.event : e); });
                }
                else {
                    canvas.addEventListener("pointerdown", function (e) { return _this.handlePointerDown(window.event ? window.event : e); });
                    canvas.addEventListener("pointerup", function (e) { return _this.handlePointerUp(window.event ? window.event : e); });
                    canvas.addEventListener("pointermove", function (e) { return _this.handlePointerMove(window.event ? window.event : e); });
                    canvas.addEventListener("pointerenter", function (e) { return _this.handlePointerEnter(window.event ? window.event : e); });
                    canvas.addEventListener("pointerleave", function (e) { return _this.handlePointerLeave(window.event ? window.event : e); });
                }
                return this;
            };
            PointerTouchInterop.prototype.handlePointerDown = function (e) {
                if (e.pointerType !== "touch")
                    return;
                e.preventDefault();
                this.$handlers.down([this.getDevice(e)]);
            };
            PointerTouchInterop.prototype.handlePointerUp = function (e) {
                if (e.pointerType !== "touch")
                    return;
                var touches = [this.getDevice(e)];
                this.$handlers.up(touches);
                this.removeTouches(touches);
            };
            PointerTouchInterop.prototype.handlePointerMove = function (e) {
                if (e.pointerType !== "touch")
                    return;
                this.$handlers.move([this.getDevice(e)]);
            };
            PointerTouchInterop.prototype.handlePointerEnter = function (e) {
                if (e.pointerType !== "touch")
                    return;
                this.$handlers.enter([this.getDevice(e)]);
            };
            PointerTouchInterop.prototype.handlePointerLeave = function (e) {
                if (e.pointerType !== "touch")
                    return;
                this.$handlers.leave([this.getDevice(e)]);
            };
            PointerTouchInterop.prototype.getDevice = function (e) {
                var existing = this.findTouch(e.pointerId);
                if (existing)
                    return existing;
                var td = this.createDevice(e);
                this.$active.push(td);
                return td;
            };
            PointerTouchInterop.prototype.createDevice = function (e) {
                var _this = this;
                return {
                    identifier: e.pointerId,
                    getPosition: function () {
                        return {
                            x: e.clientX + _this.offsetX,
                            y: e.clientY + _this.offsetY,
                        };
                    },
                    force: e.pressure,
                };
            };
            return PointerTouchInterop;
        })(touch.TouchInterop);
        touch.PointerTouchInterop = PointerTouchInterop;
    })(touch = tiny.touch || (tiny.touch = {}));
})(tiny || (tiny = {}));
/// <reference path="TouchInterop" />
var tiny;
(function (tiny) {
    var touch;
    (function (touch) {
        var NonPointerTouchInterop = (function (_super) {
            __extends(NonPointerTouchInterop, _super);
            function NonPointerTouchInterop() {
                _super.apply(this, arguments);
            }
            NonPointerTouchInterop.prototype.attach = function (canvas) {
                var _this = this;
                _super.prototype.attach.call(this, canvas);
                canvas.addEventListener("touchstart", function (e) { return _this.handleTouchStart(window.event ? window.event : e); });
                canvas.addEventListener("touchend", function (e) { return _this.handleTouchEnd(window.event ? window.event : e); });
                canvas.addEventListener("touchmove", function (e) { return _this.handleTouchMove(window.event ? window.event : e); });
                canvas.addEventListener("touchenter", function (e) { return _this.handleTouchEnter(window.event ? window.event : e); });
                canvas.addEventListener("touchleave", function (e) { return _this.handleTouchLeave(window.event ? window.event : e); });
                return this;
            };
            NonPointerTouchInterop.prototype.handleTouchStart = function (e) {
                e.preventDefault();
                var newTouches = this.touchArrayFromList(e.changedTouches);
                this.$handlers.down(newTouches);
            };
            NonPointerTouchInterop.prototype.handleTouchEnd = function (e) {
                var oldTouches = this.touchArrayFromList(e.changedTouches);
                this.$handlers.up(oldTouches);
                this.removeTouches(oldTouches);
            };
            NonPointerTouchInterop.prototype.handleTouchMove = function (e) {
                var touches = this.touchArrayFromList(e.changedTouches);
                this.$handlers.move(touches);
            };
            NonPointerTouchInterop.prototype.handleTouchEnter = function (e) {
                var touches = this.touchArrayFromList(e.changedTouches);
                this.$handlers.enter(touches);
            };
            NonPointerTouchInterop.prototype.handleTouchLeave = function (e) {
                var touches = this.touchArrayFromList(e.changedTouches);
                this.$handlers.leave(touches);
            };
            NonPointerTouchInterop.prototype.touchArrayFromList = function (list) {
                var touches = [];
                for (var i = 0, len = list.length; i < len; i++) {
                    touches.push(this.getDevice(list.item(i)));
                }
                return touches;
            };
            NonPointerTouchInterop.prototype.getDevice = function (t) {
                var existing = this.findTouch(t.identifier);
                if (existing)
                    return existing;
                var td = this.createDevice(t);
                this.$active.push(td);
                return td;
            };
            NonPointerTouchInterop.prototype.createDevice = function (t) {
                var _this = this;
                return {
                    identifier: t.identifier,
                    getPosition: function () {
                        return {
                            x: t.clientX + _this.offsetX,
                            y: t.clientY + _this.offsetY,
                        };
                    },
                    force: t.force,
                };
            };
            return NonPointerTouchInterop;
        })(touch.TouchInterop);
        touch.NonPointerTouchInterop = NonPointerTouchInterop;
    })(touch = tiny.touch || (tiny.touch = {}));
})(tiny || (tiny = {}));
/// <reference path="key/KeyInterop" />
/// <reference path="key/IEKeyInterop" />
/// <reference path="key/NetscapeKeyInterop" />
/// <reference path="mouse/MouseInterop" />
/// <reference path="mouse/IEMouseInterop" />
/// <reference path="mouse/NetscapeMouseInterop" />
/// <reference path="touch/FakeTouchInterop" />
/// <reference path="touch/PointerTouchInterop" />
/// <reference path="touch/NonPointerTouchInterop" />
var tiny;
(function (tiny) {
    var InputManager = (function () {
        function InputManager(canvas) {
            Object.defineProperties(this, {
                mouse: {
                    value: this.determineMouse().attach(canvas),
                    writable: false,
                },
                key: {
                    value: this.determineKey().attach(canvas),
                    writable: false,
                },
                touch: {
                    value: this.determineTouch().attach(canvas),
                    writable: false,
                },
            });
        }
        InputManager.prototype.determineMouse = function () {
            if (navigator.appName === "Microsoft Internet Explorer")
                return new tiny.mouse.IEMouseInterop();
            if (navigator.appName === "Netscape") {
                if (!!navigator.userAgent.match(/Trident\//))
                    return new tiny.mouse.IEMouseInterop();
                return new tiny.mouse.NetscapeMouseInterop();
            }
            return new tiny.mouse.MouseInterop();
        };
        InputManager.prototype.determineKey = function () {
            if (navigator.appName === "Microsoft Internet Explorer")
                return new tiny.key.IEKeyInterop();
            if (navigator.appName === "Netscape") {
                if (!!navigator.userAgent.match(/Trident\//))
                    return new tiny.key.IEKeyInterop();
                return new tiny.key.NetscapeKeyInterop();
            }
            return new tiny.key.KeyInterop();
        };
        InputManager.prototype.determineTouch = function () {
            if (navigator.msPointerEnabled || navigator.pointerEnabled)
                return new tiny.touch.PointerTouchInterop();
            if ("ontouchstart" in window)
                return new tiny.touch.NonPointerTouchInterop();
            return new tiny.touch.FakeTouchInterop();
        };
        return InputManager;
    })();
    tiny.InputManager = InputManager;
})(tiny || (tiny = {}));
/// <reference path="Key" />
var tiny;
(function (tiny) {
    var key;
    (function (key) {
        var keyFromKeyCode = [];
        keyFromKeyCode[8] = key.Key.back;
        keyFromKeyCode[9] = key.Key.tab;
        keyFromKeyCode[13] = key.Key.enter;
        keyFromKeyCode[16] = key.Key.shift;
        keyFromKeyCode[17] = key.Key.ctrl;
        keyFromKeyCode[18] = key.Key.alt;
        keyFromKeyCode[20] = key.Key.capsLock;
        keyFromKeyCode[27] = key.Key.escape;
        keyFromKeyCode[32] = key.Key.space;
        keyFromKeyCode[33] = key.Key.pageUp;
        keyFromKeyCode[34] = key.Key.pageDown;
        keyFromKeyCode[35] = key.Key.end;
        keyFromKeyCode[36] = key.Key.home;
        keyFromKeyCode[37] = key.Key.left;
        keyFromKeyCode[38] = key.Key.up;
        keyFromKeyCode[39] = key.Key.right;
        keyFromKeyCode[40] = key.Key.down;
        keyFromKeyCode[45] = key.Key.insert;
        keyFromKeyCode[46] = key.Key.delete;
        keyFromKeyCode[48] = key.Key.d0;
        keyFromKeyCode[49] = key.Key.d1;
        keyFromKeyCode[50] = key.Key.d2;
        keyFromKeyCode[51] = key.Key.d3;
        keyFromKeyCode[52] = key.Key.d4;
        keyFromKeyCode[53] = key.Key.d5;
        keyFromKeyCode[54] = key.Key.d6;
        keyFromKeyCode[55] = key.Key.d7;
        keyFromKeyCode[56] = key.Key.d8;
        keyFromKeyCode[57] = key.Key.d9;
        keyFromKeyCode[65] = key.Key.a;
        keyFromKeyCode[66] = key.Key.b;
        keyFromKeyCode[67] = key.Key.c;
        keyFromKeyCode[68] = key.Key.d;
        keyFromKeyCode[69] = key.Key.e;
        keyFromKeyCode[70] = key.Key.f;
        keyFromKeyCode[71] = key.Key.g;
        keyFromKeyCode[72] = key.Key.h;
        keyFromKeyCode[73] = key.Key.i;
        keyFromKeyCode[74] = key.Key.j;
        keyFromKeyCode[75] = key.Key.k;
        keyFromKeyCode[76] = key.Key.l;
        keyFromKeyCode[77] = key.Key.m;
        keyFromKeyCode[78] = key.Key.n;
        keyFromKeyCode[79] = key.Key.o;
        keyFromKeyCode[80] = key.Key.p;
        keyFromKeyCode[81] = key.Key.q;
        keyFromKeyCode[82] = key.Key.r;
        keyFromKeyCode[83] = key.Key.s;
        keyFromKeyCode[84] = key.Key.t;
        keyFromKeyCode[85] = key.Key.u;
        keyFromKeyCode[86] = key.Key.v;
        keyFromKeyCode[87] = key.Key.w;
        keyFromKeyCode[88] = key.Key.x;
        keyFromKeyCode[89] = key.Key.y;
        keyFromKeyCode[90] = key.Key.z;
        keyFromKeyCode[96] = key.Key.numPad0;
        keyFromKeyCode[97] = key.Key.numPad1;
        keyFromKeyCode[98] = key.Key.numPad2;
        keyFromKeyCode[99] = key.Key.numPad3;
        keyFromKeyCode[100] = key.Key.numPad4;
        keyFromKeyCode[101] = key.Key.numPad5;
        keyFromKeyCode[102] = key.Key.numPad6;
        keyFromKeyCode[103] = key.Key.numPad7;
        keyFromKeyCode[104] = key.Key.numPad8;
        keyFromKeyCode[105] = key.Key.numPad9;
        keyFromKeyCode[106] = key.Key.multiply;
        keyFromKeyCode[107] = key.Key.add;
        keyFromKeyCode[109] = key.Key.subtract;
        keyFromKeyCode[110] = key.Key.decimal;
        keyFromKeyCode[111] = key.Key.divide;
        keyFromKeyCode[112] = key.Key.f1;
        keyFromKeyCode[113] = key.Key.f2;
        keyFromKeyCode[114] = key.Key.f3;
        keyFromKeyCode[115] = key.Key.f4;
        keyFromKeyCode[116] = key.Key.f5;
        keyFromKeyCode[117] = key.Key.f6;
        keyFromKeyCode[118] = key.Key.f7;
        keyFromKeyCode[119] = key.Key.f8;
        keyFromKeyCode[120] = key.Key.f9;
        keyFromKeyCode[121] = key.Key.f10;
        keyFromKeyCode[122] = key.Key.f11;
        keyFromKeyCode[123] = key.Key.f12;
        function keyFromBrowserCode(code) {
            return keyFromKeyCode[code];
        }
        key.keyFromBrowserCode = keyFromBrowserCode;
    })(key = tiny.key || (tiny.key = {}));
})(tiny || (tiny = {}));
var tiny;
(function (tiny) {
    var key;
    (function (key) {
        (function (ModifierKeys) {
            ModifierKeys[ModifierKeys["none"] = 1] = "none";
            ModifierKeys[ModifierKeys["alt"] = 2] = "alt";
            ModifierKeys[ModifierKeys["control"] = 4] = "control";
            ModifierKeys[ModifierKeys["shift"] = 8] = "shift";
            ModifierKeys[ModifierKeys["windows"] = 16] = "windows";
            ModifierKeys[ModifierKeys["apple"] = 32] = "apple";
        })(key.ModifierKeys || (key.ModifierKeys = {}));
        var ModifierKeys = key.ModifierKeys;
        var keyboard;
        (function (keyboard) {
            keyboard.modifiers = ModifierKeys.none;
            function refresh(evt) {
                if (evt.shiftKey)
                    keyboard.modifiers |= ModifierKeys.shift;
                else
                    keyboard.modifiers &= ~ModifierKeys.shift;
                if (evt.ctrlKey)
                    keyboard.modifiers |= ModifierKeys.control;
                else
                    keyboard.modifiers &= ~ModifierKeys.control;
                if (evt.altKey)
                    keyboard.modifiers |= ModifierKeys.alt;
                else
                    keyboard.modifiers &= ~ModifierKeys.alt;
            }
            keyboard.refresh = refresh;
            function hasControl() {
                return (keyboard.modifiers & ModifierKeys.control) === ModifierKeys.control;
            }
            keyboard.hasControl = hasControl;
            function hasAlt() {
                return (keyboard.modifiers & ModifierKeys.alt) === ModifierKeys.alt;
            }
            keyboard.hasAlt = hasAlt;
            function hasShift() {
                return (keyboard.modifiers & ModifierKeys.shift) === ModifierKeys.shift;
            }
            keyboard.hasShift = hasShift;
        })(keyboard = key.keyboard || (key.keyboard = {}));
    })(key = tiny.key || (tiny.key = {}));
})(tiny || (tiny = {}));
var tiny;
(function (tiny) {
    var key;
    (function (key_1) {
        var KeyEventArgs = (function () {
            function KeyEventArgs(modifiers, keyCode, key, c) {
                this.modifiers = modifiers;
                this.platformKeyCode = keyCode;
                this.key = key == null ? key_1.Key.unknown : key;
                this.char = c;
            }
            return KeyEventArgs;
        })();
        key_1.KeyEventArgs = KeyEventArgs;
    })(key = tiny.key || (tiny.key = {}));
})(tiny || (tiny = {}));

//# sourceMappingURL=tiny.js.map
