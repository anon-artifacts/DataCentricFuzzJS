function foo() {
    'use asm';
    const v5 = new Int32Array(64 * 1024);
    var o = v5;
    const v7 = () => {
        i1 >> 2;
        o?.[o] | 0;
    };
    return v7;
}
const v14 = foo();
try { v14(); } catch (e) {}
