function test() {
    function* g() {
    }
    const t3 = g.constructor;
    const v10 = new t3("a", "b", "c", "yield a; yield b; yield c;");
    var iterator = v10(5, 6, 7);
    var item = iterator.next();
    var passed = (item.value === 5) && (item.done === false);
    item = iterator.next();
    passed &= (item.value === 6) && (item.done === false);
    item = iterator.next();
    passed &= (item.value === 7) && (item.done === false);
    item = iterator.next();
    passed &= (item.value === undefined) && (item.done === true);
    return passed;
}
if (!test()) {
    const v51 = new Error("Test failed");
    throw v51;
}
