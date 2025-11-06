function f0() {
    'use strict';
    var instantReturn = false;
    function inner() {
        if (instantReturn) {
            return;
        }
        arguments.length;
        arguments[0];
        arguments[1];
        arguments[2];
    }
    function outer() {
        inner(1, 2, 3);
    }
    outer();
}
f0();
