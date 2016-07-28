namespace tiny.mouse {
    export class IEMouseInterop extends MouseInterop {
        private $stopIEContextMenu: boolean = false;

        disableNextContextMenu() {
            super.disableNextContextMenu();
            this.$stopIEContextMenu = true;
        }

        attach(canvas: HTMLCanvasElement) {
            super.attach(canvas);
            canvas.oncontextmenu = (e) => this.handleIEContextMenu(e);
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