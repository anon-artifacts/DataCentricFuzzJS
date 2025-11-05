var BUGNUMBER = 771946;
var summary = "Fractional days, months, years shouldn't trigger asserts";
print((BUGNUMBER + ": ") + summary);
const v12 = new Date(0);
v12.setFullYear(1.5);
const v16 = new Date(0);
v16.setUTCDate(1.5);
const v20 = new Date(0);
v20.setMonth(1.5);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
