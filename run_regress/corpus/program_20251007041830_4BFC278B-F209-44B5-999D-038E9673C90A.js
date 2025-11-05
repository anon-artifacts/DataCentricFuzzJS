function test() {
    var get = [];
    const v7 = { length: 2, 0: "", 1: "" };
    function f8(a9, a10) {
        get.push(a10);
        return a9[a10];
    }
    const v14 = new Proxy(v7, { get: f8 });
    var p = v14;
    Array.from(p);
    return (get[0] === Symbol.iterator) && ((get.slice(1) + "") === "length,0,1");
}
if (!test()) {
    const v33 = new Error("Test failed");
    throw v33;
}
