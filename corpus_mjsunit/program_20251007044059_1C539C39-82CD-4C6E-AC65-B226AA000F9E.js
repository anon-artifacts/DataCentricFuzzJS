new Set();
new Float32Array(1024);
new BigUint64Array(1);
new Int32Array(512);
var a = [1];
function f(a15) {
    var round = Math.round;
    for (let i20 = 0; i20 < 20; i20++) {
        round(a[0]);
        if (a15 > 500) {
            a[0] = "a";
        }
    }
}
for (let i32 = 0; i32 < 550; i32++) {
    f(i32);
}
