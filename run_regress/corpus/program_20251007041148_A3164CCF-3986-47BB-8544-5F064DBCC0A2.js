function f(a1) {
    a1[5000000] = 0;
}
var o = Object.create(null);
f(o);
f(o);
f(o);
