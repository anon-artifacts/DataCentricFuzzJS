function foo() {
}
Function.prototype.isPrototypeOf(foo);
foo.bar = "hello";
foo.propertyIsEnumerable("bar");
