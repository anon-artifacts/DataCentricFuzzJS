var g = 0;
g++;
const v4 = new Float32Array();
var f32 = v4;
function foo() {
    f32[0 >> 2] = g;
}
foo();
