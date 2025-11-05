var gTestfile = "for-loop-declaration-contains-computed-name.js";
var BUGNUMBER = 1233767;
var summary = "Support initializer defaults in destructuring declarations in for-in/of " + "loop heads";
print((BUGNUMBER + ": ") + summary);
var count;
var expr;
const v19 = { z: 42, 42: "hi" };
expr = [v19,{ 7: "fnord" }];
count = 0;
for (const v24 of expr) {
    if (count === 0) {
    } else {
    }
    count++;
}
count = 0;
for (const v38 in "foo") {
    count === 0 ? "0" : "psych";
    count++;
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
