/* esm.sh - esbuild bundle(preact@10.11.0/devtools) deno production */
import {
  Component as a,
  Fragment as _,
  options as o,
} from "/stable/preact@10.11.0/deno/preact.js";
function r(n, t) {
  return o.__a && o.__a(t), n;
}
typeof document < "u" && window.__PREACT_DEVTOOLS__ &&
  window.__PREACT_DEVTOOLS__.attachPreact("10.11.0", o, {
    Fragment: _,
    Component: a,
  });
export { r as addHookName };
