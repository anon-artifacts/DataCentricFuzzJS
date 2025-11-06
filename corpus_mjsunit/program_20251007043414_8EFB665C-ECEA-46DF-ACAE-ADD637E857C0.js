const v4 = Function.prototype[Symbol.hasInstance];
const v5 = Symbol.hasInstance;
var Foo = { [v5]: v4 };
function foo() {
    return 1 instanceof Foo;
}
foo();
foo();
foo();
