var BUGNUMBER = 664528;
var summary = "Sorting an array containing only holes and |undefined| should move all " + "|undefined| to the start of the array";
print((BUGNUMBER + ": ") + summary);
var a = [,,,,];
a.sort();
a.hasOwnProperty(0);
a[0];
a.hasOwnProperty(1);
a.hasOwnProperty(2);
a.hasOwnProperty(3);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
