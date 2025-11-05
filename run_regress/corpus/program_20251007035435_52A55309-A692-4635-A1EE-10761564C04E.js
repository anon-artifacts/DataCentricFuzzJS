function f0() {
}
var BUGNUMBER = 430133;
var summary = "ES5 Object.defineProperties(O, Properties)";
f0((BUGNUMBER + ": ") + summary);
"defineProperties" in Object;
Object.defineProperties.length;
var o;
var props;
var desc;
var passed;
o = {};
const v29 = { value: 17, enumerable: true, configurable: true, writable: true };
const v34 = { value: 42, enumerable: false, configurable: false, writable: false };
props = { a: v29, b: v34 };
Object.defineProperties(o, props);
"a" in o;
"b" in o;
desc = Object.getOwnPropertyDescriptor(o, "a");
desc.value;
desc.enumerable;
desc.configurable;
desc.writable;
desc = Object.getOwnPropertyDescriptor(o, "b");
desc.value;
desc.enumerable;
desc.configurable;
desc.writable;
const v67 = { value: NaN, enumerable: false, configurable: true, writable: true };
const v69 = { value: 44 };
props = { c: v67, b: v69 };
var error = "before";
try {
    Object.defineProperties(o, props);
    error = "no exception thrown";
} catch(e75) {
    if (e75 instanceof TypeError) {
        error = "typeerror";
    } else {
        error = "bad exception: " + e75;
    }
}
"c" in o;
o.b;
function Properties() {
}
const v93 = { value: 42, enumerable: true };
Properties.prototype = { b: v93 };
const v95 = new Properties();
props = v95;
Object.defineProperty(props, "a", { enumerable: false });
o = {};
Object.defineProperties(o, props);
"a" in o;
Object.getOwnPropertyDescriptor(o, "a");
"Object.defineProperties(O, Properties) should only use enumerable " + "properties on Properties";
"b" in o;
Object.getOwnPropertyDescriptor(o, "b");
"Object.defineProperties(O, Properties) should only use enumerable " + "properties directly on Properties";
const v122 = { value: 17, enumerable: true };
const t60 = Number.prototype;
t60.foo = v122;
const v127 = { value: 8675309, enumerable: true };
const t63 = Boolean.prototype;
t63.bar = v127;
const v132 = { value: "Are you HAPPY yet?", enumerable: true };
const t66 = String.prototype;
t66.quux = v132;
o = {};
Object.defineProperties(o, 5);
"foo" in o;
Object.defineProperties(o, false);
"bar" in o;
Object.defineProperties(o, "");
"quux" in o;
error = "before";
try {
    Object.defineProperties(o, "1");
} catch(e157) {
    if (e157 instanceof TypeError) {
        error = "typeerror";
    } else {
        error = "bad exception: " + e157;
    }
}
"should throw on Properties == '1' due to '1'[0] not being a " + "property descriptor";
error = "before";
try {
    Object.defineProperties(o, null);
} catch(e170) {
    if (e170 instanceof TypeError) {
        error = "typeerror";
    } else {
        error = "bad exception: " + e170;
    }
}
error = "before";
try {
    Object.defineProperties(o, undefined);
} catch(e181) {
    if (e181 instanceof TypeError) {
        error = "typeerror";
    } else {
        error = "bad exception: " + e181;
    }
}
f0(true, true);
f0("All tests passed!");
