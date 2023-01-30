/* esm.sh - esbuild bundle(preact@10.11.0) deno production */
var P,
  d,
  $,
  Y,
  S,
  F,
  B,
  T = {},
  V = [],
  Z = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k(e, t) {
  for (var _ in t) e[_] = t[_];
  return e;
}
function j(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ee(e, t, _) {
  var r, l, o, s = {};
  for (o in t) o == "key" ? r = t[o] : o == "ref" ? l = t[o] : s[o] = t[o];
  if (
    arguments.length > 2 &&
    (s.children = arguments.length > 3 ? P.call(arguments, 2) : _),
      typeof e == "function" && e.defaultProps != null
  ) for (o in e.defaultProps) s[o] === void 0 && (s[o] = e.defaultProps[o]);
  return w(e, s, r, l, null);
}
function w(e, t, _, r, l) {
  var o = {
    type: e,
    props: t,
    key: _,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: l ?? ++$,
  };
  return l == null && d.vnode != null && d.vnode(o), o;
}
function ie() {
  return { current: null };
}
function L(e) {
  return e.children;
}
function U(e, t) {
  this.props = e, this.context = t;
}
function C(e, t) {
  if (t == null) return e.__ ? C(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var _; t < e.__k.length; t++) {
    if ((_ = e.__k[t]) != null && _.__e != null) return _.__e;
  }
  return typeof e.type == "function" ? C(e) : null;
}
function z(e) {
  var t, _;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) {
      if ((_ = e.__k[t]) != null && _.__e != null) {
        e.__e = e.__c.base = _.__e;
        break;
      }
    }
    return z(e);
  }
}
function M(e) {
  (!e.__d && (e.__d = !0) && S.push(e) && !D.__r++ ||
    F !== d.debounceRendering) && ((F = d.debounceRendering) || setTimeout)(D);
}
function D() {
  for (var e; D.__r = S.length;) {
    e = S.sort(function (t, _) {
      return t.__v.__b - _.__v.__b;
    }),
      S = [],
      e.some(function (t) {
        var _, r, l, o, s, f;
        t.__d &&
          (s = (o = (_ = t).__v).__e,
            (f = _.__P) &&
            (r = [],
              (l = k({}, o)).__v = o.__v + 1,
              W(
                f,
                o,
                l,
                _.__n,
                f.ownerSVGElement !== void 0,
                o.__h != null ? [s] : null,
                r,
                s ?? C(o),
                o.__h,
              ),
              K(r, o),
              o.__e != s && z(o)));
      });
  }
}
function G(e, t, _, r, l, o, s, f, p, a) {
  var n, h, c, i, u, b, v, y = r && r.__k || V, g = y.length;
  for (_.__k = [], n = 0; n < t.length; n++) {
    if (
      (i = _.__k[n] = (i = t[n]) == null || typeof i == "boolean"
        ? null
        : typeof i == "string" || typeof i == "number" || typeof i == "bigint"
        ? w(null, i, null, null, i)
        : Array.isArray(i)
        ? w(L, { children: i }, null, null, null)
        : i.__b > 0
        ? w(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
        : i) != null
    ) {
      if (
        i.__ = _,
          i.__b = _.__b + 1,
          (c = y[n]) === null || c && i.key == c.key && i.type === c.type
      ) y[n] = void 0;
      else {for (h = 0; h < g; h++) {
          if ((c = y[h]) && i.key == c.key && i.type === c.type) {
            y[h] = void 0;
            break;
          }
          c = null;
        }}
      W(e, i, c = c || T, l, o, s, f, p, a),
        u = i.__e,
        (h = i.ref) && c.ref != h &&
        (v || (v = []),
          c.ref && v.push(c.ref, null, i),
          v.push(h, i.__c || u, i)),
        u != null
          ? (b == null && (b = u),
            typeof i.type == "function" && i.__k === c.__k
              ? i.__d = p = q(i, p, e)
              : p = J(e, i, c, y, u, p),
            typeof _.type == "function" && (_.__d = p))
          : p && c.__e == p && p.parentNode != e && (p = C(c));
    }
  }
  for (_.__e = b, n = g; n--;) {
    y[n] != null &&
      (typeof _.type == "function" && y[n].__e != null && y[n].__e == _.__d &&
        (_.__d = C(r, n + 1)),
        X(y[n], y[n]));
  }
  if (v) for (n = 0; n < v.length; n++) Q(v[n], v[++n], v[++n]);
}
function q(e, t, _) {
  for (var r, l = e.__k, o = 0; l && o < l.length; o++) {
    (r = l[o]) &&
      (r.__ = e,
        t = typeof r.type == "function" ? q(r, t, _) : J(_, r, r, l, r.__e, t));
  }
  return t;
}
function te(e, t) {
  return t = t || [],
    e == null || typeof e == "boolean" ||
    (Array.isArray(e)
      ? e.some(function (_) {
        te(_, t);
      })
      : t.push(e)),
    t;
}
function J(e, t, _, r, l, o) {
  var s, f, p;
  if (t.__d !== void 0) s = t.__d, t.__d = void 0;
  else if (_ == null || l != o || l.parentNode == null) {
    e:
    if (o == null || o.parentNode !== e) e.appendChild(l), s = null;
    else {
      for (
        f = o, p = 0;
        (f = f.nextSibling) && p < r.length;
        p += 2
      ) if (f == l) break e;
      e.insertBefore(l, o), s = o;
    }
  }
  return s !== void 0 ? s : l.nextSibling;
}
function _e(e, t, _, r, l) {
  var o;
  for (o in _) {
    o === "children" || o === "key" || o in t || N(e, o, null, _[o], r);
  }
  for (o in t) {
    l && typeof t[o] != "function" || o === "children" || o === "key" ||
      o === "value" || o === "checked" || _[o] === t[o] ||
      N(e, o, t[o], _[o], r);
  }
}
function I(e, t, _) {
  t[0] === "-"
    ? e.setProperty(t, _)
    : e[t] = _ == null ? "" : typeof _ != "number" || Z.test(t) ? _ : _ + "px";
}
function N(e, t, _, r, l) {
  var o;
  e:
  if (t === "style") {
    if (typeof _ == "string") e.style.cssText = _;
    else {
      if (typeof r == "string" && (e.style.cssText = r = ""), r) {
        for (t in r) _ && t in _ || I(e.style, t, "");
      }
      if (_) for (t in _) r && _[t] === r[t] || I(e.style, t, _[t]);
    }
  } else if (t[0] === "o" && t[1] === "n") {
    o = t !== (t = t.replace(/Capture$/, "")),
      t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2),
      e.l || (e.l = {}),
      e.l[t + o] = _,
      _
        ? r || e.addEventListener(t, o ? R : O, o)
        : e.removeEventListener(t, o ? R : O, o);
  } else if (t !== "dangerouslySetInnerHTML") {
    if (l) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" &&
      t !== "download" && t in e
    ) {
      try {
        e[t] = _ ?? "";
        break e;
      } catch {}
    }
    typeof _ == "function" ||
      (_ != null && (_ !== !1 || t[0] === "a" && t[1] === "r")
        ? e.setAttribute(t, _)
        : e.removeAttribute(t));
  }
}
function O(e) {
  this.l[e.type + !1](d.event ? d.event(e) : e);
}
function R(e) {
  this.l[e.type + !0](d.event ? d.event(e) : e);
}
function W(e, t, _, r, l, o, s, f, p) {
  var a, n, h, c, i, u, b, v, y, g, x, H, E, m = t.type;
  if (t.constructor !== void 0) return null;
  _.__h != null && (p = _.__h, f = t.__e = _.__e, t.__h = null, o = [f]),
    (a = d.__b) && a(t);
  try {
    e:
    if (typeof m == "function") {
      if (
        v = t.props,
          y = (a = m.contextType) && r[a.__c],
          g = a ? y ? y.props.value : a.__ : r,
          _.__c
            ? b = (n = t.__c = _.__c).__ = n.__E
            : ("prototype" in m && m.prototype.render
              ? t.__c = n = new m(v, g)
              : (t.__c = n = new U(v, g), n.constructor = m, n.render = oe),
              y && y.sub(n),
              n.props = v,
              n.state || (n.state = {}),
              n.context = g,
              n.__n = r,
              h = n.__d = !0,
              n.__h = []),
          n.__s == null && (n.__s = n.state),
          m.getDerivedStateFromProps != null &&
          (n.__s == n.state && (n.__s = k({}, n.__s)),
            k(n.__s, m.getDerivedStateFromProps(v, n.__s))),
          c = n.props,
          i = n.state,
          h
      ) {
        m.getDerivedStateFromProps == null && n.componentWillMount != null &&
        n.componentWillMount(),
          n.componentDidMount != null && n.__h.push(n.componentDidMount);
      } else {
        if (
          m.getDerivedStateFromProps == null && v !== c &&
          n.componentWillReceiveProps != null &&
          n.componentWillReceiveProps(v, g),
            !n.__e && n.shouldComponentUpdate != null &&
              n.shouldComponentUpdate(v, n.__s, g) === !1 || t.__v === _.__v
        ) {
          n.props = v,
            n.state = n.__s,
            t.__v !== _.__v && (n.__d = !1),
            n.__v = t,
            t.__e = _.__e,
            t.__k = _.__k,
            t.__k.forEach(function (A) {
              A && (A.__ = t);
            }),
            n.__h.length && s.push(n);
          break e;
        }
        n.componentWillUpdate != null && n.componentWillUpdate(v, n.__s, g),
          n.componentDidUpdate != null && n.__h.push(function () {
            n.componentDidUpdate(c, i, u);
          });
      }
      if (
        n.context = g,
          n.props = v,
          n.__v = t,
          n.__P = e,
          x = d.__r,
          H = 0,
          "prototype" in m && m.prototype.render
      ) {
        n.state = n.__s,
          n.__d = !1,
          x && x(t),
          a = n.render(n.props, n.state, n.context);
      } else {do n.__d = !1,
          x && x(t),
          a = n.render(n.props, n.state, n.context),
          n.state = n.__s; while (n.__d && ++H < 25);}
      n.state = n.__s,
        n.getChildContext != null && (r = k(k({}, r), n.getChildContext())),
        h || n.getSnapshotBeforeUpdate == null ||
        (u = n.getSnapshotBeforeUpdate(c, i)),
        E = a != null && a.type === L && a.key == null ? a.props.children : a,
        G(e, Array.isArray(E) ? E : [E], t, _, r, l, o, s, f, p),
        n.base = t.__e,
        t.__h = null,
        n.__h.length && s.push(n),
        b && (n.__E = n.__ = null),
        n.__e = !1;
    } else {o == null && t.__v === _.__v
        ? (t.__k = _.__k, t.__e = _.__e)
        : t.__e = ne(_.__e, t, _, r, l, o, s, p);}
    (a = d.diffed) && a(t);
  } catch (A) {
    t.__v = null,
      (p || o != null) && (t.__e = f, t.__h = !!p, o[o.indexOf(f)] = null),
      d.__e(A, t, _);
  }
}
function K(e, t) {
  d.__c && d.__c(t, e),
    e.some(function (_) {
      try {
        e = _.__h,
          _.__h = [],
          e.some(function (r) {
            r.call(_);
          });
      } catch (r) {
        d.__e(r, _.__v);
      }
    });
}
function ne(e, t, _, r, l, o, s, f) {
  var p, a, n, h = _.props, c = t.props, i = t.type, u = 0;
  if (i === "svg" && (l = !0), o != null) {
    for (; u < o.length; u++) {
      if (
        (p = o[u]) && "setAttribute" in p == !!i &&
        (i ? p.localName === i : p.nodeType === 3)
      ) {
        e = p, o[u] = null;
        break;
      }
    }
  }
  if (e == null) {
    if (i === null) return document.createTextNode(c);
    e = l
      ? document.createElementNS("http://www.w3.org/2000/svg", i)
      : document.createElement(i, c.is && c),
      o = null,
      f = !1;
  }
  if (i === null) h === c || f && e.data === c || (e.data = c);
  else {
    if (
      o = o && P.call(e.childNodes),
        a = (h = _.props || T).dangerouslySetInnerHTML,
        n = c.dangerouslySetInnerHTML,
        !f
    ) {
      if (o != null) {
        for (
          h = {}, u = 0;
          u < e.attributes.length;
          u++
        ) h[e.attributes[u].name] = e.attributes[u].value;
      }
      (n || a) &&
        (n && (a && n.__html == a.__html || n.__html === e.innerHTML) ||
          (e.innerHTML = n && n.__html || ""));
    }
    if (_e(e, c, h, l, f), n) t.__k = [];
    else if (
      u = t.props.children,
        G(
          e,
          Array.isArray(u) ? u : [u],
          t,
          _,
          r,
          l && i !== "foreignObject",
          o,
          s,
          o ? o[0] : _.__k && C(_, 0),
          f,
        ),
        o != null
    ) for (u = o.length; u--;) o[u] != null && j(o[u]);
    f ||
      ("value" in c && (u = c.value) !== void 0 &&
        (u !== e.value || i === "progress" && !u ||
          i === "option" && u !== h.value) &&
        N(e, "value", u, h.value, !1),
        "checked" in c && (u = c.checked) !== void 0 && u !== e.checked &&
        N(e, "checked", u, h.checked, !1));
  }
  return e;
}
function Q(e, t, _) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    d.__e(r, _);
  }
}
function X(e, t, _) {
  var r, l;
  if (
    d.unmount && d.unmount(e),
      (r = e.ref) && (r.current && r.current !== e.__e || Q(r, null, t)),
      (r = e.__c) != null
  ) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (o) {
        d.__e(o, t);
      }
    }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k) {
    for (l = 0; l < r.length; l++) {
      r[l] && X(r[l], t, typeof e.type != "function");
    }
  }
  _ || e.__e == null || j(e.__e), e.__ = e.__e = e.__d = void 0;
}
function oe(e, t, _) {
  return this.constructor(e, _);
}
function re(e, t, _) {
  var r, l, o;
  d.__ && d.__(e, t),
    l = (r = typeof _ == "function") ? null : _ && _.__k || t.__k,
    o = [],
    W(
      t,
      e = (!r && _ || t).__k = ee(L, null, [e]),
      l || T,
      T,
      t.ownerSVGElement !== void 0,
      !r && _ ? [_] : l ? null : t.firstChild ? P.call(t.childNodes) : null,
      o,
      !r && _ ? _ : l ? l.__e : t.firstChild,
      r,
    ),
    K(o, e);
}
function le(e, t) {
  re(e, t, le);
}
function se(e, t, _) {
  var r, l, o, s = k({}, e.props);
  for (o in t) o == "key" ? r = t[o] : o == "ref" ? l = t[o] : s[o] = t[o];
  return arguments.length > 2 &&
    (s.children = arguments.length > 3 ? P.call(arguments, 2) : _),
    w(e.type, s, r || e.key, l || e.ref, null);
}
function ce(e, t) {
  var _ = {
    __c: t = "__cC" + B++,
    __: e,
    Consumer: function (r, l) {
      return r.children(l);
    },
    Provider: function (r) {
      var l, o;
      return this.getChildContext ||
        (l = [],
          (o = {})[t] = this,
          this.getChildContext = function () {
            return o;
          },
          this.shouldComponentUpdate = function (s) {
            this.props.value !== s.value && l.some(M);
          },
          this.sub = function (s) {
            l.push(s);
            var f = s.componentWillUnmount;
            s.componentWillUnmount = function () {
              l.splice(l.indexOf(s), 1), f && f.call(s);
            };
          }),
        r.children;
    },
  };
  return _.Provider.__ = _.Consumer.contextType = _;
}
P = V.slice,
  d = {
    __e: function (e, t, _, r) {
      for (var l, o, s; t = t.__;) {
        if ((l = t.__c) && !l.__) {
          try {
            if (
              (o = l.constructor) && o.getDerivedStateFromError != null &&
              (l.setState(o.getDerivedStateFromError(e)), s = l.__d),
                l.componentDidCatch != null &&
                (l.componentDidCatch(e, r || {}), s = l.__d),
                s
            ) return l.__E = l;
          } catch (f) {
            e = f;
          }
        }
      }
      throw e;
    },
  },
  $ = 0,
  Y = function (e) {
    return e != null && e.constructor === void 0;
  },
  U.prototype.setState = function (e, t) {
    var _;
    _ = this.__s != null && this.__s !== this.state
      ? this.__s
      : this.__s = k({}, this.state),
      typeof e == "function" && (e = e(k({}, _), this.props)),
      e && k(_, e),
      e != null && this.__v && (t && this.__h.push(t), M(this));
  },
  U.prototype.forceUpdate = function (e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), M(this));
  },
  U.prototype.render = L,
  S = [],
  D.__r = 0,
  B = 0;
export {
  ce as createContext,
  d as options,
  ee as createElement,
  ee as h,
  ie as createRef,
  L as Fragment,
  le as hydrate,
  re as render,
  se as cloneElement,
  te as toChildArray,
  U as Component,
  Y as isValidElement,
};
