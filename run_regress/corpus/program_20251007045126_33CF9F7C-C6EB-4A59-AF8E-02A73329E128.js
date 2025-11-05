function test1() {
    const v2 = new WeakMap();
    var wm1 = v2;
    wm1.set(Object.prototype, 23);
    wm1.has(Object.prototype);
    Object.freeze(Object.prototype);
    const v12 = new WeakMap();
    var wm2 = v12;
    var o = {};
    wm2.set(o, 42);
    wm2.get(o);
}
test1();
function test2() {
    const v23 = new WeakMap();
    var wm1 = v23;
    var o1 = {};
    wm1.set(o1, 23);
    wm1.has(o1);
    Object.freeze(o1);
    const v32 = new WeakMap();
    var wm2 = v32;
    var o2 = Object.create(o1);
    wm2.set(o2, 42);
    wm2.get(o2);
}
test2();
