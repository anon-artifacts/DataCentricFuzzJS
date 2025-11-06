var target = {};
for (const v6 of ["foo",Symbol.iterator]) {
    handler = {};
    const v11 = new Proxy(target, handler);
    for (const v15 of [v11,Proxy.revocable(target, handler).proxy]) {
        function f16(a17, a18, a19) {
            called = true;
        }
        handler.get = f16;
        var called = false;
        v15[v6];
    }
}
