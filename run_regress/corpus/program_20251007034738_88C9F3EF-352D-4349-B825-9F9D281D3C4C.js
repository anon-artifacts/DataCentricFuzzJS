function f0() {
}
function C() {
}
C.prototype = 1;
Object.getOwnPropertyDescriptor(C, "prototype").configurable;
f0(0, 0, "ok");
