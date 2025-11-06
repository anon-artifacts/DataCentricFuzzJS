function ShiftRightWithDeoptUsage() {
    function g() {
    }
    function f() {
        var tmp = 1264475713;
        var tmp1 = tmp - -913041544;
        g();
        return 1 >> tmp1;
    }
    f();
}
ShiftRightWithDeoptUsage();
function ShiftRightWithCallUsage() {
    function f16() {
        'use asm';
        function g(a18) {
            return a18;
        }
        function f() {
            var tmp = 1264475713;
            var tmp1 = tmp - -913041544;
            return g(1 >> tmp1, tmp1);
        }
        return f;
    }
    var f = f16();
    f();
}
ShiftRightWithCallUsage();
