function f() {
    'use asm';
    function g() {
        function f() {
        }
    }
    return g;
}
const t8 = f();
t8();
