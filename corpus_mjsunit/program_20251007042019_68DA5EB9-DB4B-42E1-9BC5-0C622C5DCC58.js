function bar() {
    return { __proto__: this };
}
function foo(a4) {
    a4[0] = 0.3;
}
foo(bar());
foo(bar());
