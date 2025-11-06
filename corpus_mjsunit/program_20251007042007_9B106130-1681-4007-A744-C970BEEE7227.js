function Bar() {
}
function Baz() {
}
const v2 = new Bar();
Baz.prototype = { __proto__: v2 };
const v4 = new Baz();
var x = v4;
function foo(a7) {
    return a7 instanceof Bar;
}
foo(x);
const t11 = Baz.prototype;
t11.__proto__ = null;
foo(x);
