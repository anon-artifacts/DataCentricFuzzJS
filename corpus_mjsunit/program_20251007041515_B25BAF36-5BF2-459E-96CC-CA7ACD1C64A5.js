function f0() {
}
let v2;
try { v2 = f0(); } catch (e) {}
if (!v2) {
    try { f0("Concurrent recompilation is disabled. Skipping this test."); } catch (e) {}
    try { quit(); } catch (e) {}
}
function f(a9) {
    var xx = a9 * a9;
    let v12;
    try { v12 = xx.toString(); } catch (e) {}
    var xxstr = v12;
    return xxstr?.length;
}
function g(a16) {
    let v18;
    try { v18 = Math.sqrt(a16); } catch (e) {}
    var xxx = v18 | 0;
    let v22;
    try { v22 = xxx.toString(); } catch (e) {}
    var xxxstr = v22;
    return xxxstr?.length;
}
function k(a26) {
    return a26 * a26;
}
let v29;
try { v29 = g(1); } catch (e) {}
try { f(v29); } catch (e) {}
let v32;
try { v32 = g(2); } catch (e) {}
try { f(v32); } catch (e) {}
try { f(); } catch (e) {}
try { g(); } catch (e) {}
let v37;
try { v37 = g(3); } catch (e) {}
try { f(v37); } catch (e) {}
try { f(); } catch (e) {}
try { g(); } catch (e) {}
try { f(); } catch (e) {}
try { g(); } catch (e) {}
