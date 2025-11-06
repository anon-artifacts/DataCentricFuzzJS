function f(a1, a2) {
    var a = 0;
    if (a2) {
        var c = 1 << a1;
        a = c + c;
    }
    var x = a >> 3;
    return a;
}
f(1, false);
f(1, true);
(1 << 30) * 2;
f(30, true);
var global = 1;
function f2(a29) {
    var a = 0;
    if (a29) {
        a = global;
    }
    var x = a >> 3;
    return a;
}
f2(false);
f2(true);
global = 2.5;
f2(true);
