function test() {
    var get = [];
    const v8 = [0,1,2,3];
    function f9(a10, a11) {
        get.push(a11);
        return a10[a11];
    }
    const v15 = new Proxy(v8, { get: f9 });
    var p = v15;
    Array.prototype.shift.call(p);
    return (get + "") === "length,0,1,2,3";
}
if (!test()) {
    const v29 = new Error("Test failed");
    throw v29;
}
