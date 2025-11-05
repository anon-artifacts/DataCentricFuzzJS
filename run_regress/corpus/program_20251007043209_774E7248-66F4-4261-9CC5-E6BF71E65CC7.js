function f(a1) {
    return a1.x instanceof Array;
}
var o = { x: 1.5 };
o.x = 0;
f(o);
f(o);
f(o);
