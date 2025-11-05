function test0() {
    var obj0 = {};
    var obj1 = {};
    var protoObj1 = {};
    function f7() {
    }
    var func3 = f7;
    obj1.method0 = func3;
    var VarArr0 = Array();
    protoObj1 = Object.create(obj1);
    protoObj1.prop0 = -3503483882018379776;
    VarArr0[0] = -689066480;
    VarArr0[1] = -766274957.9;
    for (const v20 in VarArr0) {
        protoObj1.length = -51;
        for (const v23 in protoObj1) {
            if (v23.indexOf("method") != -1) {
                continue;
            }
            protoObj1[v23] = typeof obj0.prop0;
            protoObj1.method0.call();
            function f33() {
            }
            function f34() {
            }
            protoObj1 = { method0: f33, method1: f34 };
            protoObj1.prop0 = protoObj1.prop1;
        }
    }
}
test0();
print("pass");
