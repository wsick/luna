namespace tiny.touch {
    export interface ITouchInterop {
        attach(canvas: HTMLCanvasElement): this;
        handle(handlers: ITouchInteropHandlers): this;
        unhandle(): this;
    }

    export interface ITouchInteropHandlers {
        down(touches: ITouchDevice[]);
        up(touches: ITouchDevice[]);
        move(touches: ITouchDevice[]);
        enter(touches: ITouchDevice[]);
        leave(touches: ITouchDevice[]);
    }
}