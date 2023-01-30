import type * as revalidateEvents from "./constants.d.ts";
import type { defaultConfig } from "./utils/config.d.ts";
export declare type GlobalState = [
  Record<string, RevalidateCallback[]>,
  Record<string, [number, number]>,
  Record<string, [any, number]>,
  Record<string, FetcherResponse<any>>,
  ScopedMutator,
  (key: string, value: any, prev: any) => void,
  (key: string, callback: (current: any, prev: any) => void) => () => void,
];
export declare type FetcherResponse<Data = unknown> = Data | Promise<Data>;
export declare type BareFetcher<Data = unknown> = (
  ...args: any[]
) => FetcherResponse<Data>;
export declare type Fetcher<Data = unknown, SWRKey extends Key = Key> =
  SWRKey extends () => infer Arg | null | undefined | false
    ? (args: Arg) => FetcherResponse<Data>
    : SWRKey extends null | undefined | false ? never
    : SWRKey extends infer Arg ? (args: Arg) => FetcherResponse<Data>
    : never;
export interface InternalConfiguration<T extends Cache = Cache> {
  cache: T;
  mutate: ScopedMutator;
}
export interface PublicConfiguration<
  Data = any,
  Error = any,
  Fn extends Fetcher = BareFetcher,
> {
  errorRetryInterval: number;
  errorRetryCount?: number;
  loadingTimeout: number;
  focusThrottleInterval: number;
  dedupingInterval: number;
  refreshInterval?: number | ((latestData: Data | undefined) => number);
  refreshWhenHidden?: boolean;
  refreshWhenOffline?: boolean;
  revalidateOnFocus: boolean;
  revalidateOnReconnect: boolean;
  revalidateOnMount?: boolean;
  revalidateIfStale: boolean;
  shouldRetryOnError: boolean | ((err: Error) => boolean);
  keepPreviousData?: boolean;
  suspense?: boolean;
  fallbackData?: Data;
  fetcher?: Fn;
  use?: Middleware[];
  fallback: {
    [key: string]: any;
  };
  isPaused: () => boolean;
  onLoadingSlow: (
    key: string,
    config: Readonly<PublicConfiguration<Data, Error, Fn>>,
  ) => void;
  onSuccess: (
    data: Data,
    key: string,
    config: Readonly<PublicConfiguration<Data, Error, Fn>>,
  ) => void;
  onError: (
    err: Error,
    key: string,
    config: Readonly<PublicConfiguration<Data, Error, Fn>>,
  ) => void;
  onErrorRetry: (
    err: Error,
    key: string,
    config: Readonly<PublicConfiguration<Data, Error, Fn>>,
    revalidate: Revalidator,
    revalidateOpts: Required<RevalidatorOptions>,
  ) => void;
  onDiscarded: (key: string) => void;
  compare: (a: Data | undefined, b: Data | undefined) => boolean;
  isOnline: () => boolean;
  isVisible: () => boolean;
}
export declare type FullConfiguration<T extends Cache = Cache> =
  & InternalConfiguration<T>
  & PublicConfiguration;
export declare type ProviderConfiguration = {
  initFocus: (callback: () => void) => (() => void) | void;
  initReconnect: (callback: () => void) => (() => void) | void;
};
export interface SWRHook {
  <Data = any, Error = any, SWRKey extends Key = null>(
    key: SWRKey,
  ): SWRResponse<Data, Error>;
  <Data = any, Error = any, SWRKey extends Key = null>(
    key: SWRKey,
    fetcher: Fetcher<Data, SWRKey> | null,
  ): SWRResponse<Data, Error>;
  <Data = any, Error = any, SWRKey extends Key = null>(
    key: SWRKey,
    config: SWRConfiguration<Data, Error, Fetcher<Data, SWRKey>> | undefined,
  ): SWRResponse<Data, Error>;
  <Data = any, Error = any, SWRKey extends Key = null>(
    key: SWRKey,
    fetcher: Fetcher<Data, SWRKey> | null,
    config: SWRConfiguration<Data, Error, Fetcher<Data, SWRKey>> | undefined,
  ): SWRResponse<Data, Error>;
  <Data = any, Error = any>(key: Key): SWRResponse<Data, Error>;
  <Data = any, Error = any>(
    key: Key,
    fetcher: BareFetcher<Data> | null,
  ): SWRResponse<Data, Error>;
  <Data = any, Error = any>(
    key: Key,
    config: SWRConfiguration<Data, Error, BareFetcher<Data>> | undefined,
  ): SWRResponse<Data, Error>;
  <Data = any, Error = any>(
    key: Key,
    fetcher: BareFetcher<Data> | null,
    config: SWRConfiguration<Data, Error, BareFetcher<Data>> | undefined,
  ): SWRResponse<Data, Error>;
}
export declare type Middleware = (
  useSWRNext: SWRHook,
) => <Data = any, Error = any>(
  key: Key,
  fetcher: BareFetcher<Data> | null,
  config:
    & typeof defaultConfig
    & SWRConfiguration<Data, Error, BareFetcher<Data>>,
) => SWRResponse<Data, Error>;
declare type ArgumentsTuple =
  | [any, ...unknown[]]
  | readonly [any, ...unknown[]];
export declare type Arguments =
  | string
  | ArgumentsTuple
  | Record<any, any>
  | null
  | undefined
  | false;
export declare type Key = Arguments | (() => Arguments);
export declare type MutatorCallback<Data = any> = (
  currentData?: Data,
) => Promise<undefined | Data> | undefined | Data;
export declare type MutatorOptions<Data = any> = {
  revalidate?: boolean;
  populateCache?:
    | boolean
    | ((result: any, currentData: Data | undefined) => Data);
  optimisticData?: Data | ((currentData?: Data) => Data);
  rollbackOnError?: boolean;
};
export declare type MutatorConfig = {
  revalidate?: boolean;
  populateCache?: boolean;
};
export declare type Broadcaster<Data = any, Error = any> = (
  cache: Cache<Data>,
  key: string,
  data: Data,
  error?: Error,
  isValidating?: boolean,
  revalidate?: boolean,
  populateCache?: boolean,
) => Promise<Data>;
export declare type State<Data = any, Error = any> = {
  data?: Data;
  error?: Error;
  isValidating?: boolean;
  isLoading?: boolean;
};
export declare type MutatorFn<Data = any> = (
  cache: Cache,
  key: Key,
  data?: Data | Promise<Data> | MutatorCallback<Data>,
  opts?: boolean | MutatorOptions<Data>,
) => Promise<Data | undefined>;
export declare type MutatorWrapper<Fn> = Fn extends
  (...args: [...infer Parameters]) => infer Result
  ? Parameters[3] extends boolean ? Result
  : Parameters[3] extends Required<Pick<MutatorOptions, "populateCache">>
    ? Parameters[3]["populateCache"] extends false ? never : Result
  : Result
  : never;
export declare type Mutator<Data = any> = MutatorWrapper<MutatorFn<Data>>;
export interface ScopedMutator<Data = any> {
  <T = Data>(
    matcher: (key?: Arguments) => boolean,
    data?: T | Promise<T> | MutatorCallback<T>,
    opts?: boolean | MutatorOptions<Data>,
  ): Promise<Array<T | undefined>>;
  <T = Data>(
    key: Arguments,
    data?: T | Promise<T> | MutatorCallback<T>,
    opts?: boolean | MutatorOptions<Data>,
  ): Promise<T | undefined>;
}
export declare type KeyedMutator<Data> = (
  data?: Data | Promise<Data> | MutatorCallback<Data>,
  opts?: boolean | MutatorOptions<Data>,
) => Promise<Data | undefined>;
export declare type SWRConfiguration<
  Data = any,
  Error = any,
  Fn extends BareFetcher<any> = BareFetcher<any>,
> = Partial<PublicConfiguration<Data, Error, Fn>>;
export interface SWRResponse<Data = any, Error = any> {
  data: Data | undefined;
  error: Error | undefined;
  mutate: KeyedMutator<Data>;
  isValidating: boolean;
  isLoading: boolean;
}
export declare type KeyLoader<Args extends Arguments = Arguments> =
  | ((index: number, previousPageData: any | null) => Args)
  | null;
export interface RevalidatorOptions {
  retryCount?: number;
  dedupe?: boolean;
}
export declare type Revalidator = (
  revalidateOpts?: RevalidatorOptions,
) => Promise<boolean> | void;
export declare type RevalidateEvent =
  | typeof revalidateEvents.FOCUS_EVENT
  | typeof revalidateEvents.RECONNECT_EVENT
  | typeof revalidateEvents.MUTATE_EVENT;
declare type RevalidateCallbackReturnType = {
  [revalidateEvents.FOCUS_EVENT]: void;
  [revalidateEvents.RECONNECT_EVENT]: void;
  [revalidateEvents.MUTATE_EVENT]: Promise<boolean>;
};
export declare type RevalidateCallback = <K extends RevalidateEvent>(
  type: K,
) => RevalidateCallbackReturnType[K];
export interface Cache<Data = any> {
  keys(): IterableIterator<string>;
  get(key: Key): State<Data> | undefined;
  set(key: Key, value: State<Data>): void;
  delete(key: Key): void;
}
export interface StateDependencies {
  data?: boolean;
  error?: boolean;
  isValidating?: boolean;
  isLoading?: boolean;
}
export {};
