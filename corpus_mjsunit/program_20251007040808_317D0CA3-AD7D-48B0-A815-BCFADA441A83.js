function testGlobalShapeChangeAfterDeepBail() {
    function f(a2) {
        this[a2] = 1;
        for (let i6 = 0; i6 < 4; i6++) {
        }
    }
    var arr = [[],[],[],["bug0","bug1","bug2","bug3","bug4"]];
    for (let i24 = 0; i24 < arr.length; i24++) {
        arr[i24].forEach(f);
    }
}
testGlobalShapeChangeAfterDeepBail();
