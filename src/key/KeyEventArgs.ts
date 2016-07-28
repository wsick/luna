namespace tiny.key {
    export interface IKeyModifiers {
        shift: boolean;
        ctrl: boolean;
        alt: boolean;
    }

    export interface IKeyEventArgs {
        modifiers: IKeyModifiers;
        platformKeyCode: number;
        key: Key;
        char: string;
    }

    export class KeyEventArgs implements IKeyEventArgs {
        modifiers: IKeyModifiers;
        platformKeyCode: number;
        key: Key;
        char: string;

        constructor(modifiers: IKeyModifiers, keyCode: number, key: Key, c?: string) {
            super();
            this.modifiers = modifiers;
            this.platformKeyCode = keyCode;
            this.key = key == null ? Key.unknown : key;
            this.char = c;
        }
    }
}