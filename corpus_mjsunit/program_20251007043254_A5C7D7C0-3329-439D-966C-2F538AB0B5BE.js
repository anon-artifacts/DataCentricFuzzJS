function test() {
    function correctProtoBound(a2) {
        const v3 = () => {
            return 5;
        };
        var f = v3;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(f, a2);
        } else {
            f.__proto__ = a2;
        }
        var boundF = Function.prototype.bind.call(f, null);
        return Object.getPrototypeOf(boundF) === a2;
    }
    const v19 = correctProtoBound(Function.prototype);
    return (v19 && correctProtoBound({})) && correctProtoBound(null);
}
if (!test()) {
    const v30 = new Error("Test failed");
    throw v30;
}
