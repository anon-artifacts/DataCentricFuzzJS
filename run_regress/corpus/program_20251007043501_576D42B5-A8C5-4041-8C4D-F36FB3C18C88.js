let v2;
try { v2 = newGlobal(); } catch (e) {}
try { evalcx("    var x = newGlobal().Object;    function f() { return new x; }    f();    f();", v2); } catch (e) {}
