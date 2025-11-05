function foo(a1) {
    return baz();
}
function bar() {
    return foo(13, 14, 15);
}
function baz() {
    return (((foo.arguments.length == 3) && (foo.arguments[0] == 13)) && (foo.arguments[1] == 14)) && (foo.arguments[2] == 15);
}
bar(12, 14);
