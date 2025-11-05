function foo() {
}
function f1(a2) {
}
var f1 = f1.bind(foo);
function f5() {
}
var f2 = f5;
f1.length;
f2.bind(foo);
f1.length;
var desc = Object.getOwnPropertyDescriptor(f1, "length");
desc.writable;
desc.enumerable;
desc.configurable;
Object.defineProperty(f1, "length", { value: "abc", writable: true });
f1.length;
f1.length = 42;
f1.length;
