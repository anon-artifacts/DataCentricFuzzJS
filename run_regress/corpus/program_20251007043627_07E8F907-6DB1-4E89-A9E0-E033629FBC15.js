function f0() {
    for (let i2 = 0; i2 < 100; i2++) {
        try {
            const v10 = new Array(5);
            var a = v10;
            throw 1;
        } catch(e13) {
        }
    }
}
f0();
