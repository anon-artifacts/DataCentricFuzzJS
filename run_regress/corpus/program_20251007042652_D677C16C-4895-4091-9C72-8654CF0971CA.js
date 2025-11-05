const v2 = { fileName: null };
try { evaluate("throw Error();", v2); } catch (e) {}
