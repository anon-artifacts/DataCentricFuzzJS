const v1 = new Set();
v1.has(1.234);
const v6 = [,];
try { new WeakSet(v6); } catch (e) {}
