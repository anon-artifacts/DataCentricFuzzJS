var a = Object.create(Object.prototype);
var b = Object.create(Object.prototype);
a === b;
Object.defineProperty(a, "x", { value: 1 });
a.x === 1;
b.x === undefined;
b.x = 2;
a.x === 1;
b.x === 2;
