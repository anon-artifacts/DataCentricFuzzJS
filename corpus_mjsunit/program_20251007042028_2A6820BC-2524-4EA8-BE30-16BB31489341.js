function f0() {
    function f() {
        {
            function f() {
                return 42;
            }
        }
        function g() {
            return f;
        }
        return g;
    }
    var g = f();
    var inner_f = g();
    inner_f();
}
f0();
function f12() {
    var y = 100;
    function y() {
        return y;
    }
    var z = y;
    try { z(); } catch (e) {}
}
f12();
