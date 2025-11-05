let v2;
try { v2 = newGlobal(); } catch (e) {}
try { evalcx("   s = 3; s;    for(let x = 0; x < 1; ++x) {        null    }", v2); } catch (e) {}
