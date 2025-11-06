function foo(a1, a2, a3) {
    return a2;
}
var desc = Object.getOwnPropertyDescriptor(foo, "length");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
function f13() {
    foo.length = 2;
}
f13();
