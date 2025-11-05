function f0() {
}
var BUGNUMBER = 308085;
var summary = "JavaScript switch statement going to the wrong case";
var actual = "fail";
var expect = "pass";
f0(BUGNUMBER);
f0(summary);
switch (0) {
    case 0:
        actual = "pass";
        break;
    case 1:
}
f0(expect, actual, summary);
