var a = [];
a[10000] = 1;
a.length = 0;
a[1] = 1;
a.length = 0;
a[1];
var o = {};
Object.freeze(o);
o[1];
