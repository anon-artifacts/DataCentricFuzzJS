let v3;
try { v3 = evalcx("lazy"); } catch (e) {}
try { evalcx("function s(){}", v3); } catch (e) {}
