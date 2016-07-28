namespace tiny {
    import IMouseInterop = tiny.mouse.IMouseInterop;
    import IKeyInterop = tiny.key.IKeyInterop;
    import ITouchInterop = tiny.touch.ITouchInterop;

    export class InputManager {
        mouse: IMouseInterop;
        key: IKeyInterop;
        touch: ITouchInterop;

        constructor(canvas: HTMLCanvasElement) {
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

        protected determineMouse(): IMouseInterop {
            if (navigator.appName === "Microsoft Internet Explorer")
                return new mouse.IEMouseInterop();
            if (navigator.appName === "Netscape") {
                if (!!navigator.userAgent.match(/Trident\//)) //IE11 masquerading as Netscape
                    return new mouse.IEMouseInterop();
                return new mouse.NetscapeMouseInterop();
            }
            return new mouse.MouseInterop();
        }

        protected determineKey(): IKeyInterop {
            if (navigator.appName === "Microsoft Internet Explorer")
                return new key.IEKeyInterop();
            if (navigator.appName === "Netscape") {
                if (!!navigator.userAgent.match(/Trident\//)) //IE11 masquerading as Netscape
                    return new key.IEKeyInterop();
                return new key.NetscapeKeyInterop();
            }
            return new key.KeyInterop();
        }

        protected determineTouch(): touch.ITouchInterop {
            if (navigator.msPointerEnabled || (<any>navigator).pointerEnabled)
                return new touch.PointerTouchInterop();
            if ("ontouchstart" in window)
                return new touch.NonPointerTouchInterop();
            return new touch.FakeTouchInterop();
        }
    }
}