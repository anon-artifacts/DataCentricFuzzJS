try { newGlobal(); } catch (e) {}
let v3;
try { v3 = newGlobal(); } catch (e) {}
try { evalcx("oomTest(newGlobal);", v3); } catch (e) {}
