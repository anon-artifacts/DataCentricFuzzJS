var x = 0;
const v4 = { catchTermination: true };
try { evaluate("x = 1; x = 2;", v4); } catch (e) {}
