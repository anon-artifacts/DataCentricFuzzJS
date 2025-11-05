function f0() {
    var x = 42;
    function f3() {
    }
    x = f3;
    new x(f3);
}
f0();
