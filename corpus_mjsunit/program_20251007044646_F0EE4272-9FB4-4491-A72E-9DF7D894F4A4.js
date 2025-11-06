function ifInsideLoop() {
    var cond = true;
    var intCond = 5;
    var count = 0;
    for (let i8 = 0; i8 < 100; i8++) {
        if (cond) {
            count++;
        }
        if (intCond) {
            count++;
        }
    }
    return count;
}
ifInsideLoop();
