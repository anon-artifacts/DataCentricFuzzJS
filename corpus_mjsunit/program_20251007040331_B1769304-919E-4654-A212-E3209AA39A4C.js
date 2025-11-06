var BUGNUMBER = 520095;
var summary = "decodeURI{,Component} should return the specified character for " + "'%EF%BF%BE' and '%EF%BF%BF', not return U+FFFD";
print((BUGNUMBER + ": ") + summary);
decodeURI("%EF%BF%BE");
decodeURI("%EF%BF%BF");
decodeURIComponent("%EF%BF%BE");
decodeURIComponent("%EF%BF%BF");
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("All tests passed!");
