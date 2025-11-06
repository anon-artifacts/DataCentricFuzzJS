let r;
function f2() {
    function f() {
        return (1 + (-1 / 0)) << null;
    }
    f();
    f();
    function g(a17, a18) {
        var a = a17 | 0;
        var b = a18 | 0;
        return ((a / b) + (a / b)) | 0;
    }
    g(3, 4);
    g(3, 4);
}
f2();
