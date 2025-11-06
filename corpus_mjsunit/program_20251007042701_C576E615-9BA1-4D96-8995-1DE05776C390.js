function K(a1) {
    with ({}) {
    }
    this.x = a1;
}
function f() {
    const v6 = new K(1);
    var a = v6;
    const v9 = new K(2);
    var b = v9;
    return a == b;
}
f();
