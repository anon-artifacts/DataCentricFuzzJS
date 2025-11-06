function test1() {
    var obj4 = 1;
    var __loopvar2 = 0;
    while (1 && (__loopvar2 < 3)) {
        __loopvar2++;
        var obj6 = 1;
        for (let i13 = 0;
            (obj4.length < 1.1) && (i13 < 3);
            (() => {
                let v21 = obj4.length;
                v21++ + i13++;
            })()) {
        }
        var __loopvar3 = 0;
        do {
            __loopvar3++;
            p0 = ui8_1[1 % 256];
        } while ((() => {
                let v35 = obj6.length;
                return v35++ && (__loopvar3 < 3);
            })())
    }
}
function test2() {
    var obj4 = 1;
    var __loopvar2 = 0;
    while (1 && (__loopvar2 < 3)) {
        __loopvar2++;
        var obj6 = {};
        for (let i53 = 0;
            (obj4.length < 1.1) && (i53 < 3);
            (() => {
                let v61 = obj4.length;
                v61++ + i53++;
            })()) {
        }
        var __loopvar3 = 0;
        do {
            __loopvar3++;
            p0 = ui8_2[1 % 256];
            obj6.spam;
        } while ((() => {
                let v76 = obj6.length;
                return v76++ && (__loopvar3 < 3);
            })())
    }
}
try {
    test1();
} catch(e82) {
    print(e82.message);
}
try {
    test2();
} catch(e87) {
    print(e87.message);
}
function f91() {
    const v93 = new Object();
    var obj1 = v93;
    const v95 = new Object();
    var obj4 = v95;
    function f97() {
        var __loopvar2 = 0;
        do {
            __loopvar2++;
            const v101 = obj4.prop0;
            const v103 = -2147483648;
            obj4.prop1 -= v103;
            const v104 = v101 * v103;
            let v105 = obj1.prop0;
            e = v104 - v105++;
        } while (1.1 && (__loopvar2 < 3))
    }
    f97();
}
f91();
