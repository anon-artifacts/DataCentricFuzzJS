function a() {
    this.x = 1;
}
const v3 = new a();
var aa = v3;
function b() {
    this.z = 23;
    this.x = 2;
}
const v10 = new b();
var bb = v10;
function f(a13) {
    return a13.x;
}
f(aa);
f(aa);
f(bb);
f(bb);
f(aa);
f(bb);
