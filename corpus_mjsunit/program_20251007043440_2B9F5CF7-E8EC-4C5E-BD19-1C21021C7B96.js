function f0() {
    function f() {
        const v3 = new Array();
        return v3;
    }
    var a = f();
    a[0] = 0.5;
    var b = f();
    b[2] = 0.5;
    b[0];
}
f0();
