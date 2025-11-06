var x = 0;
function f0() {
    return x;
}
f0();
function f1(a6) {
    return a6;
}
f1(1);
function f2() {
    var x = 2;
    return x;
}
f2();
function f3(a16) {
    function g() {
        return a16;
    }
    return a16;
}
f3(3);
function f4(a22) {
    function g() {
        return a22;
    }
    return g();
}
f4(4);
function f5(a29) {
    with ({}) {
        return a29;
    }
}
f5(5);
function f6(a35) {
    return a35;
}
f6(6);
