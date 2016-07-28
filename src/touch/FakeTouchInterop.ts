namespace tiny.touch {
    export class FakeTouchInterop implements ITouchInterop {
        attach(canvas: HTMLCanvasElement): ITouchInterop {
            return this;
        }

        handle(handlers: ITouchInteropHandlers): ITouchInterop {
            return this;
        }

        unhandle(): ITouchInterop {
            return this;
        }
    }
}