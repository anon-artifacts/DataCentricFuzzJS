function f0() {
}
var BUGNUMBER = 306727;
var summary = "Parsing RegExp of octal expressions in strict mode";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
try {
    expect = null;
    const v18 = ("a" + String.fromCharCode(0)) + "11";
    actual = /.\011/.exec(v18);
} catch(e21) {
}
f0(expect, actual, summary);
f0("strict");
expect = null;
try {
    const v32 = ("a" + String.fromCharCode(0)) + "11";
    actual = /.\011/.exec(v32);
} catch(e35) {
}
f0(expect, actual, summary);
