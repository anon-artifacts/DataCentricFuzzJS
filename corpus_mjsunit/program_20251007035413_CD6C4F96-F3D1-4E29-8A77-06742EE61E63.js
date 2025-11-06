var BUGNUMBER = 1145326;
var summary = "String.prototype.normalize error when normalization form parameter is not an atom";
print((BUGNUMBER + ": ") + summary);
function test() {
    ("abc").normalize(("NFKC").split("").join(""));
    ("abc").normalize(("NFKCabc").replace("abc", ""));
    ("abc").normalize((("N" + "F") + "K") + "C");
}
if ("normalize" in String.prototype) {
    test();
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
