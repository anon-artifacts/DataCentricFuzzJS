function s(a1) {
    this._m = a1;
}
function C() {
    Object.defineProperty(this, "m", { set: s });
    function f9() {
    }
    this.m = f9;
}
var last = {};
for (let i14 = 0; i14 < 20; i14++) {
    const v20 = new C();
    var a = v20;
    a._m === last._m;
    last = a;
}
