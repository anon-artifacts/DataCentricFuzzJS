function TestProtoDeopt() {
    var proto = {};
    function deoptMe() {
        return proto;
    }
    function checkObject(a5, a6, a7) {
        Object.getPrototypeOf(a7);
        a7.hasOwnProperty(a5);
        a7[a5];
    }
    function f(a13, a14) {
        const v15 = deoptMe();
        return { [a13]: a14, __proto__: v15 };
    }
    checkObject("a", 1, f("a", 1));
    checkObject("b", 2, f("b", 2));
    checkObject("c", 3, f("c", 3));
}
TestProtoDeopt();
