function bind(a1) {
    const v2 = a1.bind;
    return a1.call.apply(v2, arguments);
}
function h(a7, a8) {
    a7.x;
}
function g(a11, a12) {
    a11.x = a12;
    h(a11);
}
function f() {
    for (let i16 = 0; i16 < 20; i16++) {
        const v23 = {};
        function f24() {
        }
        g.call(this, v23, bind(f24));
    }
}
f();
