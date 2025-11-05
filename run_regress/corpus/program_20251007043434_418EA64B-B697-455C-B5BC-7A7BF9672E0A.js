function intLength(a1, a2) {
    var res = 0;
    for (let i6 = 0; i6 < a2; i6++) {
        res += a1.length;
    }
}
intLength([0,1,2,3,4,5,6,7,8,9], 10);
const v27 = new Uint8Array(10);
intLength(v27, 10);
function test() {
    var a = ("abc").split("");
    var res = 0;
    for (let i38 = 0; i38 < 20; i38++) {
        res += a.length;
    }
    return res;
}
function f45() {
}
const t19 = Object.prototype;
t19.length = f45;
test();
