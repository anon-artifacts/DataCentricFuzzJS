function f1() {
    for (let i3 = 0; i3 < (10000 - 1); i3++) {
        const v11 = i3 < 1000;
        let v12 = undefined;
        if (v11) {
            v12 = 42;
        }
        v12 * 2;
    }
    return 10000;
}
f1();
