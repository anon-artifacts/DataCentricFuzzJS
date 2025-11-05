function TestSloppyMode() {
    const v5 = {
        eval() {
            return 1;
        },
        arguments() {
            return 2;
        },
    };
    var o = v5;
    o.eval();
    o.arguments();
}
TestSloppyMode();
function TestStrictMode() {
    'use strict';
    const v17 = {
        eval() {
            return 1;
        },
        arguments() {
            return 2;
        },
    };
    var o = v17;
    o.eval();
    o.arguments();
}
TestStrictMode();
