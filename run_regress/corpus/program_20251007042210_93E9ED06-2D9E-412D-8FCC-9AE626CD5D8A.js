function f() {
}
function f1() {
    f();
}
f1();
function g() {
    const v5 = new f();
    v5 >> 0;
}
g();
