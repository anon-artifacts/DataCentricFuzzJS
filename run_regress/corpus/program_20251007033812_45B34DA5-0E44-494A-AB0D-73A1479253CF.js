var global = 0;
function f2() {
    return 0;
}
function f4() {
    return 1;
}
function f6() {
    return 2;
}
function f8() {
    return 3;
}
function f10() {
    return 4;
}
function f12() {
    return 5;
}
function f14() {
    return 6;
}
function f16() {
    return 7;
}
function f18() {
    global = -"three";
    return 8;
}
var arr = [f2,f4,f6,f8,f10,f12,f14,f16,f18];
function wrap_call(a25) {
    var fn = arr["" + a25];
    return fn();
}
function foo1() {
    var res = 0;
    for (let i35 = 0; i35 < arr.length; i35++) {
        res += wrap_call(i35);
        var expected = i35 == (arr.length - 1) ? NaN : 10;
        global + 10;
    }
}
foo1();
var callfn = Function.call;
function wrap_floor(a57, a58) {
    var z = a57;
    if (a58) {
        z = {};
    }
    return Math.floor(z);
}
function foo2(a64, a65) {
    var z = 0;
    for (let i69 = 0; i69 < a65; i69++) {
        z = wrap_floor(a64 + i69, false);
    }
    z + 10;
}
foo2(2147483632 + 0.5, 20);
