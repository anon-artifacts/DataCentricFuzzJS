function a2(a1, a2) {
    return [a1,a2,a1 + a2];
}
function a1(a6, a7, a8) {
    return [a6,a2(a7, a8)];
}
function TestArrayLiteral(a12, a13, a14) {
    var expected = [a12,[a13,a14,a13 + a14]];
    var result = a1(a12, a13, a14);
}
TestArrayLiteral(1, 2, 3);
TestArrayLiteral(1, 2, 3);
TestArrayLiteral(1, 2, 3);
TestArrayLiteral("a", "b", "c");
function o2(a39, a40) {
    const v41 = a39 + a40;
    return { b: a39, c: a40, y: v41 };
}
function o1(a44, a45, a46) {
    const v47 = o2(a45, a46);
    return { a: a44, x: v47 };
}
function TestObjectLiteral(a50, a51, a52) {
    const v53 = a51 + a52;
    const v54 = { b: a51, c: a52, y: v53 };
    var expected = { a: a50, x: v54 };
    var result = o1(a50, a51, a52);
}
TestObjectLiteral(1, 2, 3);
TestObjectLiteral(1, 2, 3);
TestObjectLiteral(1, 2, 3);
TestObjectLiteral("a", "b", "c");
function r2(a77, a78, a79) {
    return a77.replace(/a/, a78 + a79);
}
function r1(a84, a85, a86) {
    const v87 = /b/;
    const v88 = a86 + a85;
    return r2(a84, a85, a86).replace(v87, v88);
}
function TestRegExpLiteral(a92, a93, a94, a95) {
    var result = r1(a92, a93, a94);
}
TestRegExpLiteral("a-", "reg", "exp", "regexp-");
TestRegExpLiteral("-b", "reg", "exp", "-expreg");
TestRegExpLiteral("ab", "reg", "exp", "regexpexpreg");
TestRegExpLiteral("ab", 12345, 54321, "6666666666");
function f2(a120, a121) {
    function f122(a123, a124) {
        return a123 + a124;
    }
    var closure = f122;
    var value = a120 + a121;
    return closure;
}
function f1(a130, a131, a132) {
    const t56 = f2(a131, a132);
    return a130 + t56(a131, a132);
}
function TestFunctionLiteral(a137, a138, a139, a140) {
    var result = f1(a137, a138, a139);
}
TestFunctionLiteral(1, 2, 3, 6);
TestFunctionLiteral(4, 5, 6, 15);
TestFunctionLiteral(7, 8, 9, 24);
TestFunctionLiteral("a", "b", "c", "abc");
