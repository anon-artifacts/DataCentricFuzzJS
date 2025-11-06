const v1 = `\n(function f() {})();\n`;
try { TestCoverage("call an IIFE", v1, undefined); } catch (e) {}
const v6 = `\nfor (var i = 0; i < 10; i++) {\n  let f = () => 1;\n  i += f();\n}\n`;
try { TestCoverage("call locally allocated function", v6, undefined); } catch (e) {}
const v10 = `\n(function f() {})();\n`;
const v14 = { start: 0, end: 20, count: 1 };
const v19 = [v14,{ start: 1, end: 16, count: 1 }];
try { TestCoverage("call an IIFE", v10, v19); } catch (e) {}
const v22 = `\nfor (var i = 0; i < 10; i++) {\n  let f = () => 1;\n  i += f();\n}\n`;
const v26 = { start: 0, end: 63, count: 1 };
const v31 = [v26,{ start: 41, end: 48, count: 5 }];
try { TestCoverage("call locally allocated function", v22, v31); } catch (e) {}
