function f0() {
    function foo(a2) {
        a2 = a2 >>> 0;
        var y = 0 - 2147483648;
        return a2 + y;
    }
    -2147483648;
    foo(0);
    foo(2147483648);
    foo(4294967295);
    -2147483648;
    foo(0);
    foo(2147483648);
    foo(4294967295);
    -2147483648;
    foo(0);
    foo(2147483648);
    foo(4294967295);
    foo();
}
f0();
function f42() {
    function foo(a44) {
        a44 = a44 >>> 0;
        var y = 2147483648;
        return a44 - y;
    }
    -2147483648;
    foo(0);
    foo(2147483648);
    foo(4294967295);
    -2147483648;
    foo(0);
    foo(2147483648);
    foo(4294967295);
    -2147483648;
    foo(0);
    foo(2147483648);
    foo(4294967295);
    foo();
}
f42();
function f82() {
    function foo(a84) {
        a84 = a84 | 0;
        var y = 2147483648;
        return a84 + y;
    }
    foo(0);
    foo(-2147483648);
    foo(2147483647);
    foo(0);
    foo(-2147483648);
    foo(2147483647);
    foo(0);
    foo(-2147483648);
    foo(2147483647);
    foo();
}
f82();
function f122() {
    function foo(a124) {
        a124 = a124 | 0;
        var y = 0 - 2147483648;
        return a124 - y;
    }
    foo(0);
    foo(-2147483648);
    foo(2147483647);
    foo(0);
    foo(-2147483648);
    foo(2147483647);
    foo(0);
    foo(-2147483648);
    foo(2147483647);
    foo();
}
f122();
function f164() {
    function foo(a166) {
        a166 = a166 | 0;
        var y = -0;
        return a166 + y;
    }
    foo(2147483647);
    -2147483648;
    foo(-2147483648);
    foo(0);
    foo(2147483647);
    -2147483648;
    foo(-2147483648);
    foo(0);
    foo(2147483647);
    -2147483648;
    foo(-2147483648);
    foo(0);
    foo();
}
f164();
function f208() {
    function foo(a210) {
        var y = a210 < 0 ? 4294967295 : 4294967296;
        var z = a210 > 0 ? 2147483647 : 2147483648;
        return y - z;
    }
    foo(-1);
    foo(0);
    foo(1);
    foo(-1);
    foo(0);
    foo(1);
    foo(-1);
    foo(0);
    foo(1);
    foo();
}
f208();
