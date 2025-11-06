function test() {
    var get = [];
    const v5 = Function();
    const v6 = { toString: v5 };
    function f7(a8, a9) {
        get.push(a9);
        return a8[a9];
    }
    const v13 = new Proxy(v6, { get: f7 });
    var p = v13;
    p + 3;
    return (get[0] === Symbol.toPrimitive) && ((get.slice(1) + "") === "valueOf,toString");
}
if (!test()) {
    const v32 = new Error("Test failed");
    throw v32;
}
