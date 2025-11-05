class C2 {
    static #valueOf(a4, a5) {
    }
    constructor(a7, a8) {
        try {
            super.n();
        } catch(e10) {
        }
        try {
            let v11 = a7.#valueOf();
            v11--;
        } catch(e13) {
        }
    }
}
C2.d = C2;
const v14 = new C2(C2, -10);
const v15 = v14?.constructor;
try { v15(C2, 1.3178029080789732e+308); } catch (e) {}
const v17 = new C2(v14, v14);
const v18 = v17?.__defineSetter__;
try { v18(C2, C2); } catch (e) {}
const v20 = new C2(C2, C2);
const t23 = v20?.constructor;
new t23();
0 / 0;
42 + 42;
