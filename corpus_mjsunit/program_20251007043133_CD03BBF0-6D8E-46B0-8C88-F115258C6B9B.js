class C3 {
    #b = 3;
    static {
        let v5;
        try { v5 = this.getOwnPropertyDescriptors(); } catch (e) {}
        try {
            v5.#b &= -9223372036854775808;
        } catch(e6) {
        }
    }
}
const v8 = new Int32Array(18770);
function f9(a10) {
    v8[0] = a10;
    return v8[0];
}
for (let v13 = 0; v13 < 250; v13++) {
    f9();
}
