function f0() {
    function f1() {
        return "fail";
    }
    return { toString: f1 };
}
function f4() {
    return "good";
}
var o = { valueOf: f0, toString: f4 };
function f8() {
    function f9() {
        return "0";
    }
    return { toString: f9 };
}
function f12() {
    return "7";
}
var p = { valueOf: f8, toString: f12 };
function f16() {
    function f17() {
        return "0";
    }
    return { valueOf: f17 };
}
function f20() {
    return "7";
}
var q = { toString: f16, valueOf: f20 };
function assert(a25, a26) {
    if (a25) {
        return;
    }
    "imacro produces incorrect result for " + a26;
}
function run() {
    for (let i32 = 0; i32 < 5; ++i32) {
        !(o == "fail");
        !("fail" == o);
        !(o != "good");
        !("good" != o);
        !((p | 3) != 7);
        !((3 | p) != 7);
        !((p | p) != 7);
        !((p & 3) != 3);
        !((3 & p) != 3);
        !((p & p) != 7);
        !((p * 3) != 21);
        !((3 * p) != 21);
        !((p * p) != 49);
        !((o + "") != "good");
        !(("" + o) != "good");
        !((o + o) != "goodgood");
        !(-p != -7);
        !(+p != 7);
        !(String(q) != "7");
        const v139 = new String(q);
        !(v139 != "7");
    }
    return true;
}
run();
