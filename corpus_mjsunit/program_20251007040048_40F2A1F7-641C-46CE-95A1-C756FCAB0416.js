function f1() {
    const v4 = String.prototype.substring;
    return { e: v4 };
}
const v6 = { ff: f1 };
function f8(a9, a10, a11) {
    'use asm';
    var ff = a10.ff;
    function f(a15) {
        a15 = +a15;
        ff();
    }
    return f;
}
h = f8(0, v6, 0);
for (let i21 = 0; i21 < 999; i21++) {
    h();
}
