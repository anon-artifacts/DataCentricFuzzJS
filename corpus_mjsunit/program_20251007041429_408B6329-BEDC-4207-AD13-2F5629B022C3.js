function f0() {
}
var BUGNUMBER = 415451;
var summary = "indexOf/lastIndexOf behavior";
var expected = "3,0,3,3,3,-1,-1";
results = [];
var a = [1,2,3,1];
for (let i17 = -1; i17 < (a.length + 2); i17++) {
    results.push(a.indexOf(1, i17));
}
var actual = String(results);
f0(expected, actual, "indexOf");
results = [];
var expected = "3,0,0,0,3,3,3";
for (let i40 = -1; i40 < (a.length + 2); i40++) {
    results.push(a.lastIndexOf(1, i40));
}
var actual = String(results);
f0(expected, actual, "lastIndexOf");
