namespace tiny.touch {
    export class PointerTouchInterop extends TouchInterop {
        attach(canvas: HTMLCanvasElement) {
            super.attach(canvas);
            canvas.style.msTouchAction = "none";
            (<any>canvas.style).touchAction = "none";

            canvas.addEventListener("selectstart", (e) => {
                e.preventDefault();
            });
            if (navigator.msPointerEnabled) {
                canvas.addEventListener("MSPointerDown", (e) => this.handlePointerDown(window.event ? <any>window.event : e));
                canvas.addEventListener("MSPointerUp", (e) => this.handlePointerUp(window.event ? <any>window.event : e));
                canvas.addEventListener("MSPointerMove", (e) => this.handlePointerMove(window.event ? <any>window.event : e));
                canvas.addEventListener("MSPointerEnter", (e) => this.handlePointerEnter(window.event ? <any>window.event : e));
                canvas.addEventListener("MSPointerLeave", (e) => this.handlePointerLeave(window.event ? <any>window.event : e));
            } else {
                canvas.addEventListener("pointerdown", (e) => this.handlePointerDown(window.event ? <any>window.event : e));
                canvas.addEventListener("pointerup", (e) => this.handlePointerUp(window.event ? <any>window.event : e));
                canvas.addEventListener("pointermove", (e) => this.handlePointerMove(window.event ? <any>window.event : e));
                canvas.addEventListener("pointerenter", (e) => this.handlePointerEnter(window.event ? <any>window.event : e));
                canvas.addEventListener("pointerleave", (e) => this.handlePointerLeave(window.event ? <any>window.event : e));
            }
        }

        private handlePointerDown(e: MSPointerEvent) {
            if (e.pointerType !== "touch")
                return;
            e.preventDefault();
            this.$handlers.down([this.getDevice(e)]);
        }

        private handlePointerUp(e: MSPointerEvent) {
            if (e.pointerType !== "touch")
                return;
            var touches = [this.getDevice(e)];
            this.$handlers.up(touches);
            this.removeTouches(touches);
        }

        private handlePointerMove(e: MSPointerEvent) {
            if (e.pointerType !== "touch")
                return;
            this.$handlers.move([this.getDevice(e)]);
        }

        private handlePointerEnter(e: MSPointerEvent) {
            if (e.pointerType !== "touch")
                return;
            this.$handlers.enter([this.getDevice(e)]);
        }

        private handlePointerLeave(e: MSPointerEvent) {
            if (e.pointerType !== "touch")
                return;
            this.$handlers.leave([this.getDevice(e)]);
        }

        protected getDevice(e: MSPointerEvent) {
            var existing = this.findTouch(e.pointerId);
            if (existing)
                return existing;
            var td = this.createDevice(e);
            this.$active.push(td);
            return td;
        }

        private createDevice(e: MSPointerEvent): ITouchDevice {
            return {
                identifier: e.pointerId,
                getPosition: (): IPoint => {
                    return {
                        x: e.clientX + this.offsetX,
                        y: e.clientY + this.offsetY,
                    };
                },
                force: e.pressure,
            };
        }
    }
}