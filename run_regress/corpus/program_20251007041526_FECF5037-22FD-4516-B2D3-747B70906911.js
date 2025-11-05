function test() {
    var get = [];
    const v4 = {};
    function f5(a6, a7) {
        get.push(a7);
        return a6[a7];
    }
    const v11 = new Proxy(v4, { get: f5 });
    var p = v11;
    JSON.stringify(p);
    return (get + "") === "toJSON";
}
if (!test()) {
    const v23 = new Error("Test failed");
    throw v23;
}
