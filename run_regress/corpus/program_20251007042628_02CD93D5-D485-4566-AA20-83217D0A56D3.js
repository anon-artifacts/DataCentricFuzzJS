new Set();
var toggle = 0;
function f5() {
    toggle ^= 1;
    if (1) {
        return 42;
    } else {
        function f8() {
        }
    }
}
function f9() {
    return 7;
}
function f11() {
    let v12;
    try { v12 = f5(); } catch (e) {}
    let v13;
    try { v13 = f9(); } catch (e) {}
    v12 ^ v13;
}
for (let i16 = 0; i16 < 100000; ++i16) {
    f11();
}
