function f0() {
    'use strict';
    var a = 23;
    function f() {
        for (let i5 = 0; i5 < 5; ++i5) {
            a--;
            function g() {
                return i5;
            }
        }
        return a;
    }
    f();
}
f0();
