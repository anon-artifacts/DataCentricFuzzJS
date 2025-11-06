function TestSloppyMode() {
    var e = 1;
    var a = 2;
    const v11 = {
        get eval() {
            return e;
        },
        set eval(a7) {
            e = a7;
        },
        get arguments() {
            return a;
        },
        set arguments(a10) {
            a = a10;
        },
    };
    var o = v11;
    o.eval;
    o.eval = 3;
    o.arguments;
    o.arguments = 4;
}
TestSloppyMode();
function TestStrictMode() {
    'use strict';
    var e = 1;
    var a = 2;
    const v33 = {
        get eval() {
            return e;
        },
        set eval(a29) {
            e = a29;
        },
        get arguments() {
            return a;
        },
        set arguments(a32) {
            a = a32;
        },
    };
    var o = v33;
    o.eval;
    o.eval = 3;
    o.arguments;
    o.arguments = 4;
}
TestStrictMode();
