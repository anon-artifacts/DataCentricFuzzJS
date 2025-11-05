function bla(a,b){}
pro = new Proxy({},{});
var co = function(){}
co.prototype = new Proxy({}, {get(target, property) {return 1}});

Reflect.construct(bla, [], co);
Reflect.construct(bla, [], co);
Reflect.construct(bla, [], co);
Reflect.construct(bla, [], co);
Reflect.construct(bla, [], co);
Reflect.construct(bla, [], co);
Reflect.construct(bla, [], co);

var x = new bla();
x.__proto__ = co.prototype;