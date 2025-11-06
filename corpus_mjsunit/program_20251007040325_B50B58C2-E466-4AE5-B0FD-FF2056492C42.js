function test0() {
    var loopInvariant = 0;
    var obj0 = {};
    var protoObj0 = {};
    var protoObj1 = {};
    var obj2 = {};
    function f11() {
    }
    var func0 = f11;
    function f13() {
    }
    var func4 = f13;
    obj0.method0 = func0;
    obj0.method1 = obj0.method0;
    obj2.method0 = func4;
    const v16 = obj0.method0;
    const t16 = Object.prototype;
    t16.method0 = v16;
    const v20 = new Int32Array();
    var i32 = v20;
    const v23 = new Float64Array();
    var f64 = v23;
    var FloatArr0 = Array();
    var VarArr0 = [obj0,-806936368,-77,-1052351948922210048];
    function v5() {
        var __loopvar2 = loopInvariant;
        do {
            if (__loopvar2 >= 2) {
                break;
            }
            __loopvar2++;
            function func10() {
            }
            var uniqobj5 = func10(FloatArr0.unshift(VarArr0[__loopvar2 + 1]));
            var uniqobj6 = [obj2];
            var uniqobj7 = uniqobj6[0];
            uniqobj7.method0();
        } while ((() => {
                const v53 = obj0.method1;
                let v55 = Object.prototype.prop4;
                const v57 = new v53(v55++);
                return ~(((i32[v57.prop4 & 255] * (typeof protoObj0.prop2 != "undefined")) - ((typeof protoObj1.prop6 != "undefined") instanceof (typeof EvalError == "function" ? EvalError : Object))) * (f64[(FloatArr0.unshift(test0.caller, (typeof protoObj1.prop6 != "undefined") instanceof (typeof EvalError == "function" ? EvalError : Object), VarArr0[loopInvariant + 1]) & (this.prop5 <= Object.prototype.length)) & 255] - 200));
            })())
    }
    v5();
    v5();
    for (let i108 = 0; obj2;) {
        i108++;
        if (i108 >= 3) {
            break;
        }
        function func13() {
        }
        const v115 = new func13();
        obj2 = v115;
    }
    v5();
}
test0();
test0();
print("pass");
