function assert(a1) {
}
function test(a3) {
    let value = null;
    let passed = true;
    try {
        delete value?.bar;
        passed = false;
    } catch(e10) {
    }
    try {
        delete value?.["bar" + a3];
        passed = false;
    } catch(e15) {
    }
}
try { noInline(test); } catch (e) {}
for (let i19 = 0; i19 < 10000; ++i19) {
    try { test(); } catch (e) {}
}
