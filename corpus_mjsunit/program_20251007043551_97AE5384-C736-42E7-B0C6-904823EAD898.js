function foo(a1) {
    var s = "";
    for (const v4 in a1) {
        s += v4;
    }
    return s;
}
var o = {};
foo(o);
foo(o);
foo(o);
const t8 = Object.prototype;
t8[0] = 1;
foo(o);
