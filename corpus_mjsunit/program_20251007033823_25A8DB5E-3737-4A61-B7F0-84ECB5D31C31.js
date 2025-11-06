function f0() {
    var x = 42;
    var a = [1,2,3];
    function f8() {
    }
    x = f8;
    new x(f8, ...a);
}
f0();
