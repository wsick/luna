declare namespace tiny.key {
    class KeyInterop implements IKeyInterop {
        private $handlers;
        attach(): IKeyInterop;
        handle(handlers: IKeyInteropHandlers): IKeyInterop;
        unhandle(): IKeyInterop;
        protected $handlePress(evt: any): boolean;
        protected $handleDown(evt: any): boolean;
        isPreventable(args: KeyEventArgs): boolean;
        createPressArgs(e: any): IKeyEventArgs;
        createDownArgs(e: any): IKeyEventArgs;
    }
}
declare namespace tiny.key {
    enum Key {
        none = 0,
        back = 1,
        tab = 2,
        enter = 3,
        shift = 4,
        ctrl = 5,
        alt = 6,
        capsLock = 7,
        escape = 8,
        space = 9,
        pageUp = 10,
        pageDown = 11,
        end = 12,
        home = 13,
        left = 14,
        up = 15,
        right = 16,
        down = 17,
        insert = 18,
        delete = 19,
        d0 = 20,
        d1 = 21,
        d2 = 22,
        d3 = 23,
        d4 = 24,
        d5 = 25,
        d6 = 26,
        d7 = 27,
        d8 = 28,
        d9 = 29,
        a = 30,
        b = 31,
        c = 32,
        d = 33,
        e = 34,
        f = 35,
        g = 36,
        h = 37,
        i = 38,
        j = 39,
        k = 40,
        l = 41,
        m = 42,
        n = 43,
        o = 44,
        p = 45,
        q = 46,
        r = 47,
        s = 48,
        t = 49,
        u = 50,
        v = 51,
        w = 52,
        x = 53,
        y = 54,
        z = 55,
        f1 = 56,
        f2 = 57,
        f3 = 58,
        f4 = 59,
        f5 = 60,
        f6 = 61,
        f7 = 62,
        f8 = 63,
        f9 = 64,
        f10 = 65,
        f11 = 66,
        f12 = 67,
        numPad0 = 68,
        numPad1 = 69,
        numPad2 = 70,
        numPad3 = 71,
        numPad4 = 72,
        numPad5 = 73,
        numPad6 = 74,
        numPad7 = 75,
        numPad8 = 76,
        numPad9 = 77,
        multiply = 78,
        add = 79,
        subtract = 80,
        decimal = 81,
        divide = 82,
        unknown = 255,
    }
}
declare namespace tiny.key {
    class IEKeyInterop extends KeyInterop {
        createPressArgs(e: any): IKeyEventArgs;
        createDownArgs(e: any): IKeyEventArgs;
    }
}
declare namespace tiny.key {
    class NetscapeKeyInterop extends KeyInterop {
        createPressArgs(e: any): IKeyEventArgs;
        createDownArgs(e: any): IKeyEventArgs;
        isPreventable(args: KeyEventArgs): boolean;
    }
}
declare namespace tiny.mouse {
    class MouseInterop implements IMouseInterop {
        private $canvasOffset;
        private $isContextMenuDisabled;
        private $handlers;
        attach(canvas: HTMLCanvasElement): IMouseInterop;
        handle(handlers: IMouseInteropHandlers): IMouseInterop;
        unhandle(): IMouseInterop;
        isLeftButton(button: number): boolean;
        isRightButton(button: number): boolean;
        disableNextContextMenu(): void;
        protected calcOffset(canvas: HTMLCanvasElement): IPoint;
        protected getMousePosition(evt: any): IPoint;
        private handleContextMenu(evt);
        private handleButtonPress(evt);
        private handleButtonRelease(evt);
        private handleOut(evt);
        private handleMove(evt);
        private handleWheel(evt);
    }
}
declare namespace tiny.mouse {
    class IEMouseInterop extends MouseInterop {
        private $stopIEContextMenu;
        disableNextContextMenu(): void;
        attach(canvas: HTMLCanvasElement): IMouseInterop;
        private handleIEContextMenu(evt);
    }
}
declare namespace tiny.mouse {
    class NetscapeMouseInterop extends MouseInterop {
        isRightButton(button: number): boolean;
    }
}
declare namespace tiny.touch {
    class TouchInterop implements ITouchInterop {
        private $canvasOffset;
        protected $handlers: ITouchInteropHandlers;
        protected $active: ITouchDevice[];
        offsetX: number;
        offsetY: number;
        attach(canvas: HTMLCanvasElement): ITouchInterop;
        handle(handlers: ITouchInteropHandlers): ITouchInterop;
        unhandle(): ITouchInterop;
        private calcOffset(canvas);
        protected findTouch(identifier: number): ITouchDevice;
        protected removeTouches(touches: ITouchDevice[]): void;
    }
}
declare namespace tiny.touch {
    class FakeTouchInterop implements ITouchInterop {
        attach(canvas: HTMLCanvasElement): ITouchInterop;
        handle(handlers: ITouchInteropHandlers): ITouchInterop;
        unhandle(): ITouchInterop;
    }
}
declare namespace tiny.touch {
    class PointerTouchInterop extends TouchInterop {
        attach(canvas: HTMLCanvasElement): ITouchInterop;
        private handlePointerDown(e);
        private handlePointerUp(e);
        private handlePointerMove(e);
        private handlePointerEnter(e);
        private handlePointerLeave(e);
        protected getDevice(e: MSPointerEvent): ITouchDevice;
        private createDevice(e);
    }
}
declare namespace tiny.touch {
    class NonPointerTouchInterop extends TouchInterop {
        attach(canvas: HTMLCanvasElement): ITouchInterop;
        protected handleTouchStart(e: TouchEvent): void;
        protected handleTouchEnd(e: TouchEvent): void;
        protected handleTouchMove(e: TouchEvent): void;
        protected handleTouchEnter(e: TouchEvent): void;
        protected handleTouchLeave(e: TouchEvent): void;
        protected touchArrayFromList(list: TouchList): ITouchDevice[];
        protected getDevice(t: Touch): ITouchDevice;
        protected createDevice(t: Touch): ITouchDevice;
    }
}
declare namespace tiny {
    import IMouseInterop = tiny.mouse.IMouseInterop;
    import IKeyInterop = tiny.key.IKeyInterop;
    import ITouchInterop = tiny.touch.ITouchInterop;
    class InputManager {
        mouse: IMouseInterop;
        key: IKeyInterop;
        touch: ITouchInterop;
        constructor(canvas: HTMLCanvasElement);
        protected determineMouse(): IMouseInterop;
        protected determineKey(): IKeyInterop;
        protected determineTouch(): touch.ITouchInterop;
    }
}
declare namespace tiny {
    interface IPoint {
        x: number;
        y: number;
    }
}
declare namespace tiny.key {
    function keyFromBrowserCode(code: number): Key;
}
declare namespace tiny.key {
    interface IKeyInterop {
        attach(canvas: HTMLCanvasElement): IKeyInterop;
        handle(handlers: IKeyInteropHandlers): IKeyInterop;
        unhandle(): IKeyInterop;
    }
    interface IKeyInteropHandlers {
        down(args: IKeyEventArgs): boolean;
        up(args: IKeyEventArgs): boolean;
    }
}
declare namespace tiny.key {
    enum ModifierKeys {
        none = 1,
        alt = 2,
        control = 4,
        shift = 8,
        windows = 16,
        apple = 32,
    }
    namespace keyboard {
        interface IModifierEvent {
            shiftKey: boolean;
            ctrlKey: boolean;
            altKey: boolean;
        }
        var modifiers: ModifierKeys;
        function refresh(evt: IModifierEvent): void;
        function hasControl(): boolean;
        function hasAlt(): boolean;
        function hasShift(): boolean;
    }
}
declare namespace tiny.key {
    interface IKeyModifiers {
        shift: boolean;
        ctrl: boolean;
        alt: boolean;
    }
    interface IKeyEventArgs {
        modifiers: IKeyModifiers;
        platformKeyCode: number;
        key: Key;
        char: string;
    }
    class KeyEventArgs implements IKeyEventArgs {
        modifiers: IKeyModifiers;
        platformKeyCode: number;
        key: Key;
        char: string;
        constructor(modifiers: IKeyModifiers, keyCode: number, key: Key, c?: string);
    }
}
declare namespace tiny.mouse {
    interface IMouseInterop {
        attach(canvas: HTMLCanvasElement): IMouseInterop;
        handle(handlers: IMouseInteropHandlers): IMouseInterop;
        unhandle(): IMouseInterop;
    }
    interface IMouseInteropHandlers {
        press(button: number, pos: IPoint): boolean;
        release(button: number, pos: IPoint): any;
        leave(pos: IPoint): any;
        move(pos: IPoint): any;
        wheel(pos: IPoint, delta: number): any;
    }
}
interface Touch {
    radiusX: number;
    radiusY: number;
    rotationAngle: number;
    force: number;
}
interface TouchList {
    identifiedTouch(identifier: number): Touch;
}
interface TouchEvent extends UIEvent {
    initTouchEvent(type: string, canBubble: boolean, cancelable: boolean, view: any, detail: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, touches: TouchList, targetTouches: TouchList, changedTouches: TouchList): any;
}
declare namespace tiny.touch {
    interface ITouchDevice {
        identifier: number;
        getPosition(): IPoint;
        force: number;
    }
}
declare namespace tiny.touch {
    interface ITouchInterop {
        attach(canvas: HTMLCanvasElement): ITouchInterop;
        handle(handlers: ITouchInteropHandlers): ITouchInterop;
        unhandle(): ITouchInterop;
    }
    interface ITouchInteropHandlers {
        down(touches: ITouchDevice[]): any;
        up(touches: ITouchDevice[]): any;
        move(touches: ITouchDevice[]): any;
        enter(touches: ITouchDevice[]): any;
        leave(touches: ITouchDevice[]): any;
    }
}
