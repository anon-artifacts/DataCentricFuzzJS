function testSubstrLatin1() {
    var s1 = "abcdefghijklmnopqrstuvwxyz12345678900000a";
    s1.substr(s1.length - 1);
    s1.substr(s1.length - 2);
    s1.substr(26, 3);
    var s2 = s1.substr(3, 5);
    try { isLatin1(s2); } catch (e) {}
    let v27;
    try { v27 = s1.substr(0, 20); } catch (e) {}
    s2 = v27;
    try { isLatin1(s2); } catch (e) {}
    const v34 = s1?.length - 2;
    let v35;
    try { v35 = s1.substr(1, v34); } catch (e) {}
    s2 = v35;
    try { isLatin1(s2); } catch (e) {}
    s2?.length;
    let v43;
    try { v43 = s2.substr(2); } catch (e) {}
    let v44;
    try { v44 = v43.substr(1); } catch (e) {}
    s2 = v44;
    try { isLatin1(s2); } catch (e) {}
}
try { testSubstrLatin1(); } catch (e) {}
function testSubstrTwoByte() {
    var s1 = "abcdefghijklmnopqrstuvwxyz12345678900000aᒀ";
    try { isLatin1(s1); } catch (e) {}
    let v57;
    try { v57 = s1.substr(28, 1); } catch (e) {}
    var s2 = v57;
    let v62;
    try { v62 = s1.substr(3, 5); } catch (e) {}
    s2 = v62;
    let v65;
    try { v65 = s1.substr(2); } catch (e) {}
    s2 = v65;
    try { isLatin1(s2); } catch (e) {}
    let v71;
    try { v71 = s2.substr(2); } catch (e) {}
    let v72;
    try { v72 = v71.substr(1); } catch (e) {}
    s2 = v72;
    try { isLatin1(s2); } catch (e) {}
}
try { testSubstrTwoByte(); } catch (e) {}
function testSubstring() {
    var s1 = "abcdefghijklmnopqrstuvwxyz123456789000ab";
    var s2 = s1.substring(1, 8);
    try { isLatin1(s2); } catch (e) {}
    const v91 = s1?.length - 1;
    let v92;
    try { v92 = s1.substring(0, v91); } catch (e) {}
    s2 = v92;
    try { isLatin1(s2); } catch (e) {}
}
try { testSubstring(); } catch (e) {}
function testSlice() {
    var s1 = "abcdefghijklmnopqrstuvwxyz123456789000ABC";
    var s2 = s1.slice(1, 8);
    try { isLatin1(s2); } catch (e) {}
    const v110 = -2;
    let v111;
    try { v111 = s1.slice(0, v110); } catch (e) {}
    s2 = v111;
    try { isLatin1(s2); } catch (e) {}
}
try { testSlice(); } catch (e) {}
function testUndepend() {
    var s = ("abcdefg").repeat(7);
    s.indexOf("def");
    try { isLatin1(s); } catch (e) {}
    let v127;
    try { v127 = s.substr(7); } catch (e) {}
    var dep = v127;
    const v129 = /abcdef/g;
    let v131;
    try { v131 = dep.replace(v129, ""); } catch (e) {}
    var res = v131;
    let v136;
    try { v136 = ("abcdefgሀ").repeat(6); } catch (e) {}
    var s = v136;
    try { s.indexOf("def"); } catch (e) {}
    let v141;
    try { v141 = s.substr(8); } catch (e) {}
    var dep = v141;
    const v143 = /abcdefg/g;
    let v145;
    try { v145 = dep.replace(v143, ""); } catch (e) {}
    var res = v145;
}
try { testUndepend(); } catch (e) {}
