namespace tiny.key {
    export enum ModifierKeys {
        none = 1 << 0,
        alt = 1 << 1,
        control = 1 << 2,
        shift = 1 << 3,
        windows = 1 << 4,
        apple = 1 << 5,
    }

    export namespace keyboard {
        export interface IModifierEvent {
            shiftKey: boolean;
            ctrlKey: boolean;
            altKey: boolean;
        }

        export var modifiers: ModifierKeys = ModifierKeys.none;

        export function refresh(evt: IModifierEvent) {
            if (evt.shiftKey)
                modifiers |= ModifierKeys.shift;
            else
                modifiers &= ~ModifierKeys.shift;
            if (evt.ctrlKey)
                modifiers |= ModifierKeys.control;
            else
                modifiers &= ~ModifierKeys.control;
            if (evt.altKey)
                modifiers |= ModifierKeys.alt;
            else
                modifiers &= ~ModifierKeys.alt;
        }

        export function hasControl() {
            return (modifiers & ModifierKeys.control) === ModifierKeys.control;
        }

        export function hasAlt() {
            return (modifiers & ModifierKeys.alt) === ModifierKeys.alt;
        }

        export function hasShift() {
            return (modifiers & ModifierKeys.shift) === ModifierKeys.shift;
        }
    }
}