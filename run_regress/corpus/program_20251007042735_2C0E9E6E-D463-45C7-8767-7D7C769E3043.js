function* foo() {
    yield 42;
}
function* goo() {
    yield 42;
}
var f = foo();
var g = goo();
f.next().value;
g.next().value;
f.next().done;
g.next().done;
