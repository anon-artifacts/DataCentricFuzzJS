function f0() {
    const v12 = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
    };
    var o = v12;
    var result = 0;
    for (let i17 = 0; i17 < 1000000; ++i17) {
        result += (((o.a ^ o.b) | ((o.c ^ (o.d & o.e)) ^ o.f)) | ((o.g ^ (o.h & o.i)) ^ o.j)) | o.k;
    }
    if (result != 15000000) {
        throw "Error: bad result: " + result;
    }
}
f0();
