var datestring = "Sat, 12 Aug 1995 13:30:00GMT";
print(Date.parse(datestring));
datestring = "Sat, 12 Aug 1995 13:30:00 ( GMT )";
print(Date.parse(datestring));
datestring = "Sat, 12 Aug 1995 13:30:00NX-01";
var actualResult = Date.parse(datestring);
print(actualResult);
datestring = "Sat, 12 Aug 1995 13:00:00 z";
print(Date.parse(datestring));
var toStrings;
var valueOfs;
var toStringCalled;
var valueOfCalled;
const v24 = {};
function f25() {
    toStringCalled = true;
    return {};
}
function f28() {
    toStringCalled = true;
    return undefined;
}
function f31() {
    toStringCalled = true;
    return "1/1/1970 12:00 am";
}
toStrings = [v24,f25,f28,f31];
const v35 = {};
function f36() {
    valueOfCalled = true;
    return {};
}
function f39() {
    valueOfCalled = true;
    return undefined;
}
function f42() {
    valueOfCalled = true;
    return "1/1/1970 1:00 am";
}
function f45() {
    valueOfCalled = true;
    return "84";
}
valueOfs = [v35,f36,f39,f42,f45];
for (const v49 in toStrings) {
    for (const v50 in valueOfs) {
        toStringCalled = false;
        valueOfCalled = false;
        const v53 = toStrings[v49];
        const v54 = valueOfs[v50];
        var obj = { toString: v53, valueOf: v54 };
        try {
            print(Date.parse(obj));
        } catch(e59) {
            print("Got error:");
            print("    name:     " + e59.name);
            print("    message:  " + e59.message);
        }
        print("toString called:  " + (toStringCalled ? "yes" : "no"));
        print("valueOf called:   " + (valueOfCalled ? "yes" : "no"));
    }
}
print(Date.parse("2011-11-08T19:48:43"));
print(Date.parse("2011-11-08T19:48:43."));
print(Date.parse("2011-11-08T19:48:43.1"));
print(Date.parse("2011-11-08T19:48:43.1a"));
print(Date.parse("2011-11-08T19:48:43.0"));
print(Date.parse("2011-11-08T19:48:43.0a"));
print(Date.parse("2011-11-08T19:48:43.12"));
print(Date.parse("2011-11-08T19:48:43.12a"));
print(Date.parse("2011-11-08T19:48:43.01"));
print(Date.parse("2011-11-08T19:48:43.01a"));
print(Date.parse("2011-11-08T19:48:43.00"));
print(Date.parse("2011-11-08T19:48:43.00a"));
print(Date.parse("2011-11-08T19:48:43.123"));
print(Date.parse("2011-11-08T19:48:43.123a"));
print(Date.parse("2011-11-08T19:48:43.001"));
print(Date.parse("2011-11-08T19:48:43.001a"));
print(Date.parse("2011-11-08T19:48:43.000"));
print(Date.parse("2011-11-08T19:48:43.000a"));
print(Date.parse("2011-11-08T19:48:43.1234"));
print(Date.parse("2011-11-08T19:48:43.1234a"));
print(Date.parse("2011-11-08T19:48:43.0011"));
print(Date.parse("2011-11-08T19:48:43.0011a"));
print(Date.parse("2011-11-08T19:48:43.0001"));
print(Date.parse("2011-11-08T19:48:43.0001a"));
print(Date.parse("2011-11-08T19:48:43.0000"));
print(Date.parse("2011-11-08T19:48:43.0000a"));
print(Date.parse("2011-11-08T19:48:43.12345"));
print(Date.parse("2011-11-08T19:48:43.12345a"));
print(Date.parse("2011-11-08T19:48:43.00111"));
print(Date.parse("2011-11-08T19:48:43.00111a"));
print(Date.parse("2011-11-08T19:48:43.00001"));
print(Date.parse("2011-11-08T19:48:43.00001a"));
print(Date.parse("2011-11-08T19:48:43.00000"));
print(Date.parse("2011-11-08T19:48:43.00000a"));
print(Date.parse("2011-11-08T19:48:43.00000000000001"));
print(Date.parse("2011-11-08T19:48:43.00000000000001a"));
print(Date.parse("2011-11-08/19:48:43"));
print(Date.parse("2011-11-08:19:48:43"));
print(Date.parse("2011-11-08 19:48:43"));
print(Date.parse("2011-11-08/: 19:48:43"));
print(Date.parse("2011/11/08/19:48:43"));
print(Date.parse("2011/11/08:19:48:43"));
print(Date.parse("2011/11/08 19:48:43"));
print(Date.parse("2011/11/08/: 19:48:43"));
print(Date.parse("2011-11/08 19:48:43"));
print(Date.parse("2011/11-08 19:48:43"));
print(Date.parse("2011-11-08TT19:48:43"));
