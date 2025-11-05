function f(a1, a2) {
    return a1[a2] + 0.5;
}
var arr = [0,,];
f(arr, 0);
f(arr, 0);
f(arr, 0);
f(arr, 1);
arr.__proto__ = [1.5,1.5,1.5];
f(arr, 1);
f(arr, 0);
