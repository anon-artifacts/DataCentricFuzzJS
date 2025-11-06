function f0() {
}
var BUGNUMBER = 69607;
var summary = "Testing that we don't crash on trivial JavaScript";
var var1;
var var2;
var var3;
f0(BUGNUMBER);
f0(summary);
if (false) {
    var1 = 0;
} else {
    var2 = 0;
}
if (false) {
    var3 = 0;
}
f0("No Crash", "No Crash", "");
