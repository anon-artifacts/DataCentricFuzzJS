function f0() {
}
var BUGNUMBER = 280769;
var summary = "Do not overflow 64K string offset";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
var N = 100 * 1000;
const v17 = new Array(N);
var prefix = v17.join("a");
var suffix = "111";
const v26 = new RegExp((prefix + "0?") + suffix);
var re = v26;
var str_to_match = prefix + suffix;
try {
    var index = str_to_match.search(re);
    f0(expect = 0, actual = index, summary);
} catch(e34) {
    f0(true, e34 instanceof Error, actual, summary);
}
