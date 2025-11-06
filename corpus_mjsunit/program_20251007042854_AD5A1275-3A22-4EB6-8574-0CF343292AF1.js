let THREAD_TYPE_PARSE = 4;
function f2() {
    const v3 = `function f() { function g() { }; return 3; };`;
    let v5;
    try { v5 = cacheEntry(v3); } catch (e) {}
    let t = v5;
    const v9 = { sourceIsLazy: true, saveIncrementalBytecode: true };
    try { evaluate(t, v9); } catch (e) {}
    const v14 = { sourceIsLazy: true, readBytecode: true };
    try { evaluate(t, v14); } catch (e) {}
}
try { oomTest(f2); } catch (e) {}
const v18 = `function f() { function g() { }; return 3; };`;
let v20;
try { v20 = cacheEntry(v18); } catch (e) {}
let t = v20;
const v24 = { sourceIsLazy: true, saveIncrementalBytecode: true };
try { evaluate(t, v24); } catch (e) {}
for (let i28 = 1; i28 < 100; ++i28) {
    try {
        try { offThreadDecodeScript(t); } catch (e) {}
    } catch(e36) {
    }
}
