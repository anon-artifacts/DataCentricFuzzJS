function test() {
    var proxied = {};
    var passed = false;
    function f6(a7) {
        passed = a7 === proxied;
        return true;
    }
    const v11 = new Proxy(proxied, { isExtensible: f6 });
    Object.isExtensible(v11);
    return passed;
}
if (!test()) {
    const v18 = new Error("Test failed");
    throw v18;
}
