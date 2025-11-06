function foo() {
    for (let i2 = 0; i2 < 1; ++i2) {
        for (let i9 = 0; i9 < 11; ++i9) {
            const t3 = true;
            t3();
        }
    }
}
try {
    foo();
} catch(e18) {
    print(e18.message === "Function expected" ? "pass" : "fail");
}
