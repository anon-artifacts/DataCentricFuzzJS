function f0() {
}
var BUGNUMBER = 518663;
var summary = "Object.getOwnPropertyNames: function objects";
f0((BUGNUMBER + ": ") + summary);
function two(a10, a11) {
}
Object.getOwnPropertyNames(two).indexOf("length") >= 0;
const v21 = Function.prototype.bind;
const v23 = two.bind("this");
function two(a25, a26) {
}
var bound0 = v21 ? v23 : two;
Object.getOwnPropertyNames(bound0).indexOf("length") >= 0;
bound0.length;
const v38 = Function.prototype.bind;
const v41 = two.bind("this", 1);
function one(a43) {
}
var bound1 = v38 ? v41 : one;
Object.getOwnPropertyNames(bound1).indexOf("length") >= 0;
bound1.length;
const v55 = Function.prototype.bind;
const v59 = two.bind("this", 1, 2);
function zero() {
}
var bound2 = v55 ? v59 : zero;
Object.getOwnPropertyNames(bound2).indexOf("length") >= 0;
bound2.length;
const v72 = Function.prototype.bind;
const v77 = two.bind("this", 1, 2, 3);
function zero() {
}
var bound3 = v72 ? v77 : zero;
Object.getOwnPropertyNames(bound3).indexOf("length") >= 0;
bound3.length;
f0(true, true);
f0("All tests passed!");
