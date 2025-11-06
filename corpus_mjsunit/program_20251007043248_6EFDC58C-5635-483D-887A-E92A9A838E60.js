var BUGNUMBER = 747197;
var summary = "TimeClip behavior for very large numbers";
print((BUGNUMBER + ": ") + summary);
function addToLimit(a10) {
    return 8640000000000000 + a10;
}
8640000000000000 === addToLimit(0);
8640000000000000 === addToLimit(0.5);
8640000000000000 === addToLimit(0.5000000000000001);
var times = [Number.MAX_VALUE,-Number.MAX_VALUE,Infinity,-Infinity,addToLimit(0.5000000000000001),-addToLimit(0.5000000000000001)];
for (let i43 = 0, i44 = times.length; i43 < i44; i43++) {
    const v52 = new Date();
    var d = v52;
    d.setTime(times[i43]);
    ("times[" + i43) + "]";
    d.getTime();
    d.valueOf();
}
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
