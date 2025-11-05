function test() {
    var set = [];
    const v4 = {};
    function f5(a6, a7, a8) {
        set.push(a7);
        a6[a7] = a8;
        return true;
    }
    const v12 = new Proxy(v4, { set: f5 });
    var p = v12;
    function f14() {
        return p;
    }
    Array.of.call(f14, 1, 2, 3);
    return (set + "") === "length";
}
if (!test()) {
    const v29 = new Error("Test failed");
    throw v29;
}
