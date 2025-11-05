function foo() {
    arguments.length;
}
function bar() {
    G.x;
    return foo.apply(this, arguments);
}
function baz() {
    return bar(1, 2);
}
G = { x: 0 };
baz();
baz();
baz();
delete G.x;
baz();
