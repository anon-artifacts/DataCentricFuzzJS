function f0() {
}
var errors = ["Error","EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"];
for (let i11 = 0; i11 < errors.length; i11++) {
    var error = this[errors[i11]];
    var desc = Object.getOwnPropertyDescriptor(error.prototype, "name");
    !(!desc);
    errors[i11] + ".prototype.name should exist";
    (desc || {}).enumerable;
    errors[i11] + ".prototype.name should not be enumerable";
    desc = Object.getOwnPropertyDescriptor(error.prototype, "message");
    !(!desc);
    errors[i11] + ".prototype.message should exist";
    (desc || {}).enumerable;
    errors[i11] + ".prototype.message should not be enumerable";
    const v55 = new error();
    var instance = v55;
    desc = Object.getOwnPropertyDescriptor(instance, "message");
    !(!desc);
    ("new " + errors[i11]) + ".message should not exist";
    const v68 = new error("a message");
    desc = Object.getOwnPropertyDescriptor(instance = v68, "message");
    !(!desc);
    ("new " + errors[i11]) + "(...).message should exist";
    (desc || {}).enumerable;
    ("new " + errors[i11]) + "(...).message should not be enumerable";
}
f0(true, true);
