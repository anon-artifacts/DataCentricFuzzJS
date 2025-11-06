function test() {
    const v2 = new Set();
    var set = v2;
    set.add(-0);
    var k;
    function f9(a10) {
        k = 1 / a10;
    }
    set.forEach(f9);
    return (k === Infinity) && set.has(+0);
}
if (!test()) {
    const v24 = new Error("Test failed");
    throw v24;
}
