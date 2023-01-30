/* esm.sh - esbuild bundle(@supabase/storage-js@1.7.3) deno production */
var x = "1.7.3";
var O = { "X-Client-Info": `storage-js/${x}` };
var v = function (n, t, e, r) {
    function o(i) {
      return i instanceof e ? i : new e(function (a) {
        a(i);
      });
    }
    return new (e || (e = Promise))(function (i, a) {
      function d(s) {
        try {
          u(r.next(s));
        } catch (h) {
          a(h);
        }
      }
      function c(s) {
        try {
          u(r.throw(s));
        } catch (h) {
          a(h);
        }
      }
      function u(s) {
        s.done ? i(s.value) : o(s.value).then(d, c);
      }
      u((r = r.apply(n, t || [])).next());
    });
  },
  k = (n) =>
    n.msg || n.message || n.error_description || n.error || JSON.stringify(n),
  U = (n, t) => {
    if (typeof n.json != "function") return t(n);
    n.json().then((e) => t({ message: k(e), status: n?.status || 500 }));
  },
  E = (n, t, e, r) => {
    let o = { method: n, headers: t?.headers || {} };
    return n === "GET" ? o : (o.headers = Object.assign(
      { "Content-Type": "application/json" },
      t?.headers,
    ),
      o.body = JSON.stringify(r),
      Object.assign(Object.assign({}, o), e));
  };
function b(n, t, e, r, o, i) {
  return v(this, void 0, void 0, function* () {
    return new Promise((a, d) => {
      n(e, E(t, r, o, i)).then((c) => {
        if (!c.ok) throw c;
        return r?.noResolveJson ? a(c) : c.json();
      }).then((c) => a(c)).catch((c) => U(c, d));
    });
  });
}
function y(n, t, e, r) {
  return v(this, void 0, void 0, function* () {
    return b(n, "GET", t, e, r);
  });
}
function f(n, t, e, r, o) {
  return v(this, void 0, void 0, function* () {
    return b(n, "POST", t, r, o, e);
  });
}
function w(n, t, e, r, o) {
  return v(this, void 0, void 0, function* () {
    return b(n, "PUT", t, r, o, e);
  });
}
function m(n, t, e, r, o) {
  return v(this, void 0, void 0, function* () {
    return b(n, "DELETE", t, r, o, e);
  });
}
var F = function (n, t, e, r) {
    function o(i) {
      return i instanceof e ? i : new e(function (a) {
        a(i);
      });
    }
    return new (e || (e = Promise))(function (i, a) {
      function d(s) {
        try {
          u(r.next(s));
        } catch (h) {
          a(h);
        }
      }
      function c(s) {
        try {
          u(r.throw(s));
        } catch (h) {
          a(h);
        }
      }
      function u(s) {
        s.done ? i(s.value) : o(s.value).then(d, c);
      }
      u((r = r.apply(n, t || [])).next());
    });
  },
  g = (n) => {
    let t;
    return n
      ? t = n
      : typeof fetch > "u"
      ? t = (...e) =>
        F(void 0, void 0, void 0, function* () {
          return yield (yield import(
            "/v103/cross-fetch@3.1.5/deno/cross-fetch.js"
          )).fetch(...e);
        })
      : t = fetch,
      (...e) => t(...e);
  };
var p = function (n, t, e, r) {
    function o(i) {
      return i instanceof e ? i : new e(function (a) {
        a(i);
      });
    }
    return new (e || (e = Promise))(function (i, a) {
      function d(s) {
        try {
          u(r.next(s));
        } catch (h) {
          a(h);
        }
      }
      function c(s) {
        try {
          u(r.throw(s));
        } catch (h) {
          a(h);
        }
      }
      function u(s) {
        s.done ? i(s.value) : o(s.value).then(d, c);
      }
      u((r = r.apply(n, t || [])).next());
    });
  },
  _ = class {
    constructor(t, e = {}, r) {
      this.url = t,
        this.headers = Object.assign(Object.assign({}, O), e),
        this.fetch = g(r);
    }
    listBuckets() {
      return p(this, void 0, void 0, function* () {
        try {
          return {
            data: yield y(this.fetch, `${this.url}/bucket`, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (t) {
          return { data: null, error: t };
        }
      });
    }
    getBucket(t) {
      return p(this, void 0, void 0, function* () {
        try {
          return {
            data: yield y(this.fetch, `${this.url}/bucket/${t}`, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (e) {
          return { data: null, error: e };
        }
      });
    }
    createBucket(t, e = { public: !1 }) {
      return p(this, void 0, void 0, function* () {
        try {
          return {
            data: (yield f(this.fetch, `${this.url}/bucket`, {
              id: t,
              name: t,
              public: e.public,
            }, { headers: this.headers })).name,
            error: null,
          };
        } catch (r) {
          return { data: null, error: r };
        }
      });
    }
    updateBucket(t, e) {
      return p(this, void 0, void 0, function* () {
        try {
          return {
            data: yield w(this.fetch, `${this.url}/bucket/${t}`, {
              id: t,
              name: t,
              public: e.public,
            }, { headers: this.headers }),
            error: null,
          };
        } catch (r) {
          return { data: null, error: r };
        }
      });
    }
    emptyBucket(t) {
      return p(this, void 0, void 0, function* () {
        try {
          return {
            data: yield f(this.fetch, `${this.url}/bucket/${t}/empty`, {}, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (e) {
          return { data: null, error: e };
        }
      });
    }
    deleteBucket(t) {
      return p(this, void 0, void 0, function* () {
        try {
          return {
            data: yield m(this.fetch, `${this.url}/bucket/${t}`, {}, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (e) {
          return { data: null, error: e };
        }
      });
    }
  };
var l = function (n, t, e, r) {
    function o(i) {
      return i instanceof e ? i : new e(function (a) {
        a(i);
      });
    }
    return new (e || (e = Promise))(function (i, a) {
      function d(s) {
        try {
          u(r.next(s));
        } catch (h) {
          a(h);
        }
      }
      function c(s) {
        try {
          u(r.throw(s));
        } catch (h) {
          a(h);
        }
      }
      function u(s) {
        s.done ? i(s.value) : o(s.value).then(d, c);
      }
      u((r = r.apply(n, t || [])).next());
    });
  },
  T = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  S = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  },
  $ = class {
    constructor(t, e = {}, r, o) {
      this.url = t, this.headers = e, this.bucketId = r, this.fetch = g(o);
    }
    uploadOrUpdate(t, e, r, o) {
      return l(this, void 0, void 0, function* () {
        try {
          let i,
            a = Object.assign(Object.assign({}, S), o),
            d = Object.assign(
              Object.assign({}, this.headers),
              t === "POST" && { "x-upsert": String(a.upsert) },
            );
          typeof Blob < "u" && r instanceof Blob
            ? (i = new FormData(),
              i.append("cacheControl", a.cacheControl),
              i.append("", r))
            : typeof FormData < "u" && r instanceof FormData
            ? (i = r, i.append("cacheControl", a.cacheControl))
            : (i = r,
              d["cache-control"] = `max-age=${a.cacheControl}`,
              d["content-type"] = a.contentType);
          let c = this._removeEmptyFolders(e),
            u = this._getFinalPath(c),
            s = yield this.fetch(`${this.url}/object/${u}`, {
              method: t,
              body: i,
              headers: d,
            });
          return s.ok
            ? { data: { Key: u }, error: null }
            : { data: null, error: yield s.json() };
        } catch (i) {
          return { data: null, error: i };
        }
      });
    }
    upload(t, e, r) {
      return l(this, void 0, void 0, function* () {
        return this.uploadOrUpdate("POST", t, e, r);
      });
    }
    update(t, e, r) {
      return l(this, void 0, void 0, function* () {
        return this.uploadOrUpdate("PUT", t, e, r);
      });
    }
    move(t, e) {
      return l(this, void 0, void 0, function* () {
        try {
          return {
            data: yield f(this.fetch, `${this.url}/object/move`, {
              bucketId: this.bucketId,
              sourceKey: t,
              destinationKey: e,
            }, { headers: this.headers }),
            error: null,
          };
        } catch (r) {
          return { data: null, error: r };
        }
      });
    }
    copy(t, e) {
      return l(this, void 0, void 0, function* () {
        try {
          return {
            data: yield f(this.fetch, `${this.url}/object/copy`, {
              bucketId: this.bucketId,
              sourceKey: t,
              destinationKey: e,
            }, { headers: this.headers }),
            error: null,
          };
        } catch (r) {
          return { data: null, error: r };
        }
      });
    }
    createSignedUrl(t, e) {
      return l(this, void 0, void 0, function* () {
        try {
          let r = this._getFinalPath(t),
            o = yield f(this.fetch, `${this.url}/object/sign/${r}`, {
              expiresIn: e,
            }, { headers: this.headers }),
            i = `${this.url}${o.signedURL}`;
          return o = { signedURL: i }, { data: o, error: null, signedURL: i };
        } catch (r) {
          return { data: null, error: r, signedURL: null };
        }
      });
    }
    createSignedUrls(t, e) {
      return l(this, void 0, void 0, function* () {
        try {
          return {
            data:
              (yield f(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                expiresIn: e,
                paths: t,
              }, { headers: this.headers })).map((o) =>
                Object.assign(Object.assign({}, o), {
                  signedURL: o.signedURL ? `${this.url}${o.signedURL}` : null,
                })
              ),
            error: null,
          };
        } catch (r) {
          return { data: null, error: r };
        }
      });
    }
    download(t) {
      return l(this, void 0, void 0, function* () {
        try {
          let e = this._getFinalPath(t);
          return {
            data: yield (yield y(this.fetch, `${this.url}/object/${e}`, {
              headers: this.headers,
              noResolveJson: !0,
            })).blob(),
            error: null,
          };
        } catch (e) {
          return { data: null, error: e };
        }
      });
    }
    getPublicUrl(t) {
      try {
        let e = this._getFinalPath(t), r = `${this.url}/object/public/${e}`;
        return { data: { publicURL: r }, error: null, publicURL: r };
      } catch (e) {
        return { data: null, error: e, publicURL: null };
      }
    }
    remove(t) {
      return l(this, void 0, void 0, function* () {
        try {
          return {
            data: yield m(this.fetch, `${this.url}/object/${this.bucketId}`, {
              prefixes: t,
            }, { headers: this.headers }),
            error: null,
          };
        } catch (e) {
          return { data: null, error: e };
        }
      });
    }
    list(t, e, r) {
      return l(this, void 0, void 0, function* () {
        try {
          let o = Object.assign(Object.assign(Object.assign({}, T), e), {
            prefix: t || "",
          });
          return {
            data: yield f(
              this.fetch,
              `${this.url}/object/list/${this.bucketId}`,
              o,
              { headers: this.headers },
              r,
            ),
            error: null,
          };
        } catch (o) {
          return { data: null, error: o };
        }
      });
    }
    _getFinalPath(t) {
      return `${this.bucketId}/${t}`;
    }
    _removeEmptyFolders(t) {
      return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
  };
var j = class extends _ {
  constructor(t, e = {}, r) {
    super(t, e, r);
  }
  from(t) {
    return new $(this.url, this.headers, t, this.fetch);
  }
};
export { j as StorageClient, j as SupabaseStorageClient };
