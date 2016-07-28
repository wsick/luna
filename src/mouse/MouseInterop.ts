namespace tiny.mouse {
    export interface IMouseInterop {
        attach(canvas: HTMLCanvasElement): this;
        handle(handlers: IMouseInteropHandlers): this;
        unhandle(): this;
    }

    export interface IMouseInteropHandlers {
        press(button: number, pos: IPoint): boolean;
        release(button: number, pos: IPoint);
        leave(pos: IPoint): boolean;
        move(pos: IPoint);
        wheel(pos: IPoint, delta: number);
    }

    var NO_HANDLERS: IMouseInteropHandlers = {
        press(button: number, pos: IPoint): boolean {
            return false;
        },
        release(button: number, pos: IPoint) {
        },
        leave(pos: IPoint): boolean {
        },
        move(pos: IPoint) {
        },
        wheel(pos: IPoint, delta: number) {
        },
    };

    export class MouseInterop implements IMouseInterop {
        private $canvasOffset: IPoint = {x: 0, y: 0};
        private $isContextMenuDisabled: boolean = false;
        private $handlers: IMouseInteropHandlers = NO_HANDLERS;

        attach(canvas: HTMLCanvasElement): this {
            this.$canvasOffset = this.calcOffset(canvas);

            canvas.addEventListener("contextmenu", (e) => this.handleContextMenu(window.event ? <any>window.event : e));
            canvas.addEventListener("mousedown", (e) => this.handleButtonPress(window.event ? <any>window.event : e));
            canvas.addEventListener("mouseup", (e) => this.handleButtonRelease(window.event ? <any>window.event : e));
            canvas.addEventListener("mouseout", (e) => this.handleOut(window.event ? <any>window.event : e));
            canvas.addEventListener("mousemove", (e) => this.handleMove(window.event ? <any>window.event : e));

            //IE9, Chrome, Safari, Opera
            canvas.addEventListener("mousewheel", (e) => this.handleWheel(window.event ? <any>window.event : e));
            //Firefox
            canvas.addEventListener("DOMMouseScroll", (e) => this.handleWheel(window.event ? <any>window.event : e));

            return this;
        }

        handle(handlers: IMouseInteropHandlers): this {
            this.$handlers = handlers;
            return this;
        }

        unhandle(): this {
            this.$handlers = NO_HANDLERS;
            return this;
        }

        isLeftButton(button: number): boolean {
            return button === 1;
        }

        isRightButton(button: number): boolean {
            return button === 2;
        }

        disableNextContextMenu() {
            this.$isContextMenuDisabled = true;
        }

        protected calcOffset(canvas: HTMLCanvasElement): IPoint {
            var x = 0;
            var y = 0;
            var cur: HTMLElement = canvas;
            if (cur.offsetParent) {
                do {
                    x += cur.offsetLeft;
                    y += cur.offsetTop;
                } while (cur = <HTMLElement>cur.offsetParent);
            }
            return {x: x, y: y};
        }

        protected getMousePosition(evt): IPoint {
            return {
                x: evt.clientX + window.pageXOffset + this.$canvasOffset.x,
                y: evt.clientY + window.pageYOffset + this.$canvasOffset.y,
            };
        }

        private handleContextMenu(evt) {
            if (!this.$isContextMenuDisabled)
                return;
            this.$isContextMenuDisabled = false;
            evt.stopPropagation && evt.stopPropagation();
            evt.preventDefault && evt.preventDefault();
            evt.cancelBubble = true;
            return false;
        }

        private handleButtonPress(evt) {
            key.keyboard.refresh(evt);
            var button = evt.which ? evt.which : evt.button;
            var pos = this.getMousePosition(evt);
            if (this.$handlers.press(button, pos))
                this.disableNextContextMenu();
        }

        private handleButtonRelease(evt) {
            key.keyboard.refresh(evt);
            var button = evt.which ? evt.which : evt.button;
            var pos = this.getMousePosition(evt);
            this.$handlers.release(button, pos);
        }

        private handleOut(evt) {
            key.keyboard.refresh(evt);
            var pos = this.getMousePosition(evt);
            this.$handlers.leave(pos);
        }

        private handleMove(evt) {
            key.keyboard.refresh(evt);
            var pos = this.getMousePosition(evt);
            this.$handlers.move(pos);
        }

        private handleWheel(evt) {
            key.keyboard.refresh(evt);
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
        }
    }
}