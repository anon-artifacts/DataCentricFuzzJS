const v1 = `\nfunction g() { if (true) nop(); }         // 0000\nfunction f() { g(); g(); }                // 0050\nf(); f(); f(); f(); f(); f();             // 0150\n`;
const v5 = { start: 0, end: 199, count: 1 };
const v9 = { start: 0, end: 33, count: 16 };
const v14 = [v5,v9,{ start: 50, end: 76, count: 8 }];
try { TestCoverage("optimized and inlined functions", v1, v14); } catch (e) {}
const v18 = `\n!function() {                             // 0000\n  function f(x) {                         // 0050\n    if (x) { nop(); } else { nop(); }     // 0100\n  }                                       // 0150\n  f(true); f(true);                       // 0200\n  f(false);                               // 0350\n}();                                      // 0400\n`;
const v22 = { start: 52, end: 153, count: 1 };
const v27 = [v22,{ start: 111, end: 121, count: 0 }];
try { TestCoverage("Partial coverage collection", v18, v27); } catch (e) {}
