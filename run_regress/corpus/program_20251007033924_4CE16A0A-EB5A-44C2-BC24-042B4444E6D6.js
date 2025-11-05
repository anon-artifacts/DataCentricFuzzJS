var s = Symbol();
var so = Object(s);
var o = { [s]: 0 };
o.propertyIsEnumerable(so);
o.hasOwnProperty(so);
const v13 = Symbol.prototype;
const v14 = Symbol.toPrimitive;
function f15() {
    return "foo";
}
Object.defineProperty(v13, v14, { value: f15 });
o.propertyIsEnumerable(so);
o.hasOwnProperty(so);
o.foo = 123;
o.propertyIsEnumerable(so);
o.hasOwnProperty(so);
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
