function f0() {
}
var BUGNUMBER = 612838;
var summary = "String.prototype.indexOf with empty searchString";
f0((BUGNUMBER + ": ") + summary);
("123").indexOf("", -1);
("123").indexOf("", 0);
("123").indexOf("", 1);
("123").indexOf("", 3);
("123").indexOf("", 4);
("123").indexOf("", 12345);
f0(true, true);
f0("All tests passed!");
