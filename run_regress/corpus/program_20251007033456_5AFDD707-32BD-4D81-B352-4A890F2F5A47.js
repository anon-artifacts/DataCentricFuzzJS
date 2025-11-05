const v1 = new Map();
const v2 = v1.keys();
try { v2.drop(v2, Map, Map, v1, v1); } catch (e) {}
