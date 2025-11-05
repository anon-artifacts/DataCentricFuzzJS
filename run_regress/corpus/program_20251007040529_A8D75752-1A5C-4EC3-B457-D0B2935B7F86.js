const v3 = ["A","B"];
var d = Array.from.call(Date, v3);
Array.isArray(d);
Object.prototype.toString.call(d);
Object.getPrototypeOf(d);
Date.prototype;
d.length;
d[0];
d[1];
const v23 = [];
var obj = Array.from.call(Object, v23);
Array.isArray(obj);
Object.getPrototypeOf(obj);
Object.prototype;
Object.getOwnPropertyNames(obj).join(",");
obj.length;
function C(a38) {
    this.args = arguments;
}
const v43 = { length: 1, 0: "zero" };
var c = Array.from.call(C, v43);
c instanceof C;
c.args.length;
c.args[0];
c.length;
c[0];
var arr = [3,4,5];
const v64 = {};
const v66 = Object.getPrototypeOf;
const v69 = () => {
    return {};
};
var nonconstructors = [v64,Math,v66,,17,v69];
for (const v73 of nonconstructors) {
    Array.isArray(obj = Array.from.call(v73, arr));
}
function NotArray() {
}
var RealArray = Array;
NotArray.from = Array.from;
Array = NotArray;
RealArray.from([1]) instanceof RealArray;
NotArray.from([1]) instanceof NotArray;
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
