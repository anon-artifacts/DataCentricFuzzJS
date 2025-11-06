var target = {};
for (const v7 of ["foo",Symbol("bar")]) {
    var called;
    function f10(a11, a12) {
        called = true;
    }
    var handler = { has: f10 };
    const v19 = new Proxy(target, handler);
    for (const v23 of [v19,Proxy.revocable(target, handler).proxy]) {
        called = false;
        v7 in v23;
    }
}
