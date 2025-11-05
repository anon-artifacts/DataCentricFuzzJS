function boo() {
    return foo.arguments[0];
}
function foo(a5, a6, a7) {
    if (a5 == 0) {
        a5 = 2;
        return boo();
    }
    return a5;
}
function inlined() {
    return foo.apply({}, arguments);
}
function test(a17, a18, a19) {
    return inlined(a17, a18, a19);
}
test(1, 2, 3);
test(0, 2, 3);
function g(a32) {
    if (g.arguments[1]) {
        return true;
    }
    return false;
}
function f() {
    return g(false, true);
}
function h() {
    return f(false, false);
}
h(false, false);
h(false, false);
function g2(a54) {
    if (a54) {
        if (g2.arguments[1]) {
            return true;
        }
        return false;
    }
    return true;
}
function f2(a61) {
    return g2(a61, true);
}
function h2(a65) {
    return f2(a65, false);
}
h2(false, false);
h2(true, false);
function g3(a77) {
    return a77;
}
function f3(a79) {
    a79 = 3;
    return g3.apply({}, arguments);
}
function h3(a85) {
    return f3(a85);
}
h3(0);
h3(0);
