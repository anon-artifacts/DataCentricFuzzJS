var BUGNUMBER = 918987;
var summary = "String.prototype.normalize - normalize rope string";
print((BUGNUMBER + ": ") + summary);
function test() {
    var a = "";
    var b = "";
    for (let i15 = 0; i15 < 100; i15++) {
        a += "Ā";
        b += "Ā";
    }
    a.normalize("NFD");
}
if ("normalize" in String.prototype) {
    test();
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
