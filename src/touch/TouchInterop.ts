namespace tiny.touch {
    var NO_HANDLERS: ITouchInteropHandlers = {
        down(touches: ITouchDevice[]) {
        },
        up(touches: ITouchDevice[]) {
        },
        move(touches: ITouchDevice[]) {
        },
        enter(touches: ITouchDevice[]) {
        },
        leave(touches: ITouchDevice[]) {
        },
    };

    export class TouchInterop implements ITouchInterop {
        private $canvasOffset: IPoint = null;
        protected $handlers: ITouchInteropHandlers = NO_HANDLERS;
        protected $active: ITouchDevice[] = [];

        get offsetX(): number {
            return window.pageXOffset + this.$canvasOffset.x;
        }

        get offsetY(): number {
            return window.pageYOffset + this.$canvasOffset.y;
        }

        attach(canvas: HTMLCanvasElement): ITouchInterop {
            this.$canvasOffset = this.calcOffset(canvas);
            return this;
        }

        handle(handlers: ITouchInteropHandlers): ITouchInterop {
            this.$handlers = handlers;
            return this;
        }

        unhandle(): ITouchInterop {
            this.$handlers = NO_HANDLERS;
            return this;
        }

        private calcOffset(canvas: HTMLCanvasElement): IPoint {
            var left = 0;
            var top = 0;
            var cur: HTMLElement = canvas;
            if (cur.offsetParent) {
                do {
                    left += cur.offsetLeft;
                    top += cur.offsetTop;
                } while (cur = <HTMLElement>cur.offsetParent);
            }
            return {x: left, y: top};
        }

        protected findTouch(identifier: number): ITouchDevice {
            for (var at = this.$active, len = at.length, i = 0; i < len; i++) {
                if (at[i].identifier === identifier)
                    return at[i];
            }
            return null;
        }

        protected removeTouches(touches: ITouchDevice[]) {
            for (var i = 0, active = this.$active, len = touches.length; i < len; i++) {
                var index = active.indexOf(touches[i]);
                if (index > -1)
                    active.splice(index, 1);
            }
        }
    }
}