declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el?: HTMLElement;
    smooth?: boolean;
    multiplier?: number;
    class?: string;
    lerp?: number;
    reloadOnContextChange?: boolean;
    touchMultiplier?: number;
    smoothMobile?: boolean;
    smartphone?: {
      smooth?: boolean;
      multiplier?: number;
      breakpoint?: number;
    };
    tablet?: {
      smooth?: boolean;
      multiplier?: number;
      breakpoint?: number;
    };
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
    update(): void;
  }
} 