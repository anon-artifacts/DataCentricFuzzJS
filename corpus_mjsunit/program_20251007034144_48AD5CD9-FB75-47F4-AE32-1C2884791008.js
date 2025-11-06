function foo() {
    var a = { x: 1 };
    var b = { x: 1.5, y: 1 };
    var x = 0;
    for (let i11 = 0; i11 < 1; i11 = {}) {
        x += a.x + 0.5;
        x += a.x % 0.5;
        x += Math.abs(a.x);
        x += a.x < 6;
        x += a.x === 7;
        x += a.x <= 8;
        a = b;
    }
    return x;
}
foo();
foo();
foo();
