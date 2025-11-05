function test() {
    var symbol = Symbol();
    try {
        symbol + "";
        return false;
    } catch(e7) {
    }
    try {
        symbol + 0;
        return false;
    } catch(e11) {
    }
    return true;
}
if (!test()) {
    const v17 = new Error("Test failed");
    throw v17;
}
