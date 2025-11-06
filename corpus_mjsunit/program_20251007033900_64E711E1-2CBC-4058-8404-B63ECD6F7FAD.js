var BUGNUMBER = 647385;
var summary = "Number.prototype.toString should use ToInteger on the radix and should " + "throw a RangeError if the radix is bad";
print((BUGNUMBER + ": ") + summary);
function test(a12) {
    try {
        (5).toString(a12);
        throw "should have thrown";
    } catch(e16) {
        e16 instanceof RangeError;
        "expected a RangeError, got " + e16;
    }
}
test(Math.pow(2, 32) + 10);
test(55);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
