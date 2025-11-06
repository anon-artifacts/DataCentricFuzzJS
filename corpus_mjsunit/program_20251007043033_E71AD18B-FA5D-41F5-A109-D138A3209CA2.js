const v4 = Array.prototype[Symbol.iterator];
const t1 = Object.prototype;
t1[Symbol.iterator] = v4;
var s;
function test() {
    for (const v12 of arguments) {
        s += v12;
    }
}
s = "";
test();
s = "";
test("x", "y");
