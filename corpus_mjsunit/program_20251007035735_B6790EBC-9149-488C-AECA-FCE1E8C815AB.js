var __counter = 0;
function test0() {
    __counter++;
    var obj0 = {};
    var obj1 = {};
    function f8() {
    }
    var func1 = f8;
    function f10() {
    }
    var func2 = f10;
    obj0.method1 = func1;
    obj1.method1 = func2;
    protoObj0 = Object.create(obj0);
    protoObj1 = Object.create(obj1);
    obj0 = protoObj1;
    var __loopvar3 = 0;
    for (; __loopvar3 < 3; __loopvar3++) {
        function f24() {
            for (let i26 = 0; i26 < arguments.length; ++i26) {
                var uniqobj5 = [protoObj0,obj0];
                uniqobj5[__counter % uniqobj5.length].method1();
            }
        }
        f24(1);
    }
}
test0();
test0();
test0();
print("PASSED\n");
