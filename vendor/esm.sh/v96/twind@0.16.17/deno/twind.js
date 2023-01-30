/* esm.sh - esbuild bundle(twind@0.16.17) deno production */
import {
  cssPropertyAlias as At,
  cssPropertyPrefixFlags as Ct,
  cssValuePrefixFlags as kt,
} from "/v96/style-vendorizer@2.2.3/deno/style-vendorizer.js";
var x = (e, t) => !!~e.indexOf(t),
  u = (e, t = "-") => e.join(t),
  $e = (e, t) => u(e.filter(Boolean), t),
  f = (e, t = 1) => e.slice(t),
  nt = (e) => e,
  Me = () => {},
  L = (e) => e[0].toUpperCase() + f(e),
  Ee = (e) => e.replace(/[A-Z]/g, "-$&").toLowerCase(),
  X = (e, t) => {
    for (; typeof e == "function";) e = e(t);
    return e;
  },
  Ie = (e, t) => {
    e.size > t && e.delete(e.keys().next().value);
  },
  Be = (e, t) =>
    !x("@:&", e[0]) && (x("rg", (typeof t)[5]) || Array.isArray(t)),
  Fe = (e, t, r) =>
    t
      ? Object.keys(t).reduce((o, a) => {
        let i = X(t[a], r);
        return Be(a, i)
          ? o[Ee(a)] = i
          : o[a] = a[0] == "@" && x("figa", a[1])
            ? (o[a] || []).concat(i)
            : Fe(o[a] || {}, i, r),
          o;
      }, e)
      : e,
  Ve = typeof CSS < "u" && CSS.escape ||
    ((e) =>
      e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(
        /^\d/,
        "\\3$& ",
      )),
  be = (e) => (Array.isArray(e) || (e = [e]),
    "@media " +
    u(
      e.map(
        (t) => (typeof t == "string" && (t = { min: t }),
          t.raw || u(
            Object.keys(t).map((r) => `(${r}-width:${t[r]})`),
            " and ",
          )),
      ),
      ",",
    )),
  he = (e) => {
    for (var t = 9, r = e.length; r--;) {
      t = Math.imul(
        t ^ e.charCodeAt(r),
        1597334677,
      );
    }
    return "tw-" + ((t ^ t >>> 9) >>> 0).toString(36);
  },
  it = (e, t) => {
    for (var r = 0, o = e.length; r < o;) {
      let a = o + r >> 1;
      e[a] <= t ? r = a + 1 : o = a;
    }
    return o;
  },
  N,
  Z,
  V = (e = "") => (N.push(e), ""),
  Te = (e) => {
    N.length = Math.max(N.lastIndexOf("") + ~~e, 0);
  },
  at = (e) => e && !x("!:", e[0]),
  st = (e) => e[0] == ":",
  He = (e, t) => {
    Z.push({ v: N.filter(st), d: e, n: t, i: x(N, "!"), $: "" });
  },
  ze = (e) => {
    let t = e[0] == "-";
    t && (e = f(e));
    let r = u(N.filter(at));
    return He(e == "&" ? r : (r && r + "-") + e, t), "";
  },
  ne = (e, t) => {
    let r = "";
    for (let o, a = !1, i = 0; o = e[i++];) {
      if (a || o == "[") {
        r += o, a = o != "]";
        continue;
      }
      switch (o) {
        case ":":
          r = r && V(":" + (e[i] == o ? e[i++] : "") + r);
          break;
        case "(":
          r = r && V(r), V();
          break;
        case "!":
          V(o);
          break;
        case ")":
        case " ":
        case "	":
        case `
`:
        case "\r":
          r = r && ze(r), Te(o !== ")");
          break;
        default:
          r += o;
      }
    }
    r && (t ? V(":" + r) : r.slice(-1) == "-" ? V(r.slice(0, -1)) : ze(r));
  },
  Ge = (e) => {
    V(), ue(e), Te();
  },
  lt = (e, t) => {
    if (t) {
      V();
      let r = x("tbu", (typeof t)[1]);
      ne(e, r), r && Ge(t), Te();
    }
  },
  ue = (e) => {
    switch (typeof e) {
      case "string":
        ne(e);
        break;
      case "function":
        He(e);
        break;
      case "object":
        Array.isArray(e) ? e.forEach(Ge) : e && Object.keys(e).forEach((t) => {
          lt(t, e[t]);
        });
    }
  },
  Pe = new WeakMap(),
  ct = (e) => {
    let t = Pe.get(e);
    if (!t) {
      let r = NaN, o = "";
      t = e.map((a, i) => {
        if (
          r !== r && (a.slice(-1) == "[" || x(":-(", (e[i + 1] || "")[0])) &&
          (r = i), i >= r
        ) {
          return (c) => {
            i == r && (o = ""),
              o += a,
              x("rg", (typeof c)[5]) ? o += c : c && (ne(o), o = "", ue(c)),
              i == e.length - 1 && ne(o);
          };
        }
        let s = Z = [];
        ne(a);
        let d = [...N];
        return Z = [], (c) => {
          Z.push(...s), N = [...d], c && ue(c);
        };
      }), Pe.set(e, t);
    }
    return t;
  },
  ge = (
    e,
  ) => (N = [],
    Z = [],
    Array.isArray(e[0]) && Array.isArray(e[0].raw)
      ? ct(e[0]).forEach((t, r) => t(e[r + 1]))
      : ue(e),
    Z),
  Se,
  dt = (e, t) => (typeof t == "function" && (Se = !1), t),
  ft = (e) => {
    Se = !0;
    let t = JSON.stringify(e, dt);
    return Se && t;
  },
  Re = new WeakMap(),
  Ye = (e, t) => {
    let r = ft(t), o;
    if (r) {
      var a = Re.get(e);
      a || Re.set(e, a = new Map()), o = a.get(r);
    }
    return o ||
      (o = Object.defineProperty(
        (i, s) => (s = Array.isArray(i) ? s : i, X(e(t, s), s)),
        "toJSON",
        { value: () => r || t },
      ),
        a && (a.set(r, o), Ie(a, 1e4))),
      o;
  },
  ut = (e, { css: t }) => t(ge(e)),
  gt = (...e) => Ye(ut, e),
  Je = (e) => (t, r, o, a) => {
    if (t) {
      let i = r && e(r);
      if (i && i.length > 0) {
        return i.reduce(
          (s, d) => (s[$e([o, d, a])] = t, s),
          {},
        );
      }
    }
  },
  pt = Je((e) =>
    ({
      t: ["top-left", "top-right"],
      r: ["top-right", "bottom-right"],
      b: ["bottom-left", "bottom-right"],
      l: ["bottom-left", "top-left"],
      tl: ["top-left"],
      tr: ["top-right"],
      bl: ["bottom-left"],
      br: ["bottom-right"],
    })[e]
  ),
  de = (e) => {
    let t = ({ x: "lr", y: "tb" }[e] || e || "").split("").sort();
    for (
      let r = t.length;
      r--;
    ) {
      if (
        !(t[r] = { t: "top", r: "right", b: "bottom", l: "left" }[t[r]])
      ) return;
    }
    if (t.length) return t;
  },
  Ae = Je(de),
  bt = (e, t) => e + (t[1] == ":" ? f(t, 2) + ":" : f(t)) + ":",
  Ce = (e, t = e.d) =>
    typeof t == "function"
      ? ""
      : e.v.reduce(bt, "") + (e.i ? "!" : "") + (e.n ? "-" : "") + t,
  n,
  J,
  b,
  ae = (e) => e == "cols" ? "columns" : "rows",
  ie = (e) => (t, r, o) => ({ [e]: o + ((n = u(t)) && "-" + n) }),
  m = (e, t) => (r, o, a) => (n = u(r, t)) && { [e || a]: n },
  A = (e) => (t, { theme: r }, o) => (n = r(e || o, t)) && { [e || o]: n },
  se = (e, t) => (r, { theme: o }, a) =>
    (n = o(e || a, r, u(r, t))) && { [e || a]: n },
  D = (e, t) => (r, o) => e(r, o, t),
  j = ie("display"),
  ee = ie("position"),
  K = ie("textTransform"),
  Q = ie("textDecoration"),
  le = ie("fontStyle"),
  I = (e) => (t, r, o) => ({
    ["--tw-" + e]: o,
    fontVariantNumeric:
      "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)",
  }),
  ce = (e, { theme: t }, r) => (n = t("inset", e)) && { [r]: n },
  oe = (e, t, r, o = r) =>
    (n = t(o + "Opacity", f(e))) && { [`--tw-${r}-opacity`]: n },
  ve = (e, t) => Math.round(parseInt(e, 16) * t),
  pe = (e, t, r) =>
    e && e[0] == "#" && (n = (e.length - 1) / 3) &&
      (b = [17, 1, .062272][n - 1])
      ? `rgba(${ve(e.substr(1, n), b)},${ve(e.substr(1 + n, n), b)},${
        ve(e.substr(1 + 2 * n, n), b)
      },${t ? `var(--tw-${t}${r ? "," + r : ""})` : r || 1})`
      : e,
  fe = (e, t, r) =>
    r && typeof r == "string"
      ? (n = pe(r, t + "-opacity")) && n !== r
        ? { [`--tw-${t}-opacity`]: "1", [e]: [r, n] }
        : { [e]: r }
      : void 0,
  De = (e) => (b = pe(e, "", "0")) == n ? "transparent" : b,
  We = (e, { theme: t }, r, o, a, i) =>
    (n = { x: ["right", "left"], y: ["bottom", "top"] }[e[0]]) &&
      (b = `--tw-${r}-${e[0]}-reverse`)
      ? e[1] == "reverse" ? { [b]: "1" } : {
        [b]: "0",
        [$e([a, n[0], i])]: (J = t(o, f(e))) && `calc(${J} * var(${b}))`,
        [$e([a, n[1], i])]: J && [J, `calc(${J} * calc(1 - var(${b})))`],
      }
      : void 0,
  Xe = (e, t) =>
    t[0] && { [e]: (x("wun", (t[0] || "")[3]) ? "space-" : "") + t[0] },
  xe = (e) => (t) =>
    x(["start", "end"], t[0]) ? { [e]: "flex-" + t[0] } : Xe(e, t),
  je = (e) => (t, { theme: r }) => {
    if (n = r("grid" + L(e), t, "")) return { ["grid-" + e]: n };
    switch (t[0]) {
      case "span":
        return t[1] && { ["grid-" + e]: `span ${t[1]} / span ${t[1]}` };
      case "start":
      case "end":
        return (n = r("grid" + L(e) + L(t[0]), f(t), u(f(t)))) &&
          { [`grid-${e}-${t[0]}`]: n };
    }
  },
  _e = (e, { theme: t }, r) => {
    switch (e[0]) {
      case "solid":
      case "dashed":
      case "dotted":
      case "double":
      case "none":
        return m("borderStyle")(e);
      case "collapse":
      case "separate":
        return m("borderCollapse")(e);
      case "opacity":
        return oe(e, t, r);
    }
    return (n = t(r + "Width", e, ""))
      ? { borderWidth: n }
      : fe("borderColor", r, t(r + "Color", e));
  },
  ke = (e) =>
    (e
      ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)"
      : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") +
    " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))",
  me = (e, t, r) =>
    e[0] && (n = t.theme(r, e[1] || e[0])) &&
    {
      [`--tw-${r}-x`]: e[0] !== "y" && n,
      [`--tw-${r}-y`]: e[0] !== "x" && n,
      transform: [`${r}${e[1] ? e[0].toUpperCase() : ""}(${n})`, ke()],
    },
  qe = (e) => (t, r, o) => o[1] ? Ae(r.theme(e, t), o[1], e) : A(e)(t, r, o),
  G = qe("padding"),
  Y = qe("margin"),
  Le = (e, { theme: t }, r) =>
    (n = { w: "width", h: "height" }[e[0]]) &&
    { [n = `${r}${L(n)}`]: t(n, f(e)) },
  R = (e, { theme: t }, r) => {
    let o = r.split("-"), a = o[0] == "backdrop" ? o[0] + "-" : "";
    if (a || e.unshift(...o), e[0] == "filter") {
      let i = [
        "blur",
        "brightness",
        "contrast",
        "grayscale",
        "hue-rotate",
        "invert",
        a && "opacity",
        "saturate",
        "sepia",
        !a && "drop-shadow",
      ].filter(Boolean);
      return e[1] == "none" ? { [a + "filter"]: "none" } : i.reduce(
        (s, d) => (s["--tw-" + a + d] = "var(--tw-empty,/*!*/ /*!*/)", s),
        { [a + "filter"]: i.map((s) => `var(--tw-${a}${s})`).join(" ") },
      );
    }
    return b = e.shift(),
      x(["hue", "drop"], b) && (b += L(e.shift())),
      (n = t(a ? "backdrop" + L(b) : b, e)) &&
      {
        ["--tw-" + a + b]: (Array.isArray(n) ? n : [n]).map((i) =>
          `${Ee(b)}(${i})`
        ).join(" "),
      };
  },
  ht = {
    group: (e, { tag: t }, r) => t(u([r, ...e])),
    hidden: D(j, "none"),
    inline: j,
    block: j,
    contents: j,
    flow: j,
    table: (e, t, r) =>
      x(["auto", "fixed"], e[0]) ? { tableLayout: e[0] } : j(e, t, r),
    flex(e, t, r) {
      switch (e[0]) {
        case "row":
        case "col":
          return { flexDirection: u(e[0] == "col" ? ["column", ...f(e)] : e) };
        case "nowrap":
        case "wrap":
          return { flexWrap: u(e) };
        case "grow":
        case "shrink":
          return n = t.theme("flex" + L(e[0]), f(e), e[1] || 1),
            n != null && { ["flex-" + e[0]]: "" + n };
      }
      return (n = t.theme("flex", e, "")) ? { flex: n } : j(e, t, r);
    },
    grid(e, t, r) {
      switch (e[0]) {
        case "cols":
        case "rows":
          return (n = t.theme(
            "gridTemplate" + L(ae(e[0])),
            f(e),
            e.length == 2 && Number(e[1])
              ? `repeat(${e[1]},minmax(0,1fr))`
              : u(f(e)),
          )) && { ["gridTemplate-" + ae(e[0])]: n };
        case "flow":
          return e.length > 1 &&
            {
              gridAutoFlow: u(
                e[1] == "col" ? ["column", ...f(e, 2)] : f(e),
                " ",
              ),
            };
      }
      return j(e, t, r);
    },
    auto: (e, { theme: t }) =>
      x(["cols", "rows"], e[0]) &&
      (n = t("gridAuto" + L(ae(e[0])), f(e), u(f(e)))) &&
      { ["gridAuto-" + ae(e[0])]: n },
    static: ee,
    fixed: ee,
    absolute: ee,
    relative: ee,
    sticky: ee,
    visible: { visibility: "visible" },
    invisible: { visibility: "hidden" },
    antialiased: {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
    "subpixel-antialiased": {
      WebkitFontSmoothing: "auto",
      MozOsxFontSmoothing: "auto",
    },
    truncate: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    "sr-only": {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      clip: "rect(0,0,0,0)",
      borderWidth: "0",
    },
    "not-sr-only": {
      position: "static",
      width: "auto",
      height: "auto",
      padding: "0",
      margin: "0",
      overflow: "visible",
      whiteSpace: "normal",
      clip: "auto",
    },
    resize: (e) => ({
      resize: { x: "horizontal", y: "vertical" }[e[0]] || e[0] || "both",
    }),
    box: (e) => e[0] && { boxSizing: e[0] + "-box" },
    appearance: m(),
    cursor: se(),
    float: m(),
    clear: m(),
    decoration: m("boxDecorationBreak"),
    isolate: { isolation: "isolate" },
    isolation: m(),
    "mix-blend": m("mixBlendMode"),
    top: ce,
    right: ce,
    bottom: ce,
    left: ce,
    inset: (e, { theme: t }) =>
      (n = de(e[0]))
        ? Ae(t("inset", f(e)), e[0])
        : (n = t("inset", e)) && { top: n, right: n, bottom: n, left: n },
    underline: Q,
    "line-through": Q,
    "no-underline": D(Q, "none"),
    "text-underline": D(Q, "underline"),
    "text-no-underline": D(Q, "none"),
    "text-line-through": D(Q, "line-through"),
    uppercase: K,
    lowercase: K,
    capitalize: K,
    "normal-case": D(K, "none"),
    "text-normal-case": D(K, "none"),
    italic: le,
    "not-italic": D(le, "normal"),
    "font-italic": D(le, "italic"),
    "font-not-italic": D(le, "normal"),
    font: (e, t, r) =>
      (n = t.theme("fontFamily", e, ""))
        ? { fontFamily: n }
        : A("fontWeight")(e, t, r),
    items: (e) =>
      e[0] && { alignItems: x(["start", "end"], e[0]) ? "flex-" + e[0] : u(e) },
    "justify-self": m(),
    "justify-items": m(),
    justify: xe("justifyContent"),
    content: xe("alignContent"),
    self: xe("alignSelf"),
    place: (e) => e[0] && Xe("place-" + e[0], f(e)),
    overscroll: (e) =>
      e[0] &&
      { ["overscrollBehavior" + (e[1] ? "-" + e[0] : "")]: e[1] || e[0] },
    col: je("column"),
    row: je("row"),
    duration: A("transitionDuration"),
    delay: A("transitionDelay"),
    tracking: A("letterSpacing"),
    leading: A("lineHeight"),
    z: A("zIndex"),
    opacity: A(),
    ease: A("transitionTimingFunction"),
    p: G,
    py: G,
    px: G,
    pt: G,
    pr: G,
    pb: G,
    pl: G,
    m: Y,
    my: Y,
    mx: Y,
    mt: Y,
    mr: Y,
    mb: Y,
    ml: Y,
    w: A("width"),
    h: A("height"),
    min: Le,
    max: Le,
    fill: A(),
    order: A(),
    origin: se("transformOrigin", " "),
    select: m("userSelect"),
    "pointer-events": m(),
    align: m("verticalAlign"),
    whitespace: m("whiteSpace"),
    "normal-nums": { fontVariantNumeric: "normal" },
    ordinal: I("ordinal"),
    "slashed-zero": I("slashed-zero"),
    "lining-nums": I("numeric-figure"),
    "oldstyle-nums": I("numeric-figure"),
    "proportional-nums": I("numeric-spacing"),
    "tabular-nums": I("numeric-spacing"),
    "diagonal-fractions": I("numeric-fraction"),
    "stacked-fractions": I("numeric-fraction"),
    overflow: (e, t, r) =>
      x(["ellipsis", "clip"], e[0])
        ? m("textOverflow")(e)
        : e[1]
        ? { ["overflow-" + e[0]]: e[1] }
        : m()(e, t, r),
    transform: (e) =>
      e[0] == "none" ? { transform: "none" } : {
        "--tw-translate-x": "0",
        "--tw-translate-y": "0",
        "--tw-rotate": "0",
        "--tw-skew-x": "0",
        "--tw-skew-y": "0",
        "--tw-scale-x": "1",
        "--tw-scale-y": "1",
        transform: ke(e[0] == "gpu"),
      },
    rotate: (e, { theme: t }) =>
      (n = t("rotate", e)) &&
      { "--tw-rotate": n, transform: [`rotate(${n})`, ke()] },
    scale: me,
    translate: me,
    skew: me,
    gap: (e, t, r) =>
      (n = { x: "column", y: "row" }[e[0]])
        ? { [n + "Gap"]: t.theme("gap", f(e)) }
        : A("gap")(e, t, r),
    stroke: (e, t, r) =>
      (n = t.theme("stroke", e, ""))
        ? { stroke: n }
        : A("strokeWidth")(e, t, r),
    outline: (e, { theme: t }) =>
      (n = t("outline", e)) && { outline: n[0], outlineOffset: n[1] },
    "break-normal": { wordBreak: "normal", overflowWrap: "normal" },
    "break-words": { overflowWrap: "break-word" },
    "break-all": { wordBreak: "break-all" },
    text(e, { theme: t }, r) {
      switch (e[0]) {
        case "left":
        case "center":
        case "right":
        case "justify":
          return { textAlign: e[0] };
        case "uppercase":
        case "lowercase":
        case "capitalize":
          return K([], n, e[0]);
        case "opacity":
          return oe(e, t, r);
      }
      let o = t("fontSize", e, "");
      return o
        ? typeof o == "string" ? { fontSize: o } : {
          fontSize: o[0],
          ...typeof o[1] == "string" ? { lineHeight: o[1] } : o[1],
        }
        : fe("color", "text", t("textColor", e));
    },
    bg(e, { theme: t }, r) {
      switch (e[0]) {
        case "fixed":
        case "local":
        case "scroll":
          return m("backgroundAttachment", ",")(e);
        case "bottom":
        case "center":
        case "left":
        case "right":
        case "top":
          return m("backgroundPosition", " ")(e);
        case "no":
          return e[1] == "repeat" && m("backgroundRepeat")(e);
        case "repeat":
          return x("xy", e[1])
            ? m("backgroundRepeat")(e)
            : { backgroundRepeat: e[1] || e[0] };
        case "opacity":
          return oe(e, t, r, "background");
        case "clip":
        case "origin":
          return e[1] &&
            { ["background-" + e[0]]: e[1] + (e[1] == "text" ? "" : "-box") };
        case "blend":
          return m("background-blend-mode")(f(e));
        case "gradient":
          if (e[1] == "to" && (n = de(e[2]))) {
            return {
              backgroundImage: `linear-gradient(to ${
                u(n, " ")
              },var(--tw-gradient-stops))`,
            };
          }
      }
      return (n = t("backgroundPosition", e, ""))
        ? { backgroundPosition: n }
        : (n = t("backgroundSize", e, ""))
        ? { backgroundSize: n }
        : (n = t("backgroundImage", e, ""))
        ? { backgroundImage: n }
        : fe("backgroundColor", "bg", t("backgroundColor", e));
    },
    from: (e, { theme: t }) =>
      (n = t("gradientColorStops", e)) &&
      {
        "--tw-gradient-from": n,
        "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${
          De(n)
        })`,
      },
    via: (e, { theme: t }) =>
      (n = t("gradientColorStops", e)) &&
      {
        "--tw-gradient-stops":
          `var(--tw-gradient-from),${n},var(--tw-gradient-to,${De(n)})`,
      },
    to: (e, { theme: t }) =>
      (n = t("gradientColorStops", e)) && { "--tw-gradient-to": n },
    border: (e, t, r) =>
      de(e[0])
        ? Ae(t.theme("borderWidth", f(e)), e[0], "border", "width")
        : _e(e, t, r),
    divide: (e, t, r) =>
      (n = We(e, t, r, "divideWidth", "border", "width") || _e(e, t, r)) &&
      { "&>:not([hidden])~:not([hidden])": n },
    space: (e, t, r) =>
      (n = We(e, t, r, "space", "margin")) &&
      { "&>:not([hidden])~:not([hidden])": n },
    placeholder: (e, { theme: t }, r) =>
      (n = e[0] == "opacity"
        ? oe(e, t, r)
        : fe("color", "placeholder", t("placeholderColor", e))) &&
      { "&::placeholder": n },
    shadow: (e, { theme: t }) =>
      (n = t("boxShadow", e)) &&
      {
        ":global": { "*": { "--tw-shadow": "0 0 transparent" } },
        "--tw-shadow": n == "none" ? "0 0 transparent" : n,
        boxShadow: [
          n,
          "var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)",
        ],
      },
    animate: (e, { theme: t, tag: r }) => {
      if (b = t("animation", e)) {
        let o = b.split(" ");
        return (n = t("keyframes", o[0], J = {})) !== J
          ? (b = r(o[0])) &&
            { animation: b + " " + u(f(o), " "), ["@keyframes " + b]: n }
          : { animation: b };
      }
    },
    ring(e, { theme: t }, r) {
      switch (e[0]) {
        case "inset":
          return { "--tw-ring-inset": "inset" };
        case "opacity":
          return oe(e, t, r);
        case "offset":
          return (n = t("ringOffsetWidth", f(e), ""))
            ? { "--tw-ring-offset-width": n }
            : { "--tw-ring-offset-color": t("ringOffsetColor", f(e)) };
      }
      return (n = t("ringWidth", e, ""))
        ? {
          "--tw-ring-offset-shadow":
            "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
          "--tw-ring-shadow":
            `var(--tw-ring-inset) 0 0 0 calc(${n} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
          boxShadow:
            "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)",
          ":global": {
            "*": {
              "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
              "--tw-ring-offset-width": t("ringOffsetWidth", "", "0px"),
              "--tw-ring-offset-color": t("ringOffsetColor", "", "#fff"),
              "--tw-ring-color": pe(
                t("ringColor", "", "#93c5fd"),
                "ring-opacity",
                t("ringOpacity", "", "0.5"),
              ),
              "--tw-ring-offset-shadow": "0 0 transparent",
              "--tw-ring-shadow": "0 0 transparent",
            },
          },
        }
        : {
          "--tw-ring-opacity": "1",
          "--tw-ring-color": pe(t("ringColor", e), "ring-opacity"),
        };
    },
    object: (e, t, r) =>
      x(["contain", "cover", "fill", "none", "scale-down"], u(e))
        ? { objectFit: u(e) }
        : se("objectPosition", " ")(e, t, r),
    list: (e, t, r) =>
      u(e) == "item"
        ? j(e, t, r)
        : x(["inside", "outside"], u(e))
        ? { listStylePosition: e[0] }
        : se("listStyleType")(e, t, r),
    rounded: (e, t, r) =>
      pt(t.theme("borderRadius", f(e), ""), e[0], "border", "radius") ||
      A("borderRadius")(e, t, r),
    "transition-none": { transitionProperty: "none" },
    transition: (e, { theme: t }) => ({
      transitionProperty: t("transitionProperty", e),
      transitionTimingFunction: t("transitionTimingFunction", ""),
      transitionDuration: t("transitionDuration", ""),
    }),
    container: (e, { theme: t }) => {
      let { screens: r = t("screens"), center: o, padding: a } = t("container"),
        i = (s) =>
          (n = a && (typeof a == "string" ? a : a[s] || a.DEFAULT))
            ? { paddingRight: n, paddingLeft: n }
            : {};
      return Object.keys(r).reduce(
        (
          s,
          d,
        ) => ((b = r[d]) && typeof b == "string" &&
          (s[be(b)] = { "&": { "max-width": b, ...i(d) } }),
          s),
        {
          width: "100%",
          ...o ? { marginRight: "auto", marginLeft: "auto" } : {},
          ...i("xs"),
        },
      );
    },
    filter: R,
    blur: R,
    brightness: R,
    contrast: R,
    grayscale: R,
    "hue-rotate": R,
    invert: R,
    saturate: R,
    sepia: R,
    "drop-shadow": R,
    backdrop: R,
  },
  vt = (e) => ({
    ":root": { tabSize: 4 },
    "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": {
      margin: "0",
    },
    button: { backgroundColor: "transparent", backgroundImage: "none" },
    'button,[type="button"],[type="reset"],[type="submit"]': {
      WebkitAppearance: "button",
    },
    "button:focus": {
      outline: ["1px dotted", "5px auto -webkit-focus-ring-color"],
    },
    "fieldset,ol,ul,legend": { padding: "0" },
    "ol,ul": { listStyle: "none" },
    html: {
      lineHeight: "1.5",
      WebkitTextSizeAdjust: "100%",
      fontFamily: e("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif"),
    },
    body: { fontFamily: "inherit", lineHeight: "inherit" },
    "*,::before,::after": {
      boxSizing: "border-box",
      border: `0 solid ${e("borderColor.DEFAULT", "currentColor")}`,
    },
    hr: { height: "0", color: "inherit", borderTopWidth: "1px" },
    img: { borderStyle: "solid" },
    textarea: { resize: "vertical" },
    "input::placeholder,textarea::placeholder": {
      opacity: "1",
      color: e("placeholderColor.DEFAULT", e("colors.gray.400", "#a1a1aa")),
    },
    'button,[role="button"]': { cursor: "pointer" },
    table: {
      textIndent: "0",
      borderColor: "inherit",
      borderCollapse: "collapse",
    },
    "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" },
    a: { color: "inherit", textDecoration: "inherit" },
    "button,input,optgroup,select,textarea": {
      fontFamily: "inherit",
      fontSize: "100%",
      margin: "0",
      padding: "0",
      lineHeight: "inherit",
      color: "inherit",
    },
    "button,select": { textTransform: "none" },
    "::-moz-focus-inner": { borderStyle: "none", padding: "0" },
    ":-moz-focusring": { outline: "1px dotted ButtonText" },
    ":-moz-ui-invalid": { boxShadow: "none" },
    progress: { verticalAlign: "baseline" },
    "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {
      height: "auto",
    },
    '[type="search"]': { WebkitAppearance: "textfield", outlineOffset: "-2px" },
    "::-webkit-search-decoration": { WebkitAppearance: "none" },
    "::-webkit-file-upload-button": {
      WebkitAppearance: "button",
      font: "inherit",
    },
    summary: { display: "list-item" },
    "abbr[title]": { textDecoration: "underline dotted" },
    "b,strong": { fontWeight: "bolder" },
    "pre,code,kbd,samp": {
      fontFamily: e("fontFamily", "mono", "ui-monospace,monospace"),
      fontSize: "1em",
    },
    "sub,sup": {
      fontSize: "75%",
      lineHeight: "0",
      position: "relative",
      verticalAlign: "baseline",
    },
    sub: { bottom: "-0.25em" },
    sup: { top: "-0.5em" },
    "img,svg,video,canvas,audio,iframe,embed,object": {
      display: "block",
      verticalAlign: "middle",
    },
    "img,video": { maxWidth: "100%", height: "auto" },
  }),
  xt = {
    dark: "@media (prefers-color-scheme:dark)",
    sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
    "motion-reduce": "@media (prefers-reduced-motion:reduce)",
    "motion-safe": "@media (prefers-reduced-motion:no-preference)",
    first: "&:first-child",
    last: "&:last-child",
    even: "&:nth-child(2n)",
    odd: "&:nth-child(odd)",
    children: "&>*",
    siblings: "&~*",
    sibling: "&+*",
    override: "&&",
  },
  Ne = "__twind",
  mt = (e) => {
    let t = self[Ne];
    return t ||
      (t = document.head.appendChild(document.createElement("style")),
        t.id = Ne,
        e && (t.nonce = e),
        t.appendChild(document.createTextNode(""))),
      t;
  },
  wt = ({ nonce: e, target: t = mt(e).sheet } = {}) => {
    let r = t.cssRules.length;
    return { target: t, insert: (o, a) => t.insertRule(o, r + a) };
  },
  yt = () => ({ target: null, insert: Me }),
  Oe = (e) => ({
    unknown(t, r = [], o, a) {
      o || this.report({ id: "UNKNOWN_THEME_VALUE", key: t + "." + u(r) }, a);
    },
    report({ id: t, ...r }) {
      return e(`[${t}] ${JSON.stringify(r)}`);
    },
  }),
  Ue = Oe((e) => console.warn(e)),
  $t = Oe((e) => {
    throw new Error(e);
  }),
  St = Oe(Me),
  _ = (e, t, r) => `${e}:${t}${r ? " !important" : ""}`,
  Et = (e, t, r) => {
    let o = "", a = At(e);
    a && (o += `${_(a, t, r)};`);
    let i = Ct(e);
    return i & 1 && (o += `-webkit-${_(e, t, r)};`),
      i & 2 && (o += `-moz-${_(e, t, r)};`),
      i & 4 && (o += `-ms-${_(e, t, r)};`),
      i = kt(e, t),
      i & 1 && (o += `${_(e, `-webkit-${t}`, r)};`),
      i & 2 && (o += `${_(e, `-moz-${t}`, r)};`),
      i & 4 && (o += `${_(e, `-ms-${t}`, r)};`),
      o += _(e, t, r),
      o;
  },
  te = (e, t) => {
    let r = {};
    do for (let o = 1; o < e; o++) {
      r[`${o}/${e}`] = Number((o / e * 100).toFixed(6)) + "%";
    } while (++e <= t);
    return r;
  },
  B = (e, t, r = 0) => {
    let o = {};
    for (; r <= e; r = r * 2 || 1) o[r] = r + t;
    return o;
  },
  F = (e, t = "", r = 1, o = 0, a = 1, i = {}) => {
    for (; o <= e; o += a) i[o] = o / r + t;
    return i;
  },
  v = (e) => (t) => t(e),
  Ft = (e, { theme: t }) => t(...e),
  Gt = (...e) => Ye(Ft, e),
  Tt = {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      yellow: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
      },
      green: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
      },
      purple: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
      },
    },
    spacing: {
      px: "1px",
      0: "0px",
      ...F(4, "rem", 4, .5, .5),
      ...F(12, "rem", 4, 5),
      14: "3.5rem",
      ...F(64, "rem", 4, 16, 4),
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    durations: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms",
    },
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
    },
    backdropBlur: v("blur"),
    backdropBrightness: v("brightness"),
    backdropContrast: v("contrast"),
    backdropGrayscale: v("grayscale"),
    backdropHueRotate: v("hueRotate"),
    backdropInvert: v("invert"),
    backdropOpacity: v("opacity"),
    backdropSaturate: v("saturate"),
    backdropSepia: v("sepia"),
    backgroundColor: v("colors"),
    backgroundImage: { none: "none" },
    backgroundOpacity: v("opacity"),
    backgroundSize: { auto: "auto", cover: "cover", contain: "contain" },
    blur: {
      0: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px",
    },
    brightness: {
      ...F(200, "", 100, 0, 50),
      ...F(110, "", 100, 90, 5),
      75: "0.75",
      125: "1.25",
    },
    borderColor: (e) => ({
      ...e("colors"),
      DEFAULT: e("colors.gray.200", "currentColor"),
    }),
    borderOpacity: v("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "1/2": "50%",
      full: "9999px",
    },
    borderWidth: { DEFAULT: "1px", ...B(8, "px") },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
      md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
      lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
      inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      none: "none",
    },
    contrast: { ...F(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" },
    divideColor: v("borderColor"),
    divideOpacity: v("borderOpacity"),
    divideWidth: v("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgba(0,0,0,0.05)",
      DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"],
      md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"],
      lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"],
      xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"],
      "2xl": "0 25px 25px rgba(0,0,0,0.15)",
      none: "0 0 #0000",
    },
    fill: { current: "currentColor" },
    grayscale: { 0: "0", DEFAULT: "100%" },
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg",
    },
    invert: { 0: "0", DEFAULT: "100%" },
    flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" },
    fontFamily: {
      sans:
        'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
          .split(","),
      serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(
        ",",
      ),
      mono:
        'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
          .split(","),
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["3.75rem", "1"],
      "7xl": ["4.5rem", "1"],
      "8xl": ["6rem", "1"],
      "9xl": ["8rem", "1"],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridAutoColumns: {
      min: "min-content",
      max: "max-content",
      fr: "minmax(0,1fr)",
    },
    gridAutoRows: {
      min: "min-content",
      max: "max-content",
      fr: "minmax(0,1fr)",
    },
    gridColumn: { auto: "auto", "span-full": "1 / -1" },
    gridRow: { auto: "auto", "span-full": "1 / -1" },
    gap: v("spacing"),
    gradientColorStops: v("colors"),
    height: (e) => ({
      auto: "auto",
      ...e("spacing"),
      ...te(2, 6),
      full: "100%",
      screen: "100vh",
    }),
    inset: (e) => ({
      auto: "auto",
      ...e("spacing"),
      ...te(2, 4),
      full: "100%",
    }),
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
      ping: {
        "0%": { transform: "scale(1)", opacity: "1" },
        "75%,100%": { transform: "scale(2)", opacity: "0" },
      },
      pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
        },
      },
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      ...F(10, "rem", 4, 3),
    },
    margin: (e) => ({ auto: "auto", ...e("spacing") }),
    maxHeight: (e) => ({ ...e("spacing"), full: "100%", screen: "100vh" }),
    maxWidth: (e, { breakpoints: t }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      ...t(e("screens")),
    }),
    minHeight: { 0: "0px", full: "100%", screen: "100vh" },
    minWidth: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content",
    },
    opacity: {
      ...F(100, "", 100, 0, 10),
      5: "0.05",
      25: "0.25",
      75: "0.75",
      95: "0.95",
    },
    order: { first: "-9999", last: "9999", none: "0", ...F(12, "", 1, 1) },
    outline: {
      none: ["2px solid transparent", "2px"],
      white: ["2px dotted white", "2px"],
      black: ["2px dotted black", "2px"],
    },
    padding: v("spacing"),
    placeholderColor: v("colors"),
    placeholderOpacity: v("opacity"),
    ringColor: (e) => ({
      DEFAULT: e("colors.blue.500", "#3b82f6"),
      ...e("colors"),
    }),
    ringOffsetColor: v("colors"),
    ringOffsetWidth: B(8, "px"),
    ringOpacity: (e) => ({ DEFAULT: "0.5", ...e("opacity") }),
    ringWidth: { DEFAULT: "3px", ...B(8, "px") },
    rotate: { ...B(2, "deg"), ...B(12, "deg", 3), ...B(180, "deg", 45) },
    saturate: F(200, "", 100, 0, 50),
    scale: {
      ...F(150, "", 100, 0, 50),
      ...F(110, "", 100, 90, 5),
      75: "0.75",
      125: "1.25",
    },
    sepia: { 0: "0", DEFAULT: "100%" },
    skew: { ...B(2, "deg"), ...B(12, "deg", 3) },
    space: v("spacing"),
    stroke: { current: "currentColor" },
    strokeWidth: F(2),
    textColor: v("colors"),
    textOpacity: v("opacity"),
    transitionDuration: (e) => ({ DEFAULT: "150ms", ...e("durations") }),
    transitionDelay: v("durations"),
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT:
        "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
      colors: "background-color,border-color,color,fill,stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
      linear: "linear",
      in: "cubic-bezier(0.4,0,1,1)",
      out: "cubic-bezier(0,0,0.2,1)",
      "in-out": "cubic-bezier(0.4,0,0.2,1)",
    },
    translate: (e) => ({ ...e("spacing"), ...te(2, 4), full: "100%" }),
    width: (e) => ({
      auto: "auto",
      ...e("spacing"),
      ...te(2, 6),
      ...te(12, 12),
      screen: "100vw",
      full: "100%",
      min: "min-content",
      max: "max-content",
    }),
    zIndex: { auto: "auto", ...F(50, "", 1, 0, 10) },
  },
  Ke = (e, t = {}, r = []) => (Object.keys(e).forEach((o) => {
    let a = e[o];
    o == "DEFAULT" && (t[u(r)] = a, t[u(r, ".")] = a);
    let i = [...r, o];
    t[u(i)] = a, t[u(i, ".")] = a, a && typeof a == "object" && Ke(a, t, i);
  }, t),
    t),
  Ot = {
    negative: () => ({}),
    breakpoints: (e) =>
      Object.keys(e).filter((t) => typeof e[t] == "string").reduce(
        (t, r) => (t["screen-" + r] = e[r], t),
        {},
      ),
  },
  zt = (e, t) =>
    (t = t[0] == "[" && t.slice(-1) == "]" && t.slice(1, -1)) &&
    x(e, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(t) && (x(t, "calc(")
      ? t.replace(
        /(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,
        "$1 $2 ",
      )
      : t),
  Pt = (e) => {
    let t = new Map(),
      r = { ...Tt, ...e },
      o = (i, s) => {
        let d = i && i[s], c = typeof d == "function" ? d(a, Ot) : d;
        return c && s == "colors" ? Ke(c) : c;
      },
      a = (i, s, d) => {
        let c = i.split(".");
        i = c[0], c.length > 1 && (d = s, s = u(f(c), "."));
        let w = t.get(i);
        if (
          w || (t.set(i, w = { ...o(r, i) }), Object.assign(w, o(r.extend, i))),
            s != null
        ) {
          s = (Array.isArray(s) ? u(s) : s) || "DEFAULT";
          let U = zt(i, s) || w[s];
          return U == null
            ? d
            : Array.isArray(U) && !x(["fontSize", "outline", "dropShadow"], i)
            ? u(U, ",")
            : U;
        }
        return w;
      };
    return a;
  },
  Rt = (e, t) => (r, o) => {
    if (typeof r.d == "function") return r.d(t);
    let a = r.d.split(/-(?![^[]*])/g);
    if (!o && a[0] == "tw" && r.$ == r.d) return r.$;
    for (let i = a.length; i; i--) {
      let s = u(a.slice(0, i));
      if (Object.prototype.hasOwnProperty.call(e, s)) {
        let d = e[s];
        return typeof d == "function"
          ? d(f(a, i), t, s)
          : typeof d == "string"
          ? t[o ? "css" : "tw"](d)
          : d;
      }
    }
  },
  re,
  Qe = /^:(group(?:(?!-focus).+?)*)-(.+)$/,
  Ze = /^(:not)-(.+)/,
  et = (e) => e[1] == "[" ? f(e) : e,
  Dt = (e, t, { theme: r, tag: o }) => {
    let a = (i, s) =>
      (re = r("screens", f(s), ""))
        ? { [be(re)]: i }
        : s == ":dark" && e == "class"
        ? { ".dark &": i }
        : (re = Qe.exec(s))
        ? { [`.${Ve(o(re[1]))}:${re[2]} &`]: i }
        : {
          [
            t[f(s)] ||
            "&" + s.replace(Ze, (d, c, w) => c + "(" + et(":" + w) + ")")
          ]: i,
        };
    return (i, s) => s.v.reduceRight(a, i);
  },
  E,
  tt = (e) =>
    (((E = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(e))
      ? +E[1] / (E[2] ? 15 : 1) / 10
      : 0) & 31) << 22,
  rt = (e) => {
    E = 0;
    for (let t = e.length; t--;) E += x("-:,", e[t]);
    return E;
  },
  ot = (e) => (rt(e) & 15) << 18,
  Wt = [
    "rst",
    "st",
    "en",
    "d",
    "nk",
    "sited",
    "pty",
    "ecked",
    "cus-w",
    "ver",
    "cus",
    "cus-v",
    "tive",
    "sable",
    "ad-on",
    "tiona",
    "quire",
  ],
  jt = (e) =>
    1 << (~(E = Wt.indexOf(e.replace(Qe, ":$2").slice(3, 8))) ? E : 17),
  _t = (e, t) => (r, o) =>
    r |
    ((E = e("screens", f(o), ""))
      ? 1 << 27 | tt(be(E))
      : o == ":dark"
      ? 1 << 30
      : (E = t[o] || o.replace(Ze, ":$2"))[0] == "@"
      ? ot(E)
      : jt(o)),
  Lt = (e) =>
    e[0] == "-" ? 0 : rt(e) +
      ((E =
          /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/
            .exec(e))
        ? +!!E[1] || -!!E[2]
        : 0) +
      1,
  we = (e, t) => t + "{" + e + "}",
  Nt = (e, t, r) => {
    let { theme: o, tag: a } = r,
      i = (y, S) => "--" + a(S),
      s = (y) => `${y}`.replace(/--(tw-[\w-]+)\b/g, i),
      d = (
        y,
        S,
        C,
      ) => (y = s(y),
        Array.isArray(S)
          ? u(S.filter(Boolean).map(($) => e(y, s($), C)), ";")
          : e(y, s(S), C)),
      c,
      w = (y, S, C, $, O) => {
        if (Array.isArray($)) {
          $.forEach((p) => p && w(y, S, C, p, O));
          return;
        }
        let H = "", M = 0, q = 0;
        $["@apply"] &&
        ($ = Fe(X(gt($["@apply"]), r), { ...$, "@apply": void 0 }, r)),
          Object.keys($).forEach((p) => {
            let k = X($[p], r);
            if (Be(p, k)) {
              if (k !== "" && p.length > 1) {
                let T = Ee(p);
                q += 1, M = Math.max(M, Lt(T)), H = (H && H + ";") + d(T, k, O);
              }
            } else if (k) {
              if (p == ":global" && (p = "@global"), p[0] == "@") {
                if (p[1] == "g") w([], "", 0, k, O);
                else if (p[1] == "f") w([], p, 0, k, O);
                else if (p[1] == "k") {
                  let T = c.length;
                  w([], "", 0, k, O);
                  let z = c.splice(T, c.length - T);
                  c.push({
                    r: we(u(z.map((l) => l.r), ""), p),
                    p: z.reduce((l, g) => l + g.p, 0),
                  });
                } else {p[1] == "i"
                    ? (Array.isArray(k) ? k : [k]).forEach((T) =>
                      T && c.push({ p: 0, r: `${p} ${T};` })
                    )
                    : (p[2] == "c" &&
                      (p = be(r.theme("screens", f(p, 8).trim()))),
                      w([...y, p], S, C | tt(p) | ot(p), k, O));}
              } else {w(
                  y,
                  S
                    ? S.replace(
                      / *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,
                      (T, z, l) =>
                        p.replace(
                          / *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,
                          (g, h, P) =>
                            (x(h, "&")
                              ? h.replace(/&/g, z)
                              : (z && z + " ") + h) + P,
                        ) + l,
                    )
                    : p,
                  C,
                  k,
                  O,
                );}
            }
          }),
          q &&
          c.push({
            r: y.reduceRight(we, we(H, S)),
            p: C * (1 << 8) +
              ((Math.max(0, 15 - q) & 15) << 4 | (M || 15) & 15),
          });
      },
      U = _t(o, t);
    return (
      y,
      S,
      C,
      $ = 0,
    ) => ($ <<= 28,
      c = [],
      w([], S ? "." + Ve(S) : "", C ? C.v.reduceRight(U, $) : $, y, C && C.i),
      c);
  },
  Ut = (e, t, r, o) => {
    let a;
    r((s = []) => a = s);
    let i;
    return r((s = new Set()) => i = s), ({ r: s, p: d }) => {
      if (!i.has(s)) {
        i.add(s);
        let c = it(a, d);
        try {
          e.insert(s, c), a.splice(c, 0, d);
        } catch (w) {
          /:-[mwo]/.test(s) ||
            t.report({ id: "INJECT_CSS_ERROR", css: s, error: w }, o);
        }
      }
    };
  },
  ye = (e, t, r, o = t) => e === !1 ? r : e === !0 ? o : e || t,
  Mt = (e) => (typeof e == "string" ? { t: $t, a: Ue, i: St }[e[1]] : e) || Ue,
  It = { _: { value: "", writable: !0 } },
  Bt = (e = {}) => {
    let t = Pt(e.theme),
      r = Mt(e.mode),
      o = ye(e.hash, !1, !1, he),
      a = e.important,
      i = { v: [] },
      s = 0,
      d = [],
      c = {
        tw: (...l) => T(l),
        theme: (l, g, h) => {
          var P;
          let W = (P = t(l, g, h)) != null ? P : r.unknown(
            l,
            g == null || Array.isArray(g) ? g : g.split("."),
            h != null,
            c,
          );
          return i.n && W && x("rg", (typeof W)[5]) ? `calc(${W} * -1)` : W;
        },
        tag: (l) => o ? o(l) : l,
        css: (l) => {
          s++;
          let g = d.length;
          try {
            (typeof l == "string" ? ge([l]) : l).forEach(k);
            let h = Object.create(null, It);
            for (let P = g; P < d.length; P++) {
              let W = d[P];
              if (W) {
                switch (typeof W) {
                  case "object":
                    Fe(h, W, c);
                    break;
                  case "string":
                    h._ += (h._ && " ") + W;
                }
              }
            }
            return h;
          } finally {
            d.length = g, s--;
          }
        },
      },
      w = Rt({ ...ht, ...e.plugins }, c),
      U = (l) => {
        let g = i;
        i = l;
        try {
          return X(w(l), c);
        } finally {
          i = g;
        }
      },
      y = { ...xt, ...e.variants },
      S = Dt(e.darkMode || "media", y, c),
      C = Nt(ye(e.prefix, Et, _), y, c),
      $ = e.sheet || (typeof window > "u" ? yt() : wt(e)),
      { init: O = (l) => l() } = $,
      H = Ut($, r, O, c),
      M;
    O((l = new Map()) => M = l);
    let q = new WeakMap(),
      p = (l, g) =>
        l == "_"
          ? void 0
          : typeof g == "function"
          ? JSON.stringify(X(g, c), p)
          : g,
      k = (l) => {
        !s && i.v.length && (l = { ...l, v: [...i.v, ...l.v], $: "" }),
          l.$ || (l.$ = Ce(l, q.get(l.d)));
        let g = s ? null : M.get(l.$);
        if (g == null) {
          let h = U(l);
          if (
            l.$ ||
            (l.$ = he(JSON.stringify(h, p)), q.set(l.d, l.$), l.$ = Ce(l, l.$)),
              h && typeof h == "object"
          ) {
            if (l.v = l.v.map(et), a && (l.i = a), h = S(h, l), s) d.push(h);
            else {
              let P = typeof l.d == "function"
                ? typeof h._ == "string" ? 1 : 3
                : 2;
              g = o || typeof l.d == "function" ? (o || he)(P + l.$) : l.$,
                C(h, g, l, P).forEach(H),
                h._ && (g += " " + h._);
            }
          } else {typeof h == "string"
              ? g = h
              : (g = l.$, r.report({ id: "UNKNOWN_DIRECTIVE", rule: g }, c)),
              s && typeof l.d != "function" && d.push(g);}
          s || (M.set(l.$, g), Ie(M, 3e4));
        }
        return g;
      },
      T = (l) => u(ge(l).map(k).filter(Boolean), " "),
      z = ye(e.preflight, nt, !1);
    if (z) {
      let l = vt(t),
        g = C(typeof z == "function" ? X(z(l, c), c) || l : { ...l, ...z });
      O((h = (g.forEach(H), !0)) => h);
    }
    return { init: () => r.report({ id: "LATE_SETUP_CALL" }, c), process: T };
  },
  Vt = (e) => {
    let t = (i) => (r(), t(i)),
      r = (i) => {
        ({ process: t, init: r } = Bt(i));
      };
    e && r(e);
    let o;
    return {
      tw: Object.defineProperties((...i) => t(i), {
        theme: {
          get: ((i) => () => (o || t([(s) => (o = s, "")]), o[i]))("theme"),
        },
      }),
      setup: (i) => r(i),
    };
  },
  { tw: Yt, setup: Jt } = Vt(),
  Xt = (e) => ge(e).map((t) => Ce(t)).join(" ");
export {
  $t as strict,
  _ as noprefix,
  Et as autoprefix,
  Gt as theme,
  gt as apply,
  he as hash,
  Jt as setup,
  Oe as mode,
  St as silent,
  Ue as warn,
  Vt as create,
  wt as cssomSheet,
  Xt as expandGroups,
  Ye as directive,
  Yt as tw,
  yt as voidSheet,
};
