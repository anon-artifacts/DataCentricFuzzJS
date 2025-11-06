function foo(a1) {
    function f2() {
        a1 = 1;
    }
    f2();
    return arguments[0];
}
foo(42);
foo(42);
foo(42);
