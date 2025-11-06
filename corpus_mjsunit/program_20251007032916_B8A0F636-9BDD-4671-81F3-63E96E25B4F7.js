function f1() {
    return 3.4 + 5.6;
}
function f2() {
    return 2 + 3;
}
function f3() {
    return (1.2 || 3.4) + 5.6;
}
function f4() {
    return (1 || 2) + 3;
}
f1() === f1();
f2() === f2();
f3() === f3();
f4() === f4();
