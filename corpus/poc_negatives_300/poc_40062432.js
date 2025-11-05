function f1() {
    try {
        const v0 = new ArrayBuffer(42, {
            'maxByteLength': 55
        });

        const v1 = new DataView(v0, 0, 40);

        v0.resize();
        v1.setInt8(11, 0xab);

    } catch (v5) { }
}

for (let i = 0; i < 10000; i++)
    f1();