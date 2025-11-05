function f0() {
}
let v2;
try { v2 = isNeverOptimizeLiteMode(); } catch (e) {}
if (v2) {
    try { f0("Warning: skipping test that requires optimization in Lite mode."); } catch (e) {}
    try { quit(0); } catch (e) {}
}
const v9 = `\nfunction g() { if (true) nop(); }         // 0000\nfunction f() { g(); g(); }                // 0050\nf(); f(); f(); f(); f(); f();             // 0150\n`;
const v13 = { start: 0, end: 199, count: 1 };
const v17 = { start: 0, end: 33, count: 4 };
const v21 = { start: 25, end: 31, count: 16 };
const v26 = [v13,v17,v21,{ start: 50, end: 76, count: 2 }];
try { TestCoverage("optimized and inlined functions", v9, v26); } catch (e) {}
const v30 = `\n!function() {                             // 0000\n  function f(x) {                         // 0050\n    if (x) { nop(); } else { nop(); }     // 0100\n  }                                       // 0150\n  f(true); f(true);                       // 0200\n  f(false);                               // 0350\n}();                                      // 0400\n`;
const v34 = { start: 52, end: 153, count: 0 };
const v39 = [v34,{ start: 121, end: 137, count: 1 }];
try { TestCoverage("Partial coverage collection", v30, v39); } catch (e) {}
