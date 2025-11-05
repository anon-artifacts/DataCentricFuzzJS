console.log("This test checks that methods called directly on primitive types get the wrapper, not the primitive, as the 'this' object.");
function f3() {
    return typeof this;
}
const t4 = String.prototype;
t4.thisType = f3;
function f8() {
    return typeof this;
}
const t9 = Number.prototype;
t9.thisType = f8;
function f13() {
    return typeof this;
}
const t14 = Boolean.prototype;
t14.thisType = f13;
(2.1).thisType();
(2.3).thisType();
("xxx").thisType();
false.thisType();
