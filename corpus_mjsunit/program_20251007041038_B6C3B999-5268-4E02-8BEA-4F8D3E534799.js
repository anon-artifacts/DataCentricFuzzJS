function* f() {
    yield (yield 1);
}
var g = f();
g.next().value;
g.return("hello").value;
g.next().value;
