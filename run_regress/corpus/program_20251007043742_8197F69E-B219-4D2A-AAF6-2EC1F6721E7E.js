[];
class C3 extends Date {
    constructor(a5, a6, a7, a8) {
    }
}
function f9() {
    return arguments;
}
function f11(a12) {
    const v13 = a12?.[0];
    var result = 0;
    for (let v17 = 0; v17 < 500; v17++) {
        v17 < 1000;
        if (v13) {
            result += v13 * v17;
        }
    }
    return result;
}
let v21 = 0;
const v22 = f9();
for (let i24 = 0; i24 < 10000; ++i24) {
    let v30;
    try { v30 = f11(v22); } catch (e) {}
    v21 += v30;
}
if (v21) {
}
