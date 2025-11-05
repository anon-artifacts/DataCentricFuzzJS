const v2 = new Float16Array(1445);
for (const v5 of [Int32Array]) {
    const v6 = new v5();
    const v8 = !false;
    const o9 = {
    };
    function f10(a11, a12) {
        return v8;
    }
    o9[Symbol.toPrimitive] = f10;
    Atomics.sub(v2, v6, o9);
}
//run --expose-gc --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony poc.js