var BUGNUMBER = 623301;
var summary = "Properly root argument names during Function()";
print((BUGNUMBER + ": ") + summary);
if (typeof gczeal === "function") {
    gczeal(2);
}
function crashMe(a16) {
    var nasty = [];
    while (a16--) {
        nasty.push("a" + a16);
    }
    return Function.apply(null, nasty);
}
var count = 64;
crashMe(count + 1).length;
if (typeof gczeal === "function") {
    gczeal(0);
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
