var SECTION = "String/match-002.js";
var TITLE = "String.prototype.match( regexp )";
const v4 = /([\d]{5})([-\ ]?[\d]{4})?$/;
const v11 = ["02134","02134",,];
try { AddRegExpCases(v4, "/([d]{5})([- ]?[d]{4})?$/", "Boston, Mass. 02134", 14, v11); } catch (e) {}
const v14 = /([\d]{5})([-\ ]?[\d]{4})?$/g;
const v18 = ["02134"];
try { AddGlobalRegExpCases(v14, "/([d]{5})([- ]?[d]{4})?$/g", "Boston, Mass. 02134", v18); } catch (e) {}
re = /([\d]{5})([-\ ]?[\d]{4})?$/;
re.lastIndex = 0;
s = "Boston, MA 02134";
let v30;
try { v30 = s.lastIndexOf("0"); } catch (e) {}
const v34 = ["02134","02134",,];
try { AddRegExpCases(re, "re = /([d]{5})([- ]?[d]{4})?$/; re.lastIndex =0", s, v30, v34); } catch (e) {}
re.lastIndex = s?.length;
const v39 = "re = /([d]{5})([- ]?[d]{4})?$/; re.lastIndex = " + s?.length;
let v41;
try { v41 = s.lastIndexOf("0"); } catch (e) {}
const v45 = ["02134","02134",,];
try { AddRegExpCases(re, v39, s, v41, v45); } catch (e) {}
let v48;
try { v48 = s.lastIndexOf("0"); } catch (e) {}
re.lastIndex = v48;
let v51;
try { v51 = s.lastIndexOf("0"); } catch (e) {}
const v52 = "re = /([d]{5})([- ]?[d]{4})?$/; re.lastIndex = " + v51;
let v54;
try { v54 = s.lastIndexOf("0"); } catch (e) {}
const v58 = ["02134","02134",,];
try { AddRegExpCases(re, v52, s, v54, v58); } catch (e) {}
let v61;
try { v61 = s.lastIndexOf("0"); } catch (e) {}
re.lastIndex = v61 + 1;
let v66;
try { v66 = s.lastIndexOf("0"); } catch (e) {}
const v69 = ("re = /([d]{5})([- ]?[d]{4})?$/; re.lastIndex = " + v66) + 1;
let v71;
try { v71 = s.lastIndexOf("0"); } catch (e) {}
const v75 = ["02134","02134",,];
try { AddRegExpCases(re, v69, s, v71, v75); } catch (e) {}
try { test(); } catch (e) {}
function AddRegExpCases(a80, a81, a82, a83, a84) {
    let v85;
    try { v85 = a80.exec(a82); } catch (e) {}
    if ((v85 == null) || (a84 == null)) {
        const v95 = ((a82 + ".match(") + a80) + ")";
        let v96;
        try { v96 = a82.match(a80); } catch (e) {}
        try { AddTestCase(v95, a84, v96); } catch (e) {}
        return;
    }
    const v105 = ((("( " + a82) + " ).match(") + a81) + ").length";
    const v106 = a84?.length;
    let v107;
    try { v107 = a82.match(a80); } catch (e) {}
    const v108 = v107?.length;
    try { AddTestCase(v105, v106, v108); } catch (e) {}
    const v117 = ((("( " + a82) + " ).match(") + a81) + ").index";
    let v118;
    try { v118 = a82.match(a80); } catch (e) {}
    const v119 = v118?.index;
    try { AddTestCase(v117, a83, v119); } catch (e) {}
    const v127 = ((("( " + a82) + " ).match(") + a81) + ").input";
    let v128;
    try { v128 = a82.match(a80); } catch (e) {}
    const v129 = v128?.input;
    try { AddTestCase(v127, a82, v129); } catch (e) {}
    const v131 = a84?.length;
    let v132;
    try { v132 = a82.match(a80); } catch (e) {}
    const v134 = v131 > v132?.length;
    const v135 = a84?.length;
    let v136;
    try { v136 = a82.match(a80); } catch (e) {}
    var limit = v134 ? v135 : v136?.length;
    for (let i141 = 0; i141 < limit; i141++) {
        const v155 = ((((("( " + a82) + " ).match(") + a81) + ")[") + i141) + "]";
        const v156 = a84?.[i141];
        let v157;
        try { v157 = a82.match(a80); } catch (e) {}
        const v158 = v157?.[i141];
        try { AddTestCase(v155, v156, v158); } catch (e) {}
    }
}
function AddGlobalRegExpCases(a161, a162, a163, a164) {
    let v165;
    try { v165 = a161.exec(a163); } catch (e) {}
    if ((v165 == null) || (a164 == null)) {
        const v175 = ((a161 + ".exec(") + a163) + ")";
        let v176;
        try { v176 = a161.exec(a163); } catch (e) {}
        try { AddTestCase(v175, a164, v176); } catch (e) {}
        return;
    }
    const v185 = ((("( " + a163) + " ).match(") + a162) + ").length";
    const v186 = a164?.length;
    let v187;
    try { v187 = a163.match(a161); } catch (e) {}
    const v188 = v187?.length;
    try { AddTestCase(v185, v186, v188); } catch (e) {}
    const v191 = a164?.length;
    let v192;
    try { v192 = a163.match(a161); } catch (e) {}
    const v194 = v191 > v192?.length;
    const v195 = a164?.length;
    let v196;
    try { v196 = a163.match(a161); } catch (e) {}
    var limit = v194 ? v195 : v196?.length;
    for (let i201 = 0; i201 < limit; i201++) {
        const v215 = ((((("( " + a163) + " ).match(") + a162) + ")[") + i201) + "]";
        const v216 = a164?.[i201];
        let v217;
        try { v217 = a163.match(a161); } catch (e) {}
        const v218 = v217?.[i201];
        try { AddTestCase(v215, v216, v218); } catch (e) {}
    }
}
