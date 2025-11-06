var SECTION = "String/match-001.js";
var TITLE = "String.prototype.match( regexp )";
const v10 = ["3"];
try { AddRegExpCases(3, "3", "1234567890", 1, 2, v10); } catch (e) {}
const v13 = /34/g;
const v20 = ["34","34","34"];
try { AddGlobalRegExpCases(v13, "/34/g", "343443444", 3, v20); } catch (e) {}
const v23 = /\d{1}/g;
const v37 = ["1","2","3","4","5","6","7","8","9","0"];
try { AddGlobalRegExpCases(v23, "/d{1}/g", "123456abcde7890", 10, v37); } catch (e) {}
const v39 = /\d{2}/g;
const v48 = ["12","34","56","78","90"];
try { AddGlobalRegExpCases(v39, "/d{2}/g", "123456abcde7890", 5, v48); } catch (e) {}
const v50 = /\D{2}/g;
const v56 = ["ab","cd"];
try { AddGlobalRegExpCases(v50, "/d{2}/g", "123456abcde7890", 2, v56); } catch (e) {}
try { test(); } catch (e) {}
function AddRegExpCases(a61, a62, a63, a64, a65, a66) {
    const v73 = ((("( " + a63) + " ).match(") + a62) + ").length";
    let v74;
    try { v74 = a63.match(a61); } catch (e) {}
    const v75 = v74?.length;
    try { AddTestCase(v73, a64, v75); } catch (e) {}
    const v84 = ((("( " + a63) + " ).match(") + a62) + ").index";
    let v85;
    try { v85 = a63.match(a61); } catch (e) {}
    const v86 = v85?.index;
    try { AddTestCase(v84, a65, v86); } catch (e) {}
    const v94 = ((("( " + a63) + " ).match(") + a62) + ").input";
    let v95;
    try { v95 = a63.match(a61); } catch (e) {}
    const v96 = v95?.input;
    try { AddTestCase(v94, a63, v96); } catch (e) {}
    for (let i99 = 0; i99 < a66?.length; i99++) {
        const v114 = ((((("( " + a63) + " ).match(") + a62) + ")[") + i99) + "]";
        const v115 = a66?.[i99];
        let v116;
        try { v116 = a63.match(a61); } catch (e) {}
        const v117 = v116?.[i99];
        try { AddTestCase(v114, v115, v117); } catch (e) {}
    }
}
function AddGlobalRegExpCases(a120, a121, a122, a123, a124) {
    const v131 = ((("( " + a122) + " ).match(") + a121) + ").length";
    let v132;
    try { v132 = a122.match(a120); } catch (e) {}
    const v133 = v132?.length;
    try { AddTestCase(v131, a123, v133); } catch (e) {}
    for (let i137 = 0; i137 < a124?.length; i137++) {
        const v152 = ((((("( " + a122) + " ).match(") + a121) + ")[") + i137) + "]";
        const v153 = a124?.[i137];
        let v154;
        try { v154 = a122.match(a120); } catch (e) {}
        const v155 = v154?.[i137];
        try { AddTestCase(v152, v153, v155); } catch (e) {}
    }
}
