for (let i1 = 0; i1 < 90; ++i1) {
    y = { x: 1 };
}
const v11 = Object.prototype;
const v13 = (a14) => {
    return 1;
};
Object.defineProperty(v11, "zz", { set: v13 });
function f() {
    for (let i20 = 0; i20 < 1500; i20++) {
        y[0] = 0;
        if (i20 > 1400) {
            y.zz = 3;
        }
    }
}
f();
