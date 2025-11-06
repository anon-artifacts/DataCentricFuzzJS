function f0(a1, a2) {
    return (a1 % a2) | 0;
}
var f = f0;
f(10, 0);
function f11(a12, a13) {
    return (a12 % a13) | 0;
}
var f = f11;
f(0, 0);
function f22(a23, a24) {
    return (a23 % a24) | 0;
}
var f = f22;
f(-Math.pow(2, 31), -1);
function f38(a39, a40) {
    return (a39 % a40) | 0;
}
var f = f38;
f(-4, 4);
function f50(a51) {
    return (a51 % 4) | 0;
}
var f = f50;
f(-4);
function f61(a62) {
    return (a62 % 4) | 0;
}
var f = f61;
f(0);
function f71(a72) {
    return (a72 % 3) | 0;
}
var f = f71;
f(-3);
function f82(a83) {
    return (a83 % 3) | 0;
}
var f = f82;
f(0);
