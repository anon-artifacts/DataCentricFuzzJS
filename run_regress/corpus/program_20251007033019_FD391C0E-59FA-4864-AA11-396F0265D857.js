function f0() {
    function bar(a2) {
        return a2 / 2;
    }
    bar(undefined);
    function foo(a8) {
        return bar(a8 = (a8 >>> 0) + 1) | 0;
    }
    foo(1);
    foo(2);
    foo(3);
    foo(4);
    foo(1);
    foo(2);
    foo(3);
    foo(4);
    foo();
}
f0();
function f42() {
    function bar(a44) {
        return a44 / 2;
    }
    bar(undefined);
    function foo(a50) {
        return bar(a50 = (a50 | 0) + 1) | 0;
    }
    foo(1);
    foo(2);
    foo(3);
    foo(4);
    foo(1);
    foo(2);
    foo(3);
    foo(4);
    foo();
}
f42();
function f84() {
    function foo(a86) {
        return (a86 | 0) / 2;
    }
    foo(2);
    foo(4);
    foo(6);
    foo();
    foo(1);
    foo();
    foo(8);
    foo();
    foo(1);
    foo();
}
f84();
function f114() {
    function foo(a116, a117) {
        return a116 / a117;
    }
    foo(4, 2);
    foo(8, 4);
    foo(2, 2);
    foo();
    foo(1, 0);
    foo();
    foo(2, 1);
    foo();
    foo(1, 0);
    foo();
}
f114();
function f147() {
    function foo(a149, a150) {
        return a149 / a150;
    }
    foo(4, 2);
    foo(8, 4);
    foo(2, 2);
    foo();
    -0;
    foo(0, -1);
    foo();
    foo(2, 1);
    foo();
    -0;
    foo(0, -1);
    foo();
}
f147();
function f185() {
    function foo(a187, a188) {
        return a187 / a188;
    }
    foo(4, 2);
    foo(8, 4);
    foo(2, 2);
    foo();
    foo(-2147483648, -1);
    foo();
    foo(2, 1);
    foo();
    foo(-2147483648, -1);
    foo();
}
f185();
function f223() {
    function foo(a225) {
        return a225?.length / 2;
    }
    foo(("ab").repeat(1));
    foo(("ab").repeat(2));
    foo(("ab").repeat(3));
    foo();
    foo("a");
    foo();
    foo(("ab").repeat(4));
    foo();
    foo("a");
    foo();
}
f223();
function f260() {
    function foo(a262, a263) {
        return (a262 >>> 0) / (a263 >>> 0);
    }
    foo(4, 2);
    foo(8, 4);
    foo(2, 2);
    foo();
    foo(1, 0);
    foo();
    foo(2, 1);
    foo();
    foo(1, 0);
    foo();
}
f260();
