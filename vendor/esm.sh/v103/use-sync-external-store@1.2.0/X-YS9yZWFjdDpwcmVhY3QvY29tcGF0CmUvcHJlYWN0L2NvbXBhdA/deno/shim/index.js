/* esm.sh - esbuild bundle(use-sync-external-store@1.2.0/shim/index) deno production */
import __use_sync_external_store_cjs_use_sync_external_store_shim_production_min_js$ from "/v103/use-sync-external-store@1.2.0/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/deno/cjs/use-sync-external-store-shim.production.min.js";
var i = Object.create;
var u = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var _ = Object.getOwnPropertyNames;
var a = Object.getPrototypeOf, f = Object.prototype.hasOwnProperty;
var m =
  ((e) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(e, { get: (t, r) => (typeof require < "u" ? require : t)[r] })
      : e)(function (e) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw new Error('Dynamic require of "' + e + '" is not supported');
    });
var x = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var E = (e, t, r, o) => {
  if (t && typeof t == "object" || typeof t == "function") {
    for (let s of _(t)) {
      !f.call(e, s) && s !== r && u(e, s, {
        get: () => t[s],
        enumerable: !(o = p(t, s)) || o.enumerable,
      });
    }
  }
  return e;
};
var j = (
  e,
  t,
  r,
) => (r = e != null ? i(a(e)) : {},
  E(
    t || !e || !e.__esModule
      ? u(r, "default", { value: e, enumerable: !0 })
      : r,
    e,
  ));
var d = x((y, n) => {
  "use strict";
  n.exports =
    __use_sync_external_store_cjs_use_sync_external_store_shim_production_min_js$;
});
var c = j(d()),
  { useSyncExternalStore: N } = c,
  { default: l, ...q } = c,
  S = l !== void 0 ? l : q;
export { N as useSyncExternalStore, S as default };
