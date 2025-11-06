const n = 2 ** 32;
const v5 = new Float32Array();
const x = v5;
function f() {
    for (let i9 = 96; i9 < 100; i9 += 4) {
        x[i9] = i9 + n;
    }
}
f();
f();
