function f0() {
}
var UBound = 0;
var BUGNUMBER = 189898;
var summary = "Regression test for bug 189898";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
let v21;
try { v21 = inSection(1); } catch (e) {}
status = v21;
let v25;
try { v25 = ("XaXY").replace("XY", "--"); } catch (e) {}
actual = v25;
expect = "Xa--";
try { addThis(); } catch (e) {}
let v30;
try { v30 = inSection(2); } catch (e) {}
status = v30;
let v34;
try { v34 = ("$a$^").replace("$^", "--"); } catch (e) {}
actual = v34;
expect = "$a--";
try { addThis(); } catch (e) {}
let v38;
try { v38 = inSection(3); } catch (e) {}
status = v38;
let v42;
try { v42 = ("ababc").replace("abc", "--"); } catch (e) {}
actual = v42;
expect = "ab--";
try { addThis(); } catch (e) {}
let v46;
try { v46 = inSection(4); } catch (e) {}
status = v46;
let v50;
try { v50 = ("ababc").replace("abc", "^$"); } catch (e) {}
actual = v50;
expect = "ab^$";
try { addThis(); } catch (e) {}
let v54;
try { v54 = inSection(5); } catch (e) {}
status = v54;
const v55 = /XY/;
let v58;
try { v58 = ("XaXY").replace(v55, "--"); } catch (e) {}
actual = v58;
expect = "Xa--";
try { addThis(); } catch (e) {}
let v62;
try { v62 = inSection(6); } catch (e) {}
status = v62;
const v63 = /XY/g;
let v66;
try { v66 = ("XaXY").replace(v63, "--"); } catch (e) {}
actual = v66;
expect = "Xa--";
try { addThis(); } catch (e) {}
let v70;
try { v70 = inSection(7); } catch (e) {}
status = v70;
const v71 = /\$\^/;
let v74;
try { v74 = ("$a$^").replace(v71, "--"); } catch (e) {}
actual = v74;
expect = "$a--";
try { addThis(); } catch (e) {}
let v78;
try { v78 = inSection(8); } catch (e) {}
status = v78;
const v79 = /\$\^/g;
let v82;
try { v82 = ("$a$^").replace(v79, "--"); } catch (e) {}
actual = v82;
expect = "$a--";
try { addThis(); } catch (e) {}
let v86;
try { v86 = inSection(9); } catch (e) {}
status = v86;
const v87 = /abc/;
let v90;
try { v90 = ("ababc").replace(v87, "--"); } catch (e) {}
actual = v90;
expect = "ab--";
try { addThis(); } catch (e) {}
let v94;
try { v94 = inSection(10); } catch (e) {}
status = v94;
const v95 = /abc/g;
let v98;
try { v98 = ("ababc").replace(v95, "--"); } catch (e) {}
actual = v98;
expect = "ab--";
try { addThis(); } catch (e) {}
let v102;
try { v102 = inSection(11); } catch (e) {}
status = v102;
const v103 = /abc/;
let v106;
try { v106 = ("ababc").replace(v103, "^$"); } catch (e) {}
actual = v106;
expect = "ab^$";
try { addThis(); } catch (e) {}
let v110;
try { v110 = inSection(12); } catch (e) {}
status = v110;
const v111 = /abc/g;
let v114;
try { v114 = ("ababc").replace(v111, "^$"); } catch (e) {}
actual = v114;
expect = "ab^$";
try { addThis(); } catch (e) {}
try { test(); } catch (e) {}
function addThis() {
    statusitems[UBound] = status;
    actualvalues[UBound] = actual;
    expectedvalues[UBound] = expect;
    UBound++;
}
function test() {
    try { f0(BUGNUMBER); } catch (e) {}
    try { f0(summary); } catch (e) {}
    for (let i125 = 0; i125 < UBound; i125++) {
        const v130 = expectedvalues?.[i125];
        const v131 = actualvalues?.[i125];
        const v132 = statusitems?.[i125];
        try { f0(v130, v131, v132); } catch (e) {}
    }
}
