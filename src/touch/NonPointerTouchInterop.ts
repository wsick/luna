namespace tiny.touch {
    export class NonPointerTouchInterop extends TouchInterop {
        attach(canvas: HTMLCanvasElement): ITouchInterop {
            super.attach(canvas);
            canvas.addEventListener("touchstart", (e) => this.handleTouchStart(window.event ? <any>window.event : e));
            canvas.addEventListener("touchend", (e) => this.handleTouchEnd(window.event ? <any>window.event : e));
            canvas.addEventListener("touchmove", (e) => this.handleTouchMove(window.event ? <any>window.event : e));
            canvas.addEventListener("touchenter", (e) => this.handleTouchEnter(window.event ? <any>window.event : e));
            canvas.addEventListener("touchleave", (e) => this.handleTouchLeave(window.event ? <any>window.event : e));
            return this;
        }

        protected handleTouchStart(e: TouchEvent) {
            e.preventDefault();
            var newTouches = this.touchArrayFromList(e.changedTouches);
            this.$handlers.down(newTouches);
        }

        protected handleTouchEnd(e: TouchEvent) {
            var oldTouches = this.touchArrayFromList(e.changedTouches);
            this.$handlers.up(oldTouches);
            this.removeTouches(oldTouches);
        }

        protected handleTouchMove(e: TouchEvent) {
            var touches = this.touchArrayFromList(e.changedTouches);
            this.$handlers.move(touches);
        }

        protected handleTouchEnter(e: TouchEvent) {
            var touches = this.touchArrayFromList(e.changedTouches);
            this.$handlers.enter(touches);
        }

        protected handleTouchLeave(e: TouchEvent) {
            var touches = this.touchArrayFromList(e.changedTouches);
            this.$handlers.leave(touches);
        }

        protected touchArrayFromList(list: TouchList): ITouchDevice[] {
            var touches: ITouchDevice[] = [];
            for (var i = 0, len = list.length; i < len; i++) {
                touches.push(this.getDevice(list.item(i)));
            }
            return touches;
        }

        protected getDevice(t: Touch) {
            var existing = this.findTouch(t.identifier);
            if (existing)
                return existing;
            var td = this.createDevice(t);
            this.$active.push(td);
            return td;
        }

        protected createDevice(t: Touch): ITouchDevice {
            return {
                identifier: t.identifier,
                getPosition: (): IPoint => {
                    return {
                        x: t.clientX + this.offsetX,
                        y: t.clientY + this.offsetY,
                    };
                },
                force: t.force,
            };
        }
    }
}