function testSlowArrayPopMultiFrame() {
    var a = [];
    for (let i4 = 0; i4 < 9; i4++) {
        a[i4] = [0];
    }
    function f13() {
        return 23;
    }
    a[8].__defineGetter__("0", f13);
    function child(a18, a19) {
        return a18[a19].pop();
    }
    function parent(a23, a24) {
        return child(a23, a24);
    }
    function gramps(a27, a28) {
        return parent(a27, a28);
    }
    var last;
    for (let i33 = 0; i33 < 9; i33++) {
        last = gramps(a, i33);
    }
    return last;
}
testSlowArrayPopMultiFrame();
