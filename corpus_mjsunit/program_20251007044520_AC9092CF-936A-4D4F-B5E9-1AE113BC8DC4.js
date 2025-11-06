const v2 = Function.prototype.apply;
const t1 = Object.prototype;
t1.apply = v2;
const v7 = {};
try { v7.apply(null, null); } catch (e) {}
