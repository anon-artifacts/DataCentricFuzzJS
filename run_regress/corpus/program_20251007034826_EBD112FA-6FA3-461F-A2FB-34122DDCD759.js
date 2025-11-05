function f0() {
}
var BUGNUMBER = 381301;
var summary = "uneval of object with native-function getter";
var actual = "";
var expect = "";
try { test(); } catch (e) {}
function test() {
    f0(BUGNUMBER);
    f0(summary);
    const v14 = {};
    var o = Object.defineProperty(v14, "x", { get: decodeURI, enumerable: true, configurable: true });
    expect = "({get x() {[native code]}})";
    let v25;
    try { v25 = uneval(o); } catch (e) {}
    actual = v25;
    const v34 = ["\{","\[","native","code","\]","\}"];
    let v35;
    try { v35 = v34.join("\s*"); } catch (e) {}
    let v36;
    try { v36 = new RegExp(v35); } catch (e) {}
    var re = v36;
    let v39;
    try { v39 = actual.replace(re, "{[native code]}"); } catch (e) {}
    actual = v39;
    try { compareSource(expect, actual, summary); } catch (e) {}
}
