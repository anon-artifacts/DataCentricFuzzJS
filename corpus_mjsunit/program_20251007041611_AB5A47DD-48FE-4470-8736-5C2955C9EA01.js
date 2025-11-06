function test() {
    class C1 {
        constructor() {
            this.x = 1;
        }
    }
    const v6 = C1.prototype.constructor === C1;
    const v7 = new C1();
    return v6 && (v7.x === 1);
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
