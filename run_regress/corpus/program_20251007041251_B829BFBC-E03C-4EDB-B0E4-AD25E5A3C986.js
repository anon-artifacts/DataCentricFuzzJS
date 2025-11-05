function TestNonSmiArrayLength() {
    function f(a2) {
        return a2.length + 1;
    }
    var a = [];
    a.length = 65535;
    f(a);
    f(a);
    a.length = 4294967295;
    f(a);
}
TestNonSmiArrayLength();
