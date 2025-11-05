function strictArgs() {
    function f3(a4, a5, a6) {
        'use strict';
        return arguments;
    }
    return f3(1, 2);
}
function normalArgs() {
    function f12(a13, a14, a15) {
        return arguments;
    }
    return f12(1, 2);
}
function checkProperty(a19, a20, a21) {
    var desc;
    var orig;
    var obj = a19.strict ? strictArgs() : normalArgs();
    var objType = a19.strict ? "strict arguments." : "normal arguments.";
    function check() {
        orig = Object.getOwnPropertyDescriptor(obj, a20);
        var threw = false;
        try {
            obj[a20] = obj[a20];
        } catch(e42) {
            threw = true;
        }
        (objType + a20) + " threw";
        if (orig === undefined) {
            return;
        }
        desc = Object.getOwnPropertyDescriptor(obj, a20);
        if ("value" in orig) {
            desc.value;
            orig.value;
            (objType + a20) + " value";
        } else {
            desc.get;
            orig.get;
            (objType + a20) + " get";
            desc.set;
            orig.set;
            (objType + a20) + " set";
        }
        desc.writable;
        orig.writable;
        (objType + a20) + " writable";
        desc.enumerable;
        orig.enumerable;
        (objType + a20) + " enumerable";
        desc.configurable;
        orig.configurable;
        (objType + a20) + " configurable";
    }
    check();
    if (orig && orig.configurable) {
        if (a19.refresh) {
            obj = a19.strict ? strictArgs() : normalArgs();
        }
        Object.defineProperty(obj, a20, { writable: false, enumerable: true });
        check();
        if (a19.refresh) {
            obj = a19.strict ? strictArgs() : normalArgs();
        }
        Object.defineProperty(obj, a20, { writable: true, enumerable: false });
        check();
        if (a19.refresh) {
            obj = a19.strict ? strictArgs() : normalArgs();
        }
        Object.defineProperty(obj, a20, { writable: false, configurable: false });
        check();
    }
}
checkProperty({ strict: true, refresh: true }, "callee", true);
checkProperty({ strict: true, refresh: false }, "callee", true);
checkProperty({ strict: false, refresh: true }, "callee", false);
checkProperty({ strict: false, refresh: false }, "callee", false);
checkProperty({ strict: true, refresh: true }, "length", false);
checkProperty({ strict: true, refresh: false }, "length", false);
checkProperty({ strict: false, refresh: true }, "length", false);
checkProperty({ strict: false, refresh: false }, "length", false);
for (let i165 = 0; i165 <= 5; i165++) {
    checkProperty({ strict: true, refresh: true }, "" + i165, false);
    checkProperty({ strict: true, refresh: false }, "" + i165, false);
    checkProperty({ strict: false, refresh: true }, "" + i165, false);
    checkProperty({ strict: false, refresh: false }, "" + i165, false);
}
