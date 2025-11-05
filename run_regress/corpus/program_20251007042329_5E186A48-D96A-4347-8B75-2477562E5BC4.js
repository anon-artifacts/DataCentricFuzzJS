function foo(a1) {
    var s = "";
    for (const v4 in a1) {
        s += v4;
    }
    return s;
}
var a = [];
foo(a);
foo(a);
foo(a);
const t8 = Array.prototype;
t8.x = 4;
foo(a);
