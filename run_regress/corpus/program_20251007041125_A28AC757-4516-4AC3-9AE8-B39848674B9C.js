var b = 1.5;
var arr;
function f_int(a5, a6) {
    for (let i8 = 0; i8 < 100; i8++) {
        let v14 = a5[a6];
        v14++;
    }
}
arr = [1,2,3];
f_int(arr, "1");
arr[1];
arr = [1,2,3];
f_int(arr, 1);
arr[1];
function f_double(a33, a34) {
    for (let i36 = 0; i36 < 100; i36++) {
        let v49 = a33[(+Math.pow(a34, 1) * 1.5) / b];
        v49++;
    }
}
arr = [1,2,3];
f_double(arr, 1);
arr[1];
arr = [1,2,3];
f_double(arr, NaN);
arr[1];
