function f(a1, a2) {
    try {
    } catch(e3) {
    }
    return a1[a2];
}
function test() {
    var o = { foo: 1, bar: 2, foobar: 3 };
    for (let i12 = 0; i12 < 30; i12++) {
        f(o, ("foo1").substr(0, 3));
        f(o, ("bar1").substr(0, 3));
        f(o, ("foobar1").substr(0, 6));
    }
}
test();
