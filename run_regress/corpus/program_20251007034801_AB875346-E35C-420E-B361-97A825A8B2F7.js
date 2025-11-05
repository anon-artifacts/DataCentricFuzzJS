function test() {
    const v2 = {};
    new Proxy(v2, {});
    try {
        const v5 = {};
        Proxy(v5, {});
        return false;
    } catch(e9) {
        return true;
    }
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
