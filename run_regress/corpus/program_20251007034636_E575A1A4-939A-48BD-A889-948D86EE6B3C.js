function f(a1, a2, a3) {
    a1[a2] = a3;
}
f("make it generic", 0, 0);
const v9 = new Array();
var a = v9;
Object.defineProperty(a, "length", { value: 3, writable: false });
print(JSON.stringify(Object.getOwnPropertyDescriptor(a, "length")));
a.length;
f(a, 3, 3);
Object.getOwnPropertyDescriptor(a, "length").writable;
a.length;
const v33 = new Array();
var b = v33;
b.length = 3;
Object.freeze(b);
b.length;
f(b, 3, 3);
b.length;
