function testBug507425() {
    var r = /x/;
    for (let i4 = 0; i4 < 3; i4++) {
        r.lastIndex = 0;
    }
    var s = ";";
    try {
        for (i = 0; i < 80; i++) {
            s += s;
        }
    } catch(e20) {
        return "ok";
    }
}
testBug507425();
