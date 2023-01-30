/* esm.sh - esbuild bundle(@supabase/gotrue-js@1.24.0) deno production */
import { Buffer as __Buffer$ } from "https://deno.land/std@0.173.0/node/buffer.ts";
var U = "1.24.0";
var C = "http://localhost:9999";
var $ = { "X-Client-Info": `gotrue-js/${U}` },
  w = 10,
  m = { ERROR_MESSAGE: "Request Failed", MAX_RETRIES: 10, RETRY_INTERVAL: 2 },
  k = "supabase.auth.token",
  D = {
    name: "sb",
    lifetime: 60 * 60 * 8,
    domain: "",
    path: "/",
    sameSite: "lax",
  };
var T = function (o, r, e, t) {
    function i(n) {
      return n instanceof e ? n : new e(function (s) {
        s(n);
      });
    }
    return new (e || (e = Promise))(function (n, s) {
      function a(u) {
        try {
          l(t.next(u));
        } catch (h) {
          s(h);
        }
      }
      function c(u) {
        try {
          l(t.throw(u));
        } catch (h) {
          s(h);
        }
      }
      function l(u) {
        u.done ? n(u.value) : i(u.value).then(a, c);
      }
      l((t = t.apply(o, r || [])).next());
    });
  },
  B = (o) =>
    o.msg || o.message || o.error_description || o.error || JSON.stringify(o),
  Y = (o, r) => {
    if (!o?.status) return r({ message: m.ERROR_MESSAGE });
    if (typeof o.json != "function") return r(o);
    o.json().then((e) => r({ message: B(e), status: o?.status || 500 }));
  },
  K = (o, r, e) => {
    let t = { method: o, headers: r?.headers || {} };
    return o === "GET" ||
      (t.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8",
      }, r?.headers),
        t.body = JSON.stringify(e)),
      t;
  };
function E(o, r, e, t, i) {
  return T(this, void 0, void 0, function* () {
    return new Promise((n, s) => {
      o(e, K(r, t, i)).then((a) => {
        if (!a.ok) throw a;
        return t?.noResolveJson ? n : a.json();
      }).then((a) => n(a)).catch((a) => Y(a, s));
    });
  });
}
function b(o, r, e) {
  return T(this, void 0, void 0, function* () {
    return E(o, "GET", r, e);
  });
}
function f(o, r, e, t) {
  return T(this, void 0, void 0, function* () {
    return E(o, "POST", r, t, e);
  });
}
function A(o, r, e, t) {
  return T(this, void 0, void 0, function* () {
    return E(o, "PUT", r, t, e);
  });
}
function j(o, r, e, t) {
  return T(this, void 0, void 0, function* () {
    return E(o, "DELETE", r, t, e);
  });
}
function q(o, r, e) {
  let t = e || {},
    i = encodeURIComponent,
    n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  if (typeof i != "function") throw new TypeError("option encode is invalid");
  if (!n.test(o)) throw new TypeError("argument name is invalid");
  let s = i(r);
  if (s && !n.test(s)) throw new TypeError("argument val is invalid");
  let a = o + "=" + s;
  if (t.maxAge != null) {
    let c = t.maxAge - 0;
    if (isNaN(c) || !isFinite(c)) {
      throw new TypeError("option maxAge is invalid");
    }
    a += "; Max-Age=" + Math.floor(c);
  }
  if (t.domain) {
    if (!n.test(t.domain)) throw new TypeError("option domain is invalid");
    a += "; Domain=" + t.domain;
  }
  if (t.path) {
    if (!n.test(t.path)) throw new TypeError("option path is invalid");
    a += "; Path=" + t.path;
  }
  if (t.expires) {
    if (typeof t.expires.toUTCString != "function") {
      throw new TypeError("option expires is invalid");
    }
    a += "; Expires=" + t.expires.toUTCString();
  }
  if (
    t.httpOnly && (a += "; HttpOnly"), t.secure && (a += "; Secure"), t.sameSite
  ) {
    switch (
      typeof t.sameSite == "string" ? t.sameSite.toLowerCase() : t.sameSite
    ) {
      case "lax":
        a += "; SameSite=Lax";
        break;
      case "strict":
        a += "; SameSite=Strict";
        break;
      case "none":
        a += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return a;
}
function V(o) {
  if (!o || !o.headers || !o.headers.host) {
    throw new Error('The "host" request header is not available');
  }
  let r = o.headers.host.indexOf(":") > -1 && o.headers.host.split(":")[0] ||
    o.headers.host;
  return !(["localhost", "127.0.0.1"].indexOf(r) > -1 || r.endsWith(".local"));
}
function X(o, r) {
  var e, t, i;
  return q(o.name, o.value, {
    maxAge: o.maxAge,
    expires: new Date(Date.now() + o.maxAge * 1e3),
    httpOnly: !0,
    secure: r,
    path: (e = o.path) !== null && e !== void 0 ? e : "/",
    domain: (t = o.domain) !== null && t !== void 0 ? t : "",
    sameSite: (i = o.sameSite) !== null && i !== void 0 ? i : "lax",
  });
}
function O(o, r, e) {
  let t = e.map((n) => X(n, V(o))), i = r.getHeader("Set-Cookie");
  return i &&
    (i instanceof Array
      ? Array.prototype.push.apply(t, i)
      : typeof i == "string" && t.push(i)),
    t;
}
function x(o, r, e) {
  r.setHeader("Set-Cookie", O(o, r, e));
}
var R = function (o, r, e, t) {
  function i(n) {
    return n instanceof e ? n : new e(function (s) {
      s(n);
    });
  }
  return new (e || (e = Promise))(function (n, s) {
    function a(u) {
      try {
        l(t.next(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        l(t.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function l(u) {
      u.done ? n(u.value) : i(u.value).then(a, c);
    }
    l((t = t.apply(o, r || [])).next());
  });
};
function y(o) {
  return Math.round(Date.now() / 1e3) + o;
}
function P() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (o) {
    let r = Math.random() * 16 | 0;
    return (o == "x" ? r : r & 3 | 8).toString(16);
  });
}
var _ = () => typeof document < "u";
function p(o, r) {
  var e;
  r ||
  (r = ((e = window?.location) === null || e === void 0 ? void 0 : e.href) ||
    ""), o = o.replace(/[\[\]]/g, "\\$&");
  let t = new RegExp("[?&#]" + o + "(=([^&#]*)|&|#|$)"), i = t.exec(r);
  return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null;
}
var M = (o) => {
    let r;
    return o
      ? r = o
      : typeof fetch > "u"
      ? r = (...e) =>
        R(void 0, void 0, void 0, function* () {
          return yield (yield import(
            "/v103/cross-fetch@3.1.5/deno/cross-fetch.js"
          )).fetch(...e);
        })
      : r = fetch,
      (...e) => r(...e);
  },
  G = (o, r, e) =>
    R(void 0, void 0, void 0, function* () {
      _() && (yield o?.setItem(r, JSON.stringify(e)));
    }),
  L = (o, r) =>
    R(void 0, void 0, void 0, function* () {
      let e = _() && (yield o?.getItem(r));
      if (!e) return null;
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    }),
  F = (o, r) => {
    let e = _() && o?.getItem(r);
    if (!e || typeof e != "string") return null;
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  },
  W = (o, r) =>
    R(void 0, void 0, void 0, function* () {
      _() && (yield o?.removeItem(r));
    });
var d = function (o, r, e, t) {
    function i(n) {
      return n instanceof e ? n : new e(function (s) {
        s(n);
      });
    }
    return new (e || (e = Promise))(function (n, s) {
      function a(u) {
        try {
          l(t.next(u));
        } catch (h) {
          s(h);
        }
      }
      function c(u) {
        try {
          l(t.throw(u));
        } catch (h) {
          s(h);
        }
      }
      function l(u) {
        u.done ? n(u.value) : i(u.value).then(a, c);
      }
      l((t = t.apply(o, r || [])).next());
    });
  },
  g = class {
    constructor({ url: r = "", headers: e = {}, cookieOptions: t, fetch: i }) {
      this.url = r,
        this.headers = e,
        this.cookieOptions = Object.assign(Object.assign({}, D), t),
        this.fetch = M(i);
    }
    _createRequestHeaders(r) {
      let e = Object.assign({}, this.headers);
      return e.Authorization = `Bearer ${r}`, e;
    }
    cookieName() {
      var r;
      return (r = this.cookieOptions.name) !== null && r !== void 0 ? r : "";
    }
    getUrlForProvider(r, e) {
      let t = [`provider=${encodeURIComponent(r)}`];
      if (
        e?.redirectTo &&
        t.push(`redirect_to=${encodeURIComponent(e.redirectTo)}`),
          e?.scopes && t.push(`scopes=${encodeURIComponent(e.scopes)}`),
          e?.queryParams
      ) {
        let i = new URLSearchParams(e.queryParams);
        t.push(`${i}`);
      }
      return `${this.url}/authorize?${t.join("&")}`;
    }
    signUpWithEmail(r, e, t = {}) {
      return d(this, void 0, void 0, function* () {
        try {
          let i = Object.assign({}, this.headers), n = "";
          t.redirectTo &&
            (n = "?redirect_to=" + encodeURIComponent(t.redirectTo));
          let s = yield f(this.fetch, `${this.url}/signup${n}`, {
              email: r,
              password: e,
              data: t.data,
              gotrue_meta_security: { captcha_token: t.captchaToken },
            }, { headers: i }),
            a = Object.assign({}, s);
          return a.expires_in && (a.expires_at = y(s.expires_in)),
            { data: a, error: null };
        } catch (i) {
          return { data: null, error: i };
        }
      });
    }
    signInWithEmail(r, e, t = {}) {
      return d(this, void 0, void 0, function* () {
        try {
          let i = Object.assign({}, this.headers), n = "?grant_type=password";
          t.redirectTo &&
            (n += "&redirect_to=" + encodeURIComponent(t.redirectTo));
          let s = yield f(this.fetch, `${this.url}/token${n}`, {
              email: r,
              password: e,
              gotrue_meta_security: { captcha_token: t.captchaToken },
            }, { headers: i }),
            a = Object.assign({}, s);
          return a.expires_in && (a.expires_at = y(s.expires_in)),
            { data: a, error: null };
        } catch (i) {
          return { data: null, error: i };
        }
      });
    }
    signUpWithPhone(r, e, t = {}) {
      return d(this, void 0, void 0, function* () {
        try {
          let i = Object.assign({}, this.headers),
            n = yield f(this.fetch, `${this.url}/signup`, {
              phone: r,
              password: e,
              data: t.data,
              gotrue_meta_security: { captcha_token: t.captchaToken },
            }, { headers: i }),
            s = Object.assign({}, n);
          return s.expires_in && (s.expires_at = y(n.expires_in)),
            { data: s, error: null };
        } catch (i) {
          return { data: null, error: i };
        }
      });
    }
    signInWithPhone(r, e, t = {}) {
      return d(this, void 0, void 0, function* () {
        try {
          let i = Object.assign({}, this.headers),
            n = "?grant_type=password",
            s = yield f(this.fetch, `${this.url}/token${n}`, {
              phone: r,
              password: e,
              gotrue_meta_security: { captcha_token: t.captchaToken },
            }, { headers: i }),
            a = Object.assign({}, s);
          return a.expires_in && (a.expires_at = y(s.expires_in)),
            { data: a, error: null };
        } catch (i) {
          return { data: null, error: i };
        }
      });
    }
    signInWithOpenIDConnect(
      { id_token: r, nonce: e, client_id: t, issuer: i, provider: n },
    ) {
      return d(this, void 0, void 0, function* () {
        try {
          let s = Object.assign({}, this.headers),
            a = "?grant_type=id_token",
            c = yield f(this.fetch, `${this.url}/token${a}`, {
              id_token: r,
              nonce: e,
              client_id: t,
              issuer: i,
              provider: n,
            }, { headers: s }),
            l = Object.assign({}, c);
          return l.expires_in && (l.expires_at = y(c.expires_in)),
            { data: l, error: null };
        } catch (s) {
          return { data: null, error: s };
        }
      });
    }
    sendMagicLinkEmail(r, e = {}) {
      var t;
      return d(this, void 0, void 0, function* () {
        try {
          let i = Object.assign({}, this.headers), n = "";
          e.redirectTo &&
            (n += "?redirect_to=" + encodeURIComponent(e.redirectTo));
          let s = (t = e.shouldCreateUser) !== null && t !== void 0 ? t : !0;
          return {
            data: yield f(this.fetch, `${this.url}/otp${n}`, {
              email: r,
              create_user: s,
              gotrue_meta_security: { captcha_token: e.captchaToken },
            }, { headers: i }),
            error: null,
          };
        } catch (i) {
          return { data: null, error: i };
        }
      });
    }
    sendMobileOTP(r, e = {}) {
      var t;
      return d(this, void 0, void 0, function* () {
        try {
          let i = (t = e.shouldCreateUser) !== null && t !== void 0 ? t : !0,
            n = Object.assign({}, this.headers);
          return {
            data: yield f(this.fetch, `${this.url}/otp`, {
              phone: r,
              create_user: i,
              gotrue_meta_security: { captcha_token: e.captchaToken },
            }, { headers: n }),
            error: null,
          };
        } catch (i) {
          return { data: null, error: i };
        }
      });
    }
    signOut(r) {
      return d(this, void 0, void 0, function* () {
        try {
          return yield f(this.fetch, `${this.url}/logout`, {}, {
            headers: this._createRequestHeaders(r),
            noResolveJson: !0,
          }),
            { error: null };
        } catch (e) {
          return { error: e };
        }
      });
    }
    verifyMobileOTP(r, e, t = {}) {
      return d(this, void 0, void 0, function* () {
        try {
          let i = Object.assign({}, this.headers),
            n = yield f(this.fetch, `${this.url}/verify`, {
              phone: r,
              token: e,
              type: "sms",
              redirect_to: t.redirectTo,
            }, { headers: i }),
            s = Object.assign({}, n);
          return s.expires_in && (s.expires_at = y(n.expires_in)),
            { data: s, error: null };
        } catch (i) {
          return { data: null, error: i };
        }
      });
    }
    verifyOTP({ email: r, phone: e, token: t, type: i = "sms" }, n = {}) {
      return d(this, void 0, void 0, function* () {
        try {
          let s = Object.assign({}, this.headers),
            a = yield f(this.fetch, `${this.url}/verify`, {
              email: r,
              phone: e,
              token: t,
              type: i,
              redirect_to: n.redirectTo,
            }, { headers: s }),
            c = Object.assign({}, a);
          return c.expires_in && (c.expires_at = y(a.expires_in)),
            { data: c, error: null };
        } catch (s) {
          return { data: null, error: s };
        }
      });
    }
    inviteUserByEmail(r, e = {}) {
      return d(this, void 0, void 0, function* () {
        try {
          let t = Object.assign({}, this.headers), i = "";
          return e.redirectTo &&
            (i += "?redirect_to=" + encodeURIComponent(e.redirectTo)),
            {
              data: yield f(this.fetch, `${this.url}/invite${i}`, {
                email: r,
                data: e.data,
              }, { headers: t }),
              error: null,
            };
        } catch (t) {
          return { data: null, error: t };
        }
      });
    }
    resetPasswordForEmail(r, e = {}) {
      return d(this, void 0, void 0, function* () {
        try {
          let t = Object.assign({}, this.headers), i = "";
          return e.redirectTo &&
            (i += "?redirect_to=" + encodeURIComponent(e.redirectTo)),
            {
              data: yield f(this.fetch, `${this.url}/recover${i}`, {
                email: r,
                gotrue_meta_security: { captcha_token: e.captchaToken },
              }, { headers: t }),
              error: null,
            };
        } catch (t) {
          return { data: null, error: t };
        }
      });
    }
    refreshAccessToken(r) {
      return d(this, void 0, void 0, function* () {
        try {
          let e = yield f(
              this.fetch,
              `${this.url}/token?grant_type=refresh_token`,
              { refresh_token: r },
              { headers: this.headers },
            ),
            t = Object.assign({}, e);
          return t.expires_in && (t.expires_at = y(e.expires_in)),
            { data: t, error: null };
        } catch (e) {
          return { data: null, error: e };
        }
      });
    }
    setAuthCookie(r, e) {
      r.method !== "POST" &&
        (e.setHeader("Allow", "POST"), e.status(405).end("Method Not Allowed"));
      let { event: t, session: i } = r.body;
      if (!t) throw new Error("Auth event missing!");
      if (t === "SIGNED_IN") {
        if (!i) throw new Error("Auth session missing!");
        x(
          r,
          e,
          [{ key: "access-token", value: i.access_token }, {
            key: "refresh-token",
            value: i.refresh_token,
          }].map((n) => {
            var s;
            return {
              name: `${this.cookieName()}-${n.key}`,
              value: n.value,
              domain: this.cookieOptions.domain,
              maxAge: (s = this.cookieOptions.lifetime) !== null && s !== void 0
                ? s
                : 0,
              path: this.cookieOptions.path,
              sameSite: this.cookieOptions.sameSite,
            };
          }),
        );
      }
      t === "SIGNED_OUT" &&
      x(
        r,
        e,
        ["access-token", "refresh-token"].map((n) => ({
          name: `${this.cookieName()}-${n}`,
          value: "",
          maxAge: -1,
        })),
      ), e.status(200).json({});
    }
    deleteAuthCookie(r, e, { redirectTo: t = "/" }) {
      return x(
        r,
        e,
        ["access-token", "refresh-token"].map((i) => ({
          name: `${this.cookieName()}-${i}`,
          value: "",
          maxAge: -1,
        })),
      ),
        e.redirect(307, t);
    }
    getAuthCookieString(r, e) {
      r.method !== "POST" &&
        (e.setHeader("Allow", "POST"), e.status(405).end("Method Not Allowed"));
      let { event: t, session: i } = r.body;
      if (!t) throw new Error("Auth event missing!");
      if (t === "SIGNED_IN") {
        if (!i) throw new Error("Auth session missing!");
        return O(
          r,
          e,
          [{ key: "access-token", value: i.access_token }, {
            key: "refresh-token",
            value: i.refresh_token,
          }].map((n) => {
            var s;
            return {
              name: `${this.cookieName()}-${n.key}`,
              value: n.value,
              domain: this.cookieOptions.domain,
              maxAge: (s = this.cookieOptions.lifetime) !== null && s !== void 0
                ? s
                : 0,
              path: this.cookieOptions.path,
              sameSite: this.cookieOptions.sameSite,
            };
          }),
        );
      }
      return t === "SIGNED_OUT"
        ? O(
          r,
          e,
          ["access-token", "refresh-token"].map((n) => ({
            name: `${this.cookieName()}-${n}`,
            value: "",
            maxAge: -1,
          })),
        )
        : e.getHeader("Set-Cookie");
    }
    generateLink(r, e, t = {}) {
      return d(this, void 0, void 0, function* () {
        try {
          return {
            data: yield f(this.fetch, `${this.url}/admin/generate_link`, {
              type: r,
              email: e,
              password: t.password,
              data: t.data,
              redirect_to: t.redirectTo,
            }, { headers: this.headers }),
            error: null,
          };
        } catch (i) {
          return { data: null, error: i };
        }
      });
    }
    createUser(r) {
      return d(this, void 0, void 0, function* () {
        try {
          let e = yield f(this.fetch, `${this.url}/admin/users`, r, {
            headers: this.headers,
          });
          return { user: e, data: e, error: null };
        } catch (e) {
          return { user: null, data: null, error: e };
        }
      });
    }
    listUsers() {
      return d(this, void 0, void 0, function* () {
        try {
          return {
            data: (yield b(this.fetch, `${this.url}/admin/users`, {
              headers: this.headers,
            })).users,
            error: null,
          };
        } catch (r) {
          return { data: null, error: r };
        }
      });
    }
    getUserById(r) {
      return d(this, void 0, void 0, function* () {
        try {
          return {
            data: yield b(this.fetch, `${this.url}/admin/users/${r}`, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (e) {
          return { data: null, error: e };
        }
      });
    }
    getUserByCookie(r, e) {
      return d(this, void 0, void 0, function* () {
        try {
          if (!r.cookies) {
            throw new Error(
              "Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!",
            );
          }
          let t = r.cookies[`${this.cookieName()}-access-token`],
            i = r.cookies[`${this.cookieName()}-refresh-token`];
          if (!t) throw new Error("No cookie found!");
          let { user: n, error: s } = yield this.getUser(t);
          if (s) {
            if (!i) throw new Error("No refresh_token cookie found!");
            if (!e) {
              throw new Error(
                "You need to pass the res object to automatically refresh the session!",
              );
            }
            let { data: a, error: c } = yield this.refreshAccessToken(i);
            if (c) throw c;
            if (a) {
              return x(
                r,
                e,
                [{ key: "access-token", value: a.access_token }, {
                  key: "refresh-token",
                  value: a.refresh_token,
                }].map((l) => {
                  var u;
                  return {
                    name: `${this.cookieName()}-${l.key}`,
                    value: l.value,
                    domain: this.cookieOptions.domain,
                    maxAge:
                      (u = this.cookieOptions.lifetime) !== null && u !== void 0
                        ? u
                        : 0,
                    path: this.cookieOptions.path,
                    sameSite: this.cookieOptions.sameSite,
                  };
                }),
              ),
                {
                  token: a.access_token,
                  user: a.user,
                  data: a.user,
                  error: null,
                };
            }
          }
          return { token: t, user: n, data: n, error: null };
        } catch (t) {
          return { token: null, user: null, data: null, error: t };
        }
      });
    }
    updateUserById(r, e) {
      return d(this, void 0, void 0, function* () {
        try {
          let t = yield A(this.fetch, `${this.url}/admin/users/${r}`, e, {
            headers: this.headers,
          });
          return { user: t, data: t, error: null };
        } catch (t) {
          return { user: null, data: null, error: t };
        }
      });
    }
    deleteUser(r) {
      return d(this, void 0, void 0, function* () {
        try {
          let e = yield j(this.fetch, `${this.url}/admin/users/${r}`, {}, {
            headers: this.headers,
          });
          return { user: e, data: e, error: null };
        } catch (e) {
          return { user: null, data: null, error: e };
        }
      });
    }
    getUser(r) {
      return d(this, void 0, void 0, function* () {
        try {
          let e = yield b(this.fetch, `${this.url}/user`, {
            headers: this._createRequestHeaders(r),
          });
          return { user: e, data: e, error: null };
        } catch (e) {
          return { user: null, data: null, error: e };
        }
      });
    }
    updateUser(r, e) {
      return d(this, void 0, void 0, function* () {
        try {
          let t = yield A(this.fetch, `${this.url}/user`, e, {
            headers: this._createRequestHeaders(r),
          });
          return { user: t, data: t, error: null };
        } catch (t) {
          return { user: null, data: null, error: t };
        }
      });
    }
  };
function H() {
  if (typeof globalThis != "object") {
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        __magic__.globalThis = __magic__,
        delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
  }
}
var v = function (o, r, e, t) {
  function i(n) {
    return n instanceof e ? n : new e(function (s) {
      s(n);
    });
  }
  return new (e || (e = Promise))(function (n, s) {
    function a(u) {
      try {
        l(t.next(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        l(t.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function l(u) {
      u.done ? n(u.value) : i(u.value).then(a, c);
    }
    l((t = t.apply(o, r || [])).next());
  });
};
H();
var z = {
    url: C,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    multiTab: !0,
    headers: $,
  },
  Q = (o) => {
    try {
      return atob(o.replace(/[-]/g, "+").replace(/[_]/g, "/"));
    } catch (r) {
      if (r instanceof ReferenceError) {
        return __Buffer$.from(o, "base64")
          .toString("utf-8");
      }
      throw r;
    }
  },
  I = class {
    constructor(r) {
      this.stateChangeEmitters = new Map(), this.networkRetries = 0;
      let e = Object.assign(Object.assign({}, z), r);
      this.currentUser = null,
        this.currentSession = null,
        this.autoRefreshToken = e.autoRefreshToken,
        this.persistSession = e.persistSession,
        this.multiTab = e.multiTab,
        this.localStorage = e.localStorage || globalThis.localStorage,
        this.api = new g({
          url: e.url,
          headers: e.headers,
          cookieOptions: e.cookieOptions,
          fetch: e.fetch,
        }),
        this._recoverSession(),
        this._recoverAndRefresh(),
        this._listenForMultiTabEvents(),
        this._handleVisibilityChange(),
        e.detectSessionInUrl && _() && p("access_token") &&
        this.getSessionFromUrl({ storeSession: !0 }).then(({ error: t }) => {
          if (t) throw new Error("Error getting session from URL.");
        });
    }
    signUp({ email: r, password: e, phone: t }, i = {}) {
      return v(this, void 0, void 0, function* () {
        try {
          this._removeSession();
          let { data: n, error: s } = t && e
            ? yield this.api.signUpWithPhone(t, e, {
              data: i.data,
              captchaToken: i.captchaToken,
            })
            : yield this.api.signUpWithEmail(r, e, {
              redirectTo: i.redirectTo,
              data: i.data,
              captchaToken: i.captchaToken,
            });
          if (s) throw s;
          if (!n) throw "An error occurred on sign up.";
          let a = null, c = null;
          return n.access_token &&
            (a = n,
              c = a.user,
              this._saveSession(a),
              this._notifyAllSubscribers("SIGNED_IN")),
            n.id && (c = n),
            { user: c, session: a, error: null };
        } catch (n) {
          return { user: null, session: null, error: n };
        }
      });
    }
    signIn(
      {
        email: r,
        phone: e,
        password: t,
        refreshToken: i,
        provider: n,
        oidc: s,
      },
      a = {},
    ) {
      return v(this, void 0, void 0, function* () {
        try {
          if (this._removeSession(), r && !t) {
            let { error: c } = yield this.api.sendMagicLinkEmail(r, {
              redirectTo: a.redirectTo,
              shouldCreateUser: a.shouldCreateUser,
              captchaToken: a.captchaToken,
            });
            return { user: null, session: null, error: c };
          }
          if (r && t) {
            return this._handleEmailSignIn(r, t, {
              redirectTo: a.redirectTo,
              captchaToken: a.captchaToken,
            });
          }
          if (e && !t) {
            let { error: c } = yield this.api.sendMobileOTP(e, {
              shouldCreateUser: a.shouldCreateUser,
              captchaToken: a.captchaToken,
            });
            return { user: null, session: null, error: c };
          }
          if (e && t) return this._handlePhoneSignIn(e, t);
          if (i) {
            let { error: c } = yield this._callRefreshToken(i);
            if (c) throw c;
            return {
              user: this.currentUser,
              session: this.currentSession,
              error: null,
            };
          }
          if (n) {
            return this._handleProviderSignIn(n, {
              redirectTo: a.redirectTo,
              scopes: a.scopes,
              queryParams: a.queryParams,
            });
          }
          if (s) return this._handleOpenIDConnectSignIn(s);
          throw new Error(
            "You must provide either an email, phone number, a third-party provider or OpenID Connect.",
          );
        } catch (c) {
          return { user: null, session: null, error: c };
        }
      });
    }
    verifyOTP(r, e = {}) {
      return v(this, void 0, void 0, function* () {
        try {
          this._removeSession();
          let { data: t, error: i } = yield this.api.verifyOTP(r, e);
          if (i) throw i;
          if (!t) throw "An error occurred on token verification.";
          let n = null, s = null;
          return t.access_token &&
            (n = t,
              s = n.user,
              this._saveSession(n),
              this._notifyAllSubscribers("SIGNED_IN")),
            t.id && (s = t),
            { user: s, session: n, error: null };
        } catch (t) {
          return { user: null, session: null, error: t };
        }
      });
    }
    user() {
      return this.currentUser;
    }
    session() {
      return this.currentSession;
    }
    refreshSession() {
      var r;
      return v(this, void 0, void 0, function* () {
        try {
          if (
            !(!((r = this.currentSession) === null || r === void 0) &&
              r.access_token)
          ) throw new Error("Not logged in.");
          let { error: e } = yield this._callRefreshToken();
          if (e) throw e;
          return {
            data: this.currentSession,
            user: this.currentUser,
            error: null,
          };
        } catch (e) {
          return { data: null, user: null, error: e };
        }
      });
    }
    update(r) {
      var e;
      return v(this, void 0, void 0, function* () {
        try {
          if (
            !(!((e = this.currentSession) === null || e === void 0) &&
              e.access_token)
          ) throw new Error("Not logged in.");
          let { user: t, error: i } = yield this.api.updateUser(
            this.currentSession.access_token,
            r,
          );
          if (i) throw i;
          if (!t) throw Error("Invalid user data.");
          let n = Object.assign(Object.assign({}, this.currentSession), {
            user: t,
          });
          return this._saveSession(n),
            this._notifyAllSubscribers("USER_UPDATED"),
            { data: t, user: t, error: null };
        } catch (t) {
          return { data: null, user: null, error: t };
        }
      });
    }
    setSession(r) {
      return v(this, void 0, void 0, function* () {
        let e;
        if (typeof r == "string") {
          let t = r,
            { data: i, error: n } = yield this.api.refreshAccessToken(t);
          if (n) return { session: null, error: n };
          e = i;
        } else {
          let t = Math.round(Date.now() / 1e3),
            { refresh_token: i, access_token: n } = r,
            s = 0,
            a = 0,
            c = n.split(".");
          if (c.length !== 3) {
            throw new Error("access_token is not a proper JWT");
          }
          let l = Q(c[1]), u;
          try {
            u = JSON.parse(l);
          } catch {
            throw new Error(
              "access_token is not a proper JWT, invalid JSON in body",
            );
          }
          if (typeof u == "object" && u && typeof u.exp == "number") {
            s = u.exp, a = t - u.exp;
          } else {throw new Error(
              "access_token is not a proper JWT, missing exp claim",
            );}
          if (t > s) {
            let { data: h, error: S } = yield this.api.refreshAccessToken(i);
            if (S) return { session: null, error: S };
            e = h;
          } else {
            let { user: h, error: S } = yield this.api.getUser(n);
            if (S) throw S;
            e = {
              access_token: n,
              expires_in: a,
              expires_at: s,
              refresh_token: i,
              token_type: "bearer",
              user: h,
            };
          }
        }
        try {
          return this._saveSession(e),
            this._notifyAllSubscribers("SIGNED_IN"),
            { session: e, error: null };
        } catch (t) {
          return { error: t, session: null };
        }
      });
    }
    setAuth(r) {
      return this.currentSession = Object.assign(
        Object.assign({}, this.currentSession),
        { access_token: r, token_type: "bearer", user: this.user() },
      ),
        this._notifyAllSubscribers("TOKEN_REFRESHED"),
        this.currentSession;
    }
    getSessionFromUrl(r) {
      return v(this, void 0, void 0, function* () {
        try {
          if (!_()) throw new Error("No browser detected.");
          let e = p("error_description");
          if (e) throw new Error(e);
          let t = p("provider_token"),
            i = p("provider_refresh_token"),
            n = p("access_token");
          if (!n) throw new Error("No access_token detected.");
          let s = p("expires_in");
          if (!s) throw new Error("No expires_in detected.");
          let a = p("refresh_token");
          if (!a) throw new Error("No refresh_token detected.");
          let c = p("token_type");
          if (!c) throw new Error("No token_type detected.");
          let u = Math.round(Date.now() / 1e3) + parseInt(s),
            { user: h, error: S } = yield this.api.getUser(n);
          if (S) throw S;
          let N = {
            provider_token: t,
            provider_refresh_token: i,
            access_token: n,
            expires_in: parseInt(s),
            expires_at: u,
            refresh_token: a,
            token_type: c,
            user: h,
          };
          if (r?.storeSession) {
            this._saveSession(N);
            let J = p("type");
            this._notifyAllSubscribers("SIGNED_IN"),
              J === "recovery" &&
              this._notifyAllSubscribers("PASSWORD_RECOVERY");
          }
          return window.location.hash = "", { data: N, error: null };
        } catch (e) {
          return { data: null, error: e };
        }
      });
    }
    signOut() {
      var r;
      return v(this, void 0, void 0, function* () {
        let e = (r = this.currentSession) === null || r === void 0
          ? void 0
          : r.access_token;
        if (
          this._removeSession(), this._notifyAllSubscribers("SIGNED_OUT"), e
        ) {
          let { error: t } = yield this.api.signOut(e);
          if (t) return { error: t };
        }
        return { error: null };
      });
    }
    onAuthStateChange(r) {
      try {
        let e = P(),
          t = {
            id: e,
            callback: r,
            unsubscribe: () => {
              this.stateChangeEmitters.delete(e);
            },
          };
        return this.stateChangeEmitters.set(e, t), { data: t, error: null };
      } catch (e) {
        return { data: null, error: e };
      }
    }
    _handleEmailSignIn(r, e, t = {}) {
      var i, n;
      return v(this, void 0, void 0, function* () {
        try {
          let { data: s, error: a } = yield this.api.signInWithEmail(r, e, {
            redirectTo: t.redirectTo,
            captchaToken: t.captchaToken,
          });
          return a || !s
            ? { data: null, user: null, session: null, error: a }
            : ((!((i = s?.user) === null || i === void 0) && i.confirmed_at ||
              !((n = s?.user) === null || n === void 0) &&
                n.email_confirmed_at) &&
              (this._saveSession(s), this._notifyAllSubscribers("SIGNED_IN")),
              { data: s, user: s.user, session: s, error: null });
        } catch (s) {
          return { data: null, user: null, session: null, error: s };
        }
      });
    }
    _handlePhoneSignIn(r, e, t = {}) {
      var i;
      return v(this, void 0, void 0, function* () {
        try {
          let { data: n, error: s } = yield this.api.signInWithPhone(r, e, t);
          return s || !n
            ? { data: null, user: null, session: null, error: s }
            : (!((i = n?.user) === null || i === void 0) &&
              i.phone_confirmed_at &&
              (this._saveSession(n), this._notifyAllSubscribers("SIGNED_IN")),
              { data: n, user: n.user, session: n, error: null });
        } catch (n) {
          return { data: null, user: null, session: null, error: n };
        }
      });
    }
    _handleProviderSignIn(r, e = {}) {
      let t = this.api.getUrlForProvider(r, {
        redirectTo: e.redirectTo,
        scopes: e.scopes,
        queryParams: e.queryParams,
      });
      try {
        return _() && (window.location.href = t), {
          provider: r,
          url: t,
          data: null,
          session: null,
          user: null,
          error: null,
        };
      } catch (i) {
        return t
          ? {
            provider: r,
            url: t,
            data: null,
            session: null,
            user: null,
            error: null,
          }
          : { data: null, user: null, session: null, error: i };
      }
    }
    _handleOpenIDConnectSignIn(
      { id_token: r, nonce: e, client_id: t, issuer: i, provider: n },
    ) {
      return v(this, void 0, void 0, function* () {
        if (r && e && (t && i || n)) {
          try {
            let { data: s, error: a } = yield this.api.signInWithOpenIDConnect({
              id_token: r,
              nonce: e,
              client_id: t,
              issuer: i,
              provider: n,
            });
            return a || !s
              ? { user: null, session: null, error: a }
              : (this._saveSession(s),
                this._notifyAllSubscribers("SIGNED_IN"),
                { user: s.user, session: s, error: null });
          } catch (s) {
            return { user: null, session: null, error: s };
          }
        }
        throw new Error(
          "You must provide a OpenID Connect provider with your id token and nonce.",
        );
      });
    }
    _recoverSession() {
      try {
        let r = F(this.localStorage, k);
        if (!r) return null;
        let { currentSession: e, expiresAt: t } = r,
          i = Math.round(Date.now() / 1e3);
        t >= i + w && e?.user &&
          (this._saveSession(e), this._notifyAllSubscribers("SIGNED_IN"));
      } catch (r) {
        console.log("error", r);
      }
    }
    _recoverAndRefresh() {
      return v(this, void 0, void 0, function* () {
        try {
          let r = yield L(this.localStorage, k);
          if (!r) return null;
          let { currentSession: e, expiresAt: t } = r,
            i = Math.round(Date.now() / 1e3);
          if (t < i + w) {
            if (this.autoRefreshToken && e.refresh_token) {
              this.networkRetries++;
              let { error: n } = yield this._callRefreshToken(e.refresh_token);
              if (n) {
                if (
                  console.log(n.message),
                    n.message === m.ERROR_MESSAGE &&
                    this.networkRetries < m.MAX_RETRIES
                ) {
                  this.refreshTokenTimer &&
                  clearTimeout(this.refreshTokenTimer),
                    this.refreshTokenTimer = setTimeout(
                      () => this._recoverAndRefresh(),
                      Math.pow(m.RETRY_INTERVAL, this.networkRetries) * 100,
                    );
                  return;
                }
                yield this._removeSession();
              }
              this.networkRetries = 0;
            } else this._removeSession();
          } else {e
              ? (this._saveSession(e), this._notifyAllSubscribers("SIGNED_IN"))
              : (console.log("Current session is missing data."),
                this._removeSession());}
        } catch (r) {
          return console.error(r), null;
        }
      });
    }
    _callRefreshToken(r) {
      var e;
      return r === void 0 &&
        (r = (e = this.currentSession) === null || e === void 0
          ? void 0
          : e.refresh_token),
        v(this, void 0, void 0, function* () {
          try {
            if (!r) throw new Error("No current session.");
            let { data: t, error: i } = yield this.api.refreshAccessToken(r);
            if (i) throw i;
            if (!t) throw Error("Invalid session data.");
            return this._saveSession(t),
              this._notifyAllSubscribers("TOKEN_REFRESHED"),
              this._notifyAllSubscribers("SIGNED_IN"),
              { data: t, error: null };
          } catch (t) {
            return { data: null, error: t };
          }
        });
    }
    _notifyAllSubscribers(r) {
      this.stateChangeEmitters.forEach((e) =>
        e.callback(r, this.currentSession)
      );
    }
    _saveSession(r) {
      this.currentSession = r, this.currentUser = r.user;
      let e = r.expires_at;
      if (e) {
        let t = Math.round(Date.now() / 1e3), i = e - t, n = i > w ? w : .5;
        this._startAutoRefreshToken((i - n) * 1e3);
      }
      this.persistSession && r.expires_at &&
        this._persistSession(this.currentSession);
    }
    _persistSession(r) {
      let e = { currentSession: r, expiresAt: r.expires_at };
      G(this.localStorage, k, e);
    }
    _removeSession() {
      return v(this, void 0, void 0, function* () {
        this.currentSession = null,
          this.currentUser = null,
          this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
          W(this.localStorage, k);
      });
    }
    _startAutoRefreshToken(r) {
      this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer),
        !(r <= 0 || !this.autoRefreshToken) &&
        (this.refreshTokenTimer = setTimeout(
          () =>
            v(this, void 0, void 0, function* () {
              this.networkRetries++;
              let { error: e } = yield this._callRefreshToken();
              e || (this.networkRetries = 0),
                e?.message === m.ERROR_MESSAGE &&
                this.networkRetries < m.MAX_RETRIES &&
                this._startAutoRefreshToken(
                  Math.pow(m.RETRY_INTERVAL, this.networkRetries) * 100,
                );
            }),
          r,
        ),
          typeof this.refreshTokenTimer.unref == "function" &&
          this.refreshTokenTimer.unref());
    }
    _listenForMultiTabEvents() {
      if (!this.multiTab || !_() || !window?.addEventListener) return !1;
      try {
        window?.addEventListener("storage", (r) => {
          var e;
          if (r.key === k) {
            let t = JSON.parse(String(r.newValue));
            !((e = t?.currentSession) === null || e === void 0) &&
              e.access_token
              ? (this._saveSession(t.currentSession),
                this._notifyAllSubscribers("SIGNED_IN"))
              : (this._removeSession(),
                this._notifyAllSubscribers("SIGNED_OUT"));
          }
        });
      } catch (r) {
        console.error("_listenForMultiTabEvents", r);
      }
    }
    _handleVisibilityChange() {
      if (!this.multiTab || !_() || !window?.addEventListener) return !1;
      try {
        window?.addEventListener("visibilitychange", () => {
          document.visibilityState === "visible" && this._recoverAndRefresh();
        });
      } catch (r) {
        console.error("_handleVisibilityChange", r);
      }
    }
  };
export { g as GoTrueApi, I as GoTrueClient };
