function test() {
    var proxied = {};
    var passed = false;
    function f6(a7) {
        passed = a7 === proxied;
        return Object.preventExtensions(proxied);
    }
    const v12 = new Proxy(proxied, { preventExtensions: f6 });
    Object.preventExtensions(v12);
    return passed;
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
