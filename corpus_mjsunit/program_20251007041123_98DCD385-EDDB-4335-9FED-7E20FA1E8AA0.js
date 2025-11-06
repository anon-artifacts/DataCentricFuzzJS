function test() {
    var proxied = {};
    var passed = false;
    function f7(a8, a9) {
        passed = (a8 === proxied) && (a9 === "foo");
    }
    const v15 = new Proxy(proxied, { has: f7 });
    "foo" in v15;
    return passed;
}
if (!test()) {
    const v21 = new Error("Test failed");
    throw v21;
}
