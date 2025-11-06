console.log("Tests that -2^31/-1 (and a bunch of other corner cases) does the right thing.");
function myDiv(a4, a5) {
    return a4 / a5;
}
function myDivByNeg1(a8) {
    return a8 / -1;
}
function myDivNeg2ToThe31(a13) {
    return -2147483648 / a13;
}
function myMod(a18, a19) {
    return a18 % a19;
}
function myModByNeg1(a22) {
    return a22 % -1;
}
function myModBy2(a27) {
    return a27 % 2;
}
function myModBy1073741824(a31) {
    return a31 % 1073741824;
}
function myModNeg2ToThe31(a35) {
    return -2147483648 % a35;
}
function myOtherDiv(a40, a41) {
    return a40 / a41;
}
function myOtherDivByNeg1(a44) {
    return a44 / -1;
}
function myOtherDivNeg2ToThe31(a49) {
    return -2147483648 / a49;
}
function myOtherMod(a54, a55) {
    return a54 % a55;
}
function myOtherModByNeg1(a58) {
    return a58 % -1;
}
function myOtherModNeg2ToThe31(a63) {
    return -2147483648 % a63;
}
function myDivExpectingInt(a68, a69) {
    return (a68 / a69) | 0;
}
var w = 4;
var v = 2;
var x = -2147483648;
var y = -1;
var z = 3;
for (let i86 = 0; i86 < 200; ++i86) {
    myDiv(x, y);
    myDivByNeg1(x);
    myDivNeg2ToThe31(y);
    myMod(x, y);
    myMod(x, z);
    myModByNeg1(x);
    myModBy2(x);
    myModBy1073741824(x);
    myModBy2(y);
    myModBy1073741824(y);
    myModBy2(z);
    myModBy1073741824(z);
    myModNeg2ToThe31(y);
    if (i86 > 100) {
        w = x;
        v = y;
    }
    myOtherDiv(w, v);
    myOtherDivByNeg1(w);
    myOtherDivNeg2ToThe31(v);
    myOtherMod(w, v);
    myOtherModByNeg1(w);
    myOtherModNeg2ToThe31(v);
    myOtherModNeg2ToThe31(3);
    myDivExpectingInt(x, y);
}
