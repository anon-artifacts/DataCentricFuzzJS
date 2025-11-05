function f0() {
}
var BUGNUMBER = 253150;
var summary = "Do not warn on detecting properties";
var actual = "";
var expect = "No warning";
f0(BUGNUMBER);
f0(summary);
var testobject = {};
f0("strict");
f0("werror");
try {
    var testresult = testobject.foo;
    actual = "No warning";
} catch(e20) {
    actual = e20 + "";
}
f0(expect, actual, summary + ": 1");
try {
    if (testobject.foo) {
    }
    actual = "No warning";
} catch(e28) {
    actual = e28 + "";
}
f0(expect, actual, summary + ": 2");
try {
    if (typeof testobject.foo == "undefined") {
    }
    actual = "No warning";
} catch(e39) {
    actual = e39 + "";
}
f0(expect, actual, summary + ": 3");
try {
    if (testobject.foo == null) {
    }
    actual = "No warning";
} catch(e49) {
    actual = e49 + "";
}
f0(expect, actual, summary + ": 4");
try {
    if (testobject.foo == undefined) {
    }
    actual = "No warning";
} catch(e59) {
    actual = e59 + "";
}
f0(expect, actual, summary + ": 3");
