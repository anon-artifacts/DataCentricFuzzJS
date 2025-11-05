while (true) {
    function f1() {
        function bar() {
            const v4 = this.prop2;
            this.method0.apply(v4, arguments);
        }
        return bar;
    }
    var v13 = { v14: f1 };
    var v15 = {};
    v15.v16 = v13.v14();
    function f14() {
        this.v20;
    }
    const v17 = { method0: f14 };
    const t15 = v15.v16;
    t15.prototype = v17;
    v15.v18 = v13.v14();
    function f20() {
        const t19 = v15.v16;
        new t19();
    }
    const v23 = { method0: f20 };
    const t23 = v15.v18;
    t23.prototype = v23;
    const t25 = v15.v18;
    const v26 = new t25();
    var v35 = v26;
    const t28 = v15.v18;
    const v29 = new t28();
    var v36 = v29;
    break;
}
print("PASSED");
