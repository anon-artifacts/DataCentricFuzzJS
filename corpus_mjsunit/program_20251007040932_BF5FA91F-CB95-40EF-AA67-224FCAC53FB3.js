function test() {
    const v1 = () => {
        try {
            const t3 = Function("0 || () => 2");
            t3();
        } catch(e6) {
            return true;
        }
    };
    return v1();
}
if (!test()) {
    const v13 = new Error("Test failed");
    throw v13;
}
