function f0() {
    function foo(a2, a3) {
        return a2 + a3;
    }
    foo(0.1, 0.2);
    foo(0.1, 0.2);
    function bar(a12) {
        return foo(a12 = Math.trunc(foo(a12 - 1, 1)), -1);
    }
    bar(1);
    bar(2);
    bar(3);
}
f0();
function f32() {
    function baz(a34) {
        return ({ x: a34 }).x + a34;
    }
    baz(null);
    baz(undefined);
    function foo(a43) {
        return baz(1) | 0;
    }
    foo();
    foo();
    foo();
}
f32();
