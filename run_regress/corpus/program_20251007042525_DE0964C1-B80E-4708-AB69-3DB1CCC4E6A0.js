console.log("This test checks that toString and join share the same HashSet for visited elements.");
var arr = [1,2];
var obj = {};
function f9() {
    return ("*" + arr) + "*";
}
const t6 = obj.__proto__;
t6.toString = f9;
arr[2] = arr;
arr[3] = obj;
arr.join();
