/// <reference types="react" />
import * as Floating from './floating';
export type UseFloatingFn = typeof Floating.useFloating;
type InferFloatingProps = UseFloatingFn extends (props: infer Props) => any ? Props : never;
export type UseFloatingProps = InferFloatingProps & {
    sameScrollView?: boolean;
};
type InferUseFloatingReturn = ReturnType<UseFloatingFn>;
export type UseFloatingReturn = InferUseFloatingReturn & {
    context?: any;
    getFloatingProps?: (props: {
        ref: any;
        [key: string]: any;
    }) => any;
    getReferenceProps?: (props: {
        ref: any;
        [key: string]: any;
    }) => any;
};
export declare const FloatingOverrideContext: import("react").Context<typeof Floating.useFloating | null>;
export declare const useFloating: (props: UseFloatingProps) => UseFloatingReturn;
export {};
//# sourceMappingURL=useFloating.d.ts.map