function test(a1) {
    a1[0] = 1;
}
var arr = [];
function Ctor() {
    this[1] = 2;
}
Ctor.prototype = arr;
Object.defineProperty(arr, "0", { value: 0, writable: false });
const v14 = new Ctor();
var o = v14;
test(o);
print(o[0]);
const v20 = new Ctor();
var o = v20;
test(o);
print(o[0]);
