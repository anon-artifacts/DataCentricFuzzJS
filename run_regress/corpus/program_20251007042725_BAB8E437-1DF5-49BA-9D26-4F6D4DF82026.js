function Inner() {
    this.property = "OK";
    this.o2 = 1;
}
function Outer(a6) {
    this.inner = a6;
}
const v8 = new Inner();
var inner = v8;
const v10 = new Outer(inner);
var outer = v10;
function f12() {
    return this.inner.property;
}
const t14 = Outer.prototype;
t14.boom = f12;
outer.boom();
outer.boom();
outer.boom();
inner = undefined;
delete outer.inner;
const v28 = new Outer({ field: 1.51, property: "OK" });
(outer = v28).boom();
