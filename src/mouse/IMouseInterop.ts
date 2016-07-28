namespace tiny.mouse {
    export interface IMouseInterop {
        attach(canvas: HTMLCanvasElement): IMouseInterop;
        handle(handlers: IMouseInteropHandlers): IMouseInterop;
        unhandle(): IMouseInterop;
    }

    export interface IMouseInteropHandlers {
        down(button: number, pos: IPoint): boolean;
        up(button: number, pos: IPoint);
        leave(pos: IPoint);
        move(pos: IPoint);
        wheel(pos: IPoint, delta: number);
    }
}