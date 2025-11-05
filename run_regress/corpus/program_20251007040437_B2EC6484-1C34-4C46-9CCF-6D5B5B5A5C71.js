function p(a1) {
    this.x = a1;
}
function f() {
    const v5 = new p(1);
    var a = v5;
    const v8 = new p(2);
    var b = v8;
    for (let i11 = 0; i11 < 1; i11++) {
        a.x += b.x;
    }
    return a.x;
}
new p(0.1);
f();
f();
f();
