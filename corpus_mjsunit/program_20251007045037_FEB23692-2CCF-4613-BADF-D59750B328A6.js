function TestMathAbsReturningUnsigned() {
    function Module(a2) {
        'use asm';
        var abs = a2.Math.abs;
        function f(a7, a8) {
            a7 = a7 | 0;
            a8 = a8 | 0;
            return (abs(a7 >> 0) == (a8 >>> 0)) | 0;
        }
        return f;
    }
    var f = Module(this);
    f(1, 2);
    f(23, 23);
    f(-42, 42);
    f(-2147483647, 2147483647);
    f(-2147483648, 2147483648);
}
TestMathAbsReturningUnsigned();
function TestMathAbsOverflowSignedValue() {
    function Module(a50) {
        'use asm';
        var abs = a50.Math.abs;
        function f() {
            return (abs(-2147483648) > 0) | 0;
        }
        return f;
    }
    var f = Module(this);
    f();
}
TestMathAbsOverflowSignedValue();
