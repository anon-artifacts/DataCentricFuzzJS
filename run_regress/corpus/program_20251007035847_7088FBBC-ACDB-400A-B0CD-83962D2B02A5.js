function assert(a1) {
}
function min() {
    return Math.min();
}
function max() {
    return Math.max();
}
function test() {
    for (let i10 = 0; i10 < 10000; i10++) {
        min() === Infinity;
        max() === -Infinity;
    }
}
test();
