function testDeoptLocal() {
    'use strict';
    function constructor1(a2) {
        return arguments;
    }
    function func() {
        var o1 = constructor1(1, 2, 3);
        var o2 = constructor1(4, o1);
        o1[0] = o1;
        o1[0];
        o1[1];
        o1[2];
        o2[0];
        o2[1];
    }
    func();
    func();
    func();
}
testDeoptLocal();
