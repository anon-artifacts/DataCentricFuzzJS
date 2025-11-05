var BUGNUMBER = 885798;
var summary = "ES6 (draft April 2014) 20.1.2.10 Number.MIN_SAFE_INTEGER";
print((BUGNUMBER + ": ") + summary);
Number.MIN_SAFE_INTEGER;
-(Math.pow(2, 53) - 1);
var descriptor = Object.getOwnPropertyDescriptor(Number, "MIN_SAFE_INTEGER");
descriptor.writable;
descriptor.configurable;
descriptor.enumerable;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
