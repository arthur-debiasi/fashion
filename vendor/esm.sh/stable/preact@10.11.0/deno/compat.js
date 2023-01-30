/* esm.sh - esbuild bundle(preact@10.11.0/compat) deno production */
import {
  cloneElement as H,
  Component as c,
  createContext as F,
  createElement as s,
  createRef as B,
  Fragment as d,
  hydrate as $,
  options as i,
  render as h,
  toChildArray as l,
} from "/stable/preact@10.11.0/deno/preact.js";
import {
  Component as De,
  createContext as Te,
  createElement as Ae,
  createRef as Ve,
  Fragment as Ie,
} from "/stable/preact@10.11.0/deno/preact.js";
import {
  useCallback as G,
  useContext as J,
  useDebugValue as K,
  useEffect as w,
  useId as z,
  useImperativeHandle as Z,
  useLayoutEffect as b,
  useMemo as q,
  useReducer as j,
  useRef as Y,
  useState as P,
} from "/stable/preact@10.11.0/deno/hooks.js";
export * from "/stable/preact@10.11.0/deno/hooks.js";
function U(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function v(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function y(e) {
  this.props = e;
}
function Q(e, t) {
  function n(u) {
    var o = this.props.ref, a = o == u.ref;
    return !a && o && (o.call ? o(null) : o.current = null),
      t ? !t(this.props, u) || !a : v(this.props, u);
  }
  function r(u) {
    return this.shouldComponentUpdate = n, s(e, u);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")",
    r.prototype.isReactComponent = !0,
    r.__f = !0,
    r;
}
(y.prototype = new c()).isPureReactComponent = !0,
  y.prototype.shouldComponentUpdate = function (e, t) {
    return v(this.props, e) || v(this.state, t);
  };
var E = i.__b;
i.__b = function (e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null),
    E && E(e);
};
var X = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") ||
  3911;
function ee(e) {
  function t(n) {
    var r = U({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = X,
    t.render = t,
    t.prototype.isReactComponent = t.__f = !0,
    t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
    t;
}
var S = function (e, t) {
    return e == null ? null : l(l(e).map(t));
  },
  te = {
    map: S,
    forEach: S,
    count: function (e) {
      return e ? l(e).length : 0;
    },
    only: function (e) {
      var t = l(e);
      if (t.length !== 1) throw "Children.only";
      return t[0];
    },
    toArray: l,
  },
  ne = i.__e;
i.__e = function (e, t, n, r) {
  if (e.then) {
    for (var u, o = t; o = o.__;) {
      if ((u = o.__c) && u.__c) {
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), u.__c(e, t);
      }
    }
  }
  ne(e, t, n, r);
};
var R = i.unmount;
function L(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function (r) {
    typeof r.__c == "function" && r.__c();
  }),
    e.__c.__H = null),
    (e = U({}, e)).__c != null &&
    (e.__c.__P === n && (e.__c.__P = t), e.__c = null),
    e.__k = e.__k && e.__k.map(function (r) {
      return L(r, t, n);
    })),
    e;
}
function D(e, t, n) {
  return e && (e.__v = null,
    e.__k = e.__k && e.__k.map(function (r) {
      return D(r, t, n);
    }),
    e.__c && e.__c.__P === t &&
    (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)),
    e;
}
function p() {
  this.__u = 0, this.t = null, this.__b = null;
}
function I(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function re(e) {
  var t, n, r;
  function u(o) {
    if (
      t || (t = e()).then(function (a) {
        n = a.default || a;
      }, function (a) {
        r = a;
      }), r
    ) throw r;
    if (!n) throw t;
    return s(n, o);
  }
  return u.displayName = "Lazy", u.__f = !0, u;
}
function f() {
  this.u = null, this.o = null;
}
i.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), R && R(e);
},
  (p.prototype = new c()).__c = function (e, t) {
    var n = t.__c, r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var u = I(r.__v),
      o = !1,
      a = function () {
        o || (o = !0, n.__R = null, u ? u(_) : _());
      };
    n.__R = a;
    var _ = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var m = r.state.__a;
            r.__v.__k[0] = D(m, m.__c.__P, m.__c.__O);
          }
          var C;
          for (r.setState({ __a: r.__b = null }); C = r.t.pop();) {
            C.forceUpdate();
          }
        }
      },
      W = t.__h === !0;
    r.__u++ || W || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(a, a);
  },
  p.prototype.componentWillUnmount = function () {
    this.t = [];
  },
  p.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), r = this.__v.__k[0].__c;
        this.__v.__k[0] = L(this.__b, n, r.__O = r.__P);
      }
      this.__b = null;
    }
    var u = t.__a && s(d, null, e.fallback);
    return u && (u.__h = null), [s(d, null, t.__a ? null : e.children), u];
  };
var g = function (e, t, n) {
  if (
    ++n[1] === n[0] && e.o.delete(t),
      e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size)
  ) {
    for (n = e.u; n;) {
      for (; n.length > 3;) n.pop()();
      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
  }
};
function oe(e) {
  return this.getChildContext = function () {
    return e.context;
  },
    e.children;
}
function ue(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function () {
    h(null, t.l), t.l = null, t.i = null;
  },
    t.i && t.i !== n && t.componentWillUnmount(),
    e.__v
      ? (t.l ||
        (t.i = n,
          t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function (r) {
              this.childNodes.push(r), t.i.appendChild(r);
            },
            insertBefore: function (r, u) {
              this.childNodes.push(r), t.i.appendChild(r);
            },
            removeChild: function (r) {
              this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1),
                t.i.removeChild(r);
            },
          }),
        h(s(oe, { context: t.context }, e.__v), t.l))
      : t.l && t.componentWillUnmount();
}
function ae(e, t) {
  var n = s(ue, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(f.prototype = new c()).__a = function (e) {
  var t = this, n = I(t.__v), r = t.o.get(e);
  return r[0]++, function (u) {
    var o = function () {
      t.props.revealOrder ? (r.push(u), g(t, e, r)) : u();
    };
    n ? n(o) : o();
  };
},
  f.prototype.render = function (e) {
    this.u = null, this.o = new Map();
    var t = l(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children;
  },
  f.prototype.componentDidUpdate = f.prototype.componentDidMount = function () {
    var e = this;
    this.o.forEach(function (t, n) {
      g(e, n, t);
    });
  };
var T = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") ||
    60103,
  ie =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  _e = typeof document < "u",
  le = function (e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol"
      ? /fil|che|rad/i
      : /fil|che|ra/i).test(e);
  };
function se(e, t, n) {
  return t.__k == null && (t.textContent = ""),
    h(e, t),
    typeof n == "function" && n(),
    e ? e.__c : null;
}
function ce(e, t, n) {
  return $(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
c.prototype.isReactComponent = {},
  ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"]
    .forEach(function (e) {
      Object.defineProperty(c.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    });
var N = i.event;
function fe() {}
function pe() {
  return this.cancelBubble;
}
function de() {
  return this.defaultPrevented;
}
i.event = function (e) {
  return N && (e = N(e)),
    e.persist = fe,
    e.isPropagationStopped = pe,
    e.isDefaultPrevented = de,
    e.nativeEvent = e;
};
var A,
  k = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  O = i.vnode;
i.vnode = function (e) {
  var t = e.type, n = e.props, r = n;
  if (typeof t == "string") {
    var u = t.indexOf("-") === -1;
    for (var o in r = {}, n) {
      var a = n[o];
      _e && o === "children" && t === "noscript" ||
        o === "value" && "defaultValue" in n && a == null ||
        (o === "defaultValue" && "value" in n && n.value == null
          ? o = "value"
          : o === "download" && a === !0
          ? a = ""
          : /ondoubleclick/i.test(o)
          ? o = "ondblclick"
          : /^onchange(textarea|input)/i.test(o + t) && !le(n.type)
          ? o = "oninput"
          : /^onfocus$/i.test(o)
          ? o = "onfocusin"
          : /^onblur$/i.test(o)
          ? o = "onfocusout"
          : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)
          ? o = o.toLowerCase()
          : u && ie.test(o)
          ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase()
          : a === null && (a = void 0),
          /^oninput$/i.test(o) &&
          (o = o.toLowerCase(), r[o] && (o = "oninputCapture")),
          r[o] = a);
    }
    t == "select" && r.multiple && Array.isArray(r.value) &&
    (r.value = l(n.children).forEach(function (_) {
      _.props.selected = r.value.indexOf(_.props.value) != -1;
    })),
      t == "select" && r.defaultValue != null &&
      (r.value = l(n.children).forEach(function (_) {
        _.props.selected = r.multiple
          ? r.defaultValue.indexOf(_.props.value) != -1
          : r.defaultValue == _.props.value;
      })),
      e.props = r,
      n.class != n.className &&
      (k.enumerable = "className" in n,
        n.className != null && (r.class = n.className),
        Object.defineProperty(r, "className", k));
  }
  e.$$typeof = T, O && O(e);
};
var x = i.__r;
i.__r = function (e) {
  x && x(e), A = e.__c;
};
var he = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (e) {
          return A.__n[e.__c].props.value;
        },
      },
    },
  },
  Pe = "17.0.2";
function me(e) {
  return s.bind(null, e);
}
function V(e) {
  return !!e && e.$$typeof === T;
}
function ve(e) {
  return V(e) ? H.apply(null, arguments) : e;
}
function ye(e) {
  return !!e.__k && (h(null, e), !0);
}
function be(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Ce = function (e, t) {
    return e(t);
  },
  Ee = function (e, t) {
    return e(t);
  },
  Se = d;
function M(e) {
  e();
}
function Re(e) {
  return e;
}
function ge() {
  return [!1, M];
}
var Ne = b;
function ke(e, t) {
  var n = t(), r = P({ h: { __: n, v: t } }), u = r[0].h, o = r[1];
  return b(function () {
    u.__ = n, u.v = t, u.__ !== t() && o({ h: u });
  }, [e, n, t]),
    w(function () {
      return u.__ !== u.v() && o({ h: u }),
        e(function () {
          u.__ !== u.v() && o({ h: u });
        });
    }, [e]),
    n;
}
var we = {
  useState: P,
  useId: z,
  useReducer: j,
  useEffect: w,
  useLayoutEffect: b,
  useInsertionEffect: Ne,
  useTransition: ge,
  useDeferredValue: Re,
  useSyncExternalStore: ke,
  startTransition: M,
  useRef: Y,
  useImperativeHandle: Z,
  useMemo: q,
  useCallback: G,
  useContext: J,
  useDebugValue: K,
  version: "17.0.2",
  Children: te,
  render: se,
  hydrate: ce,
  unmountComponentAtNode: ye,
  createPortal: ae,
  createElement: s,
  createContext: F,
  createFactory: me,
  cloneElement: ve,
  createRef: B,
  Fragment: d,
  isValidElement: V,
  findDOMNode: be,
  Component: c,
  PureComponent: y,
  memo: Q,
  forwardRef: ee,
  flushSync: Ee,
  unstable_batchedUpdates: Ce,
  StrictMode: Se,
  Suspense: p,
  SuspenseList: f,
  lazy: re,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: he,
};
export {
  Ae as createElement,
  ae as createPortal,
  be as findDOMNode,
  Ce as unstable_batchedUpdates,
  ce as hydrate,
  De as Component,
  Ee as flushSync,
  ee as forwardRef,
  f as SuspenseList,
  ge as useTransition,
  he as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ie as Fragment,
  ke as useSyncExternalStore,
  M as startTransition,
  me as createFactory,
  Ne as useInsertionEffect,
  p as Suspense,
  Pe as version,
  Q as memo,
  Re as useDeferredValue,
  re as lazy,
  Se as StrictMode,
  se as render,
  Te as createContext,
  te as Children,
  V as isValidElement,
  Ve as createRef,
  ve as cloneElement,
  we as default,
  y as PureComponent,
  ye as unmountComponentAtNode,
};
