var a = [];
var f = a.forEach.bind(a);
a.push(f);
try { f(f); } catch (e) {}
