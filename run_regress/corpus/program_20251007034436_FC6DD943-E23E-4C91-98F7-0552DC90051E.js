var shouldBailout = false;
function test0() {
    var obj0 = {};
    function f5() {
    }
    var func0 = f5;
    function f7() {
        const v9 = Object.prototype;
        function f11() {
        }
        const v15 = shouldBailout ? Object.defineProperty(v9, "length", { get: f11 }) : arguments;
        function f16() {
            'use strict';
            try {
                function func8() {
                    obj0.prop2;
                }
                var uniqobj4 = func8();
            } catch(e21) {
                return "somestring";
            } finally {
            }
            const t22 = Object.prototype;
            t22.length = protoObj0;
            func0(ary.push(ary.unshift(protoObj0)));
        }
        f16(v15);
    }
    var func1 = f7;
    var ary = Array();
    var protoObj0 = Object();
    function f38() {
    }
    const v41 = shouldBailout ? Object.defineProperty(obj0, "prop2", { set: f38 }) : Object;
    const v42 = { prop7: v41 };
    for (; func1();) {
    }
}
test0();
test0();
shouldBailout = true;
try {
    test0();
} catch(e48) {
    print(e48);
}
