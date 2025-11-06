let v2;
try { v2 = cacheEntry("function inner() { return 3; }; inner()"); } catch (e) {}
let x = v2;
const v5 = { saveIncrementalBytecode: true };
try { evaluate(x, v5); } catch (e) {}
try {
    const v9 = { loadBytecode: true };
    try { evaluate(x, v9); } catch (e) {}
} catch(e11) {
}
