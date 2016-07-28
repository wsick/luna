namespace tiny.key {
    export interface IKeyInterop {
        attach(canvas: HTMLCanvasElement): IKeyInterop;
        handle(handlers: IKeyInteropHandlers): IKeyInterop;
        unhandle(): IKeyInterop;
    }

    export interface IKeyInteropHandlers {
        // Down Handler:
        //   returning true will capture event and prevent bubbling
        down(args: IKeyEventArgs): boolean;
        // Up Handler:
        //   returning true will capture event and prevent bubbling
        up(args: IKeyEventArgs): boolean;
    }
}