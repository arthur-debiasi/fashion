import type { Cache, Key, State } from "../types.d.ts";
export declare const noop: () => void;
export declare const UNDEFINED: undefined;
export declare const OBJECT: ObjectConstructor;
export declare const isUndefined: (v: any) => v is undefined;
export declare const isFunction: <
  T extends (...args: any[]) => any = (...args: any[]) => any,
>(v: unknown) => v is T;
export declare const mergeObjects: (a: any, b?: any) => any;
export declare const isWindowDefined: boolean;
export declare const isDocumentDefined: boolean;
export declare const hasRequestAnimationFrame: () => boolean;
export declare const createCacheHelper: <Data = any, T = State<Data, any>>(
  cache: Cache,
  key: Key,
) => readonly [
  () => T,
  (info: T) => void,
  (key: string, callback: (current: any, prev: any) => void) => () => void,
];
