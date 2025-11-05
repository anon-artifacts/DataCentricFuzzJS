function test0() {
    var a = 1073741823 << 1;
    var b = a + 0.1;
    for (let i9 = 0; i9 < 2; ++i9) {
        for (let i16 = 0; i16 < 2; ++i16) {
            -(a &= b) | 0;
        }
    }
}
test0();
test0();
function test1() {
    var a = 1;
    for (let i31 = 0; i31 < 1; ++i31) {
        for (let i38 = 0; i38 < 1; ++i38) {
            if (1) {
                a &= 1;
            }
            a & 255;
        }
    }
}
test1();
test1();
function test2() {
    return (2147483648 + 1) | 0;
}
test2();
test2();
function test3() {
    var a = 0;
    var b = 0;
    var c = 0;
    for (let i66 = 0; i66 < 2; ++i66) {
        if (a) {
            b = ~a;
            test0a();
        }
        c &= b;
    }
    function test3a() {
    }
}
test3();
test3();
function test4() {
    var obj0 = { prop1: 0 };
    var b = 1;
    const v86 = new Float64Array(1);
    prop0 = v86[0];
    var x = 0;
    for (let i92 = 0; i92 < 2; ++i92) {
        ++x;
        if (obj0.prop1 === prop0) {
            for (let i103 = 0; i103 < 1; ++i103) {
                if (1.1) {
                    obj0 = {};
                } else {
                    var k = 0;
                    do {
                        if (k > 0) {
                            break;
                        }
                        ++k;
                        ++b;
                    } while (1)
                }
            }
        }
    }
    return x;
    function test4a() {
    }
}
print("test4: " + test4());
print("test4: " + test4());
function test5(a129) {
    var o = {};
    var a = -2147483646;
    for (let i136 = 0; o.p && (i136 < 1); ++i136) {
        if (1 === 1) {
            if (1) {
                a = a129;
            }
            [a];
        }
    }
}
test5(1);
test5({});
