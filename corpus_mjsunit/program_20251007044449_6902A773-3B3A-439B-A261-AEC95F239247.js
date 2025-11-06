function f0() {
}
var UBound = 0;
var cnSTRESS = 10;
var cnDASH = "-";
var BUGNUMBER = 107138;
var summary = "Regression test for bug 107138";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var arr = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];
for (let i37 = 0; i37 < cnSTRESS; i37++) {
    const v44 = (i37 + cnDASH) + 1;
    let v46;
    try { v46 = inSection(v44); } catch (e) {}
    status = v46;
    actual = arr?.[0];
    expect = "zero";
    try { addThis(); } catch (e) {}
    const v53 = (i37 + cnDASH) + 2;
    let v54;
    try { v54 = inSection(v53); } catch (e) {}
    status = v54;
    actual = arr?.["0"];
    expect = "zero";
    try { addThis(); } catch (e) {}
    const v61 = (i37 + cnDASH) + 3;
    let v62;
    try { v62 = inSection(v61); } catch (e) {}
    status = v62;
    actual = arr?.[1];
    expect = "one";
    try { addThis(); } catch (e) {}
    const v68 = (i37 + cnDASH) + 4;
    let v69;
    try { v69 = inSection(v68); } catch (e) {}
    status = v69;
    actual = arr?.["1"];
    expect = "one";
    try { addThis(); } catch (e) {}
    const v76 = (i37 + cnDASH) + 5;
    let v77;
    try { v77 = inSection(v76); } catch (e) {}
    status = v77;
    actual = arr?.[2];
    expect = "two";
    try { addThis(); } catch (e) {}
    const v83 = (i37 + cnDASH) + 6;
    let v84;
    try { v84 = inSection(v83); } catch (e) {}
    status = v84;
    actual = arr?.["2"];
    expect = "two";
    try { addThis(); } catch (e) {}
    const v91 = (i37 + cnDASH) + 7;
    let v92;
    try { v92 = inSection(v91); } catch (e) {}
    status = v92;
    actual = arr?.[3];
    expect = "three";
    try { addThis(); } catch (e) {}
    const v98 = (i37 + cnDASH) + 8;
    let v99;
    try { v99 = inSection(v98); } catch (e) {}
    status = v99;
    actual = arr?.["3"];
    expect = "three";
    try { addThis(); } catch (e) {}
    const v106 = (i37 + cnDASH) + 9;
    let v107;
    try { v107 = inSection(v106); } catch (e) {}
    status = v107;
    actual = arr?.[4];
    expect = "four";
    try { addThis(); } catch (e) {}
    const v113 = (i37 + cnDASH) + 10;
    let v114;
    try { v114 = inSection(v113); } catch (e) {}
    status = v114;
    actual = arr?.["4"];
    expect = "four";
    try { addThis(); } catch (e) {}
    const v121 = (i37 + cnDASH) + 11;
    let v122;
    try { v122 = inSection(v121); } catch (e) {}
    status = v122;
    actual = arr?.[5];
    expect = "five";
    try { addThis(); } catch (e) {}
    const v128 = (i37 + cnDASH) + 12;
    let v129;
    try { v129 = inSection(v128); } catch (e) {}
    status = v129;
    actual = arr?.["5"];
    expect = "five";
    try { addThis(); } catch (e) {}
    const v136 = (i37 + cnDASH) + 13;
    let v137;
    try { v137 = inSection(v136); } catch (e) {}
    status = v137;
    actual = arr?.[6];
    expect = "six";
    try { addThis(); } catch (e) {}
    const v143 = (i37 + cnDASH) + 14;
    let v144;
    try { v144 = inSection(v143); } catch (e) {}
    status = v144;
    actual = arr?.["6"];
    expect = "six";
    try { addThis(); } catch (e) {}
    const v151 = (i37 + cnDASH) + 15;
    let v152;
    try { v152 = inSection(v151); } catch (e) {}
    status = v152;
    actual = arr?.[7];
    expect = "seven";
    try { addThis(); } catch (e) {}
    const v158 = (i37 + cnDASH) + 16;
    let v159;
    try { v159 = inSection(v158); } catch (e) {}
    status = v159;
    actual = arr?.["7"];
    expect = "seven";
    try { addThis(); } catch (e) {}
    const v166 = (i37 + cnDASH) + 17;
    let v167;
    try { v167 = inSection(v166); } catch (e) {}
    status = v167;
    actual = arr?.[8];
    expect = "eight";
    try { addThis(); } catch (e) {}
    const v173 = (i37 + cnDASH) + 18;
    let v174;
    try { v174 = inSection(v173); } catch (e) {}
    status = v174;
    actual = arr?.["8"];
    expect = "eight";
    try { addThis(); } catch (e) {}
    const v181 = (i37 + cnDASH) + 19;
    let v182;
    try { v182 = inSection(v181); } catch (e) {}
    status = v182;
    actual = arr?.[9];
    expect = "nine";
    try { addThis(); } catch (e) {}
    const v188 = (i37 + cnDASH) + 20;
    let v189;
    try { v189 = inSection(v188); } catch (e) {}
    status = v189;
    actual = arr?.["9"];
    expect = "nine";
    try { addThis(); } catch (e) {}
    const v196 = (i37 + cnDASH) + 21;
    let v197;
    try { v197 = inSection(v196); } catch (e) {}
    status = v197;
    actual = arr?.[10];
    expect = "ten";
    try { addThis(); } catch (e) {}
    const v203 = (i37 + cnDASH) + 22;
    let v204;
    try { v204 = inSection(v203); } catch (e) {}
    status = v204;
    actual = arr?.["10"];
    expect = "ten";
    try { addThis(); } catch (e) {}
}
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
    for (let i217 = 0; i217 < UBound; i217++) {
        const v222 = expectedvalues?.[i217];
        const v223 = actualvalues?.[i217];
        const v224 = statusitems?.[i217];
        try { f0(v222, v223, v224); } catch (e) {}
    }
}
