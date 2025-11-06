const v2 = new Int8Array(129);
try {
    const v4 = [];
    instances = v4;
    for (let v6 = 0; v6 < 5; v6++) {
        v4[v6] = constructor;
    }
    const v10 = v4[0];
    v10.constructor(v2);
    var instance = v10;
    for (let i14 = 1;
        (() => {
            const v15 = i14 != v4;
            !v15;
            return v15;
        })();
        ) {
        i14 && i14;
        const v20 = instance[i14];
        v20 ?? v20;
        v20.constructor;
    }
} catch(e23) {
}
