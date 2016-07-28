/// <reference path="Key" />
/// <reference path="KeyInterop" />

namespace tiny.key {
    var sknet = [];
    sknet[8] = Key.back;
    sknet[9] = Key.tab;
    sknet[20] = Key.capsLock;
    sknet[27] = Key.escape;
    sknet[33] = Key.pageUp;
    sknet[34] = Key.pageDown;
    sknet[35] = Key.end;
    sknet[36] = Key.home;
    sknet[37] = Key.left;
    sknet[38] = Key.up;
    sknet[39] = Key.right;
    sknet[40] = Key.down;
    sknet[45] = Key.insert;
    sknet[46] = Key.delete;

    var udknet = [];
    udknet[41] = 48;
    udknet[33] = 49;
    udknet[64] = 50;
    udknet[35] = 51;
    udknet[36] = 52;
    udknet[37] = 53;
    udknet[94] = 54;
    udknet[38] = 55;
    udknet[42] = 56;
    udknet[34] = Key.unknown;

    export class NetscapeKeyInterop extends KeyInterop {
        createPressArgs(e): IKeyEventArgs {
            var modifiers: IKeyModifiers = {
                shift: e.shiftKey,
                ctrl: e.ctrlKey,
                alt: e.altKey
            };

            var keyCode = e.keyCode;
            var unshifted = udknet[keyCode];
            if (unshifted)
                keyCode = unshifted;

            var args = new KeyEventArgs(modifiers, keyCode, keyFromBrowserCode(keyCode), String.fromCharCode(e.which || e.keyCode));
            if (args.char === "'")
                args.key = Key.unknown;
            return args;
        }

        createDownArgs(e): IKeyEventArgs {
            //only do for special keys
            //NOTE: Ctrl+[key] does not flow through press
            if (sknet[e.keyCode] === undefined && !e.ctrlKey)
                return null;

            var modifiers: IKeyModifiers = {
                shift: e.shiftKey,
                ctrl: e.ctrlKey,
                alt: e.altKey
            };
            return new KeyEventArgs(modifiers, e.keyCode, keyFromBrowserCode(e.keyCode));
        }

        isPreventable(args: KeyEventArgs): boolean {
            //TODO: Handle Mac keys
            if (args.modifiers.ctrl && args.key === Key.v) {
                //Ctrl+V - don't prevent paste
                return false;
            }
            return true;
        }
    }
}