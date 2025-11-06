function foo(a1, a2, a3, a4) {
    return baz();
}
function bar() {
    return foo(11);
}
function baz() {
    return (foo.arguments.length == 1) && (foo.arguments[0] == 11);
}
bar(12, 14);
