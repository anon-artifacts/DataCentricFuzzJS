function f0() {
}
var BUGNUMBER = 255555;
var summary = "Array.prototype.sort(comparefn) never passes undefined to comparefn";
var actual = "not undefined";
var expect = "not undefined";
f0(BUGNUMBER);
f0(summary);
function comparefn(a12, a13) {
    if (typeof a12 == "undefined") {
        actual = "undefined";
        return 1;
    }
    if (typeof a13 == "undefined") {
        actual = "undefined";
        return -1;
    }
    return a12 - a13;
}
var arry = ([1,2,,]).sort(comparefn);
f0(expect, actual, summary);
