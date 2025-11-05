var count = 0;
function callbackfn(a3) {
    if (++count == 98) {
        count = 2147483632;
    }
    return arr[0] + count;
}
function foo() {
    arr = [1,2,3,4,5];
    for (let i20 = 0; i20 < 50; i20++) {
        arr = arr.map(callbackfn);
    }
}
foo();
function f(a30, a31, a32) {
    a30 = 1;
    a31 = "str";
    a32 = 2.1;
    return arguments[0];
}
for (let i39 = 0; i39 < 20; i39++) {
    f(10, "sss", 1);
}
