function f0() {
    function f(a2) {
        a2.x;
        Object.create(a2);
        return a2.y.a;
    }
    const v10 = { a: 1 };
    f({ x: 0, y: v10 });
    const v15 = { a: 2 };
    f({ x: 0, y: v15 });
    const v21 = { a: 3 };
    f({ x: 0, y: v21 });
}
f0();
function f25() {
    function f(a27) {
        let a = a27.y;
        Object.create(a27);
        return a27.x + a;
    }
    f({ x: 42, y: 21 });
    f({ x: 42, y: 21 });
    f({ x: 42, y: 21 });
}
f25();
