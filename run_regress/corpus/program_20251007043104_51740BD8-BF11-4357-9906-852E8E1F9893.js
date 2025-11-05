let v1;
try { v1 = newGlobal(); } catch (e) {}
s = v1;
try { evalcx("    x = new Uint8ClampedArray;    x.__proto__ = [];", s); } catch (e) {}
try { evalcx("    x[0]", s); } catch (e) {}
