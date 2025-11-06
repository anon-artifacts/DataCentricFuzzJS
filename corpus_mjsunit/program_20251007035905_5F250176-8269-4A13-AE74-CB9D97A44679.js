function test() {
    var get = [];
    var iterable = {};
    function f5() {
        function f6() {
            const v10 = { value: 2, done: false };
            function f11(a12, a13) {
                get.push(a13);
                return a12[a13];
            }
            const v17 = new Proxy(v10, { get: f11 });
            return v17;
        }
        return { next: f6 };
    }
    iterable[Symbol.iterator] = f5;
    var i = 0;
    for (const v23 of iterable) {
        if (++i >= 2) {
            break;
        }
    }
    return (get + "") === "done,value,done,value";
}
if (!test()) {
    const v35 = new Error("Test failed");
    throw v35;
}
