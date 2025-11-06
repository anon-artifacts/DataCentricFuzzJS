function g(a1, a2) {
    this.x = 0;
    for (let i6 = 0; i6 < a1; i6++) {
        this.x = i6 / 100;
    }
    this.val = a2;
}
function f(a16) {
    var val = 0.5;
    const v19 = new g(a16, val);
    var obj = v19;
    obj.val;
}
f(1);
f(1);
f(200000);
