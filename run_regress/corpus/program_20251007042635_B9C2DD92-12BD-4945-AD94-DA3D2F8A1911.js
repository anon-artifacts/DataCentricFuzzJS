var zero = 0;
function ConstantFoldZeroDivZero() {
    function f() {
        return 0 / zero;
    }
    isNaN(f());
    isNaN(f());
    isNaN(f());
}
ConstantFoldZeroDivZero();
function ConstantFoldMinusZeroDivZero() {
    function f() {
        return -0 / zero;
    }
    isNaN(f());
    isNaN(f());
    isNaN(f());
}
ConstantFoldMinusZeroDivZero();
function ConstantFoldNaNDivZero() {
    function f() {
        return NaN / 0;
    }
    isNaN(f());
    isNaN(f());
    isNaN(f());
}
ConstantFoldNaNDivZero();
