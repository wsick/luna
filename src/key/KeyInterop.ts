namespace tiny.key {
    // Good Resource: http://unixpapa.com/js/key.html

    export interface IKeyInterop {
        attach(canvas: HTMLCanvasElement);
        handle(handlers: IKeyInteropHandlers);
        unhandle();
    }

    export interface IKeyInteropHandlers {
        // Down Handler:
        //   returning true will capture event and prevent bubbling
        down(args: IKeyEventArgs): boolean;
        // Up Handler:
        //   returning true will capture event and prevent bubbling
        up(args: IKeyEventArgs): boolean;
    }

    var NO_HANDLERS: IKeyInteropHandlers = {
        down(args: IKeyEventArgs): boolean {
            return false;
        },
        up(args: IKeyEventArgs): boolean {
            return false;
        },
    };

    export class KeyInterop implements IKeyInterop {
        private $handlers: IKeyInteropHandlers = NO_HANDLERS;

        attach() {
            document.onkeypress = (e) => this.$handlePress(e);
            document.onkeydown = (e) => this.$handleDown(e);
        }

        handle(handlers: IKeyInteropHandlers) {
            this.$handlers = handlers;
        }

        unhandle() {
            this.$handlers = NO_HANDLERS;
        }

        protected $handlePress(evt) {
            keyboard.refresh(evt);
            var args = this.createPressArgs(evt);
            if (!args)
                return;
            if (this.$handlers.down(args)) {
                evt.preventDefault();
                return false;
            }
        }

        protected $handleDown(evt) {
            keyboard.refresh(evt);
            var args = this.createDownArgs(evt);
            if (!args)
                return;
            if (this.$handlers.down(args) && this.isPreventable(args)) {
                evt.preventDefault();
                return false;
            }
        }

        isPreventable(args: KeyEventArgs): boolean {
            return true;
        }

        createPressArgs(e): IKeyEventArgs {
            return undefined;
        }

        createDownArgs(e): IKeyEventArgs {
            return undefined;
        }
    }
}