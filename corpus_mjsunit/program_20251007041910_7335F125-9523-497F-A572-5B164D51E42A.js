function TestNestedLoops() {
    var sum = 0;
    for (let i4 = 0; i4 < 200; i4 = i4 + 1) {
        for (let i12 = 0; i12 < 200; i12 = i12 + 1) {
            sum = sum + 1;
        }
    }
    return sum;
}
200 * 200;
TestNestedLoops();
