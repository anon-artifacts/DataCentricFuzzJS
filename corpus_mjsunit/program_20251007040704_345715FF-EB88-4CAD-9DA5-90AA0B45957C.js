function f0() {
    return f0;
}
class C1 {
    #g = f0;
    constructor(a3, a4, a5, a6) {
        try {
            a3.#g = a3;
        } catch(e7) {
        }
    }
}
new C1(C1);
