function test0() {
    var obj0 = {};
    var obj2 = {};
    function f5() {
    }
    var func1 = f5;
    function f7() {
    }
    var func2 = f7;
    obj0.method0 = func2;
    obj2.method1 = obj0.method0;
    method1 = obj2.method1;
    var IntArr0 = [];
    const v15 = -118;
    const t14 = Object.prototype;
    t14.prop2 = v15;
    function func7() {
        this.prop0 = method1();
        this.prop2 = this.prop3;
    }
    new func7();
    while (prop2) {
        const v27 = new func7();
        var uniqobj2 = v27;
        function f29() {
            function bar() {
            }
            return bar;
        }
        var v0 = { v1: f29 };
        obj2.v6 = v0.v1();
        let v35 = Object.prototype.prop0;
        var v26 = obj2.v6(v35--);
        let v40 = Object.prototype.prop3;
        const v44 = func1(Math.atan2(v40--));
        const v45 = { prop5: v44 };
        const v46 = IntArr0.shift();
        const t37 = Object.prototype;
        t37.prop2 = v46;
    }
}
test0();
test0();
test0();
var FloatArr0 = Array();
FloatArr0[5] = 456463198.1;
function func7(a56, a57) {
    this.prop0 = a56;
    this.prop2 = a57;
}
for (const v60 of FloatArr0) {
    const v62 = new func7(144);
    var uniqobj8 = v62;
    uniqobj8.prop2 = test0;
    uniqobj8.prop3 = test0;
}
print("pass");
