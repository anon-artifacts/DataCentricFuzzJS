function f0() {
    function foo(a2) {
        return ((a2 * -2) % (2 ** 32)) === 0;
    }
    foo(2);
    foo(1);
    foo(2);
    foo(1);
    foo(0);
    foo();
}
f0();
