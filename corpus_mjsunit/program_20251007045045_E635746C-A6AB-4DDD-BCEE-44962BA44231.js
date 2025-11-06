function testSlowArrayPopNestedTrees() {
    var a = [];
    for (let i4 = 0; i4 < 9; i4++) {
        a[i4] = [0];
    }
    function f13() {
        return 3.14159;
    }
    a[8].__defineGetter__("0", f13);
    function child(a18, a19, a20, a21) {
        var last = 2.71828;
        for (let i25 = 0; i25 < 9; i25++) {
            if (((a19 == 8) && (a20 == 8)) && (a21 == 8)) {
                last = a18[i25].pop();
            }
        }
        return last;
    }
    function parent(a42, a43, a44) {
        var last;
        for (let i48 = 0; i48 < 9; i48++) {
            last = child(a42, a43, a44, i48);
        }
        return last;
    }
    function gramps(a56, a57) {
        var last;
        for (let i61 = 0; i61 < 9; i61++) {
            last = parent(a56, a57, i61);
        }
        return last;
    }
    var last;
    for (let i71 = 0; i71 < 9; i71++) {
        last = gramps(a, i71);
    }
    return last;
}
testSlowArrayPopNestedTrees();
