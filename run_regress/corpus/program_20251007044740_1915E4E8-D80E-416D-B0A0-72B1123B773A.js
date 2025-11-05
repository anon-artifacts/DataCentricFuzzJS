let v2;
try { v2 = evalcx(""); } catch (e) {}
var s = v2;
delete s?.Object;
try { evalcx("var x;", s); } catch (e) {}
try { this.reportCompare(0, 0, "ok"); } catch (e) {}
