function h() {
    const v3 = new Error("boom");
    var stack = v3.stack;
    print(stack);
    return 1;
}
function g(a10) {
    return h();
}
function f1() {
    var o = {};
    o.__defineGetter__("p", g);
    o.p;
}
f1();
f1();
f1();
function f2() {
    var o = {};
    o.__defineSetter__("q", g);
    o.q = 1;
}
f2();
f2();
f2();
function A() {
    return h();
}
function f3() {
    new A();
}
f3();
f3();
f3();
