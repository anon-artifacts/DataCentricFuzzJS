let v1;
try { v1 = newGlobal(); } catch (e) {}
var g = v1;
var w1 = g?.Math;
let v6;
try { v6 = g.evaluate("new Array"); } catch (e) {}
var w2 = v6;
