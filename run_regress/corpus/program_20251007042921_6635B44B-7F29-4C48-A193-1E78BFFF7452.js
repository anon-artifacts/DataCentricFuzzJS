function O(a1) {
    this.x = 20;
    var ret = a1 ? { x: 10 } : 26;
    return ret;
}
function test() {
    for (let i11 = 0; i11 < 100; i11++) {
        const v21 = new O((i11 & 1) == 1);
        var o = v21;
        if (i11 & 1) {
            o.x;
        } else {
            o.x;
        }
    }
}
test();
