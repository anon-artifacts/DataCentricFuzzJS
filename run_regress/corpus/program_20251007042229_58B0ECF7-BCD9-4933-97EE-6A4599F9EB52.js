function f0() {
}
var BUGNUMBER = 518663;
var summary = "Object.getOwnPropertyNames: regular expression objects";
f0((BUGNUMBER + ": ") + summary);
var actual = Object.getOwnPropertyNames(/a/);
var expected = ["lastIndex"];
for (let i17 = 0; i17 < expected.length; i17++) {
    f0(actual.indexOf(expected[i17]) >= 0, true, expected[i17] + " should be a property name on a RegExp");
}
f0(true, true);
f0("All tests passed!");
