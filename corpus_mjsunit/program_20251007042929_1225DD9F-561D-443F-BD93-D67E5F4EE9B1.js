function assertSyntaxError(a1) {
    function f2() {
        return Function(a1);
    }
    f2();
}
