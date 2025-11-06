function f(a1) {
    return a1 % 3;
}
function testMod() {
    for (let i6 = 0; i6 < 40000; i6++) {
        -1 / 0;
        1 / f(-3);
    }
}
testMod();
function g(a23, a24) {
    return a23 + a24;
}
function testAdd() {
    var lhs = 17.42;
    var rhs = 42.17;
    for (let i32 = 0; i32 < 40000; i32++) {
        g(lhs, rhs);
    }
}
testAdd();
