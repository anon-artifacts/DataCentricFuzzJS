function A() {
    this.a = "a";
}
const v3 = new A();
var a = v3;
function B() {
    this.b = "b";
}
B.prototype = a;
function C() {
    this.c = "c";
}
const v11 = new B();
C.prototype = v11;
const v12 = new C();
var c = v12;
function f(a15) {
    var result = c.z;
}
f(undefined);
f(undefined);
f(undefined);
a.z = "z";
f("z");
f("z");
var p1 = { foo: 1.5 };
var p2 = {};
p2.__proto__ = p1;
var p3 = {};
p3.__proto__ = p2;
var o = {};
o.__proto__ = p3;
for (let i39 = 0; i39 < 2; i39++) {
    o.foo;
}
var p1a = { foo: 1.7 };
p2.__proto__ = p1a;
function g(a50, a51) {
    var result = a50.foo;
}
g(o, 1.7);
g(o, 1.7);
g(o, 1.7);
function f61() {
    return "foo";
}
Object.defineProperty(p1a, "foo", { get: f61 });
g(o, "foo");
