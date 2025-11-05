function f() {
    function g(a2) {
        return a2;
    }
    function f3() {
        return g(42);
    }
    return f3;
}
