function f() {
    var o = { x: 1 };
    for (let i5 = 0; i5 < 300; i5++) {
        o = Object.create(o);
    }
    for (let i14 = 0; i14 < 15; i14++) {
        o.x;
        o.y;
    }
}
f();
