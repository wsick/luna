namespace tiny.mouse {
    export class IEMouseInterop extends MouseInterop {
        private $stopIEContextMenu: boolean = false;

        disableNextContextMenu() {
            super.disableNextContextMenu();
            this.$stopIEContextMenu = true;
        }

        attach(canvas: HTMLCanvasElement): this {
            canvas.oncontextmenu = (e) => this.handleIEContextMenu(e);
            return super.attach(canvas);
        }

        private handleIEContextMenu(evt) {
            if (this.$stopIEContextMenu) {
                this.$stopIEContextMenu = false;
                return false;
            }
            return true;
        }
    }
}