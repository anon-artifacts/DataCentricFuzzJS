function testShiftLeft() {
    var r = [];
    var i = 0;
    var j = 0;
    var shifts = [0,1,7,8,15,16,23,24,31];
    for ((() => {
            i = 0;
        })();
        i < shifts.length;
        i++) {
        const v24 = 1 << shifts[i];
        r[j++] = v24;
    }
    for ((() => {
            i = 0;
        })();
        i < shifts.length;
        i++) {
        const v34 = 1 << (shifts[i] + 32);
        r[j++] = v34;
    }
    for ((() => {
            i = 0;
        })();
        i < shifts.length;
        i++) {
        const v44 = 1 << (shifts[i] + 224);
        r[j++] = v44;
    }
    for ((() => {
            i = 0;
        })();
        i < shifts.length;
        i++) {
        const v54 = 1 << (shifts[i] + 256);
        r[j++] = v54;
    }
    return r.join(",");
}
testShiftLeft();
(("1,2,128,256,32768,65536,8388608,16777216,-2147483648," + "1,2,128,256,32768,65536,8388608,16777216,-2147483648,") + "1,2,128,256,32768,65536,8388608,16777216,-2147483648,") + "1,2,128,256,32768,65536,8388608,16777216,-2147483648";
