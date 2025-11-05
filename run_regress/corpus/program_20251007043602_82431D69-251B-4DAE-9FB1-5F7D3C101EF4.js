function test() {
    class C2 extends Array {
    }
    const v3 = new C2();
    var c = v3;
    var len1 = c.length;
    c[2] = "foo";
    var len2 = c.length;
    return (len1 === 0) && (len2 === 3);
}
if (!test()) {
    const v19 = new Error("Test failed");
    throw v19;
}
