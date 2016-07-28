namespace tiny.mouse {
    export class NetscapeMouseInterop extends MouseInterop {
        isRightButton(button: number): boolean {
            return button === 3;
        }
    }
}