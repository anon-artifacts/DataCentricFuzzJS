function test() {
    function correctProtoBound(a2) {
        function f3() {
        }
        var f = f3;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(f, a2);
        } else {
            f.__proto__ = a2;
        }
        var boundF = Function.prototype.bind.call(f, null);
        return Object.getPrototypeOf(boundF) === a2;
    }
    const v18 = correctProtoBound(Function.prototype);
    return (v18 && correctProtoBound({})) && correctProtoBound(null);
}
if (!test()) {
    const v29 = new Error("Test failed");
    throw v29;
}
