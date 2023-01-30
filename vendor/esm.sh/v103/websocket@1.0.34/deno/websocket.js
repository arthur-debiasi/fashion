/* esm.sh - esbuild bundle(websocket@1.0.34) deno production */
import __es5_ext_global$ from "/v103/es5-ext@0.10.62/deno/global.js";
var w = Object.create;
var l = Object.defineProperty;
var v = Object.getOwnPropertyDescriptor;
var k = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf, y = Object.prototype.hasOwnProperty;
var C =
  ((e) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(e, { get: (t, i) => (typeof require < "u" ? require : t)[i] })
      : e)(function (e) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw new Error('Dynamic require of "' + e + '" is not supported');
    });
var s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var S = (e, t, i, c) => {
  if (t && typeof t == "object" || typeof t == "function") {
    for (let r of k(t)) {
      !y.call(e, r) && r !== i && l(e, r, {
        get: () => t[r],
        enumerable: !(c = v(t, r)) || c.enumerable,
      });
    }
  }
  return e;
};
var W = (
  e,
  t,
  i,
) => (i = e != null ? w(m(e)) : {},
  S(
    t || !e || !e.__esModule
      ? l(i, "default", { value: e, enumerable: !0 })
      : i,
    e,
  ));
var a = s((q, _) => {
  _.exports = {
    name: "websocket",
    description:
      "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
    keywords: [
      "websocket",
      "websockets",
      "socket",
      "networking",
      "comet",
      "push",
      "RFC-6455",
      "realtime",
      "server",
      "client",
    ],
    author:
      "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
    contributors: [
      "I\xF1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)",
    ],
    version: "1.0.34",
    repository: {
      type: "git",
      url: "https://github.com/theturtle32/WebSocket-Node.git",
    },
    homepage: "https://github.com/theturtle32/WebSocket-Node",
    engines: { node: ">=4.0.0" },
    dependencies: {
      bufferutil: "^4.0.1",
      debug: "^2.2.0",
      "es5-ext": "^0.10.50",
      "typedarray-to-buffer": "^3.1.5",
      "utf-8-validate": "^5.0.2",
      yaeti: "^0.0.6",
    },
    devDependencies: {
      "buffer-equal": "^1.0.0",
      gulp: "^4.0.2",
      "gulp-jshint": "^2.0.4",
      "jshint-stylish": "^2.2.1",
      jshint: "^2.0.0",
      tape: "^4.9.1",
    },
    config: { verbose: !1 },
    scripts: { test: "tape test/unit/*.js", gulp: "gulp" },
    main: "index",
    directories: { lib: "./lib" },
    browser: "lib/browser.js",
    license: "Apache-2.0",
  };
});
var b = s((E, u) => {
  u.exports = a().version;
});
var p = s((O, f) => {
  var o;
  if (typeof globalThis == "object") o = globalThis;
  else {try {
      o = __es5_ext_global$;
    } catch {
    } finally {
      if (!o && typeof document < "u" && (o = window), !o) {
        throw new Error("Could not determine global this");
      }
    }}
  var n = o.WebSocket || o.MozWebSocket, N = b();
  function d(e, t) {
    var i;
    return t ? i = new n(e, t) : i = new n(e), i;
  }
  n && ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (e) {
    Object.defineProperty(d, e, {
      get: function () {
        return n[e];
      },
    });
  });
  f.exports = { w3cwebsocket: n ? d : null, version: N };
});
var g = W(p()),
  {
    server: T,
    client: I,
    router: L,
    frame: z,
    request: B,
    connection: D,
    w3cwebsocket: F,
    deprecation: G,
    version: M,
  } = g,
  { default: h, ...j } = g,
  P = h !== void 0 ? h : j;
export {
  B as request,
  D as connection,
  F as w3cwebsocket,
  G as deprecation,
  I as client,
  L as router,
  M as version,
  P as default,
  T as server,
  z as frame,
};
