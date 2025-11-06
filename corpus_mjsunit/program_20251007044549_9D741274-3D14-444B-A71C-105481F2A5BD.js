function test() {
    var proxied = {};
    var passed = false;
    function f6(a7, a8, a9) {
        passed = ((a7 === proxied) && (a8 === "foo")) && (a9.value === 5);
        return true;
    }
    const v20 = new Proxy(proxied, { defineProperty: f6 });
    Object.defineProperty(v20, "foo", { value: 5, configurable: true });
    return passed;
}
if (!test()) {
    const v31 = new Error("Test failed");
    throw v31;
}
