x = Object.prototype;
x.foo = 3;
x.bar = 4;
delete x.foo;
x.foo = 5;
function f() {
    return foo;
}
for (i = 0; i < 5; ++i) {
    f();
}
f();
function f21() {
    return 42;
}
x.gee = f21;
function g() {
    return gee();
}
for (i = 0; i < 5; ++i) {
    g();
}
g();
