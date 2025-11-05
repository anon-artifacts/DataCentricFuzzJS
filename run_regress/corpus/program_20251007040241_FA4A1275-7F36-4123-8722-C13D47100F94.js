var target;
function testProxy(a3, a4) {
    Object.defineProperty(a3, a4, { value: "bar", writable: true, enumerable: false, configurable: true });
    var desc = Object.getOwnPropertyDescriptor(target, a4);
    desc.value;
    desc.writable;
    desc.enumerable;
    desc.configurable;
}
for (const v27 of ["foo",Symbol("quux")]) {
    target = {};
    const v31 = new Proxy(target, {});
    testProxy(v31, v27);
    target = {};
    testProxy(Proxy.revocable(target, {}).proxy, v27);
}
