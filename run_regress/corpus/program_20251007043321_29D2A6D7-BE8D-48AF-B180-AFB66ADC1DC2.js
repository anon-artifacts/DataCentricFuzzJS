function f() {
    this.x = 1;
}
var a = [];
for (let i6 = 0; i6 < 100; i6++) {
    new f();
}
function h() {
    const v14 = new f();
    var o = v14;
    o.y = 1.5;
    return o;
}
function g(a18) {
    a18.u = 1.1;
    a18.v = 1.2;
    a18.z = 1.3;
    return a18.y;
}
g(h());
g(h());
g(h());
