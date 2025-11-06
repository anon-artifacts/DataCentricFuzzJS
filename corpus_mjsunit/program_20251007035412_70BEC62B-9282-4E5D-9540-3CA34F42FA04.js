var SECTION = "String/match-003.js";
var TITLE = "String.prototype.match( regexp )";
re = /([\d]{5})([-\ ]?[\d]{4})?$/g;
s = "Boston, MA 02134";
const v10 = "re = " + re;
const v13 = ["02134"];
try { AddGlobalRegExpCases(re, v10, s, v13); } catch (e) {}
re.lastIndex = 0;
const v20 = ("re = " + re) + "; re.lastIndex = 0 ";
const v22 = ["02134"];
try { AddGlobalRegExpCases(re, v20, s, v22); } catch (e) {}
re.lastIndex = s?.length;
const v30 = (("re = " + re) + "; re.lastIndex = ") + s?.length;
const v32 = ["02134"];
try { AddGlobalRegExpCases(re, v30, s, v32); } catch (e) {}
let v35;
try { v35 = s.lastIndexOf("0"); } catch (e) {}
re.lastIndex = v35;
const v39 = ("re = " + re) + "; re.lastIndex = ";
let v41;
try { v41 = s.lastIndexOf("0"); } catch (e) {}
const v42 = v39 + v41;
const v44 = ["02134"];
try { AddGlobalRegExpCases(re, v42, s, v44); } catch (e) {}
let v47;
try { v47 = s.lastIndexOf("0"); } catch (e) {}
re.lastIndex = v47 + 1;
const v53 = ("re = " + re) + "; re.lastIndex = ";
let v55;
try { v55 = s.lastIndexOf("0"); } catch (e) {}
const v58 = v53 + (v55 + 1);
const v60 = ["02134"];
try { AddGlobalRegExpCases(re, v58, s, v60); } catch (e) {}
try { test(); } catch (e) {}
function AddGlobalRegExpCases(a65, a66, a67, a68) {
    let v69;
    try { v69 = a67.match(a65); } catch (e) {}
    if ((v69 == null) || (a68 == null)) {
        const v79 = ((a67 + ".match(") + a66) + ")";
        let v80;
        try { v80 = a67.match(a65); } catch (e) {}
        try { AddTestCase(v79, a68, v80); } catch (e) {}
        return;
    }
    const v89 = ((("( " + a67) + " ).match(") + a66) + ").length";
    const v90 = a68?.length;
    let v91;
    try { v91 = a67.match(a65); } catch (e) {}
    const v92 = v91?.length;
    try { AddTestCase(v89, v90, v92); } catch (e) {}
    const v95 = a68?.length;
    let v96;
    try { v96 = a67.match(a65); } catch (e) {}
    const v98 = v95 > v96?.length;
    const v99 = a68?.length;
    let v100;
    try { v100 = a67.match(a65); } catch (e) {}
    var limit = v98 ? v99 : v100?.length;
    for (let i105 = 0; i105 < limit; i105++) {
        const v119 = ((((("( " + a67) + " ).match(") + a66) + ")[") + i105) + "]";
        const v120 = a68?.[i105];
        let v121;
        try { v121 = a67.match(a65); } catch (e) {}
        const v122 = v121?.[i105];
        try { AddTestCase(v119, v120, v122); } catch (e) {}
    }
}
