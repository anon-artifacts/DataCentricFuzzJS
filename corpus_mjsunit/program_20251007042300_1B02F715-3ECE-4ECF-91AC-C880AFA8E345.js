const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v0;
}
new F1();
const v4 = new F1();
v4.d = v4;
new F1();
/[x]/;
function f3() {
}
function f4(a11) {
    const v12 = a11?.startsWith;
    try { new v12(0); } catch (e) {}
    function f14() {
    }
    a11.g4 = f14;
}
function f15() {
}
const v18 = new String("x");
try { v18.matchAll(f4); } catch (e) {}
for (let i21 = 0; i21 < 20; i21++) {
}
