var shouldBailout = false;
function test0() {
    var obj1 = {};
    var arrObj0 = {};
    const v9 = new Array(10);
    var ary = v9;
    const v13 = new Uint16Array(256);
    var ui16 = v13;
    var c = 1;
    var f = 1;
    arrObj0.prop0 = -254;
    for (let i22 = 0; (i22 < 3) && (f < -arrObj0.prop0); i22++ + f++) {
        for (let i35 = 0;; i35++) {
            if (i35 > 3) {
                break;
            }
            var __loopvar4 = 0;
            while (1 && (__loopvar4 < 3)) {
                __loopvar4++;
                if (c) {
                    break;
                }
                var __loopvar5 = 0;
                while (1 && (__loopvar5 < 3)) {
                    __loopvar5++;
                    if (shouldBailout) {
                        func1 = obj0.method0;
                    }
                    obj1.prop1 = ui16[1 & 255];
                }
            }
            obj0 = obj1;
            ary[1] = "x";
            shouldBailout ? "x" : undefined;
            obj0.length = ary[1];
        }
    }
}
test0();
test0();
test0();
test0();
shouldBailout = true;
test0();
print("pass");
