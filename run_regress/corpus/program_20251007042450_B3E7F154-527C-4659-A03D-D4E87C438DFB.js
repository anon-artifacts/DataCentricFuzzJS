function f1(a1) {
    try { a1[a1](0); } catch (e) {}
}
function do1() {
    f1([f1]);
}
do1();
function f2(a11) {
    try { a11[a11](true); } catch (e) {}
}
function do2() {
    function f16(a17) {
        return f2("undefined", typeof f2(42, 0));
    }
    f2([f16]);
}
do2();
