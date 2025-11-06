function f0() {
    return arguments;
}
function f2(a3, a4, a5) {
    return (a3 + a4) + a5;
}
for (let i9 = 0; i9 < 10000; ++i9) {
    if (f2.apply(0, f0(2, 3, 42)) != 47) {
        function f23() {
            return f23;
        }
        test();
        function test() {
            return f23();
        }
    }
}
