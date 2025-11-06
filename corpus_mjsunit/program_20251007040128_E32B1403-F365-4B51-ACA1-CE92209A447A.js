function f0() {
    function eq(a2, a3) {
        return a2 == a3;
    }
    const v5 = () => {
        return "o";
    };
    const v8 = Symbol.toPrimitive;
    var o = { [v8]: v5 };
    eq(o, o);
    eq(o, o);
    eq(o, o);
    eq("o", o);
    eq(o, "o");
    eq(o, o);
    eq("o", o);
    eq(o, "o");
    eq();
}
f0();
function f25() {
    function ne(a27, a28) {
        return a27 != a28;
    }
    const v30 = () => {
        return "o";
    };
    const v33 = Symbol.toPrimitive;
    var o = { [v33]: v30 };
    ne(o, o);
    ne(o, o);
    ne(o, o);
    ne("o", o);
    ne(o, "o");
    ne(o, o);
    ne("o", o);
    ne(o, "o");
    ne();
}
f25();
function f50() {
    function eq(a52, a53) {
        return a52 == a53;
    }
    var a = {};
    var b = { b: b };
    function f60() {
    }
    var u = f60;
    eq(a, a);
    eq(b, b);
    eq(a, b);
    eq(b, a);
    eq(a, a);
    eq(b, b);
    eq(a, b);
    eq(b, a);
    eq(a, a);
    eq(b, b);
    eq(a, b);
    eq(b, a);
    eq(null, u);
    eq(undefined, u);
    eq(u, null);
    eq(u, undefined);
    eq(a, a);
    eq(b, b);
    eq(a, b);
    eq(b, a);
    eq(null, u);
    eq(undefined, u);
    eq(u, null);
    eq(u, undefined);
    eq();
}
f50();
function f96() {
    function ne(a98, a99) {
        return a98 != a99;
    }
    var a = {};
    var b = { b: b };
    function f106() {
    }
    var u = f106;
    ne(a, a);
    ne(b, b);
    ne(a, b);
    ne(b, a);
    ne(a, a);
    ne(b, b);
    ne(a, b);
    ne(b, a);
    ne(a, a);
    ne(b, b);
    ne(a, b);
    ne(b, a);
    ne(null, u);
    ne(undefined, u);
    ne(u, null);
    ne(u, undefined);
    ne(a, a);
    ne(b, b);
    ne(a, b);
    ne(b, a);
    ne(null, u);
    ne(undefined, u);
    ne(u, null);
    ne(u, undefined);
    ne();
}
f96();
