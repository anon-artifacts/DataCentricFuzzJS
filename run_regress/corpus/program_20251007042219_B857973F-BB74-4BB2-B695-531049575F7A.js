function f0() {
    function foo() {
        const v4 = new Array(2);
        var a = v4;
        a[1] = 1.5;
        return a;
    }
    foo()[0];
    foo()[0];
    foo()[0];
}
f0();
function f17() {
    function foo() {
        var a = Array(2);
        a[1] = 1.5;
        return a;
    }
    foo()[0];
    foo()[0];
    foo()[0];
}
f17();
