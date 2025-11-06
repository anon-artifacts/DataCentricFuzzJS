const v2 = { columnNumber: 1729 };
let v4;
try { v4 = evaluate("var f = x=>class { }; f()", v2); } catch (e) {}
try { v4.toString(); } catch (e) {}
