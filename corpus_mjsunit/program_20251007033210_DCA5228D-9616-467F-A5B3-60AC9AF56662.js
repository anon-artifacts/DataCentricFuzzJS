function test() {
    var proxied = {};
    var passed = false;
    function f6(a7, a8) {
        passed = (a7 === proxied) && (a8 === "foo");
    }
    const v14 = new Proxy(proxied, { deleteProperty: f6 });
    delete v14.foo;
    return passed;
}
if (!test()) {
    const v20 = new Error("Test failed");
    throw v20;
}
