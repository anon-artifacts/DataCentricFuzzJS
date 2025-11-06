var a = [0,1,2,3];
const v7 = {};
const v9 = new Proxy(v7, {});
var p = v9;
Reflect.set(p, "length", 2, a);
"length" in p;
a.length;
[0,1];
