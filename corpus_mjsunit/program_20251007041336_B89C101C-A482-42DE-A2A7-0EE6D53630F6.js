function f0() {
}
var BUGNUMBER = 353116;
var summary = "Improve errors messages for null, undefined properties";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    expect = "TypeError: undefined has no properties";
    actual = "No Error";
    try {
        undefined.y;
    } catch(e18) {
        actual = e18 + "";
    }
    f0(expect, actual, summary);
    expect = "TypeError: null has no properties";
    actual = "No Error";
    try {
        null.y;
    } catch(e26) {
        actual = e26 + "";
    }
    f0(expect, actual, summary);
    expect = "TypeError: x is undefined";
    actual = "No Error";
    try {
        x = undefined;
        x.y;
    } catch(e36) {
        actual = e36 + "";
    }
    f0(expect, actual, summary);
    expect = "TypeError: x is null";
    actual = "No Error";
    try {
        x = null;
        x.y;
    } catch(e46) {
        actual = e46 + "";
    }
    f0(expect, actual, summary);
}
