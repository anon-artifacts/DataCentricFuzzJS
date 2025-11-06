String?.fromCodePoint?.length;
try { String.propertyIsEnumerable("fromCodePoint"); } catch (e) {}
try { String.fromCodePoint(""); } catch (e) {}
try { String.fromCodePoint(); } catch (e) {}
const v13 = -0;
try { String.fromCodePoint(v13); } catch (e) {}
try { String.fromCodePoint(0); } catch (e) {}
try { String.fromCodePoint(119558); } catch (e) {}
try { String.fromCodePoint(119558, 97, 119559); } catch (e) {}
try { String.fromCodePoint(97, 98, 119559); } catch (e) {}
try { String.fromCodePoint(false); } catch (e) {}
try { String.fromCodePoint(null); } catch (e) {}
function f38() {
    try { String.fromCodePoint("_"); } catch (e) {}
}
try { f38(); } catch (e) {}
function f43() {
    try { String.fromCodePoint("+Infinity"); } catch (e) {}
}
try { f43(); } catch (e) {}
function f47() {
    try { String.fromCodePoint("-Infinity"); } catch (e) {}
}
try { f47(); } catch (e) {}
function f51() {
    const v53 = -1;
    try { String.fromCodePoint(v53); } catch (e) {}
}
try { f51(); } catch (e) {}
function f56() {
    const v59 = 1114111 + 1;
    try { String.fromCodePoint(v59); } catch (e) {}
}
try { f56(); } catch (e) {}
function f62() {
    try { String.fromCodePoint(3.14); } catch (e) {}
}
try { f62(); } catch (e) {}
function f66() {
    try { String.fromCodePoint(0.03); } catch (e) {}
}
try { f66(); } catch (e) {}
function f70() {
    const v72 = -Infinity;
    try { String.fromCodePoint(v72); } catch (e) {}
}
try { f70(); } catch (e) {}
function f75() {
    const v77 = +Infinity;
    try { String.fromCodePoint(v77); } catch (e) {}
}
try { f75(); } catch (e) {}
function f80() {
    try { String.fromCodePoint(NaN); } catch (e) {}
}
try { f80(); } catch (e) {}
function f84() {
    try { String.fromCodePoint(undefined); } catch (e) {}
}
try { f84(); } catch (e) {}
function f88() {
    const v89 = {};
    try { String.fromCodePoint(v89); } catch (e) {}
}
try { f88(); } catch (e) {}
function f92() {
    const v93 = /./;
    try { String.fromCodePoint(v93); } catch (e) {}
}
try { f92(); } catch (e) {}
function f96() {
    function f97() {
        let v99;
        try { v99 = Error(); } catch (e) {}
        throw v99;
    }
    const v100 = { valueOf: f97 };
    try { String.fromCodePoint(v100); } catch (e) {}
}
try { f96(); } catch (e) {}
function f104() {
    function f105() {
        let v106;
        try { v106 = Error(); } catch (e) {}
        throw v106;
    }
    const v107 = { valueOf: f105 };
    try { String.fromCodePoint(v107); } catch (e) {}
}
try { f104(); } catch (e) {}
var tmp = 96;
function f112() {
    ++tmp;
    return tmp;
}
const v114 = { valueOf: f112 };
try { String.fromCodePoint(v114); } catch (e) {}
let v121;
try { v121 = Math.pow(2, 15); } catch (e) {}
var counter = (v121 * 3) / 2;
var result = [];
while (--counter >= 0) {
    try { result.push(0); } catch (e) {}
}
const v135 = String?.fromCodePoint;
try { v135.apply(null, result); } catch (e) {}
let v139;
try { v139 = Math.pow(2, 15); } catch (e) {}
var counter = (v139 * 3) / 2;
var result = [];
while (--counter >= 0) {
    const v152 = 65535 + 1;
    try { result.push(v152); } catch (e) {}
}
const v155 = String?.fromCodePoint;
try { v155.apply(null, result); } catch (e) {}
