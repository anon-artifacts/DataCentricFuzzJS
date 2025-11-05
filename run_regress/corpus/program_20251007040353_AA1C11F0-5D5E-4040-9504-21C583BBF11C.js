function f(a1) {
    return ([a1])[0];
}
const t3 = Object.prototype;
t3[0] = 23;
f(1);
f(2);
f(3);
function f17() {
    throw Error();
}
Object.prototype.__defineGetter__(0, f17);
f(4);
f(5);
f(6);
function g(a32, a33) {
    var o = { foo: a32, 0: a33 };
    return o.foo + o[0];
}
const t19 = Object.prototype;
t19[0] = 23;
const t21 = Object.prototype;
t21.foo = 42;
g(1, 2);
g(2, 3);
g(3, 4);
function f56() {
    throw Error();
}
Object.prototype.__defineGetter__(0, f56);
function f62() {
    throw Error();
}
Object.prototype.__defineGetter__("foo", f62);
g(1, 2);
g(2, 3);
g(3, 4);
