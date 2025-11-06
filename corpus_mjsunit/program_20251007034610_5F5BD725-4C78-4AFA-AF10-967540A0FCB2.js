function test() {
    var c = 0;
    for (let i4 = 0; i4 < 20; i4++) {
        var arr = [1];
        if (i4 > 5) {
            Object.defineProperty(arr, "length", { writable: false, value: 4 });
        }
        try {
            arr.push(2);
        } catch(e23) {
            e23.toString().includes("length");
            c++;
        }
    }
}
test();
