/* esm.sh - esbuild bundle(@supabase/postgrest-js@0.37.4) deno production */
var O = function (c, e, t, s) {
    function r(i) {
      return i instanceof t ? i : new t(function (n) {
        n(i);
      });
    }
    return new (t || (t = Promise))(function (i, n) {
      function d(a) {
        try {
          h(s.next(a));
        } catch (f) {
          n(f);
        }
      }
      function l(a) {
        try {
          h(s.throw(a));
        } catch (f) {
          n(f);
        }
      }
      function h(a) {
        a.done ? i(a.value) : r(a.value).then(d, l);
      }
      h((s = s.apply(c, e || [])).next());
    });
  },
  u = class {
    constructor(e) {
      Object.assign(this, e);
      let t;
      e.fetch
        ? t = e.fetch
        : typeof fetch > "u"
        ? t = (...s) =>
          O(this, void 0, void 0, function* () {
            return yield (yield import(
              "/v103/cross-fetch@3.1.5/deno/cross-fetch.js"
            )).fetch(...s);
          })
        : t = fetch,
        this.fetch = (...s) => t(...s),
        this.shouldThrowOnError = e.shouldThrowOnError || !1,
        this.allowEmpty = e.allowEmpty || !1;
    }
    throwOnError(e) {
      return e == null && (e = !0), this.shouldThrowOnError = e, this;
    }
    then(e, t) {
      typeof this.schema > "u" ||
      (["GET", "HEAD"].includes(this.method)
        ? this.headers["Accept-Profile"] = this.schema
        : this.headers["Content-Profile"] = this.schema),
        this.method !== "GET" && this.method !== "HEAD" &&
        (this.headers["Content-Type"] = "application/json");
      let s = this.fetch(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then((r) =>
        O(this, void 0, void 0, function* () {
          var i, n, d, l;
          let h = null, a = null, f = null, E = r.status, x = r.statusText;
          if (r.ok) {
            let P = (i = this.headers.Prefer) === null || i === void 0
              ? void 0
              : i.split(",").includes("return=minimal");
            if (this.method !== "HEAD" && !P) {
              let w = yield r.text();
              w &&
                (this.headers.Accept === "text/csv"
                  ? a = w
                  : a = JSON.parse(w));
            }
            let j = (n = this.headers.Prefer) === null || n === void 0
                ? void 0
                : n.match(/count=(exact|planned|estimated)/),
              g = (d = r.headers.get("content-range")) === null || d === void 0
                ? void 0
                : d.split("/");
            j && g && g.length > 1 && (f = parseInt(g[1]));
          } else {
            let P = yield r.text();
            try {
              h = JSON.parse(P);
            } catch {
              h = { message: P };
            }
            if (
              h && this.allowEmpty &&
              (!((l = h?.details) === null || l === void 0) &&
                l.includes("Results contain 0 rows")) &&
              (h = null, E = 200, x = "OK"), h && this.shouldThrowOnError
            ) throw h;
          }
          return {
            error: h,
            data: a,
            count: f,
            status: E,
            statusText: x,
            body: a,
          };
        })
      );
      return this.shouldThrowOnError ||
        (s = s.catch((r) => ({
          error: {
            message: `FetchError: ${r.message}`,
            details: "",
            hint: "",
            code: r.code || "",
          },
          data: null,
          body: null,
          count: null,
          status: 400,
          statusText: "Bad Request",
        }))),
        s.then(e, t);
    }
  };
var m = class extends u {
  select(e = "*") {
    let t = !1,
      s = e.split("").map((r) =>
        /\s/.test(r) && !t ? "" : (r === '"' && (t = !t), r)
      ).join("");
    return this.url.searchParams.set("select", s), this;
  }
  order(e, { ascending: t = !0, nullsFirst: s = !1, foreignTable: r } = {}) {
    let i = typeof r > "u" ? "order" : `${r}.order`,
      n = this.url.searchParams.get(i);
    return this.url.searchParams.set(
      i,
      `${n ? `${n},` : ""}${e}.${t ? "asc" : "desc"}.${
        s ? "nullsfirst" : "nullslast"
      }`,
    ),
      this;
  }
  limit(e, { foreignTable: t } = {}) {
    let s = typeof t > "u" ? "limit" : `${t}.limit`;
    return this.url.searchParams.set(s, `${e}`), this;
  }
  range(e, t, { foreignTable: s } = {}) {
    let r = typeof s > "u" ? "offset" : `${s}.offset`,
      i = typeof s > "u" ? "limit" : `${s}.limit`;
    return this.url.searchParams.set(r, `${e}`),
      this.url.searchParams.set(i, `${t - e + 1}`),
      this;
  }
  abortSignal(e) {
    return this.signal = e, this;
  }
  single() {
    return this.headers.Accept = "application/vnd.pgrst.object+json", this;
  }
  maybeSingle() {
    return this.headers.Accept = "application/vnd.pgrst.object+json",
      this.allowEmpty = !0,
      this;
  }
  csv() {
    return this.headers.Accept = "text/csv", this;
  }
};
var o = class extends m {
  constructor() {
    super(...arguments),
      this.cs = this.contains,
      this.cd = this.containedBy,
      this.sl = this.rangeLt,
      this.sr = this.rangeGt,
      this.nxl = this.rangeGte,
      this.nxr = this.rangeLte,
      this.adj = this.rangeAdjacent,
      this.ov = this.overlaps;
  }
  not(e, t, s) {
    return this.url.searchParams.append(`${e}`, `not.${t}.${s}`), this;
  }
  or(e, { foreignTable: t } = {}) {
    let s = typeof t > "u" ? "or" : `${t}.or`;
    return this.url.searchParams.append(s, `(${e})`), this;
  }
  eq(e, t) {
    return this.url.searchParams.append(`${e}`, `eq.${t}`), this;
  }
  neq(e, t) {
    return this.url.searchParams.append(`${e}`, `neq.${t}`), this;
  }
  gt(e, t) {
    return this.url.searchParams.append(`${e}`, `gt.${t}`), this;
  }
  gte(e, t) {
    return this.url.searchParams.append(`${e}`, `gte.${t}`), this;
  }
  lt(e, t) {
    return this.url.searchParams.append(`${e}`, `lt.${t}`), this;
  }
  lte(e, t) {
    return this.url.searchParams.append(`${e}`, `lte.${t}`), this;
  }
  like(e, t) {
    return this.url.searchParams.append(`${e}`, `like.${t}`), this;
  }
  ilike(e, t) {
    return this.url.searchParams.append(`${e}`, `ilike.${t}`), this;
  }
  is(e, t) {
    return this.url.searchParams.append(`${e}`, `is.${t}`), this;
  }
  in(e, t) {
    let s = t.map((r) =>
      typeof r == "string" && new RegExp("[,()]").test(r) ? `"${r}"` : `${r}`
    ).join(",");
    return this.url.searchParams.append(`${e}`, `in.(${s})`), this;
  }
  contains(e, t) {
    return typeof t == "string"
      ? this.url.searchParams.append(`${e}`, `cs.${t}`)
      : Array.isArray(t)
      ? this.url.searchParams.append(`${e}`, `cs.{${t.join(",")}}`)
      : this.url.searchParams.append(`${e}`, `cs.${JSON.stringify(t)}`),
      this;
  }
  containedBy(e, t) {
    return typeof t == "string"
      ? this.url.searchParams.append(`${e}`, `cd.${t}`)
      : Array.isArray(t)
      ? this.url.searchParams.append(`${e}`, `cd.{${t.join(",")}}`)
      : this.url.searchParams.append(`${e}`, `cd.${JSON.stringify(t)}`),
      this;
  }
  rangeLt(e, t) {
    return this.url.searchParams.append(`${e}`, `sl.${t}`), this;
  }
  rangeGt(e, t) {
    return this.url.searchParams.append(`${e}`, `sr.${t}`), this;
  }
  rangeGte(e, t) {
    return this.url.searchParams.append(`${e}`, `nxl.${t}`), this;
  }
  rangeLte(e, t) {
    return this.url.searchParams.append(`${e}`, `nxr.${t}`), this;
  }
  rangeAdjacent(e, t) {
    return this.url.searchParams.append(`${e}`, `adj.${t}`), this;
  }
  overlaps(e, t) {
    return typeof t == "string"
      ? this.url.searchParams.append(`${e}`, `ov.${t}`)
      : this.url.searchParams.append(`${e}`, `ov.{${t.join(",")}}`),
      this;
  }
  textSearch(e, t, { config: s, type: r = null } = {}) {
    let i = "";
    r === "plain"
      ? i = "pl"
      : r === "phrase"
      ? i = "ph"
      : r === "websearch" && (i = "w");
    let n = s === void 0 ? "" : `(${s})`;
    return this.url.searchParams.append(`${e}`, `${i}fts${n}.${t}`), this;
  }
  fts(e, t, { config: s } = {}) {
    let r = typeof s > "u" ? "" : `(${s})`;
    return this.url.searchParams.append(`${e}`, `fts${r}.${t}`), this;
  }
  plfts(e, t, { config: s } = {}) {
    let r = typeof s > "u" ? "" : `(${s})`;
    return this.url.searchParams.append(`${e}`, `plfts${r}.${t}`), this;
  }
  phfts(e, t, { config: s } = {}) {
    let r = typeof s > "u" ? "" : `(${s})`;
    return this.url.searchParams.append(`${e}`, `phfts${r}.${t}`), this;
  }
  wfts(e, t, { config: s } = {}) {
    let r = typeof s > "u" ? "" : `(${s})`;
    return this.url.searchParams.append(`${e}`, `wfts${r}.${t}`), this;
  }
  filter(e, t, s) {
    return this.url.searchParams.append(`${e}`, `${t}.${s}`), this;
  }
  match(e) {
    return Object.keys(e).forEach((t) => {
      this.url.searchParams.append(`${t}`, `eq.${e[t]}`);
    }),
      this;
  }
};
var p = class extends u {
  constructor(
    e,
    { headers: t = {}, schema: s, fetch: r, shouldThrowOnError: i } = {},
  ) {
    super({ fetch: r, shouldThrowOnError: i }),
      this.url = new URL(e),
      this.headers = Object.assign({}, t),
      this.schema = s;
  }
  select(e = "*", { head: t = !1, count: s = null } = {}) {
    this.method = "GET";
    let r = !1,
      i = e.split("").map((n) =>
        /\s/.test(n) && !r ? "" : (n === '"' && (r = !r), n)
      ).join("");
    return this.url.searchParams.set("select", i),
      s && (this.headers.Prefer = `count=${s}`),
      t && (this.method = "HEAD"),
      new o(this);
  }
  insert(
    e,
    {
      upsert: t = !1,
      onConflict: s,
      returning: r = "representation",
      count: i = null,
    } = {},
  ) {
    this.method = "POST";
    let n = [`return=${r}`];
    if (
      t && n.push("resolution=merge-duplicates"),
        t && s !== void 0 && this.url.searchParams.set("on_conflict", s),
        this.body = e,
        i && n.push(`count=${i}`),
        this.headers.Prefer && n.unshift(this.headers.Prefer),
        this.headers.Prefer = n.join(","),
        Array.isArray(e)
    ) {
      let d = e.reduce((l, h) => l.concat(Object.keys(h)), []);
      if (d.length > 0) {
        let l = [...new Set(d)].map((h) => `"${h}"`);
        this.url.searchParams.set("columns", l.join(","));
      }
    }
    return new o(this);
  }
  upsert(
    e,
    {
      onConflict: t,
      returning: s = "representation",
      count: r = null,
      ignoreDuplicates: i = !1,
    } = {},
  ) {
    this.method = "POST";
    let n = [`resolution=${i ? "ignore" : "merge"}-duplicates`, `return=${s}`];
    return t !== void 0 && this.url.searchParams.set("on_conflict", t),
      this.body = e,
      r && n.push(`count=${r}`),
      this.headers.Prefer && n.unshift(this.headers.Prefer),
      this.headers.Prefer = n.join(","),
      new o(this);
  }
  update(e, { returning: t = "representation", count: s = null } = {}) {
    this.method = "PATCH";
    let r = [`return=${t}`];
    return this.body = e,
      s && r.push(`count=${s}`),
      this.headers.Prefer && r.unshift(this.headers.Prefer),
      this.headers.Prefer = r.join(","),
      new o(this);
  }
  delete({ returning: e = "representation", count: t = null } = {}) {
    this.method = "DELETE";
    let s = [`return=${e}`];
    return t && s.push(`count=${t}`),
      this.headers.Prefer && s.unshift(this.headers.Prefer),
      this.headers.Prefer = s.join(","),
      new o(this);
  }
};
var $ = class extends u {
  constructor(
    e,
    { headers: t = {}, schema: s, fetch: r, shouldThrowOnError: i } = {},
  ) {
    super({ fetch: r, shouldThrowOnError: i }),
      this.url = new URL(e),
      this.headers = Object.assign({}, t),
      this.schema = s;
  }
  rpc(e, { head: t = !1, count: s = null } = {}) {
    return t
      ? (this.method = "HEAD",
        e && Object.entries(e).forEach(([r, i]) => {
          this.url.searchParams.append(r, i);
        }))
      : (this.method = "POST", this.body = e),
      s &&
      (this.headers.Prefer !== void 0
        ? this.headers.Prefer += `,count=${s}`
        : this.headers.Prefer = `count=${s}`),
      new o(this);
  }
};
var A = "0.37.4";
var T = { "X-Client-Info": `postgrest-js/${A}` };
var y = class {
  constructor(
    e,
    { headers: t = {}, schema: s, fetch: r, throwOnError: i } = {},
  ) {
    this.url = e,
      this.headers = Object.assign(Object.assign({}, T), t),
      this.schema = s,
      this.fetch = r,
      this.shouldThrowOnError = i;
  }
  auth(e) {
    return this.headers.Authorization = `Bearer ${e}`, this;
  }
  from(e) {
    let t = `${this.url}/${e}`;
    return new p(t, {
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      shouldThrowOnError: this.shouldThrowOnError,
    });
  }
  rpc(e, t, { head: s = !1, count: r = null } = {}) {
    let i = `${this.url}/rpc/${e}`;
    return new $(i, {
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      shouldThrowOnError: this.shouldThrowOnError,
    }).rpc(t, { head: s, count: r });
  }
};
export {
  o as PostgrestFilterBuilder,
  p as PostgrestQueryBuilder,
  u as PostgrestBuilder,
  y as PostgrestClient,
};
