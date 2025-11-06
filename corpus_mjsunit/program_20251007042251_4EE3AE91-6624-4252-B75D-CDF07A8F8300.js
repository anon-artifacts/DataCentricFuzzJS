function f0() {
}
Math.fround();
Math.fround(NaN);
Math.fround(-Infinity);
-Infinity;
Math.fround(Infinity);
Math.fround(-0);
-0;
Math.fround(+0);
+0;
function f20() {
    const v23 = new Float32Array(1);
    var f32 = v23;
    function f(a26) {
        f32[0] = a26;
        return f32[0];
    }
    return f;
}
var toFloat32 = f20();
for (let i31 = 0; i31 < 64; ++i31) {
    var p = Math.pow(2, i31) + 1;
    Math.fround(p);
    toFloat32(p);
    Math.fround(-p);
    toFloat32(-p);
}
function maxValue(a49, a50) {
    var n = 0;
    var maxExp = Math.pow(2, a49 - 1) - 1;
    for (let i60 = a50; i60 >= 0; i60--) {
        n += Math.pow(2, maxExp - i60);
    }
    return n;
}
var DBL_MAX = maxValue(11, 52);
Number.MAX_VALUE;
Math.fround(DBL_MAX);
var FLT_MAX = maxValue(8, 23);
Math.fround(FLT_MAX);
Math.fround(FLT_MAX + Math.pow(2, ((Math.pow(2, 8 - 1) - 1) - 23) - 2));
Math.fround(FLT_MAX + Math.pow(2, ((Math.pow(2, 8 - 1) - 1) - 23) - 1));
function minValue(a112, a113) {
    return Math.pow(2, -(Math.pow(2, a112 - 1) - 2) - a113);
}
var DBL_MIN = Math.pow(2, -1074);
Number.MIN_VALUE;
Math.fround(DBL_MIN);
var FLT_MIN = minValue(8, 23);
Math.fround(FLT_MIN);
Math.fround(FLT_MIN / 2);
Math.fround((FLT_MIN / 2) + Math.pow(2, -202));
Math.fround(-FLT_MIN);
-FLT_MIN;
Math.fround(-FLT_MIN / 2);
-0;
Math.fround((-FLT_MIN / 2) - Math.pow(2, -202));
-FLT_MIN;
f0(0, 0, "ok");
