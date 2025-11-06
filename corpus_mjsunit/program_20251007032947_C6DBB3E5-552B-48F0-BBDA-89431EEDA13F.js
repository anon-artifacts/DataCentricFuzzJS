function ToDictionaryMode(a1) {
}
var A;
var B;
var C;
A = {};
function f10() {
}
Object.defineProperty(A, "foo", { value: f10 });
B = Object.create(A);
function f16() {
    return 111;
}
Object.defineProperty(B, "foo", { value: f16 });
C = Object.create(B);
function bar(a22) {
    return a22.foo();
}
bar(C);
bar(C);
ToDictionaryMode(B);
bar(C);
A = {};
function f33() {
}
Object.defineProperty(A, "baz", { get: f33 });
B = Object.create(A);
function f38() {
    return 111;
}
Object.defineProperty(B, "baz", { get: f38 });
C = Object.create(B);
function boo(a44) {
    return a44.baz;
}
boo(C);
boo(C);
ToDictionaryMode(B);
boo(C);
A = {};
function f55(a56) {
}
Object.defineProperty(A, "huh", { set: f55 });
B = Object.create(A);
var setterValue;
function f63(a64) {
    setterValue = a64;
}
Object.defineProperty(B, "huh", { set: f63 });
C = Object.create(B);
function fuu(a69) {
    setterValue = 222;
    a69.huh = 111;
    return setterValue;
}
fuu(C);
fuu(C);
ToDictionaryMode(B);
fuu(C);
