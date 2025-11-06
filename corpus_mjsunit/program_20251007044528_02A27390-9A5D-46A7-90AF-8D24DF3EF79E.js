function f(a1) {
    var g;
    g = 0.1;
    g |= null;
    true ? 0.1 : null;
    if (null != g) {
    }
}
f(1.4);
f(1.4);
f(1.4);
