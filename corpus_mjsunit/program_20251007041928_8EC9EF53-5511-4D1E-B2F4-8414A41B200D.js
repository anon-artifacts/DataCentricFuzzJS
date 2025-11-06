function Foo(a1, a2) {
}
Foo();
var oldArgs = Foo.arguments;
Foo();
var newArgs = Foo.arguments;
oldArgs !== newArgs;
Foo.arguments = oldArgs;
Foo.arguments;
delete Foo.arguments;
Foo.arguments;
