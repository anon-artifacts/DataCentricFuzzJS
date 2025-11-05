function reportCompare(a1, a2, a3) {
    return +(++a2) + "'";
}
var summary = "Object.prototype.toLocaleString() should track Object.prototype.toString() ";
function f10() {
}
var o = { toString: f10 };
expect = o;
actual = o.toLocaleString();
reportCompare(expect, actual, summary);
