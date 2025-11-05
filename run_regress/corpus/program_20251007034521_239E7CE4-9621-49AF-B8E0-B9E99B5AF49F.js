function foo() {
    return a + b;
}
try { noInline(foo); } catch (e) {}
var a;
var b;
function setA(a11, a12) {
    if (a11) {
        a = a12;
    }
}
function setB(a14, a15) {
    if (a14) {
        b = a15;
    }
}
try { noInline(setA); } catch (e) {}
try { noInline(setB); } catch (e) {}
try { setA(true, 4); } catch (e) {}
try { setB(true, 5); } catch (e) {}
for (let i25 = 0; i25 < 1000; ++i25) {
    try { setA(false, 42); } catch (e) {}
    try { setB(false, 42); } catch (e) {}
}
function check(a38, a39) {
    if (a38 == a39) {
        return;
    }
    throw (("Error: expected " + a39) + " but got ") + a38;
}
for (let i47 = 0; i47 < 100; ++i47) {
    let v53;
    try { v53 = foo(); } catch (e) {}
    try { check(v53, 9); } catch (e) {}
}
try { setA(true, 6); } catch (e) {}
for (let i60 = 0; i60 < 1000; ++i60) {
    let v66;
    try { v66 = foo(); } catch (e) {}
    try { check(v66, 11); } catch (e) {}
}
try { setB(true, 7); } catch (e) {}
for (let i73 = 0; i73 < 10000; ++i73) {
    let v79;
    try { v79 = foo(); } catch (e) {}
    try { check(v79, 13); } catch (e) {}
}
