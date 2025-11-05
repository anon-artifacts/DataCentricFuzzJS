var BUGNUMBER = 548671;
var summary = "Don't use a shared-permanent inherited property to implement " + "[].length or (function(){}).length";
print((BUGNUMBER + ": ") + summary);
var a = [];
a.p = 1;
var x = Object.create(a);
x.length;
x.p;
a.length;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
