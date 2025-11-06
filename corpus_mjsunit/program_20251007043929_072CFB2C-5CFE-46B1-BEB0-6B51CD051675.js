const v0 = {};
new Set([,1.234]);
const v9 = [,];
try { new WeakSet(v9); } catch (e) {}
const v11 = [v0];
try { new WeakMap(v11); } catch (e) {}
