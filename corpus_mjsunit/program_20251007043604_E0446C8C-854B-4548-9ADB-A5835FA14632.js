var BUGNUMBER = 886949;
var summary = "ES6 (draft May 2013) 15.7.3.9 Number.parseInt(string, radix)." + " Verify that Number.parseInt defaults to decimal.";
print((BUGNUMBER + ": ") + summary);
Number.parseInt("08");
Number.parseInt("09");
Number.parseInt("014");
function strictParseInt(a22) {
    'use strict';
    return Number.parseInt(a22);
}
strictParseInt("08");
strictParseInt("09");
strictParseInt("014");
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
