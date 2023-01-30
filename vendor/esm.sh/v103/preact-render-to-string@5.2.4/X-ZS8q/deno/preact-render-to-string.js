/* esm.sh - esbuild bundle(preact-render-to-string@5.2.4) deno production */
import { Fragment as Q, h as ce, options as c } from "preact";
var _e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,
  ie =
    /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
  P = /[\s\n\\/='"\0<>]/,
  se = /^xlink:?./,
  pe = /["&<]/;
function L(e) {
  if (pe.test(e += "") === !1) return e;
  for (var t = 0, n = 0, l = "", d = ""; n < e.length; n++) {
    switch (e.charCodeAt(n)) {
      case 34:
        d = "&quot;";
        break;
      case 38:
        d = "&amp;";
        break;
      case 60:
        d = "&lt;";
        break;
      default:
        continue;
    }
    n !== t && (l += e.slice(t, n)), l += d, t = n + 1;
  }
  return n !== t && (l += e.slice(t, n)), l;
}
var I = function (e, t) {
    return String(e).replace(/(\n+)/g, "$1" + (t || "	"));
  },
  ee = function (e, t, n) {
    return String(e).length > (t || 40) || !n && String(e).indexOf(`
`) !== -1 ||
      String(e).indexOf("<") !== -1;
  },
  te = {},
  de = /([A-Z])/g;
function le(e) {
  var t = "";
  for (var n in e) {
    var l = e[n];
    l != null && l !== "" &&
      (t && (t += " "),
        t += n[0] == "-"
          ? n
          : te[n] || (te[n] = n.replace(de, "-$1").toLowerCase()),
        t = typeof l == "number" && _e.test(n) === !1
          ? t + ": " + l + "px;"
          : t + ": " + l + ";");
  }
  return t || void 0;
}
function Y(e, t) {
  return Array.isArray(t) ? t.reduce(Y, e) : t != null && t !== !1 && e.push(t),
    e;
}
function ne() {
  this.__d = !0;
}
function fe(e, t) {
  return {
    __v: e,
    context: t,
    props: e.props,
    setState: ne,
    forceUpdate: ne,
    __d: !0,
    __h: [],
  };
}
function W(e, t) {
  var n = e.contextType, l = n && t[n.__c];
  return n != null ? l ? l.props.value : n.__ : t;
}
var K = [];
function $(e, t, n, l, d, m) {
  if (e == null || typeof e == "boolean") return "";
  if (typeof e != "object") return L(e);
  var h = n.pretty, _ = h && typeof h == "string" ? h : "	";
  if (Array.isArray(e)) {
    for (var y = "", C = 0; C < e.length; C++) {
      h && C > 0 && (y += `
`), y += $(e[C], t, n, l, d, m);
    }
    return y;
  }
  var k, f = e.type, u = e.props, S = !1;
  if (typeof f == "function") {
    if (S = !0, !n.shallow || !l && n.renderRootComponent !== !1) {
      if (f === Q) {
        var g = [];
        return Y(g, e.props.children),
          $(g, t, n, n.shallowHighOrder !== !1, d, m);
      }
      var p, r = e.__c = fe(e, t);
      c.__b && c.__b(e);
      var D = c.__r;
      if (f.prototype && typeof f.prototype.render == "function") {
        var O = W(f, t);
        (r = e.__c = new f(u, O)).__v = e,
          r._dirty = r.__d = !0,
          r.props = u,
          r.state == null && (r.state = {}),
          r._nextState == null && r.__s == null &&
          (r._nextState = r.__s = r.state),
          r.context = O,
          f.getDerivedStateFromProps
            ? r.state = Object.assign(
              {},
              r.state,
              f.getDerivedStateFromProps(r.props, r.state),
            )
            : r.componentWillMount &&
              (r.componentWillMount(),
                r.state = r._nextState !== r.state
                  ? r._nextState
                  : r.__s !== r.state
                  ? r.__s
                  : r.state),
          D && D(e),
          p = r.render(r.props, r.state, r.context);
      } else {for (var F = W(f, t), T = 0; r.__d && T++ < 25;) {
          r.__d = !1, D && D(e), p = f.call(e.__c, u, F);
        }}
      return r.getChildContext &&
        (t = Object.assign({}, t, r.getChildContext())),
        c.diffed && c.diffed(e),
        $(p, t, n, n.shallowHighOrder !== !1, d, m);
    }
    f = (k = f).displayName || k !== Function && k.name || function (X) {
      var B =
        (Function.prototype.toString.call(X).match(/^\s*function\s+([^( ]+)/) ||
          "")[1];
      if (!B) {
        for (var z = -1, J = K.length; J--;) {
          if (K[J] === X) {
            z = J;
            break;
          }
        }
        z < 0 && (z = K.push(X) - 1), B = "UnnamedComponent" + z;
      }
      return B;
    }(k);
  }
  var j, b, s = "<" + f;
  if (u) {
    var v = Object.keys(u);
    n && n.sortAttributes === !0 && v.sort();
    for (var A = 0; A < v.length; A++) {
      var o = v[A], i = u[o];
      if (o !== "children") {
        if (
          !P.test(o) &&
          (n && n.allAttributes ||
            o !== "key" && o !== "ref" && o !== "__self" && o !== "__source")
        ) {
          if (o === "defaultValue") o = "value";
          else if (o === "defaultChecked") o = "checked";
          else if (o === "defaultSelected") o = "selected";
          else if (o === "className") {
            if (u.class !== void 0) continue;
            o = "class";
          } else {d && se.test(o) &&
              (o = o.toLowerCase().replace(/^xlink:?/, "xlink:"));}
          if (o === "htmlFor") {
            if (u.for) continue;
            o = "for";
          }
          o === "style" && i && typeof i == "object" && (i = le(i)),
            o[0] === "a" && o[1] === "r" && typeof i == "boolean" &&
            (i = String(i));
          var a = n.attributeHook && n.attributeHook(o, i, t, n, S);
          if (a || a === "") s += a;
          else if (o === "dangerouslySetInnerHTML") b = i && i.__html;
          else if (f === "textarea" && o === "value") j = i;
          else if ((i || i === 0 || i === "") && typeof i != "function") {
            if (!(i !== !0 && i !== "" || (i = o, n && n.xml))) {
              s = s + " " + o;
              continue;
            }
            if (o === "value") {
              if (f === "select") {
                m = i;
                continue;
              }
              f === "option" && m == i && u.selected === void 0 &&
                (s += " selected");
            }
            s = s + " " + o + '="' + L(i) + '"';
          }
        }
      } else j = i;
    }
  }
  if (h) {
    var x = s.replace(/\n\s*/, " ");
    x === s || ~x.indexOf(`
`)
      ? h && ~s.indexOf(`
`) && (s += `
`)
      : s = x;
  }
  if (s += ">", P.test(f)) {
    throw new Error(f + " is not a valid HTML tag name in " + s);
  }
  var N, ue = ie.test(f) || n.voidElements && n.voidElements.test(f), w = [];
  if (b) {
    h && ee(b) && (b = `
` + _ + I(b, _)), s += b;
  } else if (j != null && Y(N = [], j).length) {
    for (
      var Z = h && ~s.indexOf(`
`),
        R = !1,
        U = 0;
      U < N.length;
      U++
    ) {
      var V = N[U];
      if (V != null && V !== !1) {
        var M = $(V, t, n, !0, f === "svg" || f !== "foreignObject" && d, m);
        if (h && !Z && ee(M) && (Z = !0), M) {
          if (h) {
            var H = M.length > 0 && M[0] != "<";
            R && H ? w[w.length - 1] += M : w.push(M), R = H;
          } else w.push(M);
        }
      }
    }
    if (h && Z) {
      for (var G = w.length; G--;) {
        w[G] = `
` + _ + I(w[G], _);
      }
    }
  }
  if (w.length || b) s += w.join("");
  else if (n && n.xml) return s.substring(0, s.length - 1) + " />";
  return !ue || N || b
    ? (h && ~s.indexOf(`
`) && (s += `
`),
      s = s + "</" + f + ">")
    : s = s.replace(/>$/, " />"),
    s;
}
var ve = { shallow: !0 };
q.render = q;
var he = function (e, t) {
    return q(e, t, ve);
  },
  re = [];
function q(e, t, n) {
  t = t || {};
  var l = c.__s;
  c.__s = !0;
  var d, m = ce(Q, null);
  return m.__k = [e],
    d = n &&
        (n.pretty || n.voidElements || n.sortAttributes || n.shallow ||
          n.allAttributes || n.xml || n.attributeHook)
      ? $(e, t, n)
      : E(e, t, !1, void 0, m),
    c.__c && c.__c(e, re),
    c.__s = l,
    re.length = 0,
    d;
}
function ge(e, t) {
  return e === "className"
    ? "class"
    : e === "htmlFor"
    ? "for"
    : e === "defaultValue"
    ? "value"
    : e === "defaultChecked"
    ? "checked"
    : e === "defaultSelected"
    ? "selected"
    : t && se.test(e)
    ? e.toLowerCase().replace(/^xlink:?/, "xlink:")
    : e;
}
function me(e, t) {
  return e === "style" && t != null && typeof t == "object"
    ? le(t)
    : e[0] === "a" && e[1] === "r" && typeof t == "boolean"
    ? String(t)
    : t;
}
var oe = Array.isArray, ae = Object.assign;
function E(e, t, n, l, d) {
  if (e == null || e === !0 || e === !1 || e === "") return "";
  if (typeof e != "object") return L(e);
  if (oe(e)) {
    var m = "";
    d.__k = e;
    for (var h = 0; h < e.length; h++) m += E(e[h], t, n, l, d);
    return m;
  }
  e.__ = d, c.__b && c.__b(e);
  var _ = e.type, y = e.props;
  if (typeof _ == "function") {
    var C;
    if (_ === Q) C = y.children;
    else {
      C = _.prototype && typeof _.prototype.render == "function"
        ? function (v, A) {
          var o = v.type, i = W(o, A), a = new o(v.props, i);
          v.__c = a,
            a.__v = v,
            a.__d = !0,
            a.props = v.props,
            a.state == null && (a.state = {}),
            a.__s == null && (a.__s = a.state),
            a.context = i,
            o.getDerivedStateFromProps
              ? a.state = ae(
                {},
                a.state,
                o.getDerivedStateFromProps(a.props, a.state),
              )
              : a.componentWillMount &&
                (a.componentWillMount(),
                  a.state = a.__s !== a.state ? a.__s : a.state);
          var x = c.__r;
          return x && x(v), a.render(a.props, a.state, a.context);
        }(e, t)
        : function (v, A) {
          var o, i = fe(v, A), a = W(v.type, A);
          v.__c = i;
          for (var x = c.__r, N = 0; i.__d && N++ < 25;) {
            i.__d = !1, x && x(v), o = v.type.call(i, v.props, a);
          }
          return o;
        }(e, t);
      var k = e.__c;
      k.getChildContext && (t = ae({}, t, k.getChildContext()));
    }
    var f = E(C, t, n, l, e);
    return c.diffed && c.diffed(e), e.__ = void 0, c.unmount && c.unmount(e), f;
  }
  var u, S, g = "<";
  if (g += _, y) {
    for (var p in u = y.children, y) {
      var r = y[p];
      if (
        !(p === "key" || p === "ref" || p === "__self" || p === "__source" ||
          p === "children" || p === "className" && "class" in y ||
          p === "htmlFor" && "for" in y || P.test(p))
      ) {
        if (r = me(p = ge(p, n), r), p === "dangerouslySetInnerHTML") {
          S = r && r.__html;
        } else if (_ === "textarea" && p === "value") u = r;
        else if ((r || r === 0 || r === "") && typeof r != "function") {
          if (r === !0 || r === "") {
            r = p, g = g + " " + p;
            continue;
          }
          if (p === "value") {
            if (_ === "select") {
              l = r;
              continue;
            }
            _ !== "option" || l != r || "selected" in y || (g += " selected");
          }
          g = g + " " + p + '="' + L(r) + '"';
        }
      }
    }
  }
  var D = g;
  if (g += ">", P.test(_)) {
    throw new Error(_ + " is not a valid HTML tag name in " + g);
  }
  var O = "", F = !1;
  if (S) O += S, F = !0;
  else if (typeof u == "string") O += L(u), F = !0;
  else if (oe(u)) {
    e.__k = u;
    for (var T = 0; T < u.length; T++) {
      var j = u[T];
      if (j != null && j !== !1) {
        var b = E(j, t, _ === "svg" || _ !== "foreignObject" && n, l, e);
        b && (O += b, F = !0);
      }
    }
  } else if (u != null && u !== !1 && u !== !0) {
    e.__k = [u];
    var s = E(u, t, _ === "svg" || _ !== "foreignObject" && n, l, e);
    s && (O += s, F = !0);
  }
  if (c.diffed && c.diffed(e), e.__ = void 0, c.unmount && c.unmount(e), F) {
    g += O;
  } else if (ie.test(_)) return D + " />";
  return g + "</" + _ + ">";
}
q.shallowRender = he;
var be = q;
export {
  be as default,
  he as shallowRender,
  q as render,
  q as renderToStaticMarkup,
  q as renderToString,
};
