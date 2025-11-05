function test() {
    var set = [];
    const v10 = [1,2,3,4,5,6];
    function f11(a12, a13, a14) {
        set.push(a13);
        a12[a13] = a14;
        return true;
    }
    const v18 = new Proxy(v10, { set: f11 });
    var p = v18;
    p.copyWithin(0, 3);
    return (set + "") === "0,1,2";
}
if (!test()) {
    const v31 = new Error("Test failed");
    throw v31;
}
