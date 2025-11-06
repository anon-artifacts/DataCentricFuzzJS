try { isLatin1("Foo123ሀ"); } catch (e) {}
s = "Foo123";
try { isLatin1(s); } catch (e) {}
function testEq(a10) {
    try { isLatin1(a10); } catch (e) {}
    a10 === "foo02";
    a10 == "foo02";
    let v21;
    try { v21 = ("ሴfoo01Ç").substr(1); } catch (e) {}
    var nonAtomized = v21;
    try { isLatin1(nonAtomized); } catch (e) {}
    a10 === nonAtomized;
    nonAtomized !== a10;
    nonAtomized == a10;
    let v33;
    try { v33 = ("ሴfoo02").substr(1); } catch (e) {}
    nonAtomized = v33;
    try { isLatin1(nonAtomized); } catch (e) {}
    a10 === nonAtomized;
    nonAtomized == a10;
}
s = "foo01Ç";
try { testEq(s); } catch (e) {}
try { testEq(s); } catch (e) {}
function testConcat() {
    function concat(a45, a46) {
        return a45 + a46;
    }
    try { concat("abc", "def"); } catch (e) {}
    var s1 = "ABC";
    var s2 = "DEF";
    try { concat(s1, s2); } catch (e) {}
    try { concat(s1, "GHIր"); } catch (e) {}
    try { concat("GHIր", s2); } catch (e) {}
    let v65;
    try { v65 = concat("GHIր", s2); } catch (e) {}
    try { concat(v65, s1); } catch (e) {}
    try { isLatin1(s1); } catch (e) {}
    try { isLatin1(s2); } catch (e) {}
    var s3 = "0123456789012345678901234567890123456789";
    let v74;
    try { v74 = concat(s1, s3); } catch (e) {}
    var rope = v74;
    try { isLatin1(rope); } catch (e) {}
    try { isLatin1(rope); } catch (e) {}
    try { isLatin1(s3); } catch (e) {}
    let v84;
    try { v84 = concat(s3, "someTwoByteStringր"); } catch (e) {}
    rope = v84;
    try { isLatin1(rope); } catch (e) {}
    try { isLatin1(rope); } catch (e) {}
    try { isLatin1(s3); } catch (e) {}
    let v94;
    try { v94 = concat(s3, "otherTwoByteր"); } catch (e) {}
    let v95;
    try { v95 = concat("twoByteStringր", v94); } catch (e) {}
    rope = v95;
    try { isLatin1(rope); } catch (e) {}
    try { isLatin1(rope); } catch (e) {}
    var s4 = "adsfasdfjkasdfkjasdfasasdfasdf";
    for (let i104 = 0; i104 < 5; i104++) {
        let v110;
        try { v110 = concat(s4, s1); } catch (e) {}
        s4 = v110;
        const v111 = s4?.length;
        let v113;
        try { v113 = (".").repeat(v111); } catch (e) {}
        s4 === v113;
    }
    try { isLatin1(s4); } catch (e) {}
    let v119;
    try { v119 = concat(s4, "--ր"); } catch (e) {}
    s4 = v119;
}
try { testConcat(); } catch (e) {}
function testFlattenDependent() {
    function concat(a124, a125) {
        return a124 + a125;
    }
    var s1 = "Foo0123456789bar012345---";
    var s2 = "Foo0123456789bar012345+++";
    try { isLatin1(s1); } catch (e) {}
    try { isLatin1(s2); } catch (e) {}
    let v135;
    try { v135 = concat(s1, s1); } catch (e) {}
    var rope1 = v135;
    try { isLatin1(rope1); } catch (e) {}
    let v139;
    try { v139 = concat(rope1, s2); } catch (e) {}
    var rope2 = v139;
    try { isLatin1(rope2); } catch (e) {}
    let v144;
    try { v144 = concat("twoByteց", rope2); } catch (e) {}
    var rope3 = v144;
    try { isLatin1(rope3); } catch (e) {}
    try { isLatin1(rope3); } catch (e) {}
    try { isLatin1(rope1); } catch (e) {}
    try { isLatin1(rope2); } catch (e) {}
}
try { testFlattenDependent(); } catch (e) {}
