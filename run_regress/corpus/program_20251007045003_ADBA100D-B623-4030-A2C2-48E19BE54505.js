var BUGNUMBER = 858677;
var summary = "[].reverse should swap elements low to high using accesses to low " + "elements, then accesses to high elements";
print((BUGNUMBER + ": ") + summary);
var observed = [];
function f14() {
    observed.push("index 0 get");
    return "index 0 get";
}
function f18(a19) {
    observed.push("index 0 set: " + a19);
}
const v23 = { configurable: true, get: f14, set: f18 };
function f25() {
    observed.push("index 2 get");
    return "index 2 get";
}
function f29(a30) {
    observed.push("index 2 set: " + a30);
}
const v34 = { configurable: true, get: f25, set: f29 };
function f36() {
    observed.push("index 6 get");
    return "index 6 get";
}
function f40(a41) {
    observed.push("index 6 set: " + a41);
}
const v45 = { configurable: true, get: f36, set: f40 };
function f47() {
    observed.push("index 7 get");
    return "index 7 get";
}
function f51(a52) {
    observed.push("index 7 set: " + a52);
}
const v56 = { configurable: true, get: f47, set: f51 };
var props = { 0: v23, 2: v34, 6: v45, 7: v56 };
const v61 = new Array(8);
var arr = Object.defineProperties(v61, props);
arr.reverse();
var expectedObserved = ["index 0 get","index 7 get","index 0 set: index 7 get","index 7 set: index 0 get","index 6 get","index 2 get"];
print(observed);
observed.length;
expectedObserved.length;
for (let i78 = 0; i78 < expectedObserved.length; i78++) {
    observed[i78];
    expectedObserved[i78];
}
arr[0];
arr[1];
2 in arr;
3 in arr;
4 in arr;
arr[5];
6 in arr;
arr[7];
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
print("Tests complete");
