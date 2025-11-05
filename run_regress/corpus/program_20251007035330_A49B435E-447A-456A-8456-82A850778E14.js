const v2 = new Float32Array(32);
var f32 = v2;
function f(a5) {
    var x;
    if (a5 > 10000) {
        x = 4.5;
    } else {
        x = f32[0];
    }
    function f12() {
        for (let i14 = 0; i14 < 4; ++i14) {
            x = 1;
        }
    }
    f32[0] = f12() < x;
}
for (let i24 = 0; i24 < 100; i24++) {
    f(i24);
}
