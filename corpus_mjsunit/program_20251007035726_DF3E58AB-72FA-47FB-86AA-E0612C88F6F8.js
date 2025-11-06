const v1 = `\n(function f() {})();\n`;
const v5 = { start: 0, end: 20, count: 1 };
const v10 = [v5,{ start: 1, end: 16, count: 1 }];
try { TestCoverage("call an IIFE", v1, v10); } catch (e) {}
const v14 = `let f = () => 1; f();`;
const v18 = { start: 0, end: 21, count: 1 };
const v23 = [v18,{ start: 8, end: 15, count: 1 }];
try { TestCoverage("call locally allocated function", v14, v23); } catch (e) {}
const v26 = `\nfunction g() {}                           // 0000\nfunction f(x) {                           // 0050\n  if (x == 42) {                          // 0100\n    if (x == 43) g(); else g();           // 0150\n  }                                       // 0200\n  if (x == 42) { g(); } else { g(); }     // 0250\n  if (x == 42) g(); else g();             // 0300\n  if (false) g(); else g();               // 0350\n  if (false) g();                         // 0400\n  if (true) g(); else g();                // 0450\n  if (true) g();                          // 0500\n}                                         // 0550\nf(42);                                    // 0600\nf(43);                                    // 0650\nif (true) {                               // 0700\n  const foo = 'bar';                      // 0750\n} else {                                  // 0800\n  const bar = 'foo';                      // 0850\n}                                         // 0900\n`;
const v30 = { start: 0, end: 949, count: 1 };
const v34 = { start: 801, end: 901, count: 0 };
const v38 = { start: 0, end: 15, count: 11 };
const v42 = { start: 50, end: 551, count: 2 };
const v46 = { start: 115, end: 203, count: 1 };
const v50 = { start: 167, end: 171, count: 0 };
const v54 = { start: 265, end: 287, count: 1 };
const v58 = { start: 315, end: 329, count: 1 };
const v62 = { start: 363, end: 367, count: 0 };
const v66 = { start: 413, end: 417, count: 0 };
const v71 = [v30,v34,v38,v42,v46,v50,v54,v58,v62,v66,{ start: 466, end: 476, count: 0 }];
try { TestCoverage("if statements", v26, v71); } catch (e) {}
const v74 = `\n!function() {                             // 0000\n  if (true) {                             // 0050\n    nop();                                // 0100\n    return;                               // 0150\n    nop();                                // 0200\n  }                                       // 0250\n  nop();                                  // 0300\n}()                                       // 0350\n`;
const v78 = { start: 0, end: 399, count: 1 };
const v82 = { start: 1, end: 351, count: 1 };
const v87 = [v78,v82,{ start: 161, end: 350, count: 0 }];
try { TestCoverage("if statement (early return)", v74, v87); } catch (e) {}
const v90 = `\n!function() {                             // 0000\n  if (true) nop()                         // 0050\n  if (true) nop(); else nop()             // 0100\n  nop();                                  // 0150\n}()                                       // 0200\n`;
const v94 = { start: 0, end: 249, count: 1 };
const v98 = { start: 1, end: 201, count: 1 };
const v103 = [v94,v98,{ start: 118, end: 129, count: 0 }];
try { TestCoverage("if statement (no semi-colon)", v90, v103); } catch (e) {}
const v106 = `\nfunction g() {}                           // 0000\n!function() {                             // 0050\n  for (var i = 0; i < 12; i++) g();       // 0100\n  for (var i = 0; i < 12; i++) {          // 0150\n    g();                                  // 0200\n  }                                       // 0250\n  for (var i = 0; false; i++) g();        // 0300\n  for (var i = 0; true; i++) break;       // 0350\n  for (var i = 0; i < 12; i++) {          // 0400\n    if (i % 3 == 0) g(); else g();        // 0450\n  }                                       // 0500\n}();                                      // 0550\n`;
const v110 = { start: 0, end: 599, count: 1 };
const v114 = { start: 0, end: 15, count: 36 };
const v118 = { start: 51, end: 551, count: 1 };
const v122 = { start: 131, end: 135, count: 12 };
const v126 = { start: 181, end: 253, count: 12 };
const v130 = { start: 330, end: 334, count: 0 };
const v134 = { start: 431, end: 503, count: 12 };
const v138 = { start: 470, end: 474, count: 4 };
const v143 = [v110,v114,v118,v122,v126,v130,v134,v138,{ start: 474, end: 484, count: 8 }];
try { TestCoverage("for statements", v106, v143); } catch (e) {}
const v146 = `\nfunction g() {}                           // 0000\n!function() {                             // 0050\n  let j = 0;                              // 0100\n  for (let i = 0; i < 12; i++) g();       // 0150\n  for (const i = 0; j < 12; j++) g();     // 0200\n  for (j = 0; j < 12; j++) g();           // 0250\n  for (;;) break;                         // 0300\n}();                                      // 0350\n`;
const v150 = { start: 0, end: 399, count: 1 };
const v154 = { start: 0, end: 15, count: 36 };
const v158 = { start: 51, end: 351, count: 1 };
const v162 = { start: 181, end: 185, count: 12 };
const v166 = { start: 233, end: 237, count: 12 };
const v171 = [v150,v154,v158,v162,v166,{ start: 277, end: 281, count: 12 }];
try { TestCoverage("for statements pt. 2", v146, v171); } catch (e) {}
const v174 = `\nfunction g() {}                           // 0000\n!function() {                             // 0050\n  for (let i = 0; i < 12; i++) g()        // 0100\n  for (let i = 0; i < 12; i++) break      // 0150\n  for (let i = 0; i < 12; i++) break; g() // 0200\n}();                                      // 0250\n`;
const v178 = { start: 0, end: 299, count: 1 };
const v182 = { start: 0, end: 15, count: 13 };
const v186 = { start: 51, end: 251, count: 1 };
const v191 = [v178,v182,v186,{ start: 131, end: 134, count: 12 }];
try { TestCoverage("for statements (no semicolon)", v174, v191); } catch (e) {}
const v194 = `\n!function() {                             // 0000\n  for (var i = 0; i < 10; i++) {          // 0050\n    nop();                                // 0100\n    continue;                             // 0150\n    nop();                                // 0200\n  }                                       // 0250\n  nop();                                  // 0300\n  for (;;) {                              // 0350\n    nop();                                // 0400\n    break;                                // 0450\n    nop();                                // 0500\n  }                                       // 0550\n  nop();                                  // 0600\n  for (;;) {                              // 0650\n    nop();                                // 0700\n    return;                               // 0750\n    nop();                                // 0800\n  }                                       // 0850\n  nop();                                  // 0900\n}()                                       // 0950\n`;
const v198 = { start: 0, end: 999, count: 1 };
const v202 = { start: 1, end: 951, count: 1 };
const v206 = { start: 81, end: 253, count: 10 };
const v210 = { start: 163, end: 253, count: 0 };
const v214 = { start: 460, end: 553, count: 0 };
const v219 = [v198,v202,v206,v210,v214,{ start: 761, end: 950, count: 0 }];
try { TestCoverage("for statement (early return)", v194, v219); } catch (e) {}
const v222 = `\n!function() {                             // 0000\n  var i;                                  // 0050\n  for (i of [0,1,2,3]) { nop(); }         // 0100\n  for (let j of [0,1,2,3]) { nop(); }     // 0150\n  for (i in [0,1,2,3]) { nop(); }         // 0200\n  for (let j in [0,1,2,3]) { nop(); }     // 0250\n  var xs = [{a:0, b:1}, {a:1,b:0}];       // 0300\n  for (var {a: x, b: y} of xs) { nop(); } // 0350\n}();                                      // 0400\n`;
const v226 = { start: 0, end: 449, count: 1 };
const v230 = { start: 1, end: 401, count: 1 };
const v234 = { start: 123, end: 133, count: 4 };
const v238 = { start: 177, end: 187, count: 4 };
const v242 = { start: 223, end: 233, count: 4 };
const v246 = { start: 277, end: 287, count: 4 };
const v251 = [v226,v230,v234,v238,v242,v246,{ start: 381, end: 391, count: 2 }];
try { TestCoverage("for-of and for-in statements", v222, v251); } catch (e) {}
const v254 = `\n!async function() {                       // 0000\n  for await (var x of [0,1,2,3]) {        // 0050\n    nop();                                // 0100\n  }                                       // 0150\n}();                                      // 0200\n`;
const v258 = { start: 0, end: 299, count: 1 };
const v262 = { start: 1, end: 201, count: 6 };
const v266 = { start: 83, end: 153, count: 4 };
const v271 = [v258,v262,v266,{ start: 153, end: 200, count: 1 }];
try { TestCoverage("for-await-of statements", v254, v271); } catch (e) {}
const v274 = `\nfunction g() {}                           // 0000\n!function() {                             // 0050\n  var i;                                  // 0100\n  i = 0; while (i < 12) i++;              // 0150\n  i = 0; while (i < 12) { g(); i++; }     // 0200\n  i = 0; while (false) g();               // 0250\n  i = 0; while (true) break;              // 0300\n                                          // 0350\n  i = 0; do i++; while (i < 12);          // 0400\n  i = 0; do { g(); i++; }                 // 0450\n         while (i < 12);                  // 0500\n  i = 0; do { g(); } while (false);       // 0550\n  i = 0; do { break; } while (true);      // 0600\n}();                                      // 0650\n`;
const v278 = { start: 0, end: 699, count: 1 };
const v282 = { start: 0, end: 15, count: 25 };
const v286 = { start: 51, end: 651, count: 1 };
const v290 = { start: 174, end: 178, count: 12 };
const v294 = { start: 224, end: 237, count: 12 };
const v298 = { start: 273, end: 277, count: 0 };
const v302 = { start: 412, end: 416, count: 12 };
const v307 = [v278,v282,v286,v290,v294,v298,v302,{ start: 462, end: 475, count: 12 }];
try { TestCoverage("while and do-while statements", v274, v307); } catch (e) {}
const v310 = `\n!function() {                             // 0000\n  let i = 0;                              // 0050\n  while (i < 10) {                        // 0100\n    i++;                                  // 0150\n    continue;                             // 0200\n    nop();                                // 0250\n  }                                       // 0300\n  nop();                                  // 0350\n  while (true) {                          // 0400\n    nop();                                // 0450\n    break;                                // 0500\n    nop();                                // 0550\n  }                                       // 0600\n  nop();                                  // 0650\n  while (true) {                          // 0700\n    nop();                                // 0750\n    return;                               // 0800\n    nop();                                // 0850\n  }                                       // 0900\n  nop();                                  // 0950\n}()                                       // 1000\n`;
const v314 = { start: 0, end: 1049, count: 1 };
const v318 = { start: 1, end: 1001, count: 1 };
const v322 = { start: 117, end: 303, count: 10 };
const v326 = { start: 213, end: 303, count: 0 };
const v330 = { start: 510, end: 603, count: 0 };
const v335 = [v314,v318,v322,v326,v330,{ start: 811, end: 1000, count: 0 }];
try { TestCoverage("while statement (early return)", v310, v335); } catch (e) {}
const v338 = `\n!function() {                             // 0000\n  let i = 0;                              // 0050\n  do {                                    // 0100\n    i++;                                  // 0150\n    continue;                             // 0200\n    nop();                                // 0250\n  } while (i < 10);                       // 0300\n  nop();                                  // 0350\n  do {                                    // 0400\n    nop();                                // 0450\n    break;                                // 0500\n    nop();                                // 0550\n  } while (true);                         // 0600\n  nop();                                  // 0650\n  do {                                    // 0700\n    nop();                                // 0750\n    return;                               // 0800\n    nop();                                // 0850\n  } while (true);                         // 0900\n  nop();                                  // 0950\n}()                                       // 1000\n`;
const v342 = { start: 0, end: 1049, count: 1 };
const v346 = { start: 1, end: 1001, count: 1 };
const v350 = { start: 105, end: 303, count: 10 };
const v354 = { start: 213, end: 303, count: 0 };
const v358 = { start: 510, end: 603, count: 0 };
const v363 = [v342,v346,v350,v354,v358,{ start: 811, end: 1000, count: 0 }];
try { TestCoverage("do-while statement (early return)", v338, v363); } catch (e) {}
const v366 = `\n!function() { nop(); return; nop(); }();  // 0000\n!function() { nop(); return 42;           // 0050\n              nop(); }();                 // 0100\n`;
const v370 = { start: 0, end: 149, count: 1 };
const v374 = { start: 1, end: 37, count: 1 };
const v378 = { start: 28, end: 36, count: 0 };
const v382 = { start: 51, end: 122, count: 1 };
const v387 = [v370,v374,v378,v382,{ start: 81, end: 121, count: 0 }];
try { TestCoverage("return statements", v366, v387); } catch (e) {}
const v390 = `\n!function() {                             // 0000\n  try { nop(); } catch (e) { nop(); }     // 0050\n  try { nop(); } finally { nop(); }       // 0100\n  try {                                   // 0150\n    try { throw 42; } catch (e) { nop(); }// 0200\n  } catch (e) { nop(); }                  // 0250\n  try {                                   // 0300\n    try { throw 42; } finally { nop(); }  // 0350\n  } catch (e) { nop(); }                  // 0400\n  try {                                   // 0450\n    throw 42;                             // 0500\n  } catch (e) {                           // 0550\n    nop();                                // 0600\n  } finally {                             // 0650\n    nop();                                // 0700\n  }                                       // 0750\n}();                                      // 0800\n`;
const v394 = { start: 0, end: 849, count: 1 };
const v398 = { start: 1, end: 801, count: 1 };
const v402 = { start: 67, end: 87, count: 0 };
const v406 = { start: 219, end: 222, count: 0 };
const v410 = { start: 254, end: 274, count: 0 };
const v414 = { start: 369, end: 372, count: 0 };
const v418 = { start: 403, end: 404, count: 0 };
const v423 = [v394,v398,v402,v406,v410,v414,v418,{ start: 513, end: 554, count: 0 }];
try { TestCoverage("try/catch/finally statements", v390, v423); } catch (e) {}
const v426 = `\n!function() {                             // 0000\n  try { throw 42; } catch (e) { return; } // 0050\n  nop();                                  // 0100\n}();                                      // 0150\n!function() {                             // 0200\n  try { throw 42; } catch (e) {}          // 0250\n  finally { return; }                     // 0300\n  nop();                                  // 0350\n}();                                      // 0400\n`;
const v430 = { start: 0, end: 449, count: 1 };
const v434 = { start: 1, end: 151, count: 1 };
const v438 = { start: 67, end: 70, count: 0 };
const v442 = { start: 91, end: 150, count: 0 };
const v446 = { start: 201, end: 401, count: 1 };
const v450 = { start: 267, end: 270, count: 0 };
const v455 = [v430,v434,v438,v442,v446,v450,{ start: 321, end: 400, count: 0 }];
try { TestCoverage("try/catch/finally statements with early return", v426, v455); } catch (e) {}
const v458 = `\n!function() {                             // 0000\n  try { throw 42; } catch (e) { return; } // 0050\n  nop();                                  // 0100\n}();                                      // 0150\n!function() {                             // 0200\n  try { nop(); } finally { return; }      // 0250\n  nop();                                  // 0300\n}();                                      // 0350\n!function() {                             // 0400\n  {                                       // 0450\n    let x = 42;                           // 0500\n    return () => x;                       // 0550\n  }                                       // 0600\n  nop();                                  // 0650\n}();                                      // 0700\n!function() {                             // 0750\n  try { throw 42; } catch (e) {           // 0800\n    return;                               // 0850\n    nop();                                // 0900\n  }                                       // 0950\n  nop();                                  // 1000\n}();                                      // 1050\n`;
const v462 = { start: 0, end: 1099, count: 1 };
const v466 = { start: 1, end: 151, count: 1 };
const v470 = { start: 67, end: 70, count: 0 };
const v474 = { start: 91, end: 150, count: 0 };
const v478 = { start: 201, end: 351, count: 1 };
const v482 = { start: 286, end: 350, count: 0 };
const v486 = { start: 401, end: 701, count: 1 };
const v490 = { start: 603, end: 700, count: 0 };
const v494 = { start: 561, end: 568, count: 0 };
const v498 = { start: 751, end: 1051, count: 1 };
const v502 = { start: 817, end: 820, count: 0 };
const v507 = [v462,v466,v470,v474,v478,v482,v486,v490,v494,v498,v502,{ start: 861, end: 1050, count: 0 }];
try { TestCoverage("early return in blocks", v458, v507); } catch (e) {}
const v510 = `\n!function() {                             // 0000\n  var x = 42;                             // 0050\n  switch (x) {                            // 0100\n    case 41: nop(); break;                // 0150\n    case 42: nop(); break;                // 0200\n    default: nop(); break;                // 0250\n  }                                       // 0300\n}();                                      // 0350\n`;
const v514 = { start: 0, end: 399, count: 1 };
const v518 = { start: 1, end: 351, count: 1 };
const v522 = { start: 154, end: 204, count: 0 };
const v527 = [v514,v518,v522,{ start: 226, end: 350, count: 0 }];
try { TestCoverage("switch statements", v510, v527); } catch (e) {}
const v530 = `\n!function() {                             // 0000\n  var x = 42;                             // 0050\n  l0: switch (x) {                        // 0100\n  case 41: return;                        // 0150\n  case 42:                                // 0200\n    switch (x) { case 42: break l0; }     // 0250\n    break;                                // 0300\n  }                                       // 0350\n  l1: for (;;) {                          // 0400\n    for (;;) break l1;                    // 0450\n  }                                       // 0500\n  l2: while (true) {                      // 0550\n    while (true) break l2;                // 0600\n  }                                       // 0650\n  l3: do {                                // 0700\n    do { break l3; } while (true);        // 0750\n  } while (true);                         // 0800\n  l4: { break l4; }                       // 0850\n  l5: for (;;) for (;;) break l5;         // 0900\n}();                                      // 0950\n`;
const v534 = { start: 0, end: 999, count: 1 };
const v538 = { start: 1, end: 951, count: 1 };
const v542 = { start: 152, end: 202, count: 0 };
const v547 = [v534,v538,v542,{ start: 285, end: 353, count: 0 }];
try { TestCoverage("labeled break statements", v530, v547); } catch (e) {}
const v550 = `\n!function() {                             // 0000\n  l0: for (var i0 = 0; i0 < 2; i0++) {    // 0050\n    for (;;) continue l0;                 // 0100\n  }                                       // 0150\n  var i1 = 0;                             // 0200\n  l1: while (i1 < 2) {                    // 0250\n    i1++;                                 // 0300\n    while (true) continue l1;             // 0350\n  }                                       // 0400\n  var i2 = 0;                             // 0450\n  l2: do {                                // 0500\n    i2++;                                 // 0550\n    do { continue l2; } while (true);     // 0600\n  } while (i2 < 2);                       // 0650\n}();                                      // 0700\n`;
const v554 = { start: 0, end: 749, count: 1 };
const v558 = { start: 1, end: 701, count: 1 };
const v562 = { start: 87, end: 153, count: 2 };
const v566 = { start: 271, end: 403, count: 2 };
const v571 = [v554,v558,v562,v566,{ start: 509, end: 653, count: 2 }];
try { TestCoverage("labeled continue statements", v550, v571); } catch (e) {}
const v574 = `\nvar TRUE = true;                          // 0000\nvar FALSE = false;                        // 0050\n!function() {                             // 0100\n  TRUE ? nop() : nop();                   // 0150\n  true ? nop() : nop();                   // 0200\n  false ? nop() : nop();                  // 0250\n  FALSE ? TRUE ? nop()                    // 0300\n               : nop()                    // 0350\n        : nop();                          // 0400\n  TRUE ? FALSE ? nop()                    // 0450\n               : nop()                    // 0500\n       : nop();                           // 0550\n  TRUE ? nop() : FALSE ? nop()            // 0600\n                       : nop();           // 0650\n  FALSE ? nop() : TRUE ? nop()            // 0700\n                       : nop();           // 0750\n}();                                      // 0800\n`;
const v578 = { start: 0, end: 849, count: 1 };
const v582 = { start: 101, end: 801, count: 1 };
const v586 = { start: 165, end: 172, count: 0 };
const v590 = { start: 215, end: 222, count: 0 };
const v594 = { start: 258, end: 265, count: 0 };
const v598 = { start: 308, end: 372, count: 0 };
const v602 = { start: 465, end: 472, count: 0 };
const v606 = { start: 557, end: 564, count: 0 };
const v610 = { start: 615, end: 680, count: 0 };
const v614 = { start: 708, end: 715, count: 0 };
const v619 = [v578,v582,v586,v590,v594,v598,v602,v606,v610,v614,{ start: 773, end: 780, count: 0 }];
try { TestCoverage("conditional expressions", v574, v619); } catch (e) {}
const v622 = `\nconst it = function*() {                  // 0000\n  yield nop();                            // 0050\n  yield nop() ? nop() : nop()             // 0100\n  return nop();                           // 0150\n}();                                      // 0200\nit.next(); it.next();                     // 0250\n`;
const v626 = { start: 0, end: 299, count: 1 };
const v630 = { start: 11, end: 201, count: 3 };
const v634 = { start: 64, end: 114, count: 1 };
const v638 = { start: 114, end: 121, count: 0 };
const v642 = { start: 122, end: 129, count: 1 };
const v647 = [v626,v630,v634,v638,v642,{ start: 129, end: 200, count: 0 }];
try { TestCoverage("yield expressions", v622, v647); } catch (e) {}
const v650 = `\nconst it0 = function*() {                 // 0000\n  yield 1; yield 2; yield 3;              // 0050\n}();                                      // 0100\nit0.next(); it0.return();                 // 0150\ntry {                                     // 0200\n  const it1 = function*() {               // 0250\n    yield 1; yield 2; yield 3;            // 0300\n  }();                                    // 0350\n  it1.next(); it1.throw();                // 0400\n} catch (e) {}                            // 0450\n`;
const v654 = { start: 0, end: 499, count: 1 };
const v658 = { start: 451, end: 452, count: 0 };
const v662 = { start: 12, end: 101, count: 3 };
const v666 = { start: 60, end: 100, count: 0 };
const v670 = { start: 264, end: 353, count: 3 };
const v675 = [v654,v658,v662,v666,v670,{ start: 312, end: 352, count: 0 }];
try { TestCoverage("yield expressions (.return and .throw)", v650, v675); } catch (e) {}
const v678 = `\nconst it = function*() {                  // 0000\n  try {                                   // 0050\n    yield 1; yield 2; yield 3;            // 0100\n  } catch (e) {                           // 0150\n    nop();                                // 0200\n  } finally { nop(); }                    // 0250\n  yield 4;                                // 0300\n}();                                      // 0350\nit.next(); it.return();                   // 0450\n`;
const v682 = { start: 0, end: 449, count: 1 };
const v686 = { start: 11, end: 351, count: 3 };
const v690 = { start: 112, end: 254, count: 0 };
const v694 = { start: 254, end: 272, count: 1 };
const v699 = [v682,v686,v690,v694,{ start: 272, end: 350, count: 0 }];
try { TestCoverage("yield expressions (.return and try/catch/finally)", v678, v699); } catch (e) {}
const v702 = `\nconst it = function*() {                  // 0000\n  try {                                   // 0050\n    yield 1; yield 2; yield 3;            // 0100\n  } catch (e) {                           // 0150\n    nop();                                // 0200\n  } finally { nop(); }                    // 0250\n  yield 4;                                // 0300\n}();                                      // 0350\nit.next(); it.throw(42);                  // 0550\n`;
const v706 = { start: 0, end: 449, count: 1 };
const v710 = { start: 11, end: 351, count: 3 };
const v714 = { start: 112, end: 154, count: 0 };
const v718 = { start: 154, end: 310, count: 1 };
const v723 = [v706,v710,v714,v718,{ start: 310, end: 350, count: 0 }];
try { TestCoverage("yield expressions (.throw and try/catch/finally)", v702, v723); } catch (e) {}
const v726 = `\nconst it = function*() {                  // 0000\n  yield* gen();                           // 0050\n  yield* nop() ? gen() : gen()            // 0100\n  return gen();                           // 0150\n}();                                      // 0200\nit.next(); it.next(); it.next();          // 0250\nit.next(); it.next(); it.next();          // 0300\n`;
const v730 = { start: 0, end: 349, count: 1 };
const v734 = { start: 11, end: 201, count: 7 };
const v738 = { start: 65, end: 115, count: 1 };
const v742 = { start: 115, end: 122, count: 0 };
const v746 = { start: 123, end: 130, count: 1 };
const v751 = [v730,v734,v738,v742,v746,{ start: 130, end: 200, count: 0 }];
try { TestCoverage("yield* expressions", v726, v751); } catch (e) {}
const v754 = `\nconst it0 = function*() {                 // 0000\n  yield* gen(); yield* gen(); yield 3;    // 0050\n}();                                      // 0100\nit0.next(); it0.return();                 // 0150\ntry {                                     // 0200\n  const it1 = function*() {               // 0250\n    yield* gen(); yield* gen(); yield 3;  // 0300\n  }();                                    // 0350\n  it1.next(); it1.throw();                // 0400\n} catch (e) {}                            // 0450\n`;
const v758 = { start: 0, end: 499, count: 1 };
const v762 = { start: 451, end: 452, count: 0 };
const v766 = { start: 12, end: 101, count: 3 };
const v770 = { start: 65, end: 100, count: 0 };
const v774 = { start: 264, end: 353, count: 3 };
const v779 = [v758,v762,v766,v770,v774,{ start: 317, end: 352, count: 0 }];
try { TestCoverage("yield* expressions (.return and .throw)", v754, v779); } catch (e) {}
const v782 = `\nasync function f() {                      // 0000\n  await 42;                               // 0050\n  await 42;                               // 0100\n};                                        // 0150\nf();                                      // 0200\n`;
const v786 = { start: 0, end: 299, count: 1 };
const v790 = { start: 0, end: 151, count: 3 };
const v795 = [v786,v790,{ start: 61, end: 150, count: 1 }];
try { TestCoverage("await expressions", v782, v795); } catch (e) {}
const v798 = `\nconst a = true || 99                      // 0000\nfunction b () {                           // 0050\n  const b = a || 2                        // 0100\n}                                         // 0150\nb()                                       // 0200\nb()                                       // 0250\n`;
const v802 = { start: 0, end: 299, count: 1 };
const v806 = { start: 15, end: 20, count: 0 };
const v810 = { start: 50, end: 151, count: 2 };
const v815 = [v802,v806,v810,{ start: 114, end: 118, count: 0 }];
try { TestCoverage("LogicalOrExpression assignment", v798, v815); } catch (e) {}
const v818 = `\ntrue || false                             // 0000\nconst a = 99                              // 0050\na || 50                                   // 0100\nconst b = false                           // 0150\nif (b || true) {}                         // 0200\n`;
const v822 = { start: 0, end: 249, count: 1 };
const v826 = { start: 5, end: 13, count: 0 };
const v831 = [v822,v826,{ start: 102, end: 107, count: 0 }];
try { TestCoverage("LogicalOrExpression IsTest()", v818, v831); } catch (e) {}
const v834 = `\nconst a = false && 99                     // 0000\nfunction b () {                           // 0050\n  const b = a && 2                        // 0100\n}                                         // 0150\nb()                                       // 0200\nb()                                       // 0250\nconst c = true && 50                      // 0300\n`;
const v838 = { start: 0, end: 349, count: 1 };
const v842 = { start: 16, end: 21, count: 0 };
const v846 = { start: 50, end: 151, count: 2 };
const v851 = [v838,v842,v846,{ start: 114, end: 118, count: 0 }];
try { TestCoverage("LogicalAndExpression assignment", v834, v851); } catch (e) {}
const v854 = `\nfalse && true                             // 0000\nconst a = 0                               // 0050\na && 50                                   // 0100\nconst b = true                            // 0150\nif (b && true) {}                         // 0200\ntrue && true                              // 0250\n`;
const v858 = { start: 0, end: 299, count: 1 };
const v862 = { start: 6, end: 13, count: 0 };
const v867 = [v858,v862,{ start: 102, end: 107, count: 0 }];
try { TestCoverage("LogicalAndExpression IsTest()", v854, v867); } catch (e) {}
const v870 = `\nconst a = true                            // 0000\nconst b = false                           // 0050\nconst c = false || false || 99            // 0100\nconst d = false || true || 99             // 0150\nconst e = true || true || 99              // 0200\nconst f = b || b || 99                    // 0250\nconst g = b || a || 99                    // 0300\nconst h = a || a || 99                    // 0350\nconst i = a || (b || c) || d              // 0400\n`;
const v874 = { start: 0, end: 449, count: 1 };
const v878 = { start: 174, end: 179, count: 0 };
const v882 = { start: 215, end: 222, count: 0 };
const v886 = { start: 223, end: 228, count: 0 };
const v890 = { start: 317, end: 322, count: 0 };
const v894 = { start: 362, end: 366, count: 0 };
const v898 = { start: 367, end: 372, count: 0 };
const v902 = { start: 412, end: 423, count: 0 };
const v907 = [v874,v878,v882,v886,v890,v894,v898,v902,{ start: 424, end: 428, count: 0 }];
try { TestCoverage("NaryLogicalOr assignment", v870, v907); } catch (e) {}
const v910 = `\nconst a = true                            // 0000\nconst b = false                           // 0050\nfalse || false || 99                      // 0100\nfalse || true || 99                       // 0150\ntrue || true || 99                        // 0200\nb || b || 99                              // 0250\nb || a || 99                              // 0300\na || a || 99                              // 0350\n`;
const v914 = { start: 0, end: 399, count: 1 };
const v918 = { start: 164, end: 169, count: 0 };
const v922 = { start: 205, end: 212, count: 0 };
const v926 = { start: 213, end: 218, count: 0 };
const v930 = { start: 307, end: 312, count: 0 };
const v934 = { start: 352, end: 356, count: 0 };
const v939 = [v914,v918,v922,v926,v930,v934,{ start: 357, end: 362, count: 0 }];
try { TestCoverage("NaryLogicalOr IsTest()", v910, v939); } catch (e) {}
const v942 = `\nconst a = true                            // 0000\nconst b = false                           // 0050\nconst c = false && false && 99            // 0100\nconst d = false && true && 99             // 0150\nconst e = true && true && 99              // 0200\nconst f = true && false || true           // 0250\nconst g = true || false && true           // 0300\n`;
const v946 = { start: 0, end: 349, count: 1 };
const v950 = { start: 116, end: 124, count: 0 };
const v954 = { start: 125, end: 130, count: 0 };
const v958 = { start: 166, end: 173, count: 0 };
const v962 = { start: 174, end: 179, count: 0 };
const v967 = [v946,v950,v954,v958,v962,{ start: 315, end: 331, count: 0 }];
try { TestCoverage("NaryLogicalAnd assignment", v942, v967); } catch (e) {}
const v970 = `\nconst a = true                            // 0000\nconst b = false                           // 0050\nfalse && false && 99                      // 0100\nfalse && true && 99                       // 0150\ntrue && true && 99                        // 0200\ntrue && false || true                     // 0250\ntrue || false && true                     // 0300\nfalse || false || 99 || 55                // 0350\n`;
const v974 = { start: 0, end: 399, count: 1 };
const v978 = { start: 106, end: 114, count: 0 };
const v982 = { start: 115, end: 120, count: 0 };
const v986 = { start: 156, end: 163, count: 0 };
const v990 = { start: 164, end: 169, count: 0 };
const v994 = { start: 305, end: 321, count: 0 };
const v999 = [v974,v978,v982,v986,v990,v994,{ start: 371, end: 376, count: 0 }];
try { TestCoverage("NaryLogicalAnd IsTest()", v970, v999); } catch (e) {}
const v1002 = `\nconst a = true                            // 0000\nconst b = 99                              // 0050\nconst c = false                           // 0100\nconst d = ''                              // 0150\nconst e = a && (b ? 'left' : 'right')     // 0200\nconst f = a || (b ? 'left' : 'right')     // 0250\nconst g = c || d ? 'left' : 'right'       // 0300\nconst h = a && b && (b ? 'left' : 'right')// 0350\nconst i = d || c || (c ? 'left' : 'right')// 0400\n`;
const v1006 = { start: 0, end: 449, count: 1 };
const v1010 = { start: 227, end: 236, count: 0 };
const v1014 = { start: 262, end: 287, count: 0 };
const v1018 = { start: 317, end: 325, count: 0 };
const v1022 = { start: 382, end: 391, count: 0 };
const v1027 = [v1006,v1010,v1014,v1018,v1022,{ start: 423, end: 431, count: 0 }];
try { TestCoverage("logical expressions + conditional expressions", v1002, v1027); } catch (e) {}
const v1030 = `\nUtil = {};                                // 0000\nUtil.escape = function UtilEscape(str) {  // 0050\n  if (!str) {                             // 0100\n    return 'if';                          // 0150\n  } else {                                // 0200\n    return 'else';                        // 0250\n  }                                       // 0300\n};                                        // 0350\nUtil.escape("foo.bar");                   // 0400\n`;
const v1034 = { start: 0, end: 449, count: 1 };
const v1038 = { start: 64, end: 351, count: 1 };
const v1043 = [v1034,v1038,{ start: 112, end: 203, count: 0 }];
try { TestCoverage("https://crbug.com/827530", v1030, v1043); } catch (e) {}
const v1046 = `\n!function() {                             // 0000\n  if (true)                               // 0050\n    while (false) return; else nop();     // 0100\n}();                                      // 0150\n!function() {                             // 0200\n  if (true) l0: { break l0; } else        // 0250\n    if (nop()) { }                        // 0300\n}();                                      // 0350\n!function() {                             // 0400\n  if (true) { if (false) { return; }      // 0450\n  } else if (nop()) { } }();              // 0500\n!function(){                              // 0550\n  if(true)while(false)return;else nop()   // 0600\n}();                                      // 0650\n!function(){                              // 0700\n  if(true) l0:{break l0}else if (nop()){} // 0750\n}();                                      // 0800\n!function(){                              // 0850\n  if(true){if(false){return}}else         // 0900\n    if(nop()){}                           // 0950\n}();                                      // 1000\n`;
const v1050 = { start: 0, end: 1049, count: 1 };
const v1054 = { start: 1, end: 151, count: 1 };
const v1058 = { start: 118, end: 137, count: 0 };
const v1062 = { start: 201, end: 351, count: 1 };
const v1066 = { start: 279, end: 318, count: 0 };
const v1070 = { start: 401, end: 525, count: 1 };
const v1074 = { start: 475, end: 486, count: 0 };
const v1078 = { start: 503, end: 523, count: 0 };
const v1082 = { start: 551, end: 651, count: 1 };
const v1086 = { start: 622, end: 639, count: 0 };
const v1090 = { start: 701, end: 801, count: 1 };
const v1094 = { start: 774, end: 791, count: 0 };
const v1098 = { start: 851, end: 1001, count: 1 };
const v1102 = { start: 920, end: 928, count: 0 };
const v1107 = [v1050,v1054,v1058,v1062,v1066,v1070,v1074,v1078,v1082,v1086,v1090,v1094,v1098,v1102,{ start: 929, end: 965, count: 0 }];
try { TestCoverage("https://crbug.com/v8/8237", v1046, v1107); } catch (e) {}
const v1110 = `\nwhile (true) {                            // 0000\n  const b = false                         // 0050\n  break                                   // 0100\n}                                         // 0150\nlet stop = false                          // 0200\nwhile (true) {                            // 0250\n  if (stop) {                             // 0300\n    break                                 // 0350\n  }                                       // 0400\n  stop = true                             // 0450\n}                                         // 0500\n`;
const v1114 = { start: 0, end: 549, count: 1 };
const v1118 = { start: 263, end: 501, count: 2 };
const v1123 = [v1114,v1118,{ start: 312, end: 501, count: 1 }];
try { TestCoverage("terminal break statement", v1110, v1123); } catch (e) {}
const v1126 = `\nfunction a () {                           // 0000\n  const b = false                         // 0050\n  return 1                                // 0100\n}                                         // 0150\nconst b = (early) => {                    // 0200\n  if (early) {                            // 0250\n    return 2                              // 0300\n  }                                       // 0350\n  return 3                                // 0400\n}                                         // 0450\nconst c = () => {                         // 0500\n  if (true) {                             // 0550\n    return                                // 0600\n  }                                       // 0650\n}                                         // 0700\na(); b(false); b(true); c()               // 0750\n`;
const v1130 = { start: 0, end: 799, count: 1 };
const v1134 = { start: 0, end: 151, count: 1 };
const v1138 = { start: 210, end: 451, count: 2 };
const v1142 = { start: 263, end: 450, count: 1 };
const v1147 = [v1130,v1134,v1138,v1142,{ start: 510, end: 701, count: 1 }];
try { TestCoverage("terminal return statement", v1126, v1147); } catch (e) {}
const v1150 = `\nfunction a () {                           // 0000\n  {                                       // 0050\n    return 'a'                            // 0100\n  }                                       // 0150\n}                                         // 0200\nfunction b () {                           // 0250\n  {                                       // 0300\n    {                                     // 0350\n      return 'b'                          // 0400\n    }                                     // 0450\n  }                                       // 0500\n}                                         // 0550\na(); b()                                  // 0600\n`;
const v1154 = { start: 0, end: 649, count: 1 };
const v1158 = { start: 0, end: 201, count: 1 };
const v1163 = [v1154,v1158,{ start: 250, end: 551, count: 1 }];
try { TestCoverage("terminal blocks", v1150, v1163); } catch (e) {}
const v1166 = `\nfunction a (branch) {                     // 0000\n  if (branch) {                           // 0050\n    return 'a'                            // 0100\n  } else {                                // 0150\n    return 'b'                            // 0200\n  }                                       // 0250\n}                                         // 0300\nfunction b (branch) {                     // 0350\n  if (branch) {                           // 0400\n    if (branch) {                         // 0450\n      return 'c'                          // 0500\n    }                                     // 0550\n  }                                       // 0600\n}                                         // 0650\nfunction c (branch) {                     // 0700\n  if (branch) {                           // 0750\n    return 'c'                            // 0800\n  } else {                                // 0850\n    return 'd'                            // 0900\n  }                                       // 0950\n}                                         // 1000\nfunction d (branch) {                     // 1050\n  if (branch) {                           // 1100\n    if (!branch) {                        // 1150\n      return 'e'                          // 1200\n    } else {                              // 1250\n      return 'f'                          // 1300\n    }                                     // 1350\n  } else {                                // 1400\n    // noop                               // 1450\n  }                                       // 1500\n}                                         // 1550\na(true); a(false); b(true); b(false)      // 1600\nc(true); d(true);                         // 1650\n`;
const v1170 = { start: 0, end: 1699, count: 1 };
const v1174 = { start: 0, end: 301, count: 2 };
const v1178 = { start: 64, end: 253, count: 1 };
const v1182 = { start: 350, end: 651, count: 2 };
const v1186 = { start: 414, end: 603, count: 1 };
const v1190 = { start: 700, end: 1001, count: 1 };
const v1194 = { start: 853, end: 953, count: 0 };
const v1198 = { start: 1050, end: 1551, count: 1 };
const v1202 = { start: 1167, end: 1255, count: 0 };
const v1207 = [v1170,v1174,v1178,v1182,v1186,v1190,v1194,v1198,v1202,{ start: 1403, end: 1503, count: 0 }];
try { TestCoverage("terminal if statements", v1166, v1207); } catch (e) {}
