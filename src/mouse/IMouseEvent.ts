namespace tiny.mouse {
    export interface IMouseEvent {
        (args: IMouseEventArgs);
    }

    export interface IMouseEventArgs {
        // Setting handled=true is used to signal bubble prevention
        handled: boolean;
        position: IPoint;
    }

    export interface IMouseButtonEvent {
        (args: IMouseButtonEventArgs);
    }

    export interface IMouseButtonEventArgs extends IMouseEventArgs {
        button: number;
    }

    export interface IMouseWheelEvent {
        (args: IMouseWheelEventArgs);
    }

    export interface IMouseWheelEventArgs extends IMouseEventArgs {
        delta: number;
    }
}