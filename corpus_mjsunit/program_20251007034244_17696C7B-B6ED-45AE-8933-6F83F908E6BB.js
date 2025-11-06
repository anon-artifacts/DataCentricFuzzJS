function foo(a1) {
    var b = 2;
    function bar() {
        return a1 + b;
    }
    return bar;
}
const t7 = foo();
t7();
