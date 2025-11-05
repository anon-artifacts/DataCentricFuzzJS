var BUGNUMBER = 501739;
var summary = "String.prototype.match should throw when called with a global RegExp " + "whose .lastIndex is non-writable";
print((BUGNUMBER + ": ") + summary);
var s = "0x2x4x6x8";
var p1 = /x/g;
Object.defineProperty(p1, "lastIndex", { writable: false });
try {
    s.match(p1);
    throw "didn't throw";
} catch(e22) {
    e22 instanceof TypeError;
    "should have thrown a TypeError, instead got: " + e22;
}
var p2 = /x/g;
Object.defineProperty(p2, "lastIndex", { writable: false, value: 3 });
try {
    s.match(p2);
    throw "didn't throw";
} catch(e37) {
    e37 instanceof TypeError;
    "should have thrown a TypeError, instead got: " + e37;
}
var p3 = /q/g;
Object.defineProperty(p3, "lastIndex", { writable: false });
try {
    s.match(p3);
    throw "didn't throw";
} catch(e51) {
    e51 instanceof TypeError;
    "should have thrown a TypeError, instead got: " + e51;
}
var p4 = /q/g;
Object.defineProperty(p4, "lastIndex", { writable: false, value: 3 });
try {
    s.match(p4);
    throw "didn't throw";
} catch(e66) {
    e66 instanceof TypeError;
    "should have thrown a TypeError, instead got: " + e66;
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
