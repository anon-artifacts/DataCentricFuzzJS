var list = [Number,Function];
const v5 = new WeakSet(list);
var ws = v5;
ws.has(Number);
ws.has(Function);
const v12 = new Set(list);
const v13 = new WeakSet(v12);
(ws = v13).has(Number);
ws.has(Function);
