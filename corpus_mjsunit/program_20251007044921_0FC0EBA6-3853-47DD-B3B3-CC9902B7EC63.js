function f0() {
}
let v2;
try { v2 = isNeverOptimizeLiteMode(); } catch (e) {}
if (v2) {
    try { f0("Warning: skipping test that requires optimization in Lite mode."); } catch (e) {}
    try { quit(0); } catch (e) {}
}
function f() {
    const t9 = Array?.prototype;
    t9[10] = 2;
    let v12;
    try { v12 = new Array(); } catch (e) {}
    var arr = v12;
    arr[500] = 20;
    arr[10] = arr?.[50];
}
function g() {
    try { f(); } catch (e) {}
}
try { g(); } catch (e) {}
try { g(); } catch (e) {}
try { g(); } catch (e) {}
