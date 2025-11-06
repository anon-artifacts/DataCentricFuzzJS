function f0() {
    'use strict';
    return Object.getOwnPropertyDescriptor(arguments, "callee").get;
}
const ThrowTypeError = f0();
Object.getOwnPropertyDescriptor(ThrowTypeError, "length");
const v15 = { value: 0, writable: false, enumerable: false, configurable: false };
Object.isFrozen(ThrowTypeError);
if (typeof reportCompare == "function") {
    reportCompare(true, true);
}
