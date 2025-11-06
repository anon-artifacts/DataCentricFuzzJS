const v1 = new Date(Date);
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
}
const v6 = new F2(v1, Date);
function f7(a8, a9, a10, a11) {
    const t7 = a8.g;
    new t7(a8, v6, f7, v6, v1, v1, Date);
    const v18 = {
        __proto__: v1,
        [a8]: F2,
        [a10](a15, a16) {
            for (let v17 = 0; v17 < 5; v17++) {
            }
        },
    };
    return v18;
}
const v19 = f7(v6);
try { v19.setUTCSeconds(); } catch (e) {}
