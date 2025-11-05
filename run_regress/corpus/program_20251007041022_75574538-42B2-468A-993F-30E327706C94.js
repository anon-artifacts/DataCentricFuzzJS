function deepEquals(a1, a2) {
    if (a1 === a2) {
        return true;
    }
    if (typeof a1 != typeof a2) {
        return false;
    }
    if (typeof a1 == "number") {
    }
    if ((typeof a1 !== "object") && (typeof a1 !== "function")) {
        return false;
    }
    var objectClass = classOf();
    if (a2) {
        return false;
    }
    if (objectClass === "RegExp") {
    }
    if (objectClass === "Function") {
        return false;
    }
    if (objectClass === "Array") {
        var elementCount = 0;
        if (a1.length != a2.length) {
            return false;
        }
        for (let i38 = 0; i38 < a1.length; i38++) {
            if (a1[i38][i38]) {
                return false;
            }
        }
        return true;
    }
    if ((((objectClass == "String") || (objectClass == "Number")) || (objectClass == "Boolean")) || (objectClass == "Date")) {
        if (a1.valueOf()) {
            return false;
        }
    }
}
function equals(a62, a63, a64) {
    if (!deepEquals(a63, a62)) {
    }
}
function instof(a68, a69) {
    if (!(a68 instanceof a69)) {
        var actualTypeName = null;
        var actualConstructor = Object.getPrototypeOf().constructor;
        if (typeof actualConstructor == "function") {
        }
    }
}
var __v_0 = 1;
var __v_6 = {};
var __v_9 = {};
function __f_4() {
    function f88() {
    }
    return f88;
}
const v91 = new Uint8ClampedArray(10);
__v_6 = v91;
function __f_6() {
    __v_6[0] = 0.499;
    instof(__f_4(), Function);
    equals();
    __v_6[0] = 0.5;
    equals();
    __v_0[0] = 0.501;
    equals(__v_6[4294967295]);
    __v_6[0] = 1.499;
    equals();
    __v_6[0] = 1.5;
    equals();
    __v_6[0] = 1.501;
    equals();
    __v_6[0] = 2.5;
    equals(__v_6[-1073741824]);
    __v_6[0] = 3.5;
    equals();
    __v_6[0] = 252.5;
    equals();
    __v_6[0] = 253.5;
    equals();
    __v_6[0] = 254.5;
    equals();
    __v_6[0] = 256.5;
    equals();
    __v_6[0] = -0.5;
    equals(__v_6[8]);
    __v_6[0] = -1.5;
    equals();
    __v_6[0] = 1000000000000;
    equals();
    __v_9[0] = -1000000000000;
    equals(__v_6[0]);
}
__f_6();
__f_6();
