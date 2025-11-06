const v0 = [];
function f2() {
    v0 + v0[1];
    v0[2];
    v0[3];
    v0[4];
    v0[5];
    v0[6];
}
Object.seal(v0);
for (let i12 = 0; i12 < 100000; ++i12) {
    try { f2(); } catch (e) {}
    try { f2(); } catch (e) {}
}
