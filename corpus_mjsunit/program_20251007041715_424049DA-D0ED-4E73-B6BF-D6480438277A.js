const v2 = new BigUint64Array(257);
function f3() {
    return v2;
}
const v4 = {};
v4.valueOf = f3;
function f5(a6, a7) {
    v2.reverse();
}
v4[Symbol.toPrimitive] = f5;
Number(v4);
