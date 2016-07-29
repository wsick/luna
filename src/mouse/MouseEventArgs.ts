namespace tiny.mouse {
    export class MouseEventArgs implements IMouseEventArgs {
        handled: boolean;
        position: IPoint;

        constructor(pos: IPoint) {
            this.handled = false;
            Object.defineProperties(this, {
                "position": {value: pos, writable: false},
            });
        }
    }

    export class MouseButtonEventArgs implements IMouseButtonEventArgs {
        handled: boolean;
        button: number;
        position: IPoint;

        constructor(button: number, pos: IPoint) {
            this.handled = false;
            Object.defineProperties(this, {
                "button": {value: button, writable: false},
                "position": {value: pos, writable: false},
            });
        }
    }

    export class MouseWheelEventArgs implements IMouseWheelEventArgs {
        handled: boolean;
        position: IPoint;
        delta: number;

        constructor(pos: IPoint, delta: number) {
            this.handled = false;
            Object.defineProperties(this, {
                "position": {value: pos, writable: false},
                "delta": {value: delta, writable: false},
            });
        }
    }
}