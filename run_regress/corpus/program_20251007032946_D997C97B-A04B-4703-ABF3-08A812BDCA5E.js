function f0() {
}
var BUGNUMBER = 373118;
var summary = "Properly handle explicitly-undefined optional arguments to a bunch of " + "functions";
f0((BUGNUMBER + ": ") + summary);
var a;
a = ("abc").slice(0, undefined);
a = ("abc").substr(0, undefined);
a = ("abc").substring(0, undefined);
a = ([1,2,3]).slice(0, undefined);
a.join();
a = ([1,2,3]).sort(undefined);
a.join();
f0(true, true);
