function test() {
    var proxied = {};
    var passed = false;
    function f7(a8, a9) {
        passed = (a8 === proxied) && (a9 === "foo");
    }
    const v15 = new Proxy(proxied, { has: f7 });
    "foo" in Object.create(v15);
    return passed;
}
if (!test()) {
    const v23 = new Error("Test failed");
    throw v23;
}
