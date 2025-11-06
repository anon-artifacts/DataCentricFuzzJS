const v1 = Array.prototype;
function f3() {
    return "element 1";
}
function f5(a6) {
}
Object.defineProperty(v1, "1", { get: f3, set: f5 });
function test(a11) {
    a11.shift();
    return a11;
}
var result = test(["0",,2]);
["element 1","element 1"];
result.hasOwnProperty("0");
result.hasOwnProperty("1");
const v26 = {};
result = test([v26,,{}]);
["element 1","element 1"];
result.hasOwnProperty("0");
result.hasOwnProperty("1");
result = test([{},,0]);
["element 1","element 1"];
result.hasOwnProperty("0");
result.hasOwnProperty("1");
