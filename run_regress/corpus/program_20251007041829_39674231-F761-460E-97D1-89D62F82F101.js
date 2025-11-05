function foo(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26) {
    return (((((((((((((((((((((((((a1 * 2) + (a2 * 3)) + (a3 * 5)) + (a4 * 7)) + (a5 * 11)) + (a6 * 13)) + (a7 * 17)) + (a8 * 19)) + (a9 * 23)) + (a10 * 29)) + (a11 * 31)) + (a12 * 37)) + (a13 * 41)) + (a14 * 43)) + (a15 * 47)) + (a16 * 53)) + (a17 * 59)) + (a18 * 61)) + (a19 * 67)) + (a20 * 71)) + (a21 * 73)) + (a22 * 79)) + (a23 * 83)) + (a24 * 89)) + (a25 * 97)) + (a26 * 101);
}
function bar() {
    let v107;
    try { v107 = foo.apply(this, arguments); } catch (e) {}
    return v107;
}
function baz(a109) {
    let v136;
    try { v136 = bar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26); } catch (e) {}
    return v136 + a109;
}
try { noInline(baz); } catch (e) {}
for (let i141 = 0; i141 < 10000; ++i141) {
    let v148;
    try { v148 = baz(0); } catch (e) {}
    var result = v148;
    if (result != 21586) {
        throw "Error: bad result: " + result;
    }
}
for (let i155 = 0; i155 < 10000; ++i155) {
    let v162;
    try { v162 = baz(2147483646); } catch (e) {}
    var result = v162;
    if (result != 2147505232) {
        throw "Error: bad result: " + result;
    }
}
