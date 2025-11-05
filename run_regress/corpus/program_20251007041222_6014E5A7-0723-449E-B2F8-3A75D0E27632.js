class C0 {
    s() {
        super.bla = 10;
    }
}
const v4 = new C0();
const v5 = v4.s;
try { v5.call(42); } catch (e) {}
