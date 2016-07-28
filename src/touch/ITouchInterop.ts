namespace tiny.touch {
    export interface ITouchInterop {
        attach(canvas: HTMLCanvasElement): ITouchInterop;
        handle(handlers: ITouchInteropHandlers): ITouchInterop;
        unhandle(): ITouchInterop;
    }

    export interface ITouchInteropHandlers {
        down(touches: ITouchDevice[]);
        up(touches: ITouchDevice[]);
        move(touches: ITouchDevice[]);
        enter(touches: ITouchDevice[]);
        leave(touches: ITouchDevice[]);
    }
}