namespace tiny.key {
    var udkie = [];
    udkie[41] = 48;
    udkie[33] = 49;
    udkie[64] = 50;
    udkie[35] = 51;
    udkie[36] = 52;
    udkie[37] = 53;
    udkie[94] = 54;
    udkie[38] = 55;
    udkie[42] = 56;
    udkie[34] = Key.unknown;

    export class IEKeyInterop extends KeyInterop {
        createPressArgs(e): IKeyEventArgs {
            if (!e["char"])
                return;

            var modifiers: IKeyModifiers = {
                shift: e.shiftKey,
                ctrl: e.ctrlKey,
                alt: e.altKey
            };

            var keyCode = e.keyCode;
            var unshifted = udkie[keyCode];
            if (unshifted)
                keyCode = unshifted;

            var args = new KeyEventArgs(modifiers, keyCode, keyFromBrowserCode(keyCode), e["char"]);
            if (args.key === Key.unknown && e.key) {
                args.char = e.key;
                var code = args.char.toUpperCase().charCodeAt(0);
                args.key = keyFromBrowserCode(code);
                if (args.key == null)
                    args.key = Key.unknown;
            }
            return args;
        }

        createDownArgs(e): IKeyEventArgs {
            //NOTE: Ctrl+[key] does not flow through press
            if (e["char"] && e.keyCode !== 8 && e.keyCode !== 9 && !e.ctrlKey)
                return;
            var modifiers: IKeyModifiers = {
                shift: e.shiftKey,
                ctrl: e.ctrlKey,
                alt: e.altKey
            };
            return new KeyEventArgs(modifiers, e.keyCode, keyFromBrowserCode(e.keyCode));
        }
    }
}