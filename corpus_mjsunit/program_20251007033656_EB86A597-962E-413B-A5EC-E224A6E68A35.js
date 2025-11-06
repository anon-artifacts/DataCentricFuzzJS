function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5) {
        function f6(a7, a8, a9) {
            let v11;
            try { v11 = a8["p"](); } catch (e) {}
            a8.toString = v11;
            return C1;
        }
    }
}
function f12() {
    return f12;
}
const v14 = new Uint8Array(C1, C1);
const v16 = Symbol.species;
v14.constructor = { [v16]: f12 };
try { v14.map(); } catch (e) {}
