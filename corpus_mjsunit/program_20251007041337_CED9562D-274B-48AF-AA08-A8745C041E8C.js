function f(a1, a2) {
    a1[a1.length] = a2;
}
var a = [1.4];
f(a, 1);
f(a, 2);
f(a, {});
a.length;
