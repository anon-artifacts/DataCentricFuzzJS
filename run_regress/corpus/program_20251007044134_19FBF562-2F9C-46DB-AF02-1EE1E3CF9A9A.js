let v1 = undefined;
class C2 {
    o(a4, a5) {
        v1 &&= a5;
        let [v6,,...v7] = a5;
    }
}
class C8 extends C2 {
    static get d() {
    }
}
try { C8["o"](Map, ...-1000000.0); } catch (e) {}
const v13 = (a14, a15) => {
    return v13;
};
