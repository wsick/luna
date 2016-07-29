namespace tiny.key {
    export interface IKeyModifiers {
        shift: boolean;
        ctrl: boolean;
        alt: boolean;
    }

    export interface IKeyEventArgs {
        // Setting handled=true is used to signal bubble prevention
        handled: boolean;
        modifiers: IKeyModifiers;
        platformKeyCode: number;
        key: Key;
        char: string;
    }

    export class KeyEventArgs implements IKeyEventArgs {
        handled: boolean;
        modifiers: IKeyModifiers;
        platformKeyCode: number;
        key: Key;
        char: string;

        constructor(modifiers: IKeyModifiers, keyCode: number, key: Key, c?: string) {
            this.handled = false;
            Object.defineProperties(this, {
                "modifiers": {value: modifiers, writable: false},
                "platformKeyCode": {value: keyCode, writable: false},
                "key": {value: key == null ? Key.unknown : key, writable: false},
                "char": {value: c, writable: false},
            });
        }
    }
}