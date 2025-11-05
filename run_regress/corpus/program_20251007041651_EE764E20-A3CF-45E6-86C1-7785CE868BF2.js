function testLogicalNotNaN() {
    var i = 0;
    const v5 = new Array(5);
    var a = v5;
    while (i < a.length) {
        const v10 = !NaN;
        a[i++] = v10;
    }
    return a.join();
}
testLogicalNotNaN();
