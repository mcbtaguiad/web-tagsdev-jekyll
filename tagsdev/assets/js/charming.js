!function(e) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).charming = e()
    }
}(function() {
    return function() {
        return function e(n, r, t) {
            function o(f, u) {
                if (!r[f]) {
                    if (!n[f]) {
                        var a = "function" == typeof require && require;
                        if (!u && a)
                            return a(f, !0);
                        if (i)
                            return i(f, !0);
                        var l = new Error("Cannot find module '" + f + "'");
                        throw l.code = "MODULE_NOT_FOUND",
                        l
                    }
                    var d = r[f] = {
                        exports: {}
                    };
                    n[f][0].call(d.exports, function(e) {
                        return o(n[f][1][e] || e)
                    }, d, d.exports, e, n, r, t)
                }
                return r[f].exports
            }
            for (var i = "function" == typeof require && require, f = 0; f < t.length; f++)
                o(t[f]);
            return o
        }
    }()({
        1: [function(e, n, r) {
            n.exports = function(e, n) {
                n = n || {},
                e.normalize();
                var r = n.splitRegex
                  , t = n.tagName || "span"
                  , o = null != n.classPrefix ? n.classPrefix : "char"
                  , i = 1;
                function f(e) {
                    for (var n = e.parentNode, f = e.nodeValue, u = r ? f.split(r) : f, a = u.length, l = -1; ++l < a; ) {
                        var d = document.createElement(t);
                        o && (d.className = o + i,
                        i++),
                        d.appendChild(document.createTextNode(u[l])),
                        d.setAttribute("aria-hidden", "true"),
                        n.insertBefore(d, e)
                    }
                    "" !== f.trim() && n.setAttribute("aria-label", f),
                    n.removeChild(e)
                }
                !function e(n) {
                    if (3 === n.nodeType)
                        return f(n);
                    var r = Array.prototype.slice.call(n.childNodes)
                      , t = r.length;
                    if (1 === t && 3 === r[0].nodeType)
                        return f(r[0]);
                    for (var o = -1; ++o < t; )
                        e(r[o])
                }(e)
            }
        }
        , {}]
    }, {}, [1])(1)
});