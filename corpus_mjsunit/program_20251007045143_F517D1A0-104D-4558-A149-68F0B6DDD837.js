function f() {
    var hits = 0;
    for (const v6 of [Float32Array,Float64Array,Float32Array]) {
        const v8 = new v6(1);
        var arr = v8;
        try {
            arr[0] = Symbol.iterator;
        } catch(e12) {
            hits++;
        }
    }
    for (const v18 of [Int32Array,Int16Array,Int8Array]) {
        const v20 = new v18(1);
        var arr = v20;
        try {
            arr[0] = Symbol.iterator;
        } catch(e24) {
            hits++;
        }
    }
}
f();
