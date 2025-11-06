var BUGNUMBER = 430133;
var summary = "ES5 Object.defineProperty(O, P, Attributes)";
print((BUGNUMBER + ": ") + summary);
var o = [];
Object.defineProperty(o, 0, { value: 17 });
var desc = Object.getOwnPropertyDescriptor(o, 0);
desc !== undefined;
desc.value;
desc.enumerable;
desc.configurable;
desc.writable;
desc = Object.getOwnPropertyDescriptor(o, "length");
desc !== undefined;
desc.enumerable;
desc.configurable;
desc.writable;
desc.value;
o.length;
Object.defineProperty(o, "foobar", { value: 42, enumerable: false, configurable: true });
o.foobar;
desc = Object.getOwnPropertyDescriptor(o, "foobar");
desc !== undefined;
desc.value;
desc.configurable;
desc.enumerable;
desc.writable;
var called = false;
const v71 = {
    set x(a69) {
        called = true;
    },
};
o = v71;
function f73() {
    return "get";
}
Object.defineProperty(o, "x", { get: f73 });
desc = Object.getOwnPropertyDescriptor(o, "x");
"set" in desc;
"get" in desc;
o.x = 13;
const v89 = Object.prototype.toSource;
function f90() {
}
var toSource = v89 || f90;
toSource.call(o);
var called = false;
const v96 = {};
function f98() {
    return 17;
}
function f100(a101) {
    called = true;
}
var o = Object.defineProperty(v96, "foo", { get: f98, set: f100 });
o.foo;
o.foo = 42;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
