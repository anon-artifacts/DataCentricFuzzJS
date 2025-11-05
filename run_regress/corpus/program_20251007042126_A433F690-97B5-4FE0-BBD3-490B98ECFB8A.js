function g() {
}
function f(a2) {
    var test;
    if (a2) {
        g.apply(null, arguments);
        var test = 1;
    } else {
        f(false);
    }
}
f(true);
