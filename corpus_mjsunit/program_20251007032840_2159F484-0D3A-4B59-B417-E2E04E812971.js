var BUGNUMBER = 657298;
var summary = "Various quirks of setting array length properties to objects";
print((BUGNUMBER + ": ") + summary);
function invokeConversionTwice1() {
    var count = 0;
    function f12() {
        count++;
        return 1;
    }
    const v15 = { valueOf: f12 };
    const t10 = [];
    t10.length = v15;
}
invokeConversionTwice1();
function invokeConversionTwice2() {
    var count = 0;
    function f22() {
        count++;
        return 1;
    }
    const v26 = { toString: f22, valueOf: null };
    const t21 = [];
    t21.length = v26;
}
invokeConversionTwice2();
function dontOverwriteError1() {
    try {
        const v31 = {};
        const v32 = {};
        const v33 = { valueOf: v31, toString: v32 };
        const t30 = [];
        t30.length = v33;
        const v37 = new Error("didn't throw a TypeError");
        throw v37;
    } catch(e38) {
        e38 instanceof TypeError;
        "expected a TypeError running out of conversion options, got " + e38;
    }
}
dontOverwriteError1();
function dontOverwriteError2() {
    try {
        function f46() {
            throw "error";
        }
        const v48 = { valueOf: f46 };
        const t46 = [];
        t46.length = v48;
        const v52 = new Error("didn't throw a TypeError");
        throw v52;
    } catch(e53) {
        "expected 'error' from failed conversion, got " + e53;
    }
}
dontOverwriteError2();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
