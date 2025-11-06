var BUGNUMBER = 501739;
var summary = "String.prototype.relace should zero the .lastIndex when called with a " + "global RegExp";
print((BUGNUMBER + ": ") + summary);
var s = "0x2x4x6x8";
var p1 = /x/g;
p1.lastIndex = 3;
s.replace(p1, "");
p1.lastIndex;
var p2 = /x/g;
p2.lastIndex = 3;
var c = 0;
function f25(a26) {
    let v27 = p2.lastIndex;
    v27++;
    c++;
    return "y";
}
s.replace(p2, f25);
p2.lastIndex;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
