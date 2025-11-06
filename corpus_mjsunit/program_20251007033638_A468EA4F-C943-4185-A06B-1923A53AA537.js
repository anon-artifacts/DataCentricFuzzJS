function h(a1) {
    return a1();
}
function f() {
    var g;
    for (let i7 = 0; i7 < 10; i7++) {
        var y = i7;
        if (i7 === 5) {
            function f16() {
                return y;
            }
            h(g = f16);
            h(g);
            h(g);
        }
    }
    return g;
}
var myg = f();
h(myg);
