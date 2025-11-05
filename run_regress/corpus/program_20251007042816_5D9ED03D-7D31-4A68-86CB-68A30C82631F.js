function f0() {
}
var BUGNUMBER = 333541;
var summary = "1..toSource()";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
function a() {
    return (1).toSource();
}
try {
    expect = "function a(){\n  return 1..toSource();\n}";
    actual = a.toString();
    compareSource(expect, actual, summary + ": 1");
} catch(e20) {
    actual = e20 + "";
    f0(expect, actual, summary + ": 1");
}
try {
    expect = "function a(){\n  return 1..toSource();\n}";
    actual = a.toSource();
    compareSource(expect, actual, summary + ": 2");
} catch(e32) {
    actual = e32 + "";
    f0(expect, actual, summary + ": 2");
}
expect = a;
actual = a.valueOf();
f0(expect, actual, summary + ": 3");
try {
    expect = "function a(){\n  return 1..toSource();\n}";
    actual = "" + a;
    compareSource(expect, actual, summary + ": 4");
} catch(e49) {
    actual = e49 + "";
    f0(expect, actual, summary + ": 4");
}
