const v1 = `class X {                                 // 000\n};                                         // 050\n`;
const v5 = { start: 0, end: 98, count: 1 };
const v10 = [v5,{ start: 0, end: 0, count: 0 }];
try { TestCoverage("class with no fields", v1, v10); } catch (e) {}
const v14 = `class X {                                 // 000\n  x = function() { }                       // 050\n};                                         // 100\n`;
const v18 = { start: 0, end: 148, count: 1 };
const v22 = { start: 0, end: 0, count: 0 };
const v27 = [v18,v22,{ start: 51, end: 69, count: 0 }];
try { TestCoverage("class that's not created", v14, v27); } catch (e) {}
const v30 = `class X {                                 // 000\n  x = function() { }                       // 050\n};                                         // 100\nlet x = new X();                           // 150\n`;
const v34 = { start: 0, end: 198, count: 1 };
const v38 = { start: 0, end: 0, count: 1 };
const v42 = { start: 51, end: 69, count: 1 };
const v47 = [v34,v38,v42,{ start: 55, end: 69, count: 0 }];
try { TestCoverage("class with field thats not called", v30, v47); } catch (e) {}
const v50 = `class X {                                 // 000\n  x = function() { }                       // 050\n};                                         // 100\nlet x = new X();                           // 150\nx.x();                                     // 200\n`;
const v54 = { start: 0, end: 248, count: 1 };
const v58 = { start: 0, end: 0, count: 1 };
const v62 = { start: 51, end: 69, count: 1 };
const v67 = [v54,v58,v62,{ start: 55, end: 69, count: 1 }];
try { TestCoverage("class field", v50, v67); } catch (e) {}
const v70 = `class X {                                 // 000\n  x = function() { }                       // 050\n  foo() { }                                // 100\n  y = function() {}                        // 150\n};                                         // 200\nlet x = new X();                           // 250\nx.x();                                     // 300\nx.y();                                     // 350\n`;
const v74 = { start: 0, end: 398, count: 1 };
const v78 = { start: 0, end: 0, count: 1 };
const v82 = { start: 51, end: 168, count: 1 };
const v86 = { start: 55, end: 69, count: 1 };
const v90 = { start: 101, end: 110, count: 0 };
const v95 = [v74,v78,v82,v86,v90,{ start: 155, end: 168, count: 1 }];
try { TestCoverage("non contiguous class field", v70, v95); } catch (e) {}
const v98 = `class X {                                 // 000\n  x = function() { }                       // 050\n  foo() { }                                // 100\n  y = function() {}                        // 150\n};                                         // 200\nlet x = new X();                           // 250\nx.x();                                     // 300\nx.y();                                     // 350\nx.foo();                                   // 400\n`;
const v102 = { start: 0, end: 448, count: 1 };
const v106 = { start: 0, end: 0, count: 1 };
const v110 = { start: 51, end: 168, count: 1 };
const v114 = { start: 55, end: 69, count: 1 };
const v118 = { start: 101, end: 110, count: 1 };
const v123 = [v102,v106,v110,v114,v118,{ start: 155, end: 168, count: 1 }];
try { TestCoverage("non contiguous class field thats called", v98, v123); } catch (e) {}
const v126 = `class X {                                 // 000\n  x = (function() { })()                   // 050\n};                                         // 100\nlet x = new X();                           // 150\n`;
const v130 = { start: 0, end: 198, count: 1 };
const v134 = { start: 0, end: 0, count: 1 };
const v138 = { start: 51, end: 73, count: 1 };
const v143 = [v130,v134,v138,{ start: 56, end: 70, count: 1 }];
try { TestCoverage("class with initializer iife", v126, v143); } catch (e) {}
const v146 = `\nfunction f() {};                           // 000\nclass X {                                  // 050\n  [f()] = (function() { })()               // 100\n};                                         // 150\nlet x = new X();                           // 200\n`;
const v150 = { start: 0, end: 249, count: 1 };
const v154 = { start: 0, end: 15, count: 1 };
const v158 = { start: 50, end: 50, count: 1 };
const v162 = { start: 102, end: 128, count: 1 };
const v167 = [v150,v154,v158,v162,{ start: 111, end: 125, count: 1 }];
try { TestCoverage("class with computed field", v146, v167); } catch (e) {}
const v170 = `class X {                                 // 000\n  static x = function() { }                // 050\n};                                         // 100\n`;
const v174 = { start: 0, end: 148, count: 1 };
const v178 = { start: 0, end: 0, count: 0 };
const v182 = { start: 51, end: 76, count: 1 };
const v187 = [v174,v178,v182,{ start: 62, end: 76, count: 0 }];
try { TestCoverage("static class field that's not called", v170, v187); } catch (e) {}
const v190 = `class X {                                 // 000\n  static x = function() { }                // 050\n};                                         // 100\nX.x();                                     // 150\n`;
const v194 = { start: 0, end: 198, count: 1 };
const v198 = { start: 0, end: 0, count: 0 };
const v202 = { start: 51, end: 76, count: 1 };
const v207 = [v194,v198,v202,{ start: 62, end: 76, count: 1 }];
try { TestCoverage("static class field", v190, v207); } catch (e) {}
const v210 = `class X {                                 // 000\n  static x = (function() { })()            // 050\n};                                         // 100\n`;
const v214 = { start: 0, end: 148, count: 1 };
const v218 = { start: 0, end: 0, count: 0 };
const v222 = { start: 51, end: 80, count: 1 };
const v227 = [v214,v218,v222,{ start: 63, end: 77, count: 1 }];
try { TestCoverage("static class field with iife", v210, v227); } catch (e) {}
const v230 = `\nfunction f() {}                            // 000\nclass X {                                  // 050\n  static [f()] = (function() { })()        // 100\n};                                         // 150\n`;
const v234 = { start: 0, end: 199, count: 1 };
const v238 = { start: 0, end: 15, count: 1 };
const v242 = { start: 50, end: 50, count: 0 };
const v246 = { start: 102, end: 135, count: 1 };
const v251 = [v234,v238,v242,v246,{ start: 118, end: 132, count: 1 }];
try { TestCoverage("computed static class field", v230, v251); } catch (e) {}
