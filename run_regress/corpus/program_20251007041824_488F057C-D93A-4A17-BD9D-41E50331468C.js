const v1 = Array.prototype;
function f3() {
}
Object.defineProperty(v1, 2, { get: f3 });
var arr = {};
arr[0] = {};
arr.length = 10;
var protoObj = {};
Object.defineProperty(protoObj, 10, {});
arr.__proto__ = protoObj;
Array.prototype.sort.call(arr);
print("Pass");
