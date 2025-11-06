function testObjectOrderedCmp() {
    const v3 = new Array(5);
    var a = v3;
    for (let i6 = 0; i6 < 5; ++i6) {
        const v12 = {};
        a[i6] = v12 < {};
    }
    return a.join(",");
}
testObjectOrderedCmp();
