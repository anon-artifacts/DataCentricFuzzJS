var toStrings;
var valueOfs;
var toStringCalled;
var valueOfCalled;
const v8 = {};
function f9() {
    toStringCalled = true;
    return {};
}
function f12() {
    toStringCalled = true;
    return undefined;
}
function f15() {
    toStringCalled = true;
    return "hi";
}
toStrings = [v8,f9,f12,f15];
const v19 = {};
function f20() {
    valueOfCalled = true;
    return {};
}
function f23() {
    valueOfCalled = true;
    return undefined;
}
function f26() {
    valueOfCalled = true;
    return "hi";
}
function f29() {
    valueOfCalled = true;
    return "1/1/1970 1:00 am";
}
function f32() {
    valueOfCalled = true;
    return "84";
}
function f35() {
    valueOfCalled = true;
    return 37;
}
valueOfs = [v19,f20,f23,f26,f29,f32,f35];
for (const v39 in toStrings) {
    for (const v40 in valueOfs) {
        toStringCalled = false;
        valueOfCalled = false;
        const v43 = toStrings[v39];
        const v44 = valueOfs[v40];
        var obj = { toString: v43, valueOf: v44 };
        print("=== Implicit toString ===");
        try {
            print("" + obj);
        } catch(e53) {
            print("Got error:");
            print("    name:     " + e53.name);
            print("    message:  " + e53.message);
        }
        print("toString called:  " + (toStringCalled ? "yes" : "no"));
        print("valueOf called:   " + (valueOfCalled ? "yes" : "no"));
        print("=== Implicit valueOf ===");
        try {
            print(1 * obj);
        } catch(e81) {
            print("Got error:");
            print("    name:     " + e81.name);
            print("    message:  " + e81.message);
        }
        print("toString called:  " + (toStringCalled ? "yes" : "no"));
        print("valueOf called:   " + (valueOfCalled ? "yes" : "no"));
    }
}
