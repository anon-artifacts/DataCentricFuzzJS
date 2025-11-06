function f0() {
}
var s = "s";
function foo(a4, a5) {
    return ("t" + a4) + a5;
}
try { noInline(foo); } catch (e) {}
for (let i12 = 0; i12 < 100000; ++i12) {
    try { foo("a", "b"); } catch (e) {}
}
try {
    for (let i22 = 0; i22 < 31; ++i22) {
        let v28;
        try { v28 = foo(s, s); } catch (e) {}
        s = v28;
    }
    try { f0("Should not have gotten here."); } catch (e) {}
    const v33 = "String length: " + s?.length;
    try { f0(v33); } catch (e) {}
    throw "Should not have gotten here.";
} catch(e36) {
}
