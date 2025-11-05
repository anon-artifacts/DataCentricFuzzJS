function f0(a1) {
    const v3 = (a4) => {
        return this;
    };
    return v3;
}
var obj = { f: f0 };
var g = obj.f(obj);
g();
const v11 = obj.f;
var obj2 = { f: v11 };
var g2 = obj2.f(obj2);
g2();
g();
