function shouldBe(a1, a2) {
    if (a1 !== a2) {
        let v6;
        try { v6 = String(a1); } catch (e) {}
        let v7;
        try { v7 = String(a2); } catch (e) {}
        const v8 = `bad value: ${v6} ${v7}`;
        let v9;
        try { v9 = new Error(v8); } catch (e) {}
        throw v9;
    }
}
function testJNSTRICTEQ(a11, a12) {
    if (a11 === a12) {
        return 42;
    }
    return 30;
}
try { noInline(testJNSTRICTEQ); } catch (e) {}
function testJSTRICTEQ(a19, a20) {
    if (a19 !== a20) {
        return 42;
    }
    return 30;
}
try { noInline(testJSTRICTEQ); } catch (e) {}
function testJNSTRICTEQB(a26, a27) {
    var i = 0;
    do {
        ++i;
    } while (!(a26 === a27))
    return i;
}
try { noInline(testJNSTRICTEQB); } catch (e) {}
function testJSTRICTEQB(a35, a36) {
    var i = 0;
    do {
        ++i;
    } while (!(a35 !== a36))
    return i;
}
try { noInline(testJSTRICTEQB); } catch (e) {}
function testJNSTRICTEQF(a44, a45) {
    var i = 0;
    while (!(a44 === a45)) {
        ++i;
    }
    return i;
}
try { noInline(testJNSTRICTEQF); } catch (e) {}
function testJSTRICTEQF(a53, a54) {
    var i = 0;
    while (!(a53 !== a54)) {
        ++i;
    }
    return i;
}
try { noInline(testJSTRICTEQF); } catch (e) {}
for (let i62 = 0; i62 < 10000; ++i62) {
    let v70;
    try { v70 = testJNSTRICTEQ(0, 42); } catch (e) {}
    try { shouldBe(v70, 30); } catch (e) {}
    let v75;
    try { v75 = testJSTRICTEQ(0, 42); } catch (e) {}
    try { shouldBe(v75, 42); } catch (e) {}
    let v80;
    try { v80 = testJNSTRICTEQB(0, 0); } catch (e) {}
    try { shouldBe(v80, 1); } catch (e) {}
    let v85;
    try { v85 = testJSTRICTEQB(0, 1); } catch (e) {}
    try { shouldBe(v85, 1); } catch (e) {}
    let v90;
    try { v90 = testJNSTRICTEQF(0, 0); } catch (e) {}
    try { shouldBe(v90, 0); } catch (e) {}
    let v95;
    try { v95 = testJSTRICTEQF(0, 1); } catch (e) {}
    try { shouldBe(v95, 0); } catch (e) {}
}
