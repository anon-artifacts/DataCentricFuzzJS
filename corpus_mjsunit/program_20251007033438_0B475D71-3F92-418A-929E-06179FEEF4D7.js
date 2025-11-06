function f0() {
}
var SECTION = "String/match-004.js";
var TITLE = "String.prototype.match( regexp )";
var BUGNUMBER = "http://scopus/bugsplat/show_bug.cgi?id=345818";
try { f0(BUGNUMBER); } catch (e) {}
re = /0./;
s = 1.0203040506070809e+19;
const v14 = String?.prototype?.match;
const t9 = Number?.prototype;
t9.match = v14;
const v19 = "re = " + re;
let v21;
try { v21 = String(s); } catch (e) {}
const v24 = ["02"];
try { AddRegExpCases(re, v19, s, v21, 1, v24); } catch (e) {}
re.lastIndex = 0;
const v35 = ((("re = " + re) + " [lastIndex is ") + re?.lastIndex) + "]";
let v36;
try { v36 = String(s); } catch (e) {}
const v39 = ["02"];
try { AddRegExpCases(re, v35, s, v36, 1, v39); } catch (e) {}
try { test(); } catch (e) {}
function AddRegExpCases(a44, a45, a46, a47, a48, a49) {
    let v50;
    try { v50 = a44.exec(a46); } catch (e) {}
    if ((v50 == null) || (a49 == null)) {
        const v60 = ((a46 + ".match(") + a44) + ")";
        let v61;
        try { v61 = a46.match(a44); } catch (e) {}
        try { AddTestCase(v60, a49, v61); } catch (e) {}
        return;
    }
    const v70 = ((("( " + a46) + " ).match(") + a45) + ").length";
    const v71 = a49?.length;
    let v72;
    try { v72 = a46.match(a44); } catch (e) {}
    const v73 = v72?.length;
    try { AddTestCase(v70, v71, v73); } catch (e) {}
    const v82 = ((("( " + a46) + " ).match(") + a45) + ").index";
    let v83;
    try { v83 = a46.match(a44); } catch (e) {}
    const v84 = v83?.index;
    try { AddTestCase(v82, a48, v84); } catch (e) {}
    const v92 = ((("( " + a46) + " ).match(") + a45) + ").input";
    let v93;
    try { v93 = a46.match(a44); } catch (e) {}
    const v94 = v93?.input;
    try { AddTestCase(v92, a47, v94); } catch (e) {}
    const v96 = a49?.length;
    let v97;
    try { v97 = a46.match(a44); } catch (e) {}
    const v99 = v96 > v97?.length;
    const v100 = a49?.length;
    let v101;
    try { v101 = a46.match(a44); } catch (e) {}
    var limit = v99 ? v100 : v101?.length;
    for (let i106 = 0; i106 < limit; i106++) {
        const v120 = ((((("( " + a46) + " ).match(") + a45) + ")[") + i106) + "]";
        const v121 = a49?.[i106];
        let v122;
        try { v122 = a46.match(a44); } catch (e) {}
        const v123 = v122?.[i106];
        try { AddTestCase(v120, v121, v123); } catch (e) {}
    }
}
function AddGlobalRegExpCases(a126, a127, a128, a129) {
    let v130;
    try { v130 = a126.exec(a128); } catch (e) {}
    if ((v130 == null) || (a129 == null)) {
        const v140 = ((a126 + ".exec(") + a128) + ")";
        let v141;
        try { v141 = a126.exec(a128); } catch (e) {}
        try { AddTestCase(v140, a129, v141); } catch (e) {}
        return;
    }
    const v150 = ((("( " + a128) + " ).match(") + a127) + ").length";
    const v151 = a129?.length;
    let v152;
    try { v152 = a128.match(a126); } catch (e) {}
    const v153 = v152?.length;
    try { AddTestCase(v150, v151, v153); } catch (e) {}
    const v156 = a129?.length;
    let v157;
    try { v157 = a128.match(a126); } catch (e) {}
    const v159 = v156 > v157?.length;
    const v160 = a129?.length;
    let v161;
    try { v161 = a128.match(a126); } catch (e) {}
    var limit = v159 ? v160 : v161?.length;
    for (let i166 = 0; i166 < limit; i166++) {
        const v180 = ((((("( " + a128) + " ).match(") + a127) + ")[") + i166) + "]";
        const v181 = a129?.[i166];
        let v182;
        try { v182 = a128.match(a126); } catch (e) {}
        const v183 = v182?.[i166];
        try { AddTestCase(v180, v181, v183); } catch (e) {}
    }
}
