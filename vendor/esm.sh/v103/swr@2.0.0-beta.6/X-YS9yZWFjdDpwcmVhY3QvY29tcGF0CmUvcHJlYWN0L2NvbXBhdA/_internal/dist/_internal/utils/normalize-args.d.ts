import type { Fetcher, Key, SWRConfiguration } from "../types.d.ts";
export declare const normalize: <KeyType_1 = Key, Data = any>(
  args: [KeyType_1] | [
    KeyType_1,
    | ((args: string) => import("../types.d.ts").FetcherResponse<Data>)
    | ((
      args: [any, ...unknown[]],
    ) => import("../types.d.ts").FetcherResponse<Data>)
    | ((
      args: readonly [any, ...unknown[]],
    ) => import("../types.d.ts").FetcherResponse<Data>)
    | ((
      args: Record<any, any>,
    ) => import("../types.d.ts").FetcherResponse<Data>)
    | ((
      args:
        | string
        | [any, ...unknown[]]
        | readonly [any, ...unknown[]]
        | Record<any, any>,
    ) => import("../types.d.ts").FetcherResponse<Data>)
    | null,
  ] | [
    KeyType_1,
    Partial<
      import("../types.d.ts").PublicConfiguration<
        any,
        any,
        import("../types.d.ts").BareFetcher<any>
      >
    > | undefined,
  ] | [
    KeyType_1,
    | ((args: string) => import("../types.d.ts").FetcherResponse<Data>)
    | ((
      args: [any, ...unknown[]],
    ) => import("../types.d.ts").FetcherResponse<Data>)
    | ((
      args: readonly [any, ...unknown[]],
    ) => import("../types.d.ts").FetcherResponse<Data>)
    | ((
      args: Record<any, any>,
    ) => import("../types.d.ts").FetcherResponse<Data>)
    | ((
      args:
        | string
        | [any, ...unknown[]]
        | readonly [any, ...unknown[]]
        | Record<any, any>,
    ) => import("../types.d.ts").FetcherResponse<Data>)
    | null,
    Partial<
      import("../types.d.ts").PublicConfiguration<
        any,
        any,
        import("../types.d.ts").BareFetcher<any>
      >
    > | undefined,
  ],
) => [
  KeyType_1,
  | ((args: string) => import("../types.d.ts").FetcherResponse<Data>)
  | ((
    args: [any, ...unknown[]],
  ) => import("../types.d.ts").FetcherResponse<Data>)
  | ((
    args: readonly [any, ...unknown[]],
  ) => import("../types.d.ts").FetcherResponse<Data>)
  | ((args: Record<any, any>) => import("../types.d.ts").FetcherResponse<Data>)
  | ((
    args:
      | string
      | [any, ...unknown[]]
      | readonly [any, ...unknown[]]
      | Record<any, any>,
  ) => import("../types.d.ts").FetcherResponse<Data>)
  | null,
  Partial<
    Partial<
      import("../types.d.ts").PublicConfiguration<
        Data,
        any,
        import("../types.d.ts").BareFetcher<any>
      >
    >
  >,
];
