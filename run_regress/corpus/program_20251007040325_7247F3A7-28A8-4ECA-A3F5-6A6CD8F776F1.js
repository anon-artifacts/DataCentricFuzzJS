function test() {
    var ownKeysCalled = 0;
    const v4 = {};
    function f5(a6) {
        ownKeysCalled++;
        return Object.keys(a6);
    }
    const v11 = new Proxy(v4, { ownKeys: f5 });
    var p = v11;
    JSON.stringify({ a: p, b: p });
    return ownKeysCalled === 2;
}
if (!test()) {
    const v22 = new Error("Test failed");
    throw v22;
}
