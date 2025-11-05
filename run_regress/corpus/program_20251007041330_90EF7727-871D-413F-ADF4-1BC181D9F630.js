function g(a1, a2, a3, a4) {
    return ((("" + a1) + a2) + a3) + a4;
}
var x = 1;
function f(a13, a14, a15) {
    arguments[1] = 2;
    arguments[2] = 3;
    arguments[3] = 4;
    if (!x) {
        arguments.length = 4;
    }
    var k;
    for (let i28 = 0; i28 < 10; i28++) {
        k = g.apply(this, arguments);
    }
    return k;
}
f(1);
x = 0;
f(1);
