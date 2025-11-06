function F() {
}
const v1 = new F();
var a = v1;
function f(a4) {
    return a[a4]();
}
function f6() {
    return 11;
}
a.first = f6;
function f8() {
    return 22;
}
a[0] = f8;
var obj = {};
function f12() {
    return 33;
}
a[obj] = f12;
a.foo = 0;
delete a.foo;
var b = "first";
f(b);
f(b);
f(b);
f(0);
f(obj);
