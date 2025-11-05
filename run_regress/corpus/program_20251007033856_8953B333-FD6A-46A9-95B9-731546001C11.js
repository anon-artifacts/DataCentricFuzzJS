function test() {
    var get = [];
    var proxied = {};
    const v6 = Function();
    proxied[Symbol.toPrimitive] = v6;
    function f10(a11, a12) {
        get.push(a12);
        return a11[a12];
    }
    const v16 = new Proxy(proxied, { get: f10 });
    var p = v16;
    ("").search(p);
    return ((get[0] === Symbol.search) && (get[1] === Symbol.toPrimitive)) && (get.length === 2);
}
if (!test()) {
    const v35 = new Error("Test failed");
    throw v35;
}
