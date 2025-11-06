function test() {
    function* generator() {
        yield 5;
        yield 6;
    }
    var iterator = generator();
    var item = iterator.next();
    var passed = (item.value === 5) && (item.done === false);
    item = iterator.next();
    passed &= (item.value === 6) && (item.done === false);
    item = iterator.next();
    passed &= (item.value === undefined) && (item.done === true);
    return passed;
}
if (!test()) {
    const v38 = new Error("Test failed");
    throw v38;
}
