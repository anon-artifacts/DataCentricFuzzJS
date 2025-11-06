function myCeil(a1) {
    if (a1 >= 0) {
        var r = Math.abs(a1 % 1);
        if (r != 0) {
            return (a1 + 1) - r;
        } else {
            return a1;
        }
    } else {
        return a1 + Math.abs(a1 % 1);
    }
}
function ceilRangeTest(a20) {
    if (10 < a20) {
        if (a20 < 100) {
            Math.ceil(a20);
            myCeil(a20);
        }
    }
    if (-100 < a20) {
        if (a20 < -10) {
            Math.ceil(a20);
            myCeil(a20);
        }
    }
    if (-(4294967296 - 1) < a20) {
        if (a20 < 10) {
            Math.ceil(a20);
            myCeil(a20);
        }
    }
    if (-10 < a20) {
        if (a20 < 4294967296) {
            Math.ceil(a20);
            myCeil(a20);
        }
    }
    if (-2147483648 < a20) {
        if (a20 < 10) {
            Math.ceil(a20);
            myCeil(a20);
        }
    }
    if ((-2147483648 - 1) < a20) {
        if (a20 < 10) {
            Math.ceil(a20);
            myCeil(a20);
        }
    }
    if (10 < a20) {
        if (a20 < 2147483648) {
            Math.ceil(a20);
            myCeil(a20);
        }
    }
    if (10 < a20) {
        if (a20 < 2147483649) {
            Math.ceil(a20);
            myCeil(a20);
        }
    }
    if (Math.pow(2, 31) < a20) {
        if (a20 < Math.pow(2, 33)) {
            Math.ceil(a20);
            myCeil(a20);
        }
    }
}
var a = [Math.pow(2, 31),Math.pow(2, 33),-4294967296.4,214748364.2,-50.4,50.4];
for (let i114 = 0; i114 < 10; i114++) {
    for (let i121 = 0; i121 < a.length; i121++) {
        ceilRangeTest(a[i121]);
    }
}
for (let i130 = 0; i130 < 30; i130++) {
    function f136() {
        Math.ceil(1.5);
    }
    f136();
}
for (let i141 = 0; i141 < 30; i141++) {
    function f147() {
        Math.ceil(-1.5);
    }
    f147();
}
for (let i153 = 0; i153 < 30; i153++) {
    function f159() {
        Math.ceil(-127.5);
    }
    f159();
}
