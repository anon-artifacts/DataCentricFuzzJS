try { testLenientAndStrict("let let_declared; let_declared=1", completesNormally, completesNormally); } catch (e) {}
new ArrayBuffer();
const v9 = {
    get hello() {
        return 42;
    },
};
var object = v9;
function f11() {
    var value = "hello";
    if ((object?.[value] + 20) !== 62) {
        let v20;
        try { v20 = new Error(); } catch (e) {}
        throw v20;
    }
}
for (let i22 = 0; i22 < 10000; ++i22) {
    try { f11(); } catch (e) {}
}
try { gczeal(7); } catch (e) {}
new ArrayBuffer(16, { maxByteLength: 536870887 });
const v37 = new Map();
for (const v38 of v37) {
}
