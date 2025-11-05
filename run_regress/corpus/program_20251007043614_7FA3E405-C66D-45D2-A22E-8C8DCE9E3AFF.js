function test() {
    var get = [];
    const v7 = { length: 2, 0: 0, 1: 0 };
    function f8(a9, a10) {
        get.push(a10);
        return a9[a10];
    }
    const v14 = new Proxy(v7, { get: f8 });
    var p = v14;
    const v16 = {};
    Function.prototype.apply(v16, p);
    return (get + "") === "length,0,1";
}
if (!test()) {
    const v28 = new Error("Test failed");
    throw v28;
}
