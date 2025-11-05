function assert(a1) {
}
class C3 extends Function {
    t() {
        super.call(this);
        return 3;
    }
}
const v7 = new C3();
let a = v7;
a.t() == 3;
