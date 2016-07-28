namespace tiny.touch {
    export interface ITouchInterop {
        attach(canvas: HTMLCanvasElement);
        handle(handlers: ITouchInteropHandlers);
        unhandle();
    }

    export interface ITouchInteropHandlers {
        down(touches: ITouchDevice[]);
        up(touches: ITouchDevice[]);
        move(touches: ITouchDevice[]);
        enter(touches: ITouchDevice[]);
        leave(touches: ITouchDevice[]);
    }
}