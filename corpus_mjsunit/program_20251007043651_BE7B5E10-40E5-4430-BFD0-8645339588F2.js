function test1() {
    const v3 = new Uint32Array(100);
    var arr = v3;
    const t3 = Object.prototype;
    t3[105] = true;
    arr[50] = 4294962688;
    arr[84] = 444;
    var res = 0;
    for (let i13 = 0; i13 < 200; i13++) {
        res = arr[i13];
        if (i13 == 50) {
        } else {
            if (i13 == 84) {
            } else {
                if (i13 >= 100) {
                }
            }
        }
    }
}
test1();
