function Bar() {
}
var Foo = Bar.bind(null);
function foo() {
    return 1 instanceof Foo;
}
foo();
foo();
foo();
