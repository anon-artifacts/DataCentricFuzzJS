function f(a1, a2) {
    a1 == a2;
}
const v4 = {};
f(v4, {});
var a = { y: 1.5 };
a.y = 777;
var b = a.y;
function h() {
    var d = 1;
    var e = 777;
    while (d-- > 0) {
        e++;
    }
    f(1, e);
}
var global;
function g() {
    global = b;
    return h(b);
}
g();
g();
g();
