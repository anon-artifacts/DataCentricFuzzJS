function testDeoptLocal() {
    'use strict';
    function constructor1(a2) {
        return arguments;
    }
    function func(a5) {
        var o1 = constructor1(1, 2, 3);
        o1[0];
        o1[1];
        o1[2];
    }
    func(false);
    func(false);
    func(true);
}
testDeoptLocal();
