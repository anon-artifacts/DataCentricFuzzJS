function foo(a1, a2) {
    function bar() {
        return a2;
    }
    return (arguments[0] + arguments[1]) + bar();
}
foo(1, 2);
