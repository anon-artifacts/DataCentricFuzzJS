function f() {
    try {
        for (let i2 = 0; i2 < 2; i2++) {
            continue;
            try {
                continue;
                continue;
            } catch(e8) {
            }
        }
    } catch(e9) {
    }
    return 42;
}
f();
