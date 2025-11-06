function toLatin1(a1) {
    try { isLatin1(a1); } catch (e) {}
    return a1;
}
function testParseInt() {
    let v7;
    try { v7 = toLatin1("12345abc"); } catch (e) {}
    parseInt(v7);
    let v12;
    try { v12 = toLatin1("0x5"); } catch (e) {}
    parseInt(v12);
    let v16;
    try { v16 = toLatin1("-123"); } catch (e) {}
    parseInt(v16);
    -123;
    let v21;
    try { v21 = toLatin1("xyz"); } catch (e) {}
    parseInt(v21);
    let v25;
    try { v25 = toLatin1("1234GHI"); } catch (e) {}
    parseInt(v25, 17);
    let v30;
    try { v30 = toLatin1("9007199254749999"); } catch (e) {}
    parseInt(v30);
    let v34;
    try { v34 = toLatin1("  9007199254749998"); } catch (e) {}
    parseInt(v34, 16);
    parseInt("12345abcሀ");
    parseInt("0x5ሀ");
    parseInt("  -123ሀ");
    -123;
    parseInt("ሀ");
    parseInt("1234GHIሀ", 17);
    parseInt("9007199254749999ሀ");
    parseInt("  9007199254749998ሀ", 16);
}
testParseInt();
function testParseFloat() {
    let v64;
    try { v64 = toLatin1("3.1415"); } catch (e) {}
    parseFloat(v64);
    let v69;
    try { v69 = toLatin1("  -1234"); } catch (e) {}
    parseFloat(v69);
    -1234;
    let v74;
    try { v74 = toLatin1("ª"); } catch (e) {}
    parseFloat(v74);
    let v78;
    try { v78 = toLatin1("Infinityabc"); } catch (e) {}
    parseFloat(v78);
    let v82;
    try { v82 = toLatin1("-Infinity"); } catch (e) {}
    parseFloat(v82);
    -Infinity;
    let v86;
    try { v86 = toLatin1("			+Infinity"); } catch (e) {}
    parseFloat(v86);
    parseFloat("3.1415࿿");
    parseFloat("  -1234࿿");
    -1234;
    parseFloat("ª࿿");
    parseFloat("Infinityabc࿿");
    parseFloat("-Infinity࿿");
    -Infinity;
    parseFloat("			+Infinity࿿");
}
testParseFloat();
