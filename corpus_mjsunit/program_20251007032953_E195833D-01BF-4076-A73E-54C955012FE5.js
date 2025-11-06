console.log("This test checks that using the typeof operator on a JavaScript value and comparing it to a constant string works as expected.");
function isUndefined(a4) {
    return typeof a4 == "undefined";
}
isUndefined(undefined);
isUndefined(1);
function isUndefinedStrict(a13) {
    return typeof a13 === "undefined";
}
isUndefinedStrict(undefined);
isUndefinedStrict(1);
function isBoolean(a22) {
    return typeof a22 == "boolean";
}
isBoolean(true);
isBoolean(false);
isBoolean(1);
function isBooleanStrict(a33) {
    return typeof a33 === "boolean";
}
isBooleanStrict(true);
isBooleanStrict(false);
isBooleanStrict(1);
function isNumber(a44) {
    return typeof a44 == "number";
}
isNumber(1);
isNumber(undefined);
function isNumberStrict(a53) {
    return typeof a53 === "number";
}
isNumberStrict(1);
isNumberStrict(undefined);
function isString(a62) {
    return typeof a62 == "string";
}
isString("string");
isString(1);
function isStringStrict(a71) {
    return typeof a71 === "string";
}
isStringStrict("string");
isStringStrict(1);
function isObject(a80) {
    return typeof a80 == "object";
}
isObject({});
isObject(1);
function isObjectStrict(a89) {
    return typeof a89 === "object";
}
isObjectStrict({});
isObjectStrict(1);
function isFunction(a98) {
    return typeof a98 == "function";
}
function f102() {
}
isFunction(f102);
isFunction(1);
function isFunctionStrict(a107) {
    return typeof a107 === "function";
}
function f111() {
}
isFunctionStrict(f111);
isFunctionStrict(1);
function complexIsUndefinedTest() {
    function replace_formats() {
        var o = ["text",0];
        if (typeof o == "string") {
        } else {
            if (typeof o == "undefined") {
            } else {
                if ((typeof o == "object") && (typeof o[0] == "string")) {
                    return "PASS";
                }
            }
        }
        return "FAIL";
    }
    return ("%d").replace(/%d/, replace_formats);
}
complexIsUndefinedTest();
function complexIsBooleanTest() {
    function replace_formats() {
        var o = ["text",0];
        if (typeof o == "string") {
        } else {
            if (typeof o == "boolean") {
            } else {
                if ((typeof o == "object") && (typeof o[0] == "string")) {
                    return "PASS";
                }
            }
        }
        return "FAIL";
    }
    return ("%d").replace(/%d/, replace_formats);
}
complexIsBooleanTest();
function complexIsNumberTest() {
    function replace_formats() {
        var o = ["text",0];
        if (typeof o == "string") {
        } else {
            if (typeof o == "number") {
            } else {
                if ((typeof o == "object") && (typeof o[0] == "string")) {
                    return "PASS";
                }
            }
        }
        return "FAIL";
    }
    return ("%d").replace(/%d/, replace_formats);
}
complexIsNumberTest();
function complexIsStringTest() {
    function replace_formats() {
        var o = ["text",0];
        if (typeof o == "string") {
        } else {
            if (typeof o == "string") {
            } else {
                if ((typeof o == "object") && (typeof o[0] == "string")) {
                    return "PASS";
                }
            }
        }
        return "FAIL";
    }
    return ("%d").replace(/%d/, replace_formats);
}
complexIsStringTest();
function complexIsObjectTest() {
    var a = ["text",0];
    function replace_formats() {
        function f225() {
        }
        var o = f225;
        if (typeof o == "string") {
        } else {
            if (typeof o == "object") {
            } else {
                if ((typeof o == "function") && (typeof a[0] == "string")) {
                    return "PASS";
                }
            }
        }
        return "FAIL";
    }
    return ("%d").replace(/%d/, replace_formats);
}
complexIsObjectTest();
function complexIsFunctionTest() {
    function replace_formats() {
        var o = ["text",0];
        if (typeof o == "string") {
        } else {
            if (typeof o == "function") {
            } else {
                if ((typeof o == "object") && (typeof o[0] == "string")) {
                    return "PASS";
                }
            }
        }
        return "FAIL";
    }
    return ("%d").replace(/%d/, replace_formats);
}
complexIsFunctionTest();
function complexIsUndefinedStrictTest() {
    function replace_formats() {
        var o = ["text",0];
        if (typeof o == "string") {
        } else {
            if (typeof o === "undefined") {
            } else {
                if ((typeof o == "object") && (typeof o[0] == "string")) {
                    return "PASS";
                }
            }
        }
        return "FAIL";
    }
    return ("%d").replace(/%d/, replace_formats);
}
complexIsUndefinedStrictTest();
function complexIsBooleanStrictTest() {
    function replace_formats() {
        var o = ["text",0];
        if (typeof o == "string") {
        } else {
            if (typeof o === "boolean") {
            } else {
                if ((typeof o == "object") && (typeof o[0] == "string")) {
                    return "PASS";
                }
            }
        }
        return "FAIL";
    }
    return ("%d").replace(/%d/, replace_formats);
}
complexIsBooleanStrictTest();
function complexIsNumberStrictTest() {
    function replace_formats() {
        var o = ["text",0];
        if (typeof o == "string") {
        } else {
            if (typeof o === "number") {
            } else {
                if ((typeof o == "object") && (typeof o[0] == "string")) {
                    return "PASS";
                }
            }
        }
        return "FAIL";
    }
    return ("%d").replace(/%d/, replace_formats);
}
complexIsNumberStrictTest();
function complexIsStringStrictTest() {
    function replace_formats() {
        var o = ["text",0];
        if (typeof o == "string") {
        } else {
            if (typeof o === "string") {
            } else {
                if ((typeof o == "object") && (typeof o[0] == "string")) {
                    return "PASS";
                }
            }
        }
        return "FAIL";
    }
    return ("%d").replace(/%d/, replace_formats);
}
complexIsStringStrictTest();
function complexIsObjectStrictTest() {
    var a = ["text",0];
    function replace_formats() {
        function f383() {
        }
        var o = f383;
        if (typeof o == "string") {
        } else {
            if (typeof o === "object") {
            } else {
                if ((typeof o == "function") && (typeof a[0] == "string")) {
                    return "PASS";
                }
            }
        }
        return "FAIL";
    }
    return ("%d").replace(/%d/, replace_formats);
}
complexIsObjectStrictTest();
function complexIsFunctionStrictTest() {
    function replace_formats() {
        var o = ["text",0];
        if (typeof o == "string") {
        } else {
            if (typeof o === "function") {
            } else {
                if ((typeof o == "object") && (typeof o[0] == "string")) {
                    return "PASS";
                }
            }
        }
        return "FAIL";
    }
    return ("%d").replace(/%d/, replace_formats);
}
complexIsFunctionStrictTest();
