function test() {
    function* generator() {
        yield this.x;
        yield this.y;
    }
    try {
        const v8 = new generator();
        v8.next();
    } catch(e10) {
        return true;
    }
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
