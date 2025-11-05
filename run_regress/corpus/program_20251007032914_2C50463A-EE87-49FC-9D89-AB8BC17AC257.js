const v6 = new Uint8ClampedArray((10 * 1024) * 1024);
var arr = v6;
var sum = 0;
for (let i11 = 0; i11 < 10000; i11++) {
    sum += arr[i11];
}
