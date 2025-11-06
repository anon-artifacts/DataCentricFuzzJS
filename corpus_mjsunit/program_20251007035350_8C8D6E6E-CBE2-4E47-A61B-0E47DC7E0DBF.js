function toLatin1(a1) {
    try { isLatin1(a1); } catch (e) {}
    return a1;
}
function testLastIndexOf() {
    let v7;
    try { v7 = toLatin1("abcdefgh123456defg"); } catch (e) {}
    var s1 = v7;
    let v10;
    try { v10 = toLatin1("456de"); } catch (e) {}
    var s2 = v10;
    try { s1.lastIndexOf(s1); } catch (e) {}
    try { s1.lastIndexOf(s2); } catch (e) {}
    try { s1.lastIndexOf(s2, 10); } catch (e) {}
    -1;
    try { s2.lastIndexOf(s1); } catch (e) {}
    -1;
    try { s1.lastIndexOf("abcሴ"); } catch (e) {}
    -1;
    let v30;
    try { v30 = ("defሴ").substring(0, 3); } catch (e) {}
    try { s1.lastIndexOf(v30); } catch (e) {}
    let v36;
    try { v36 = ("defሴ").substring(0, 3); } catch (e) {}
    try { s1.lastIndexOf(v36, 9); } catch (e) {}
    var s3 = "123456defgᄣa456defg";
    try { isLatin1(s2); } catch (e) {}
    try { s3.lastIndexOf(s2); } catch (e) {}
    try { s3.lastIndexOf(s2, 12); } catch (e) {}
    let v51;
    try { v51 = toLatin1("defg7"); } catch (e) {}
    try { s3.lastIndexOf(v51); } catch (e) {}
    -1;
    try { s3.lastIndexOf("ᄣa4"); } catch (e) {}
    try { s3.lastIndexOf("ᄣa4", 10); } catch (e) {}
    -1;
    try { s3.lastIndexOf("ᄣa႘"); } catch (e) {}
    -1;
    try { s3.lastIndexOf(s3); } catch (e) {}
}
try { testLastIndexOf(); } catch (e) {}
function testIndexOf() {
    let v72;
    try { v72 = toLatin1("abcdefgh123456dªefghi"); } catch (e) {}
    var s1 = v72;
    let v75;
    try { v75 = toLatin1("456dª"); } catch (e) {}
    var s2 = v75;
    try { s1.indexOf(s1); } catch (e) {}
    try { s1.indexOf(s2); } catch (e) {}
    try { s1.indexOf(s2, 12); } catch (e) {}
    -1;
    try { s2.indexOf(s1); } catch (e) {}
    -1;
    try { s1.indexOf("abcሴ"); } catch (e) {}
    -1;
    let v95;
    try { v95 = ("defሴ").substring(0, 3); } catch (e) {}
    try { s1.indexOf(v95); } catch (e) {}
    let v101;
    try { v101 = ("dªefሴ").substring(0, 3); } catch (e) {}
    try { s1.indexOf(v101, 9); } catch (e) {}
    var s3 = "123456dªefgᄣa456dªefg";
    try { isLatin1(s2); } catch (e) {}
    try { s3.indexOf(s2); } catch (e) {}
    try { s3.indexOf(s2, 11); } catch (e) {}
    let v116;
    try { v116 = toLatin1("dªefg7"); } catch (e) {}
    try { s3.indexOf(v116); } catch (e) {}
    -1;
    try { s3.indexOf("ᄣa4"); } catch (e) {}
    try { s3.indexOf("ᄣa4", 12); } catch (e) {}
    -1;
    try { s3.indexOf("ᄣa႘"); } catch (e) {}
    -1;
    try { s3.indexOf(s3); } catch (e) {}
}
try { testIndexOf(); } catch (e) {}
function testincludes() {
    let v137;
    try { v137 = toLatin1("abcdefgh123456defghiîj"); } catch (e) {}
    var s1 = v137;
    let v140;
    try { v140 = toLatin1("456defghiî"); } catch (e) {}
    var s2 = v140;
    try { s1.includes(s1); } catch (e) {}
    try { s1.includes(s2); } catch (e) {}
    try { s1.includes(s2, 12); } catch (e) {}
    try { s2.includes(s1); } catch (e) {}
    try { s1.includes("abcሴ"); } catch (e) {}
    let v157;
    try { v157 = ("defሴ").substring(0, 3); } catch (e) {}
    try { s1.includes(v157); } catch (e) {}
    let v163;
    try { v163 = ("defሴ").substring(0, 3); } catch (e) {}
    try { s1.includes(v163, 9); } catch (e) {}
    var s3 = "123456defgᄣa456defghiîj";
    try { isLatin1(s2); } catch (e) {}
    try { s3.includes(s2); } catch (e) {}
    try { s3.includes(s2, 13); } catch (e) {}
    let v178;
    try { v178 = toLatin1("defg8"); } catch (e) {}
    try { s3.includes(v178); } catch (e) {}
    try { s3.includes("ᄣa4"); } catch (e) {}
    try { s3.includes("ᄣa4", 11); } catch (e) {}
    try { s3.includes("ᄣa႘"); } catch (e) {}
    try { s3.includes(s3); } catch (e) {}
}
try { testincludes(); } catch (e) {}
function testIndexOfBMH() {
    let v197;
    try { v197 = ("012345678901234567890123456789").repeat(20); } catch (e) {}
    var s = v197;
    var text = s + "abcdefghijklmnopqrstÁuvwxyz";
    try { text.indexOf("333"); } catch (e) {}
    let v204;
    try { v204 = toLatin1(text); } catch (e) {}
    var textL1 = v204;
    let v207;
    try { v207 = toLatin1("cdefghijklmnopqrstÁuvwx"); } catch (e) {}
    var patL1 = v207;
    try { textL1.indexOf(patL1); } catch (e) {}
    try { textL1.indexOf(patL1, 603); } catch (e) {}
    -1;
    try { textL1.indexOf(textL1); } catch (e) {}
    try { textL1.indexOf("cdefghijklmnopqrstÁuvwxy"); } catch (e) {}
    try { textL1.indexOf("cdefghijklmnopqrstÁuvwxy", 603); } catch (e) {}
    -1;
    const v227 = -1;
    try { textL1.indexOf("cdefghijklmnopqrstÁuvwxyꨀ", v227); } catch (e) {}
    -1;
    var textTB = s + "abcdefghijklmnopqrstÁuvwxyzሀ";
    try { text.indexOf("333"); } catch (e) {}
    try { textTB.indexOf(patL1); } catch (e) {}
    try { textTB.indexOf(patL1, 603); } catch (e) {}
    -1;
    try { textTB.indexOf("defghijklmnopqrstÁuvwxyzሀ"); } catch (e) {}
    try { textTB.indexOf("defghijklmnopqrstÁuvwxyzሀ", 604); } catch (e) {}
    -1;
    try { textTB.indexOf("defghijklmnopqrstÁuvwxyzሁ"); } catch (e) {}
    -1;
}
try { testIndexOfBMH(); } catch (e) {}
function testIndexOfLargePattern() {
    let v258;
    try { v258 = ("012345678901234567890123456789").repeat(10); } catch (e) {}
    var text = v258 + "abcdefghijklmnopqrstÁuvwxyz";
    try { text.indexOf("333"); } catch (e) {}
    let v266;
    try { v266 = ("012345678901234567890123456789").repeat(5); } catch (e) {}
    var pat = v266 + "abcdefghijklmnopqr";
    try { pat.indexOf("333"); } catch (e) {}
    let v272;
    try { v272 = toLatin1(text); } catch (e) {}
    text = v272;
    let v273;
    try { v273 = toLatin1(pat); } catch (e) {}
    pat = v273;
    try { text.indexOf(pat); } catch (e) {}
    const v277 = pat + "ሀ";
    try { text.indexOf(v277); } catch (e) {}
    -1;
    const v283 = -1;
    const v285 = pat + "ሀ";
    let v286;
    try { v286 = v285.slice(0, v283); } catch (e) {}
    try { text.indexOf(v286); } catch (e) {}
    text = text + "ᄀ";
    try { isLatin1(pat); } catch (e) {}
    try { text.indexOf(pat); } catch (e) {}
    pat = pat + "stÁuvwxyzᄀ";
    try { text.indexOf(pat); } catch (e) {}
    const v301 = pat + " ";
    try { text.indexOf(v301); } catch (e) {}
    -1;
}
try { testIndexOfLargePattern(); } catch (e) {}
