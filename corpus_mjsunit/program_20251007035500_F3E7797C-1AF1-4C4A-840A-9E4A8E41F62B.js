function makeClosure(a1) {
    const v2 = (a3) => {
        if (a1 == 42) {
            a1 = 0;
            return a3(a3);
        } else {
            return a1;
        }
    };
    return v2;
}
for (let i9 = 0; i9 < 1000; ++i9) {
    var g = makeClosure(42);
    var h = makeClosure(41);
    var value = g(h);
    if (value != 41) {
        throw "Wrong result, got: " + value;
    }
}
