const v1 = new Float64Array();
var Float64ArrayView = v1;
const v4 = new Int32Array();
var Int32ArrayView = v4;
function m(a7) {
    Float64ArrayView[(4 * (2147483649 >> !1)) >> 0] = a7;
    Int32ArrayView[(4 * (2147483649 >> !1)) >> 0] = a7;
}
var val = 3.1415926535;
m(val);
val = 123456789.12345679;
m(val);
const v30 = new Float64Array(16);
Float64ArrayView = v30;
const v32 = new Int32Array(16);
Int32ArrayView = v32;
val = 987654321.9876543;
m(val);
if ((Float64ArrayView[4] === val) && (Int32ArrayView[4] === (val | 0))) {
    print("PASSED");
} else {
    print(Float64ArrayView[4]);
    print(Int32ArrayView[4]);
    print("FAILED");
}
