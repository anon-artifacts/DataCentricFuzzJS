function test() {
    for (let i2 = 0; i2 < 10; i2++) {
        try {
            var arr = [];
            arr[0] = 1;
            Object.freeze(arr);
            arr[0] = 2;
        } catch(e14) {
            e14.toString().includes("TypeError: 0 is read-only");
        }
    }
}
test();
