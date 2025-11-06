function test() {
    function f1() {
    }
    var proxied = f1;
    var passed = false;
    function f6(a7, a8, a9) {
        passed = ((a7 === proxied) && (a8 === host)) && ((a9 + "") === "foo,bar");
    }
    const v20 = new Proxy(proxied, { apply: f6 });
    var host = { method: v20 };
    host.method("foo", "bar");
    return passed;
}
if (!test()) {
    const v30 = new Error("Test failed");
    throw v30;
}
