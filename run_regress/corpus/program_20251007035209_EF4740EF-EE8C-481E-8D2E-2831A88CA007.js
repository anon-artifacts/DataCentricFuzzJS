function f0() {
    function foo(a2) {
        return Math.abs(Math.trunc(a2 * -2));
    }
    foo(1);
    foo(2);
    foo(1);
    foo(2);
    foo();
    foo(0);
    foo();
}
f0();
