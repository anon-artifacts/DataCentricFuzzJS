function sloppyPackedArguments() {
    function f(a2) {
        for (let i4 = 0; i4 < 2; i4++) {
            a2[i4] = 0;
        }
    }
    var boom;
    function g() {
        var a = arguments;
        f(a);
        boom = a[5];
    }
    f([]);
    g(1);
}
sloppyPackedArguments();
function strictPackedArguments() {
    'use strict';
    function f(a26) {
        for (let i28 = 0; i28 < 2; i28++) {
            a26[i28] = 0;
        }
    }
    var boom;
    function g() {
        var a = arguments;
        f(a);
        boom = a[5];
    }
    f([]);
    g(1);
}
strictPackedArguments();
