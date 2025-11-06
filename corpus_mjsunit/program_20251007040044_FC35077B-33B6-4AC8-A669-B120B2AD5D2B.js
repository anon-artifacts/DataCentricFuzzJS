function f0() {
    var max = Math.max;
    function f() {
        return max(0, -1);
    }
    return f;
}
var f = f0();
f();
f();
