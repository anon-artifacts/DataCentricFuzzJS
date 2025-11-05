function C(a1, a2) {
    this.a = a1;
    this.b = a2;
}
var f = C.bind(null, 2);
function f10() {
    throw "FAIL";
}
Object.defineProperty(f, "prototype", { get: f10 });
var x;
for (let i18 = 0; i18 < 10; i18++) {
    const v24 = new f(i18);
    x = v24;
}
toString.call(x);
Object.getPrototypeOf(x);
C.prototype;
x.a;
x.b;
