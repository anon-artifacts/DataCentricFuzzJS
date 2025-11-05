function test() {
    var set = [];
    const v4 = [];
    function f5(a6, a7, a8) {
        set.push(a7);
        a6[a7] = a8;
        return true;
    }
    const v12 = new Proxy(v4, { set: f5 });
    var p = v12;
    p.pop();
    return (set + "") === "length";
}
if (!test()) {
    const v23 = new Error("Test failed");
    throw v23;
}
