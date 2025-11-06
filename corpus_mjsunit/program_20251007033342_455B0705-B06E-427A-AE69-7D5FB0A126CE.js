function f0() {
    function foo(a2) {
        a2 = Math.floor(a2);
        a2 = Math.max(a2, -0);
        return 1 / Math.abs(a2);
    }
    foo(-0);
    foo(-0);
    foo(-0);
}
f0();
function f22() {
    function foo(a24) {
        return Math.abs(a24 * -2);
    }
    foo(-1);
    foo(-2);
    foo(-1);
    foo(-2);
    foo();
    foo(0);
    foo();
}
f22();
function f52() {
    function foo(a54) {
        return Math.abs(Math.max((a54 = a54 | 0) * -2, 0));
    }
    foo(-1);
    foo(-2);
    foo(-1);
    foo(-2);
    foo();
    foo(0);
    foo();
}
f52();
function f86() {
    function foo(a88) {
        return Math.abs(Math.min((a88 = a88 | 0) * -2, 2 ** 32));
    }
    foo(-1);
    foo(-2);
    foo(-1);
    foo(-2);
    foo();
    foo(0);
    foo();
}
f86();
