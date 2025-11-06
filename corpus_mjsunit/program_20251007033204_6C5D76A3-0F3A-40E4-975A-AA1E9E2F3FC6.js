function test() {
    var get = [];
    const v4 = {};
    function f5(a6, a7) {
        get.push(a7);
        return a6[a7];
    }
    const v11 = new Proxy(v4, { get: f5 });
    var p = v11;
    function f14(a15) {
        a15(p);
    }
    new Promise(f14);
    return (get + "") === "then";
}
if (!test()) {
    const v26 = new Error("Test failed");
    throw v26;
}
