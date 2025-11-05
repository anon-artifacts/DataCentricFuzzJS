function f() {
    var a;
    for (let i4 = 0; i4 < 50; i4++) {
        a = [i4,,[,,i4 * 3]];
    }
    return a;
}
const t7 = Array.prototype;
t7[1] = 123;
var arr = f();
arr.length;
arr.toString();
