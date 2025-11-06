const v2 = new Float64Array(100);
var arr = v2;
function foo() {
    for (let i6 = 0; i6 > -10; i6--) {
        arr[i6] = 5.1 * i6;
    }
}
function bar() {
    for (let i17 = 0; i17 > -10; i17--) {
        print(arr[i17]);
    }
}
for (let i28 = 0; i28 < 1000; i28++) {
    foo();
}
bar();
