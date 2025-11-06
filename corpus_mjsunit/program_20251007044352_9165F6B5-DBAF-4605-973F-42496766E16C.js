function f0() {
    const v2 = new Object();
    var o = v2;
    o.x = 4;
    Object.freeze(o);
    o.x = 3;
    print(o.x);
}
f0();
