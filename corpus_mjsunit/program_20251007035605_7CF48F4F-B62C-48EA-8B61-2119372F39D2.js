var SuperPrototype = { bar: 1 };
var BasePrototype = {};
Object.setPrototypeOf(BasePrototype, SuperPrototype);
function Base() {
}
Base.prototype = BasePrototype;
const v8 = new Base();
var value = v8;
if (value.toString() !== "[object Object]") {
    throw "bad miss toStringTag";
}
value[Symbol.toStringTag] = "hello";
if (value.toString() !== "[object hello]") {
    throw "bad swap on base value with miss";
}
const v21 = new Base();
value = v21;
if (value.toString() !== "[object Object]") {
    throw "bad miss toStringTag";
}
SuperPrototype[Symbol.toStringTag] = "superprototype";
if (value.toString() !== "[object superprototype]") {
    throw "bad prototype toStringTag change with miss";
}
value[Symbol.toStringTag] = "hello2";
if (value.toString() !== "[object hello2]") {
    throw "bad swap on base value with hit";
}
if (Object.getPrototypeOf(value).toString() !== "[object superprototype]") {
    throw "bad prototype toStringTag access";
}
const v43 = new Base();
value = v43;
BasePrototype[Symbol.toStringTag] = "baseprototype";
if (value.toString() !== "[object baseprototype]") {
    throw "bad prototype toStringTag interception with hit";
}
BasePrototype[Symbol.toStringTag] = "not-baseprototype!";
if (value.toString() !== "[object not-baseprototype!]") {
    throw "bad prototype toStringTag interception with hit";
}
