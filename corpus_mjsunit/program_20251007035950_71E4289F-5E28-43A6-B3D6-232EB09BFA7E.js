const v4 = Array.prototype[Symbol.iterator];
const t1 = Object.prototype;
t1[Symbol.iterator] = v4;
var s;
function g(a11) {
    for (const v12 of a11) {
        s += v12;
    }
}
function f() {
    g(arguments);
}
s = "";
f(1, 2, 3);
