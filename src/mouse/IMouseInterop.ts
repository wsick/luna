namespace tiny.mouse {
    export interface IMouseInterop {
        attach(canvas: HTMLCanvasElement): IMouseInterop;
        handle(handlers: IMouseInteropHandlers): IMouseInterop;
        unhandle(): IMouseInterop;
    }

    export interface IMouseInteropHandlers {
        down: IMouseButtonEvent;
        up: IMouseButtonEvent;
        leave: IMouseEvent;
        move: IMouseEvent;
        wheel: IMouseWheelEvent;
    }
}