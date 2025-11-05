function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    return F0;
}
Uint8ClampedArray.toString = f5;
const v7 = Symbol.toPrimitive;
Uint8ClampedArray[v7] = f5;
function f8() {
    return v7;
}
try { f8.constructor(Uint8ClampedArray); } catch (e) {}
