function test() {
    try {
        const v2 = {
            get a() {
            },
        };
        const t6 = Object.getOwnPropertyDescriptor(v2, "a").get;
        new t6();
    } catch(e8) {
        return true;
    }
}
if (!test()) {
    const v14 = new Error("Test failed");
    throw v14;
}
