function test0() {
    'use strict';
    try {
        var obj0 = {};
        const v5 = new Array(10);
        var ary = v5;
        obj0.length = 1;
        var __loopvar3 = 0;
        while (1 && (__loopvar3 < 3)) {
            __loopvar3++;
            ary.length = -804513990;
        }
        function f20(a21, a22, a23, a24, a25) {
            e *= obj0.prop0;
            var temp = (((a21 + a22) + a23) + a24) + a25;
            return temp + ary[1];
        }
        obj0.length = f20(1, 1, 1);
    } catch(e36) {
        print(e36);
    }
}
test0();
test0();
var shouldBailout = false;
function test1() {
    'use strict';
    try {
        var obj0 = {};
        var obj1 = {};
        function f48(a49) {
            const v52 = a--;
            switch (d) {
                case 1:
                    break;
                case v52:
                    break;
                default:
                    obj1.prop0 -= 1;
                    break;
                case 1:
                    break;
                case 1:
                    break;
            }
            Object.defineProperty(obj0, "prop0", { writable: false, enumerable: true, configurable: true });
            shouldBailout ? 1 : 1;
        }
        var func2 = f48;
        obj1.method0 = func2;
        var a = 1;
        var d = -27;
        obj1.method0();
        var __loopvar0 = 0;
        do {
            __loopvar0++;
        } while ((() => {
                const v77 = obj0.length;
                function f78() {
                    print("obj0.prop0 valueOf");
                    return 3;
                }
                obj0.prop0 = { valueOf: f78 };
                return (v77 & (shouldBailout ? 1 : 1)) && (__loopvar0 < 3);
            })())
    } catch(e91) {
        print(e91);
    }
    print("obj1.prop0 = " + (obj1.prop0 | 0));
}
test1();
test1();
shouldBailout = true;
test1();
