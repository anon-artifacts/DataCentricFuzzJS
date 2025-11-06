let v1;
try { v1 = newGlobal(); } catch (e) {}
var g = v1;
try { g.evaluate("function h() {}"); } catch (e) {}
