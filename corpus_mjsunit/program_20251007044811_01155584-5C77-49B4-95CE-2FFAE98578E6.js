function f(a1) {
    return ~a1;
}
f(42);
~12;
f(12.45);
~42;
f(42.87);
var a = 1;
var b = 2;
var c = 4;
var d = 8;
function g() {
    return a | (b | (c | d));
}
g();
c = "16";
((1 | 2) | 16) | 8;
g();
function h() {
    return g();
}
((1 | 2) | 16) | 8;
h();
function f45() {
    return 42;
}
g = f45;
h();
var obj = {};
obj.g = g;
function k(a52) {
    return a52.g();
}
for (let i55 = 0; i55 < 5; i55++) {
    k(obj);
}
k(obj);
k(obj);
function f66() {
    return 87;
}
k({ g: f66 });
function p(a71, a72) {
    a71 = 42;
    a72 = 1;
    a72 = a72 << "0";
    return a71 | a72;
}
p(0, 0);
function LiteralToStack(a83) {
    return "lit[" + (a83 + "]");
}
LiteralToStack(-87);
LiteralToStack(0);
LiteralToStack(42);
var str = "abc";
var r;
function CallCharAt(a103) {
    return str.charAt(a103);
}
for (let i106 = 0; i106 < 5; i106++) {
    r = CallCharAt(0);
}
r = CallCharAt(0);
function add4(a118, a119, a120, a121) {
    return ((a118 + a119) + a120) + a121;
}
add4(1, 1, 2, 1073741823);
