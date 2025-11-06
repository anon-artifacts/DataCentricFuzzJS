var o = { v: 1 };
var deopt = false;
function f6() {
    return 1;
}
Object.defineProperty(o, "x", { get: f6 });
function bar(a12, a13, a14) {
    return a12 + a14;
}
function foo(a17, a18) {
    a17[a18];
    return bar(1, 2, 3);
}
foo(o, "v");
foo(o, "v");
foo(o, "x");
foo(o, "x");
deopt = true;
foo(o, "x");
