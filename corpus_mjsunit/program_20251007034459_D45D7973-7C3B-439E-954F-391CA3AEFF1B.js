x = {};
Array.prototype.push.call(x, 0);
Object.freeze(x);
const v12 = Array.prototype.unshift;
try { v12.call(x, 0); } catch (e) {}
