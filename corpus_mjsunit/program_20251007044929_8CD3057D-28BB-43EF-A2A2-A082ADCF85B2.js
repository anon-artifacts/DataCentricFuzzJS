function f0() {
}
var o = { __iterator__: null, a: 1, b: 2, c: 3 };
var expect = "__iterator__,a,b,c,";
var actual = "";
try {
    for (const v11 in o) {
        actual += v11 + ",";
    }
} catch(e14) {
    actual = "" + e14;
    if (/invalid __iterator__ value/.test(actual) || /null is not a function/.test(actual)) {
        expect = actual;
    }
}
f0(expect, actual, "ok");
