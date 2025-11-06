const v2 = new Uint8ClampedArray(1);
var arr = v2;
for (let i5 = 0; i5 < 2; ++i5) {
    arr[0] = 4294967296;
}
arr[0];
