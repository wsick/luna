namespace tiny.key {
    export interface IKeyInterop {
        attach(canvas: HTMLCanvasElement): IKeyInterop;
        handle(handlers: IKeyInteropHandlers): IKeyInterop;
        unhandle(): IKeyInterop;
    }

    export interface IKeyInteropHandlers {
        down: IKeyEvent;
        up: IKeyEvent;
    }

    export interface IKeyEvent {
        (args: IKeyEventArgs);
    }
}