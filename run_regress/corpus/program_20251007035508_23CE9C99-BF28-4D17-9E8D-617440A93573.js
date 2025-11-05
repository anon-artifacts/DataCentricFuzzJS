var BUGNUMBER = 861219;
var summary = "Date.prototype isn't an instance of Date";
print((BUGNUMBER + ": ") + summary);
Date.prototype instanceof Date;
Date.prototype.__proto__;
Object.prototype;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
