function f0() {
    function foo(a2) {
        return Number.parseInt((a2 = a2 | 0) + 1);
    }
    foo(0);
    foo(1);
    Math.pow(2, 31);
    foo(Math.pow(2, 31) - 1);
}
f0();
function f26() {
    function foo(a28) {
        return Number.parseInt((a28 = a28 | 0) + 1, 0);
    }
    foo(0);
    foo(1);
    Math.pow(2, 31);
    foo(Math.pow(2, 31) - 1);
}
f26();
function f53() {
    function foo(a55) {
        return Number.parseInt((a55 = a55 | 0) + 1, 10);
    }
    foo(0);
    foo(1);
    Math.pow(2, 31);
    foo(Math.pow(2, 31) - 1);
}
f53();
function f80() {
    function foo(a82) {
        return Number.parseInt((a82 = a82 | 0) + 1, undefined);
    }
    foo(0);
    foo(1);
    Math.pow(2, 31);
    foo(Math.pow(2, 31) - 1);
}
f80();
