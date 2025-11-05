function testNewArrayCount() {
    function count(a2) {
        var n = 0;
        for (const v5 in a2) {
            n++;
        }
        return n;
    }
    var a = [];
    for (let i10 = 0; i10 < 5; i10++) {
        a = [0];
    }
    count(a);
    for (let i21 = 0; i21 < 5; i21++) {
        a = [0,,2];
    }
    count(a);
}
testNewArrayCount();
