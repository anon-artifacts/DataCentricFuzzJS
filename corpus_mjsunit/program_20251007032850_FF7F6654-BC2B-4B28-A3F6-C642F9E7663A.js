function bind(a1) {
    const v2 = a1.bind;
    return a1.call.apply(v2, arguments);
}
function g(a7, a8) {
}
for (let i10 = 0; i10 < 20; ++i10) {
    const v17 = {};
    function f18() {
    }
    g.call(undefined, v17, bind(f18));
}
