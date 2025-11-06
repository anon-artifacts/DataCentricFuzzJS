function toLatin1(a1) {
    try { isLatin1(a1); } catch (e) {}
    return a1;
}
function testStartsWith() {
    let v7;
    try { v7 = toLatin1("abcdef"); } catch (e) {}
    var s1 = v7;
    let v10;
    try { v10 = toLatin1("abcd"); } catch (e) {}
    var s2 = v10;
    let v13;
    try { v13 = toLatin1("abcd"); } catch (e) {}
    var s3 = v13;
    let v16;
    try { v16 = toLatin1("bc"); } catch (e) {}
    var s4 = v16;
    try { s1.startsWith(s2); } catch (e) {}
    try { s1.startsWith(s3); } catch (e) {}
    try { s1.startsWith(s4); } catch (e) {}
    try { s1.startsWith(s4, 1); } catch (e) {}
    try { s1.startsWith(s1); } catch (e) {}
    const v33 = ("abcሀ").slice(0, -1);
    try { s1.startsWith(v33); } catch (e) {}
    const v40 = ("abceሀ").slice(0, -1);
    try { s1.startsWith(v40); } catch (e) {}
    const v47 = ("bcሀ").slice(0, -1);
    try { s1.startsWith(v47, 1); } catch (e) {}
    try { s1.startsWith("ሀ"); } catch (e) {}
    var s5 = "abcdeሀ";
    s5.startsWith(s1);
    s5.startsWith(s2);
    s5.startsWith(s4);
    s5.startsWith(s4, 1);
    s5.startsWith(s5);
    s5.startsWith("ሀ");
    s5.startsWith("ሀ", 6);
}
testStartsWith();
function testEndsWith() {
    let v77;
    try { v77 = toLatin1("zabcdefg"); } catch (e) {}
    var s1 = v77;
    let v80;
    try { v80 = toLatin1("defg"); } catch (e) {}
    var s2 = v80;
    let v83;
    try { v83 = toLatin1("defg"); } catch (e) {}
    var s3 = v83;
    let v86;
    try { v86 = toLatin1("zabcdef"); } catch (e) {}
    var s4 = v86;
    try { s1.endsWith(s2); } catch (e) {}
    try { s1.endsWith(s3); } catch (e) {}
    try { s1.endsWith(s4); } catch (e) {}
    try { s1.endsWith(s4, 8); } catch (e) {}
    try { s1.endsWith(s1); } catch (e) {}
    const v103 = ("abcdefgሀ").slice(0, -1);
    try { s1.endsWith(v103); } catch (e) {}
    const v110 = ("ᄀefgሀ").slice(0, -1);
    try { s1.endsWith(v110); } catch (e) {}
    const v117 = ("bcሀ").slice(0, -1);
    try { s1.endsWith(v117, 5); } catch (e) {}
    try { s1.endsWith("ሀ"); } catch (e) {}
    var s5 = "ሀzabcdefg";
    s5.endsWith(s1);
    s5.endsWith(s2);
    s5.endsWith(s4);
    s5.endsWith(s4, 9);
    s5.endsWith(s5);
    s5.endsWith("ሀ");
    s5.endsWith("ሀza", 3);
}
testEndsWith();
