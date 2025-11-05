const v2 = new Uint8ClampedArray(11);
var pixels = v2;
function f() {
    for (let i6 = 0; i6 < 8; i6++) {
        pixels[i6] = i6 * 1.1;
    }
    pixels[8] = 255.5;
    pixels[9] = NaN;
    pixels[10] = -0.5;
    return pixels[1] + pixels[6];
}
f();
f();
pixels[5];
f();
pixels[5];
pixels[8];
pixels[9];
pixels[10];
