function test() {
    function f1() {
    }
    var A = f1;
    const v3 = new A();
    return v3.__proto__ === A.prototype;
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
