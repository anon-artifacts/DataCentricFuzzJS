function f0() {
}
var BUGNUMBER = 321757;
var summary = "Compound assignment operators should not bind LHS";
var actual = "";
var expect = "pass";
f0(BUGNUMBER);
f0(summary);
try {
    foo += 1;
    actual = "fail";
} catch(e14) {
    actual = "pass";
}
f0(expect, actual, summary + ": +=");
try {
    foo -= 1;
    actual = "fail";
} catch(e22) {
    actual = "pass";
}
f0(expect, actual, summary + ": -=");
try {
    foo *= 1;
    actual = "fail";
} catch(e30) {
    actual = "pass";
}
f0(expect, actual, summary + ": *=");
try {
    foo /= 1;
    actual = "fail";
} catch(e38) {
    actual = "pass";
}
f0(expect, actual, summary + ": /=");
try {
    foo %= 1;
    actual = "fail";
} catch(e46) {
    actual = "pass";
}
f0(expect, actual, summary + ": %=");
try {
    foo <<= 1;
    actual = "fail";
} catch(e54) {
    actual = "pass";
}
f0(expect, actual, summary + ": <<=");
try {
    foo >>= 1;
    actual = "fail";
} catch(e62) {
    actual = "pass";
}
f0(expect, actual, summary + ": >>=");
try {
    foo >>>= 1;
    actual = "fail";
} catch(e70) {
    actual = "pass";
}
f0(expect, actual, summary + ": >>>=");
