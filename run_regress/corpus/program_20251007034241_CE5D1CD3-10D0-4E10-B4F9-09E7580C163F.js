function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
F0 + 0.1;
const v8 = {};
function* f9() {
    const v14 = [0,1,2,3];
    Object.freeze(v14);
    v14[3];
}
f9().next();
