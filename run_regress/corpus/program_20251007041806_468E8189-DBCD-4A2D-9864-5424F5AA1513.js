function test() {
    var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
    function f6() {
    }
    var A = f6;
    return (((desc && ("get" in desc)) && ("set" in desc)) && desc.configurable) && !desc.enumerable;
}
if (!test()) {
    const v23 = new Error("Test failed");
    throw v23;
}
