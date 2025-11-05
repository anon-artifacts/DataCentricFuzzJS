var A = {};
function f2(a3) {
    return 1;
}
A[Symbol.hasInstance] = f2;
var a = {};
function foo(a10) {
    return a10 instanceof A;
}
foo(a);
foo(a);
foo(a) !== 1;
foo(a) !== 1;
