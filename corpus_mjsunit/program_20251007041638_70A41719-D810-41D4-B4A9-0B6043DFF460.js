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
    return 1 | a;
}
a = "2";
h();
h();
function k() {
    return a | 1;
}
a = "4";
k();
k();
