var BUGNUMBER = 501739;
var summary = "String.prototype.match should zero the .lastIndex when called with a " + "global RegExp";
print((BUGNUMBER + ": ") + summary);
var s = "0x2x4x6x8";
var p = /x/g;
p.lastIndex = 3;
var arr = s.match(p);
arr.length;
function f20(a21) {
}
arr.forEach(f20);
p.lastIndex;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
