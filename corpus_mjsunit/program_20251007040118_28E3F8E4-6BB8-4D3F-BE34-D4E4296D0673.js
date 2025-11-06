var __counter = 0;
function test0() {
    __counter++;
    var obj0 = {};
    var protoObj0 = {};
    var obj1 = {};
    function f10() {
    }
    var func0 = f10;
    function f12() {
        return func4.caller;
    }
    var func4 = f12;
    obj0.method1 = func0;
    obj1.method0 = func4;
    const v16 = obj0.method1;
    const t16 = Object.prototype;
    t16.method0 = v16;
    var ary = Array();
    ary[0] = 41697303.1;
    var protoObj1 = Object(obj1);
    for (const v25 in ary) {
        function v18() {
            for (let i28 = 0; i28 < 3; i28++) {
                function f34() {
                    var uniqobj8 = [protoObj1,protoObj0];
                    uniqobj8[__counter % uniqobj8.length].method0();
                }
                f34();
            }
        }
        v18();
    }
}
test0();
test0();
print("Passed");
