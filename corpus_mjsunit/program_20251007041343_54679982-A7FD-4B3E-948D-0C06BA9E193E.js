function f0() {
}
const t2 = Object.prototype;
t2.sort = f0;
arr = [];
var passed = 1;
for (const v8 in arr) {
    passed = 0;
}
if (passed) {
    console.log("PASS");
}
