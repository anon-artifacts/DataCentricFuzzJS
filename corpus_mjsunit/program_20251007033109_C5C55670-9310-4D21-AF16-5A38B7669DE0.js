function testSlowArrayPop() {
    var a = [];
    for (let i4 = 0; i4 < 9; i4++) {
        a[i4] = [0];
    }
    function f13() {
        return "xyzzy";
    }
    a[8].__defineGetter__("0", f13);
    var last;
    for (let i20 = 0; i20 < 9; i20++) {
        last = a[i20].pop();
    }
    return last;
}
testSlowArrayPop();
