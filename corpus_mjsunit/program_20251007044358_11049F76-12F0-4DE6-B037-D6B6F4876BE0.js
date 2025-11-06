function foo_pixel(a1, a2, a3) {
    a1[0] = a3;
    a1[a2] = a3;
}
function foo_uint16(a5, a6, a7) {
    a5[0] = a7;
    a5[a6] = a7;
}
function foo_uint32(a9, a10, a11) {
    a9[0] = a11;
    a9[a10] = a11;
}
function foo_float(a13, a14, a15) {
    a13[0] = a15;
    a13[a14] = a15;
}
function foo_double(a17, a18, a19) {
    a17[0] = a19;
    a17[a18] = a19;
}
const v22 = new Uint8ClampedArray(2);
var A1_pixel = v22;
const v25 = new Uint8ClampedArray(2);
var A2_pixel = v25;
const v28 = new Uint8ClampedArray(2);
var A3_pixel = v28;
const v32 = new Uint16Array(2);
var A1_uint16 = v32;
const v35 = new Uint16Array(2);
var A2_uint16 = v35;
const v38 = new Uint16Array(2);
var A3_uint16 = v38;
const v42 = new Uint32Array(2);
var A1_uint32 = v42;
const v45 = new Uint32Array(2);
var A2_uint32 = v45;
const v48 = new Uint32Array(2);
var A3_uint32 = v48;
const v52 = new Float32Array(2);
var A1_float = v52;
const v55 = new Float32Array(2);
var A2_float = v55;
const v58 = new Float32Array(2);
var A3_float = v58;
const v62 = new Float64Array(2);
var A1_double = v62;
const v65 = new Float64Array(2);
var A2_double = v65;
const v68 = new Float64Array(2);
var A3_double = v68;
foo_pixel(A1_pixel, 1, 34);
foo_pixel(A2_pixel, 1, 34);
foo_pixel(A3_pixel, 1, 34);
foo_uint16(A1_uint16, 1, 3.4);
foo_uint16(A2_uint16, 1, 3.4);
foo_uint16(A3_uint16, 1, 3.4);
foo_uint32(A1_uint32, 1, 3.4);
foo_uint32(A2_uint32, 1, 3.4);
foo_uint32(A3_uint32, 1, 3.4);
foo_float(A1_float, 1, 3.4);
foo_float(A2_float, 1, 3.4);
foo_float(A3_float, 1, 3.4);
foo_double(A1_double, 1, 3.4);
foo_double(A2_double, 1, 3.4);
foo_double(A3_double, 1, 3.4);
A1_pixel[0];
A3_pixel[0];
A1_pixel[1];
A3_pixel[1];
A1_uint16[0];
A3_uint16[0];
A1_uint16[1];
A3_uint16[1];
A1_uint32[0];
A3_uint32[0];
A1_uint32[1];
A3_uint32[1];
A1_float[0];
A3_float[0];
A1_float[1];
A3_float[1];
A1_double[0];
A3_double[0];
A1_double[1];
A3_double[1];
