function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    static #n(a4, a5, a6) {
        super[F0] = F0;
        a4.#n();
    }
}
function f8() {
    ("proto").anchor(f8);
    this.proto = "proto";
}
f8();
