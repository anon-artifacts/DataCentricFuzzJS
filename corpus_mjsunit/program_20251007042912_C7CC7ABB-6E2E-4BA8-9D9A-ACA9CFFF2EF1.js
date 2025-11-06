function test() {
    var get = [];
    const v5 = Function();
    function f6(a7, a8) {
        get.push(a8);
        return a7[a8];
    }
    const v12 = new Proxy(v5, { get: f6 });
    var p = v12;
    class C14 extends p {
    }
    return (get + "") === "prototype";
}
if (!test()) {
    const v23 = new Error("Test failed");
    throw v23;
}
