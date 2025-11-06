class C0 {
}
const t2 = C0.prototype;
t2.a = "a";
const t4 = C0.prototype;
t4.q = "q";
const t6 = C0.prototype;
t6.NaN = NaN;
class C7 extends C0 {
    foo(a9) {
        return super[a9];
    }
}
function f() {
    const v12 = new C7();
    var d = v12;
    for (const v15 in C0.prototype) {
        String(d.foo(v15));
    }
}
f();
f();
