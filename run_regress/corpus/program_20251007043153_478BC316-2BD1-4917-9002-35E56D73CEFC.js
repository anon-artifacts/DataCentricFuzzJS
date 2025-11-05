x = [];
x.unshift(Uint8ClampedArray);
const v5 = new Uint8ClampedArray();
const v9 = Array.prototype.push.bind(v5);
try { x.forEach(v9); } catch (e) {}
