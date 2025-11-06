function runner(a1, a2) {
    a1.call(this);
}
function test(a6) {
    function MyFunction() {
        var result = (a6 * 2) + arguments.length;
        return result;
    }
    for (let i15 = 0; i15 < 5; ++i15) {
        MyFunction();
    }
    runner(MyFunction, a6 * 2);
}
test(1);
test(42);
test(239);
