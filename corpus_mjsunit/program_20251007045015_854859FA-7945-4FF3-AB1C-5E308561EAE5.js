function test() {
    var get = [];
    function f4() {
        return null;
    }
    const v6 = { exec: f4 };
    function f7(a8, a9) {
        get.push(a9);
        return a8[a9];
    }
    const v13 = new Proxy(v6, { get: f7 });
    var p = v13;
    RegExp.prototype.test.call(p);
    return (get + "") === "exec";
}
if (!test()) {
    const v27 = new Error("Test failed");
    throw v27;
}
