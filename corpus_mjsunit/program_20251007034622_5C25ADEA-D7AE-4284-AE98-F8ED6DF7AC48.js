function div(a1) {
    return (a1 / -1) ^ 1;
}
var kMinInt = 1 << 31;
var expected_MinInt = div(kMinInt);
var expected_minus_zero = div(0);
div(kMinInt);
div(0);
function mul(a20) {
    return (a20 * -1) ^ 1;
}
expected_MinInt = mul(kMinInt);
expected_minus_zero = mul(0);
mul(kMinInt);
mul();
mul(0);
mul();
