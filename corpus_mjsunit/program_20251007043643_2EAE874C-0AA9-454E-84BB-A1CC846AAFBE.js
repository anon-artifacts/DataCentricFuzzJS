function test(a1) {
    a1[0] = 1;
}
var obj = {};
function Ctor() {
    this[1] = 2;
}
Object.defineProperty(obj, "0", { value: 0, writable: false });
const v14 = new Ctor();
var o = v14;
o.__proto__ = obj;
test(o);
print(o[0]);
const v20 = new Ctor();
var o = v20;
o.__proto__ = obj;
test(o);
print(o[0]);
