/* esm.sh - esbuild bundle(preact@10.11.0/jsx-runtime) deno production */
import { options as l } from "/stable/preact@10.11.0/deno/preact.js";
import { Fragment as c } from "/stable/preact@10.11.0/deno/preact.js";
var a = 0;
function p(n, s, t, f, u) {
  var r, o, _ = {};
  for (o in s) o == "ref" ? r = s[o] : _[o] = s[o];
  var e = {
    type: n,
    props: _,
    key: t,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --a,
    __source: u,
    __self: f,
  };
  if (typeof n == "function" && (r = n.defaultProps)) {
    for (o in r) _[o] === void 0 && (_[o] = r[o]);
  }
  return l.vnode && l.vnode(e), e;
}
export { c as Fragment, p as jsx, p as jsxDEV, p as jsxs };
