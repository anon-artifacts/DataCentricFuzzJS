function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
for (let i4 = 0; i4 < 100000; ++i4) {
}
class C10 {
    [F0];
}
Math.expm1(16);
const v16 = [true];
for (let v18 = 0; v18 < 1000; v18++) {
    for (let v20 = 0; v20 < 5; v20++) {
        for (let i21 = v20; i21 < v16.length; ++i21) {
            if ((v16[v20] === v16[i21]) != (v20 == i21)) {
                "Error: bad result for j = " + v20;
            }
        }
    }
    ++v18;
}
