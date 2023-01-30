/// <reference path="https://esm.sh/v103/@types/react@18.0.26/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/index.d.ts" />
import { defaultConfig } from "https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts";
import type {
  Fetcher,
  FullConfiguration,
  Key,
  SWRConfiguration,
  SWRHook,
  SWRResponse,
} from "https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts";
export declare const useSWRHandler: <Data = any, Error_1 = any>(
  _key: Key,
  fetcher:
    | ((
      args: string,
    ) =>
      import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").FetcherResponse<
        Data
      >)
    | ((
      args: [any, ...unknown[]],
    ) =>
      import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").FetcherResponse<
        Data
      >)
    | ((
      args: readonly [any, ...unknown[]],
    ) =>
      import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").FetcherResponse<
        Data
      >)
    | ((
      args: Record<any, any>,
    ) =>
      import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").FetcherResponse<
        Data
      >)
    | ((
      args:
        | string
        | [any, ...unknown[]]
        | readonly [any, ...unknown[]]
        | Record<any, any>,
    ) =>
      import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").FetcherResponse<
        Data
      >)
    | null,
  config:
    & import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").InternalConfiguration<
      import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").Cache<
        any
      >
    >
    & import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").PublicConfiguration<
      any,
      any,
      import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").BareFetcher<
        unknown
      >
    >
    & Partial<
      import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").PublicConfiguration<
        Data,
        Error_1,
        import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").BareFetcher<
          any
        >
      >
    >,
) => SWRResponse<Data, Error_1>;
export declare const SWRConfig:
  & import("https://esm.sh/v103/@types/react@18.0.26/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/index.d.ts").FC<
    import("https://esm.sh/v103/@types/react@18.0.26/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/index.d.ts").PropsWithChildren<
      {
        value?:
          | (
            & Partial<
              import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").PublicConfiguration<
                any,
                any,
                import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").BareFetcher<
                  any
                >
              >
            >
            & Partial<
              import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").ProviderConfiguration
            >
            & {
              provider?:
                | ((
                  cache: Readonly<
                    import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").Cache<
                      any
                    >
                  >,
                ) =>
                  import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").Cache<
                    any
                  >)
                | undefined;
            }
          )
          | ((
            parentConfig?:
              | (
                & Partial<
                  import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").PublicConfiguration<
                    any,
                    any,
                    import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").BareFetcher<
                      any
                    >
                  >
                >
                & Partial<
                  import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").ProviderConfiguration
                >
                & {
                  provider?:
                    | ((
                      cache: Readonly<
                        import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").Cache<
                          any
                        >
                      >,
                    ) =>
                      import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").Cache<
                        any
                      >)
                    | undefined;
                }
              )
              | undefined,
          ) =>
            & Partial<
              import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").PublicConfiguration<
                any,
                any,
                import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").BareFetcher<
                  any
                >
              >
            >
            & Partial<
              import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").ProviderConfiguration
            >
            & {
              provider?:
                | ((
                  cache: Readonly<
                    import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").Cache<
                      any
                    >
                  >,
                ) =>
                  import("https://esm.sh/v103/swr@2.0.0-beta.6/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/_internal/dist/_internal/index.d.ts").Cache<
                    any
                  >)
                | undefined;
            })
          | undefined;
      }
    >
  >
  & {
    defaultValue: FullConfiguration;
  };
export declare const unstable_serialize: (key: Key) => string;
declare const _default: SWRHook;
export default _default;
