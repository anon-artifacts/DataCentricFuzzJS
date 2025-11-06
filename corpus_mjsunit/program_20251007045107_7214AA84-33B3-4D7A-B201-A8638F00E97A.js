function f0() {
    function foo(a2) {
        if (Math.max(a2 * -2, 1) == 1) {
            return 0;
        }
        return 1;
    }
    foo(2);
    foo(-1);
    foo(2);
    foo(-1);
    foo();
    foo(0);
    foo();
}
f0();
function f33() {
    function foo(a35) {
        return Math.max((a35 = a35 | 0) - 1, a35 + 1);
    }
    -Math.pow(2, 31) + 1;
    foo(-Math.pow(2, 31));
    Math.pow(2, 31);
    foo(Math.pow(2, 31) - 1);
    -Math.pow(2, 31) + 1;
    foo(-Math.pow(2, 31));
    Math.pow(2, 31);
    foo(Math.pow(2, 31) - 1);
}
f33();
