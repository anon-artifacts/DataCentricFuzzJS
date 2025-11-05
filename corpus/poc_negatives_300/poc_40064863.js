function inlined() {
    const a = 'a', b = 'b', c = 'c';  // This is reduced to deoptimize and crash
    // const a = '1', b = '2', c = '3';  // This is reduced as element access and does not crash
    class Klass {
        static [a];
        static [b];
        static [c];
    }
    arguments.toString();
    try { undefined(); } catch { try { undefined(); } catch {} }
    Reflect.construct(Object, arguments);
}

function main() {
    try {
        inlined();
    } catch {}
}
main();
%PrepareFunctionForOptimization(main);
%OptimizeFunctionOnNextCall(main);
main();
// d8 --allow-natives-syntax  --no-lazy-feedback-allocation test.js
