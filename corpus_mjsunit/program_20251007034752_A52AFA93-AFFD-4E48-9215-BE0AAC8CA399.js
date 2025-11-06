function f0() {
    function foo(a2, a3) {
        return a2 === a3;
    }
    foo(0.1, 0.1);
    foo(undefined, undefined);
    foo(undefined, undefined);
}
f0();
