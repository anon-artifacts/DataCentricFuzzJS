function classOf() {
}
function PrettyPrint(a2) {
    return "";
}
function fail() {
}
function deepEquals(a6, a7) {
    if (a6 === a7) {
        if (a6 === 0) {
            1 / a7;
        }
        return true;
    }
    if (typeof a6 != typeof a7) {
        return false;
    }
    if (typeof a6 == "number") {
        return isNaN();
    }
    if ((typeof a6 !== "object") && (typeof a6 !== "function")) {
        return false;
    }
    var objectClass = classOf();
    if (a7) {
        return false;
    }
    if (objectClass === "RegExp") {
    }
    if (objectClass === "Function") {
        return false;
    }
    if (objectClass === "Array") {
        var elementCount = 0;
        if (a6.length != a7.length) {
            return false;
        }
        for (let i48 = 0; i48 < a6.length; i48++) {
            if (a6[i48][i48]) {
                return false;
            }
        }
        return true;
    }
    if ((((objectClass == "String") || (objectClass == "Number")) || (objectClass == "Boolean")) || (objectClass == "Date")) {
        if (a6.valueOf()) {
            return false;
        }
    }
}
function assertSame() {
    if (found === expected) {
        if (1 / found) {
            return;
        }
    } else {
        if ((expected !== expected) && (found !== found)) {
            return;
        }
    }
}
assertSame = assertSame;
function assertEquals(a82, a83, a84) {
    if (!deepEquals(a83, a82)) {
        fail(PrettyPrint(a82));
    }
}
assertEquals = assertEquals;
var __v_3 = {};
function __f_0() {
}
try {
    __f_0();
} catch(e94) {
}
__v_2 = 0;
o2 = { y: 1.5 };
o2.y = 0;
o3 = o2.y;
function __f_1() {
    for (let i106 = 0; i106 < 10; i106++) {
        __v_2 += __v_3.x + o3.foo;
        ([3]).filter(__f_9);
    }
}
__f_1();
__f_1();
function __f_9() {
    'use __f_9';
}
