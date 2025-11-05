var gTestfile = "isPrototypeOf.js";
var BUGNUMBER = 619283;
var summary = "Object.prototype.isPrototypeOf";
print((BUGNUMBER + ": ") + summary);
function expectThrowTypeError(a12) {
    try {
        var r = a12();
        const v18 = new Error("didn't throw TypeError, returned " + r);
        throw v18;
    } catch(e19) {
        e19 instanceof TypeError;
        "didn't throw TypeError, got: " + e19;
    }
}
var isPrototypeOf = Object.prototype.isPrototypeOf;
isPrototypeOf();
isPrototypeOf(1);
isPrototypeOf(Number.MAX_VALUE);
isPrototypeOf(NaN);
isPrototypeOf("");
isPrototypeOf("sesquicentennial");
isPrototypeOf(true);
isPrototypeOf(false);
isPrototypeOf(0.72);
isPrototypeOf(undefined);
isPrototypeOf(null);
var protoGlobal = Object.create(this);
function f65() {
    isPrototypeOf.call(null, {});
}
expectThrowTypeError(f65);
function f70() {
    isPrototypeOf.call(undefined, {});
}
expectThrowTypeError(f70);
function f75() {
    isPrototypeOf({});
}
expectThrowTypeError(f75);
function f79() {
    isPrototypeOf.call(null, protoGlobal);
}
expectThrowTypeError(f79);
function f83() {
    isPrototypeOf.call(undefined, protoGlobal);
}
expectThrowTypeError(f83);
function f87() {
    isPrototypeOf(protoGlobal);
}
expectThrowTypeError(f87);
const v90 = Object.prototype;
Object.prototype.isPrototypeOf(v90);
const v94 = {};
String.prototype.isPrototypeOf(v94);
const v100 = Object.create(null);
Object.prototype.isPrototypeOf(v100);
const v104 = {};
Object.prototype.isPrototypeOf(v104);
this.isPrototypeOf(protoGlobal);
const v111 = {};
Object.prototype.isPrototypeOf(v111);
const v116 = new Number(17);
Object.prototype.isPrototypeOf(v116);
function f120() {
}
Object.prototype.isPrototypeOf(f120);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
