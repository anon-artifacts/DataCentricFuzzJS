function foo(a1, a2, a3, a4) {
    if (!a3) {
    }
    a1.x = a2;
    return a3 + a4;
}
function bar() {
    var objz = { x: 2 };
    for (let i14 = 0; i14 < 1100; i14++) {
        foo(objz, 1, 2, 3);
        foo(objz, false, "bar", "foo");
    }
}
bar();
