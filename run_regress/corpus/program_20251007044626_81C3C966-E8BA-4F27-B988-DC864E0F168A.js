function f0() {
    const v2 = new Error();
    throw v2;
}
function f1() {
    o[0]();
}
function f2() {
    o[1]();
}
function f3() {
    o[2]();
}
var o = [f0,f1,f2,f3];
function f17(a18, a19) {
    Error.prepareStackTrace = undefined;
    try {
        a19.length;
        for (let i25 = 0; i25 < (a19.length - 1); i25++) {
            o[i25];
            a19[i25].getFunction();
            a19[i25].getThis();
            a19[i25].receiver;
            a19[i25].fun;
            a19[i25].pos;
        }
        return "success";
    } catch(e48) {
        return "fail";
    }
}
Error.prepareStackTrace = f17;
try {
    o[3]();
} catch(e53) {
    e53.stack;
}
function f0() {
    const v57 = new Error();
    throw v57;
}
function f1() {
    o[0]();
}
function f2() {
    'use strict';
    o[1]();
}
function f3() {
    o[2]();
}
var o = [f0,f1,f2,f3];
function f69(a70, a71) {
    Error.prepareStackTrace = undefined;
    try {
        a71.length;
        for (let i76 = 0; i76 < 2; i76++) {
            o[i76];
            a71[i76].getFunction();
            a71[i76].getThis();
        }
        for (let i88 = 2; i88 < a71.length; i88++) {
            a71[i88].getFunction();
            a71[i88].getThis();
        }
        for (let i101 = 0; i101 < (a71.length - 1); i101++) {
            "f" + i101;
            a71[i101].getFunctionName();
        }
        return "success";
    } catch(e114) {
        return e114;
    }
}
Error.prepareStackTrace = f69;
try {
    o[3]();
} catch(e117) {
    e117.stack;
}
function f0() {
    'use strict';
    const v121 = new Error();
    throw v121;
}
function f1() {
    o[0]();
}
function f2() {
    o[1]();
}
function f3() {
    o[2]();
}
var o = [f0,f1,f2,f3];
function f133(a134, a135) {
    Error.prepareStackTrace = undefined;
    try {
        a135.length;
        for (let i140 = 0; i140 < a135.length; i140++) {
            a135[i140].getFunction();
            a135[i140].getThis();
            if (i140 < (a135.length - 1)) {
                "f" + i140;
                a135[i140].getFunctionName();
            }
        }
        return "success";
    } catch(e161) {
        return e161;
    }
}
Error.prepareStackTrace = f133;
try {
    o[3]();
} catch(e164) {
    e164.stack;
}
