function test() {
    var proxied = {};
    var passed = false;
    function f6(a7, a8, a9, a10) {
        passed = ((a7 === proxied) && ((a8 + a9) === "foobar")) && (a10 === proxy);
    }
    const v20 = new Proxy(proxied, { set: f6 });
    var proxy = Object.create(v20);
    proxy.foo = "bar";
    return passed;
}
if (!test()) {
    const v29 = new Error("Test failed");
    throw v29;
}
