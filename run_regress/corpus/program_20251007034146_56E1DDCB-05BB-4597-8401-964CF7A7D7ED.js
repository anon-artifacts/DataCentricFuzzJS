function f1(a1, a2) {
    return a1[a2] + 0.5;
}
var arr = [0,,2.5];
f1(arr, 0);
f1(arr, 0);
f1(arr, 0);
const t4 = Array.prototype;
t4[1] = 1.5;
f1(arr, 1);
