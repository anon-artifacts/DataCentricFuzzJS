function test() {
    var obj = {};
    class C4 extends Set {
    }
    const v5 = new C4();
    var set = v5;
    set.add(123);
    set.add(123);
    return set.has(123);
}
if (!test()) {
    const v17 = new Error("Test failed");
    throw v17;
}
