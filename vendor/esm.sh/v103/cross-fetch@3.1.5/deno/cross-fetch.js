/* esm.sh - esbuild bundle(cross-fetch@3.1.5) deno production */
var z = Object.create;
var R = Object.defineProperty;
var G = Object.getOwnPropertyDescriptor;
var X = Object.getOwnPropertyNames;
var J = Object.getPrototypeOf, K = Object.prototype.hasOwnProperty;
var $ = (o, h) => () => (h || o((h = { exports: {} }).exports, h), h.exports);
var Q = (o, h, n, f) => {
  if (h && typeof h == "object" || typeof h == "function") {
    for (let d of X(h)) {
      !K.call(o, d) && d !== n && R(o, d, {
        get: () => h[d],
        enumerable: !(f = G(h, d)) || f.enumerable,
      });
    }
  }
  return o;
};
var W = (
  o,
  h,
  n,
) => (n = o != null ? z(J(o)) : {},
  Q(
    h || !o || !o.__esModule
      ? R(n, "default", { value: o, enumerable: !0 })
      : n,
    o,
  ));
var U = $((l, P) => {
  var D = typeof self < "u" ? self : l,
    v = function () {
      function o() {
        this.fetch = !1, this.DOMException = D.DOMException;
      }
      return o.prototype = D, new o();
    }();
  (function (o) {
    var h = function (n) {
      var f = {
        searchParams: "URLSearchParams" in o,
        iterable: "Symbol" in o && "iterator" in Symbol,
        blob: "FileReader" in o && "Blob" in o && function () {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in o,
        arrayBuffer: "ArrayBuffer" in o,
      };
      function d(e) {
        return e && DataView.prototype.isPrototypeOf(e);
      }
      if (f.arrayBuffer) {
        var j = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          I = ArrayBuffer.isView || function (e) {
            return e && j.indexOf(Object.prototype.toString.call(e)) > -1;
          };
      }
      function b(e) {
        if (
          typeof e != "string" && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)
        ) throw new TypeError("Invalid character in header field name");
        return e.toLowerCase();
      }
      function g(e) {
        return typeof e != "string" && (e = String(e)), e;
      }
      function _(e) {
        var t = {
          next: function () {
            var r = e.shift();
            return { done: r === void 0, value: r };
          },
        };
        return f.iterable && (t[Symbol.iterator] = function () {
          return t;
        }),
          t;
      }
      function s(e) {
        this.map = {},
          e instanceof s
            ? e.forEach(function (t, r) {
              this.append(r, t);
            }, this)
            : Array.isArray(e)
            ? e.forEach(function (t) {
              this.append(t[0], t[1]);
            }, this)
            : e && Object.getOwnPropertyNames(e).forEach(function (t) {
              this.append(t, e[t]);
            }, this);
      }
      s.prototype.append = function (e, t) {
        e = b(e), t = g(t);
        var r = this.map[e];
        this.map[e] = r ? r + ", " + t : t;
      },
        s.prototype.delete = function (e) {
          delete this.map[b(e)];
        },
        s.prototype.get = function (e) {
          return e = b(e), this.has(e) ? this.map[e] : null;
        },
        s.prototype.has = function (e) {
          return this.map.hasOwnProperty(b(e));
        },
        s.prototype.set = function (e, t) {
          this.map[b(e)] = g(t);
        },
        s.prototype.forEach = function (e, t) {
          for (var r in this.map) {
            this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
          }
        },
        s.prototype.keys = function () {
          var e = [];
          return this.forEach(function (t, r) {
            e.push(r);
          }),
            _(e);
        },
        s.prototype.values = function () {
          var e = [];
          return this.forEach(function (t) {
            e.push(t);
          }),
            _(e);
        },
        s.prototype.entries = function () {
          var e = [];
          return this.forEach(function (t, r) {
            e.push([r, t]);
          }),
            _(e);
        },
        f.iterable && (s.prototype[Symbol.iterator] = s.prototype.entries);
      function E(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0;
      }
      function T(e) {
        return new Promise(function (t, r) {
          e.onload = function () {
            t(e.result);
          },
            e.onerror = function () {
              r(e.error);
            };
        });
      }
      function H(e) {
        var t = new FileReader(), r = T(t);
        return t.readAsArrayBuffer(e), r;
      }
      function M(e) {
        var t = new FileReader(), r = T(t);
        return t.readAsText(e), r;
      }
      function q(e) {
        for (
          var t = new Uint8Array(e), r = new Array(t.length), u = 0;
          u < t.length;
          u++
        ) r[u] = String.fromCharCode(t[u]);
        return r.join("");
      }
      function O(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }
      function x() {
        return this.bodyUsed = !1,
          this._initBody = function (e) {
            this._bodyInit = e,
              e
                ? typeof e == "string"
                  ? this._bodyText = e
                  : f.blob && Blob.prototype.isPrototypeOf(e)
                  ? this._bodyBlob = e
                  : f.formData && FormData.prototype.isPrototypeOf(e)
                  ? this._bodyFormData = e
                  : f.searchParams && URLSearchParams.prototype.isPrototypeOf(e)
                  ? this._bodyText = e.toString()
                  : f.arrayBuffer && f.blob && d(e)
                  ? (this._bodyArrayBuffer = O(e.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer]))
                  : f.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(e) || I(e))
                  ? this._bodyArrayBuffer = O(e)
                  : this._bodyText = e = Object.prototype.toString.call(e)
                : this._bodyText = "",
              this.headers.get("content-type") || (typeof e == "string"
                ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set("content-type", this._bodyBlob.type)
                : f.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(e) &&
                  this.headers.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8",
                  ));
          },
          f.blob && (this.blob = function () {
            var e = E(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            }
            if (this._bodyFormData) {
              throw new Error("could not read FormData body as blob");
            }
            return Promise.resolve(new Blob([this._bodyText]));
          },
            this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? E(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(H);
            }),
          this.text = function () {
            var e = E(this);
            if (e) return e;
            if (this._bodyBlob) return M(this._bodyBlob);
            if (this._bodyArrayBuffer) {
              return Promise.resolve(q(this._bodyArrayBuffer));
            }
            if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            }
            return Promise.resolve(this._bodyText);
          },
          f.formData && (this.formData = function () {
            return this.text().then(k);
          }),
          this.json = function () {
            return this.text().then(JSON.parse);
          },
          this;
      }
      var L = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function C(e) {
        var t = e.toUpperCase();
        return L.indexOf(t) > -1 ? t : e;
      }
      function y(e, t) {
        t = t || {};
        var r = t.body;
        if (e instanceof y) {
          if (e.bodyUsed) throw new TypeError("Already read");
          this.url = e.url,
            this.credentials = e.credentials,
            t.headers || (this.headers = new s(e.headers)),
            this.method = e.method,
            this.mode = e.mode,
            this.signal = e.signal,
            !r && e._bodyInit != null && (r = e._bodyInit, e.bodyUsed = !0);
        } else this.url = String(e);
        if (
          this.credentials = t.credentials || this.credentials || "same-origin",
            (t.headers || !this.headers) && (this.headers = new s(t.headers)),
            this.method = C(t.method || this.method || "GET"),
            this.mode = t.mode || this.mode || null,
            this.signal = t.signal || this.signal,
            this.referrer = null,
            (this.method === "GET" || this.method === "HEAD") && r
        ) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(r);
      }
      y.prototype.clone = function () {
        return new y(this, { body: this._bodyInit });
      };
      function k(e) {
        var t = new FormData();
        return e.trim().split("&").forEach(function (r) {
          if (r) {
            var u = r.split("="),
              a = u.shift().replace(/\+/g, " "),
              i = u.join("=").replace(/\+/g, " ");
            t.append(decodeURIComponent(a), decodeURIComponent(i));
          }
        }),
          t;
      }
      function N(e) {
        var t = new s(), r = e.replace(/\r?\n[\t ]+/g, " ");
        return r.split(/\r?\n/).forEach(function (u) {
          var a = u.split(":"), i = a.shift().trim();
          if (i) {
            var w = a.join(":").trim();
            t.append(i, w);
          }
        }),
          t;
      }
      x.call(y.prototype);
      function c(e, t) {
        t || (t = {}),
          this.type = "default",
          this.status = t.status === void 0 ? 200 : t.status,
          this.ok = this.status >= 200 && this.status < 300,
          this.statusText = "statusText" in t ? t.statusText : "OK",
          this.headers = new s(t.headers),
          this.url = t.url || "",
          this._initBody(e);
      }
      x.call(c.prototype),
        c.prototype.clone = function () {
          return new c(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new s(this.headers),
            url: this.url,
          });
        },
        c.error = function () {
          var e = new c(null, { status: 0, statusText: "" });
          return e.type = "error", e;
        };
      var V = [301, 302, 303, 307, 308];
      c.redirect = function (e, t) {
        if (V.indexOf(t) === -1) throw new RangeError("Invalid status code");
        return new c(null, { status: t, headers: { location: e } });
      }, n.DOMException = o.DOMException;
      try {
        new n.DOMException();
      } catch {
        n.DOMException = function (t, r) {
          this.message = t, this.name = r;
          var u = Error(t);
          this.stack = u.stack;
        },
          n.DOMException.prototype = Object.create(Error.prototype),
          n.DOMException.prototype.constructor = n.DOMException;
      }
      function A(e, t) {
        return new Promise(function (r, u) {
          var a = new y(e, t);
          if (a.signal && a.signal.aborted) {
            return u(new n.DOMException("Aborted", "AbortError"));
          }
          var i = new XMLHttpRequest();
          function w() {
            i.abort();
          }
          i.onload = function () {
            var m = {
              status: i.status,
              statusText: i.statusText,
              headers: N(i.getAllResponseHeaders() || ""),
            };
            m.url = "responseURL" in i
              ? i.responseURL
              : m.headers.get("X-Request-URL");
            var B = "response" in i ? i.response : i.responseText;
            r(new c(B, m));
          },
            i.onerror = function () {
              u(new TypeError("Network request failed"));
            },
            i.ontimeout = function () {
              u(new TypeError("Network request failed"));
            },
            i.onabort = function () {
              u(new n.DOMException("Aborted", "AbortError"));
            },
            i.open(a.method, a.url, !0),
            a.credentials === "include"
              ? i.withCredentials = !0
              : a.credentials === "omit" && (i.withCredentials = !1),
            "responseType" in i && f.blob && (i.responseType = "blob"),
            a.headers.forEach(function (m, B) {
              i.setRequestHeader(B, m);
            }),
            a.signal &&
            (a.signal.addEventListener("abort", w),
              i.onreadystatechange = function () {
                i.readyState === 4 && a.signal.removeEventListener("abort", w);
              }),
            i.send(typeof a._bodyInit > "u" ? null : a._bodyInit);
        });
      }
      return A.polyfill = !0,
        o.fetch || (o.fetch = A, o.Headers = s, o.Request = y, o.Response = c),
        n.Headers = s,
        n.Request = y,
        n.Response = c,
        n.fetch = A,
        Object.defineProperty(n, "__esModule", { value: !0 }),
        n;
    }({});
  })(v);
  v.fetch.ponyfill = !0;
  delete v.fetch.polyfill;
  var p = v;
  l = p.fetch;
  l.default = p.fetch;
  l.fetch = p.fetch;
  l.Headers = p.Headers;
  l.Request = p.Request;
  l.Response = p.Response;
  P.exports = l;
});
var F = W(U()),
  { fetch: ee, Headers: te, Request: re, Response: oe } = F,
  { default: S, ...Y } = F,
  ie = S !== void 0 ? S : Y;
export {
  ee as fetch,
  ie as default,
  oe as Response,
  re as Request,
  te as Headers,
};
