let a = [];
a.length = 30;
function check(a4) {
    try {
        a4();
    } catch(e6) {
        e6.message;
    }
}
function f9() {
    return f(...a) + 1;
}
let f = f9;
const v15 = () => {
    return g(...a) + 1;
};
let g = v15;
function f21() {
    const v23 = new h(...a);
    return v23 + 1;
}
let h = f21;
check(f);
check(g);
check(h);
