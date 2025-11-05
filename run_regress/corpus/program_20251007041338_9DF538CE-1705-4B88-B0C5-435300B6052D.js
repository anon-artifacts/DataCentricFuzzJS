var testCache = {};
function f2(a3) {
    testCache[a3] = "foo";
    return "foo";
}
var doLookup = f2;
var r2 = doLookup(0);
var r1 = doLookup([0]);
r1 === testCache;
r1[0];
r2[0];
