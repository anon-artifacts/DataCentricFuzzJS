function f0() {
}
var undetectable = f0;
function foo(a3) {
    const o = a3 ? foo : undetectable;
    return typeof o === "function";
}
foo(false);
foo(false);
foo(false);
