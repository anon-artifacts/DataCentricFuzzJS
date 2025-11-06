const v4 = Array.prototype[Symbol.iterator];
const t1 = Object.prototype;
t1[Symbol.iterator] = v4;
var s;
function f() {
    for (const v12 of arguments) {
        s += v12;
        let v14 = arguments.length;
        v14--;
    }
}
s = "";
f("a", "b", "c", "d", "e");
