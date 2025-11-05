function f0(a1, a2, a3) {
    try {
        6 ** 123n;
    } catch(e7) {
        for (let v8 = 0; v8 < 50; v8++) {
            const o10 = {
                "construct": parseInt,
            };
            o10.construct(e7);
        }
    }
    return a1;
}
for (let v12 = 0; v12 < 100; v12++) {
    f0();
}