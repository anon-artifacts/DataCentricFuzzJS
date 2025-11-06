function test0() {
    var obj0 = {};
    var arrObj0 = {};
    function f5() {
    }
    var func0 = f5;
    function f7() {
        const v9 = -46;
        const v12 = -2147483648;
        const v14 = -6026250548246089728;
        const v15 = {
            prop0: v9,
            prop1: 3,
            prop2: v12,
            length: v14,
            method0: func0,
        };
        const v16 = { lf0: v15 };
        const v17 = { nd0: v16 };
        var obj4 = { nd0: v17 };
        d ^= obj4.nd0.nd0.lf0.method0();
        const t20 = obj4.nd0.nd0;
        t20.lf0 = 1;
        this.prop1 |= obj4.nd0.nd0.lf0.method0.call(obj0);
    }
    var func1 = f7;
    const t26 = Object.prototype;
    t26.method0 = func1;
    var d = 1;
    arrObj0.method0();
}
var testOutcome = false;
try {
    test0();
    test0();
    test0();
    runningJITtedCode = true;
    test0();
    test0();
    test0();
} catch(e50) {
}
