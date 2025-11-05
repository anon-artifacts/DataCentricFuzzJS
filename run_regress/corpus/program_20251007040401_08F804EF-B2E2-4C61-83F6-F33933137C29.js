function f0() {
}
var UBound = 0;
var BUGNUMBER = "(none)";
var summary = "Testing Error.stack";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var myErr = "";
var stackFrames = "";
function A(a24, a25) {
    const v27 = a24 + 1;
    const v29 = a25 + 1;
    let v31;
    try { v31 = B(v27, v29); } catch (e) {}
    return v31;
}
function B(a33, a34) {
    const v36 = a33 + 1;
    const v38 = a34 + 1;
    let v40;
    try { v40 = C(v36, v38); } catch (e) {}
    return v40;
}
function C(a42, a43) {
    const v45 = a42 + 1;
    const v47 = a43 + 1;
    let v49;
    try { v49 = D(v45, v47); } catch (e) {}
    return v49;
}
function D(a51, a52) {
    try {
        let v55;
        try { v55 = new Error("meep!"); } catch (e) {}
        throw v55;
    } catch(e56) {
        return e56;
    }
}
let v59;
try { v59 = A(44, 13); } catch (e) {}
myErr = v59;
let v61;
try { v61 = getStackFrames(myErr); } catch (e) {}
stackFrames = v61;
let v64;
try { v64 = inSection(1); } catch (e) {}
status = v64;
const v67 = stackFrames?.[0];
let v68;
try { v68 = v67.substring(0, 1); } catch (e) {}
actual = v68;
expect = "@";
try { addThis(); } catch (e) {}
let v73;
try { v73 = inSection(2); } catch (e) {}
status = v73;
const v76 = stackFrames?.[1];
let v77;
try { v77 = v76.substring(0, 2); } catch (e) {}
actual = v77;
expect = "A@";
try { addThis(); } catch (e) {}
let v81;
try { v81 = inSection(3); } catch (e) {}
status = v81;
const v84 = stackFrames?.[2];
let v85;
try { v85 = v84.substring(0, 2); } catch (e) {}
actual = v85;
expect = "B@";
try { addThis(); } catch (e) {}
let v89;
try { v89 = inSection(4); } catch (e) {}
status = v89;
const v92 = stackFrames?.[3];
let v93;
try { v93 = v92.substring(0, 2); } catch (e) {}
actual = v93;
expect = "C@";
try { addThis(); } catch (e) {}
let v97;
try { v97 = inSection(5); } catch (e) {}
status = v97;
const v100 = stackFrames?.[4];
let v101;
try { v101 = v100.substring(0, 2); } catch (e) {}
actual = v101;
expect = "D@";
try { addThis(); } catch (e) {}
let v106;
try { v106 = A("44:foo", "13:bar"); } catch (e) {}
myErr = v106;
let v107;
try { v107 = getStackFrames(myErr); } catch (e) {}
stackFrames = v107;
let v109;
try { v109 = inSection(6); } catch (e) {}
status = v109;
const v112 = stackFrames?.[0];
let v113;
try { v113 = v112.substring(0, 1); } catch (e) {}
actual = v113;
expect = "@";
try { addThis(); } catch (e) {}
let v117;
try { v117 = inSection(7); } catch (e) {}
status = v117;
const v120 = stackFrames?.[1];
let v121;
try { v121 = v120.substring(0, 2); } catch (e) {}
actual = v121;
expect = "A@";
try { addThis(); } catch (e) {}
let v125;
try { v125 = inSection(8); } catch (e) {}
status = v125;
const v128 = stackFrames?.[2];
let v129;
try { v129 = v128.substring(0, 2); } catch (e) {}
actual = v129;
expect = "B@";
try { addThis(); } catch (e) {}
let v133;
try { v133 = inSection(9); } catch (e) {}
status = v133;
const v136 = stackFrames?.[3];
let v137;
try { v137 = v136.substring(0, 2); } catch (e) {}
actual = v137;
expect = "C@";
try { addThis(); } catch (e) {}
let v141;
try { v141 = inSection(10); } catch (e) {}
status = v141;
const v144 = stackFrames?.[4];
let v145;
try { v145 = v144.substring(0, 2); } catch (e) {}
actual = v145;
expect = "D@";
try { addThis(); } catch (e) {}
function f148() {
    let v151;
    try { v151 = A(44, 13); } catch (e) {}
    return v151;
}
let v152;
try { v152 = f148(); } catch (e) {}
myErr = v152;
let v153;
try { v153 = getStackFrames(myErr); } catch (e) {}
stackFrames = v153;
let v155;
try { v155 = inSection(11); } catch (e) {}
status = v155;
const v158 = stackFrames?.[0];
let v159;
try { v159 = v158.substring(0, 1); } catch (e) {}
actual = v159;
expect = "@";
try { addThis(); } catch (e) {}
let v163;
try { v163 = inSection(12); } catch (e) {}
status = v163;
const v166 = stackFrames?.[1];
let v167;
try { v167 = v166.substring(0, 7); } catch (e) {}
actual = v167;
expect = "myErr<@";
try { addThis(); } catch (e) {}
let v171;
try { v171 = inSection(13); } catch (e) {}
status = v171;
const v174 = stackFrames?.[2];
let v175;
try { v175 = v174.substring(0, 2); } catch (e) {}
actual = v175;
expect = "A@";
try { addThis(); } catch (e) {}
let v180;
try { v180 = Function("return A(44,13);"); } catch (e) {}
var f = v180;
let v182;
try { v182 = f(); } catch (e) {}
myErr = v182;
let v183;
try { v183 = getStackFrames(myErr); } catch (e) {}
stackFrames = v183;
let v185;
try { v185 = inSection(14); } catch (e) {}
status = v185;
const v188 = stackFrames?.[0];
let v189;
try { v189 = v188.substring(0, 1); } catch (e) {}
actual = v189;
expect = "@";
try { addThis(); } catch (e) {}
let v193;
try { v193 = inSection(15); } catch (e) {}
status = v193;
const v196 = stackFrames?.[1];
let v197;
try { v197 = v196.substring(0, 10); } catch (e) {}
actual = v197;
expect = "anonymous@";
try { addThis(); } catch (e) {}
let v201;
try { v201 = inSection(16); } catch (e) {}
status = v201;
const v204 = stackFrames?.[2];
let v205;
try { v205 = v204.substring(0, 2); } catch (e) {}
actual = v205;
expect = "A@";
try { addThis(); } catch (e) {}
var message = "Hi there!";
var fileName = "file name";
var lineNumber = 0;
let v215;
try { v215 = Error(message, fileName, lineNumber); } catch (e) {}
myErr = v215;
let v216;
try { v216 = getStackFrames(myErr); } catch (e) {}
stackFrames = v216;
let v218;
try { v218 = inSection(17); } catch (e) {}
status = v218;
const v221 = stackFrames?.[0];
let v222;
try { v222 = v221.substring(0, 1); } catch (e) {}
actual = v222;
expect = "@";
try { addThis(); } catch (e) {}
let v225;
try { v225 = new Error(message, fileName, lineNumber); } catch (e) {}
myErr = v225;
let v226;
try { v226 = getStackFrames(myErr); } catch (e) {}
stackFrames = v226;
let v228;
try { v228 = inSection(18); } catch (e) {}
status = v228;
const v231 = stackFrames?.[0];
let v232;
try { v232 = v231.substring(0, 1); } catch (e) {}
actual = v232;
expect = "@";
try { addThis(); } catch (e) {}
try { test(); } catch (e) {}
function getStackFrames(a238) {
    const v240 = a238?.stack;
    let v241;
    try { v241 = v240.split("\n"); } catch (e) {}
    var arr = v241;
    try { arr.pop(); } catch (e) {}
    let v244;
    try { v244 = arr.reverse(); } catch (e) {}
    return v244;
}
function addThis() {
    statusitems[UBound] = status;
    actualvalues[UBound] = actual;
    expectedvalues[UBound] = expect;
    UBound++;
}
function test() {
    try { f0(BUGNUMBER); } catch (e) {}
    try { f0(summary); } catch (e) {}
    for (let i251 = 0; i251 < UBound; i251++) {
        const v256 = expectedvalues?.[i251];
        const v257 = actualvalues?.[i251];
        const v258 = statusitems?.[i251];
        try { f0(v256, v257, v258); } catch (e) {}
    }
}
