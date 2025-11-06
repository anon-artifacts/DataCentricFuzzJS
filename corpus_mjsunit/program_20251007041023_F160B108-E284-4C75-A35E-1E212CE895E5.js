function test() {
    function* generatorFn() {
    }
    var ownProto = Object.getPrototypeOf(generatorFn());
    var passed = ownProto === generatorFn.prototype;
    var sharedProto = Object.getPrototypeOf(ownProto);
    const v12 = sharedProto !== Object.prototype;
    function* f13() {
    }
    return passed &= (v12 && (sharedProto === Object.getPrototypeOf(f13.prototype))) && sharedProto.hasOwnProperty("next");
}
if (!test()) {
    const v25 = new Error("Test failed");
    throw v25;
}
