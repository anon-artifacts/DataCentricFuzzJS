function f0() {
}
class C1 extends f0 {
}
const v2 = new C1();
for (let v3 = 0; v3 < 32; v3++) {
    v2["p" + v3] = v3;
}
