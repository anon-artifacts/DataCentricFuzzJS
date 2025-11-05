function f0() {
}
test();
function test() {
    var counter = 0;
    function f(a7, a8) {
        try {
            throw 42;
        } catch(e10) {
            function f11() {
                return a7;
            }
            foo(((f11 | "9.2") && 5) || (counter && e));
            ++counter;
        }
    }
    f(2, 1);
}
function foo(a26) {
    return "" + a26;
}
f0(0, 0, "ok");
