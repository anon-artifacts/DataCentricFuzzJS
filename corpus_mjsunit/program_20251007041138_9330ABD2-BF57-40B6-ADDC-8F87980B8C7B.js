function f0() {
    'use asm';
    function f1() {
        for (let i3 = 0; i3 < 10; i3++) {
            if (i3 == 5) {
            }
        }
        with (Object()) {
        }
    }
    return f1;
}
const t12 = f0();
t12();
