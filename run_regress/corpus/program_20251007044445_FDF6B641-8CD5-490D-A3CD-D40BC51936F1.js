var a = 1;
var b = 2;
function f4() {
    a = 3;
    return "Hello World";
}
var obj = { toString: f4 };
a = b;
const v11 = String.prototype.concat;
const t9 = Object.prototype;
t9.concat = v11;
var f = obj.concat("abc");
print(a);
