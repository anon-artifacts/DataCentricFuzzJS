function generateAsmJs() {
    'use asm';
    function fun() {
        try { fun(); } catch (e) {}
    }
    return fun;
}
const t7 = generateAsmJs();
t7();
