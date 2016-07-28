namespace tiny.touch {
    export interface ITouchDevice {
        identifier: number;
        getPosition(): IPoint;
        force: number;
    }
}