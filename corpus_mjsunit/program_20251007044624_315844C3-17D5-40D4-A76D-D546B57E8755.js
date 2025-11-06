class C0 {
}
const t2 = C0.prototype;
t2.a = "a";
const t4 = C0.prototype;
t4.b = "b";
const t6 = C0.prototype;
t6.c = "c";
const t8 = C0.prototype;
t8.d = "d";
const t10 = C0.prototype;
t10.e = "e";
const t12 = C0.prototype;
t12.f = "f";
const t14 = C0.prototype;
t14.g = "g";
const t16 = C0.prototype;
t16.h = "h";
const t18 = C0.prototype;
t18.i = "i";
const t20 = C0.prototype;
t20.j = "j";
const t22 = C0.prototype;
t22.k = "k";
const t24 = C0.prototype;
t24.l = "l";
const t26 = C0.prototype;
t26.m = "m";
const t28 = C0.prototype;
t28.n = "n";
const t30 = C0.prototype;
t30.o = "o";
const t32 = C0.prototype;
t32.p = "p";
const t34 = C0.prototype;
t34.q = "q";
const t36 = C0.prototype;
t36.r = "r";
class C37 extends C0 {
    foo(a39) {
        return super[a39];
    }
}
const v41 = new C37();
var d = v41;
for (let i44 = 0; i44 < 20; ++i44) {
    for (const v51 in C0.prototype) {
        d.foo(v51);
    }
}
