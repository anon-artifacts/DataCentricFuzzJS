function TestSin(a1) {
    var r1 = Math.sin(a1);
    return r1;
}
var r = TestSin("string");
isNaN(r);
function TestPow(a11, a12) {
    var r1 = Math.pow(a11, a12);
    return r1;
}
var r = TestPow(2, "string");
isNaN(r);
function f21() {
    var i = -8100000000000000000;
    var r = Math.pow(1, Math.exp(Math.atan2(1, ~i - 737882964)));
}
f21();
function f36() {
    var e = 1;
    return Math.pow(e >> 1, 3.2);
}
f36();
function f45() {
    var e = 1;
    e >>= 1;
    Math.atan2(1, Math.pow(1, Math.tan(-1031883772 * Math.abs(-951135089))));
}
f45();
function f61() {
    const v63 = new Array();
    var ary = v63;
    ary[0] = 0;
    Math.pow(1808815940.1, -ary[0]);
}
f61();
function f72() {
    return Math.pow(Math.sin(1), Math.pow(1, 1));
}
f72();
function f81() {
    var o = { x: 0 };
    function f85() {
        Math.pow(1.1, o.x * -1);
    }
    var func0 = f85;
    Math.atan2(func0(), 1);
}
f81();
for (const v102 in [0,1]) {
    isNaN(Math.pow(Math.pow(/x/, 0.1), 0.1));
}
var accumulator = "";
function vOf() {
    accumulator += "x";
    return 3;
}
var vOf = vOf;
function testFunc() {
    var i = 1;
    do {
        const v119 = { valueOf: vOf };
        var x = Math.pow(i = v119, v119);
    } while (vOf == undefined)
}
testFunc();
print("x" == accumulator);
