let v2;
try { v2 = newGlobal(); } catch (e) {}
try { v2.eval("eval.arguments"); } catch (e) {}
