function test(a1) {
    do {
        const v3 = arr[0];
        a1 = v3;
        if (v3) {
            break;
        }
        a1 = 0;
    } while (0)
    arr[1] = a1;
}
const v9 = new Float64Array(2);
arr = v9;
for (let i12 = 0; i12 < 200; i12++) {
    test(0);
}
arr[1];
