let v1;
try { v1 = newGlobal(); } catch (e) {}
var g = v1;
try { g.eval("function f(n) { for (var i = 0; i < n; i++) f(0); }"); } catch (e) {}
try { g.f(10); } catch (e) {}
