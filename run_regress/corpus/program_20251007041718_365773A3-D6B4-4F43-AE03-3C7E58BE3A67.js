function check(a1, a2, a3) {
    if (a1 !== a2) {
        const v6 = new Error(a3);
        throw v6;
    }
}
function test() {
    var arr = [1,2,3,4];
    Object.defineProperty(arr, 1, { configurable: false });
    for (let i20 = 0; i20 < 80; i20++) {
        if (!arr.length) {
            arr[0] = -1;
        } else {
            arr.length = 0;
            check(arr.length, 2, "cannot delete a non-configurable property");
        }
    }
}
for (let i36 = 0; i36 < 80; i36++) {
    test();
}
print("PASS");
