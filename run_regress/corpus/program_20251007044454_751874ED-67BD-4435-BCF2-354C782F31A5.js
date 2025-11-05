function test0() {
    function leaf() {
        return 100;
    }
    var obj1 = {};
    var arrObj0 = {};
    function f7(a8, a9, a10) {
        var __loopvar16 = 0;
        while (1 && (__loopvar16 < 3)) {
            __loopvar16++;
            let v18 = obj1.prop0;
            const v19 = --v18;
            a9[((leaf.call(a10) % (0 ? 2147483647 : -7335274600096260096)) >= 0 ? leaf.call(a10) % (0 ? 2147483647 : -7335274600096260096) : 0) & 15] = v19;
            obj1.length *= a9[16];
        }
    }
    var func0 = f7;
    const v44 = new Uint16Array(256);
    var ui16 = v44;
    var intary = [4,66,767,-100,0,1213,34,42,55,-123,567,77,-234,88,11,-66];
    var __loopvar1 = 0;
    for (const v70 in ui16) {
        if (v70.indexOf("method") != -1) {
            continue;
        }
        if (__loopvar1++ > 3) {
            break;
        }
        obj1.prop0 = 1;
        var __loopvar3 = 0;
        do {
            __loopvar3++;
            obj1.prop0 = func0.call(obj1, 1, intary, 1);
        } while (1 && (__loopvar3 < 3))
        let v90 = arrObj0.length;
        intary[18] = v90--;
    }
}
test0();
test0();
test0();
runningJITtedCode = true;
test0();
test0();
test0();
print("pass");
