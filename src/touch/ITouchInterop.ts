namespace tiny.touch {
    export interface ITouchInterop {
        attach(canvas: HTMLCanvasElement): ITouchInterop;
        handle(handlers: ITouchInteropHandlers): ITouchInterop;
        unhandle(): ITouchInterop;
    }

    export interface ITouchInteropHandlers {
        down: ITouchEvent;
        up: ITouchEvent;
        move: ITouchEvent;
        enter: ITouchEvent;
        leave: ITouchEvent;
    }

    export interface ITouchEvent {
        (args: ITouchEventArgs);
    }

    export interface ITouchEventArgs {
        handled: boolean;
        touches: ITouchDevice[];
    }
}