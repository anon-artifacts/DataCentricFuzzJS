function f(a1, a2, a3) {
    a1[a2] = a3;
}
f("make it generic", 0, 0);
const v10 = new Array(3);
var a = v10;
f(a, "length", 2);
a.length;
f(a, "length", 1);
a.length;
