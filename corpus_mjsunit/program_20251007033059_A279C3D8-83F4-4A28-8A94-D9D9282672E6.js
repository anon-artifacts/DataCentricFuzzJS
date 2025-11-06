function F() {
}
const v1 = new F();
var f = v1;
var proto = Object.getPrototypeOf(F);
Object.setPrototypeOf(F, null);
function f8(a9) {
    return true;
}
F[Symbol.hasInstance] = f8;
Object.setPrototypeOf(F, proto);
function foo(a15) {
    return a15 instanceof F;
}
foo(1);
