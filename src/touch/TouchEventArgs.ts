namespace tiny.touch {
    export class TouchEventArgs implements ITouchEventArgs {
        handled: boolean;
        touches: ITouchDevice[];

        constructor(touches: ITouchDevice[]) {
            this.handled = false;
            Object.freeze(touches);
            Object.defineProperties(this, {
                "touches": {value: touches, writable: false},
            });
        }
    }
}