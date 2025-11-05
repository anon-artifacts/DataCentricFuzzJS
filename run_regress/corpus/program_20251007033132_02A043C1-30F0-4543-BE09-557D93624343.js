function f0() {
}
bar = f0;
try {
    function f2() {
        function* f3() {
            yield 1;
            yield 2;
            yield 3;
        }
        bar(...f3());
    }
    f2();
} catch(e14) {
}
