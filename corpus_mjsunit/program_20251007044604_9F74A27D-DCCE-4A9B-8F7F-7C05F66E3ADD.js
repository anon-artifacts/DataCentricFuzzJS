function f0() {
    function bench(a2, a3, a4) {
        const v6 = new Date();
        var start = v6;
        var result = a3(a4);
        const v10 = new Date();
        var end = v10;
        const verbose = false;
        if (verbose) {
            print(((((a2 + " ") + result) + " ") + (end - start)) + "ms");
        }
    }
    const v26 = new Set();
    var sparseSet = v26;
    for (const v36 of [123,1230,12300,123000,234,2340,23400]) {
        sparseSet.add(v36);
    }
    function f39(a40) {
        var count = 0;
        for (let i44 = 0; i44 < 5000000; ++i44) {
            if (a40.has(i44)) {
                count++;
            }
        }
        return count;
    }
    bench("Sparse Set Property Existence", f39, sparseSet);
}
f0();
