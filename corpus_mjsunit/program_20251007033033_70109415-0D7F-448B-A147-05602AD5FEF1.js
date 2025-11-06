function test() {
    class C1 {
        static method() {
            return 3;
        }
    }
    return (typeof C1.method === "function") && (C1.method() === 3);
}
if (!test()) {
    const v16 = new Error("Test failed");
    throw v16;
}
