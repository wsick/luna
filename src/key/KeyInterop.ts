namespace tiny.key {
    // Good Resource: http://unixpapa.com/js/key.html

    export interface IKeyInterop {
        attach(canvas: HTMLCanvasElement): this;
        handle(handlers: IKeyInteropHandlers): this;
        unhandle(): this;
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

        attach(): this {
            document.onkeypress = (e) => this.$handlePress(e);
            document.onkeydown = (e) => this.$handleDown(e);
            return this;
        }

        handle(handlers: IKeyInteropHandlers): this {
            this.$handlers = handlers;
            return this;
        }

        unhandle(): this {
            this.$handlers = NO_HANDLERS;
            return this;
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