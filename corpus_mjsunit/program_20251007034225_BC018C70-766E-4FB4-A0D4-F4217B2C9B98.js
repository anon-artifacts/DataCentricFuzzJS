function f0() {
}
function test0() {
    var IntArr0 = [];
    v5 = IntArr0.length;
    for (let i7 = 10; i7 < v5; i7++) {
        IntArr0[i7] = 0.5;
    }
    return i;
}
try { test0(); } catch (e) {}
let v16;
try { v16 = test0(); } catch (e) {}
if (v16 !== 10) {
    f0("FAILED");
} else {
    try { f0("PASSED"); } catch (e) {}
}
