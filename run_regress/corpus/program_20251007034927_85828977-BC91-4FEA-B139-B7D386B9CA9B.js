function g() {
}
var ct = 0;
function f(a6) {
    var a = arguments;
    if (a6) {
        f(false);
    } else {
        function f11(a12, a13) {
            ++ct;
            typeof a13[0];
        }
        g = { apply: f11 };
    }
    g.apply(null, a);
}
f(true);
