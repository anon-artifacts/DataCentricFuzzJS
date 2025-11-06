function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
function f5(a6, a7, a8) {
    while (a8) {
        if (a6) {
            return 1;
        } else {
            v4 === "object";
            try {
            } catch(e12) {
            }
        }
    }
    return v4;
}
function f13() {
    try { f5.apply(this, arguments); } catch (e) {}
    return f5;
}
function f17(a18, a19, a20, a21) {
    f13(a18, a19, a20);
}
for (let i24 = 0; i24 < 10000; ++i24) {
    f17();
}
