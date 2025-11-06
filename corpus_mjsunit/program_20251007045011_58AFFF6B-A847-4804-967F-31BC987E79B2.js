function f0() {
}
var BUGNUMBER = 167658;
var summary = "Do not crash due to js_NewRegExp initialization";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
var UBOUND = 100;
for (let i14 = 0; i14 < UBOUND; i14++) {
    function f20() {
        for (let i22 = 0; i22 < arguments.length; i22++) {
            f0((i22 + ": ") + arguments[i22]);
        }
        return "Bananen";
    }
    ("Apfelkiste, Apfelschale").replace("Apfel", f20);
    f0(i14);
}
f0(expect, actual, summary);
