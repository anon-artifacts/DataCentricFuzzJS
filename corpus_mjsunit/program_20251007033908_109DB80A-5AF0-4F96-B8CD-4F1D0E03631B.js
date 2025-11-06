var s = Symbol();
var o = {};
o[s] = 2;
o[""] = 3;
Object.getOwnPropertySymbols(o);
