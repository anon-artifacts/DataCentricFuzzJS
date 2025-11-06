var a = [1,2,3,4,5];
var b = Array.prototype.slice.call(a, 1, 3);
print([2,3] == b);
var a = [1,2];
Array.prototype.push.call(a, 1);
print([1,2,1] == a);
var a = [1,2,3,4,5,6,7];
print(true == Array.isArray(a));
var a = [2,1,3,4];
Array.prototype.unshift.call(a, 0);
print([0,2,1,3,4] == a);
var a = [1,2,3,4];
var c = Array.prototype.shift.call(a);
print([2,3,4] == a);
print(1 == c);
var a = [1,2,3,4];
var c = Array.prototype.entries.call(a);
for (const v94 of c) {
    print(v94);
}
var a = [1,2,3,4];
var c = Array.prototype.keys.call(a);
for (const v106 of c) {
    print(v106);
}
var a = [1,2,3,4];
Array.prototype.reverse.call(a);
print([4,3,2,1] == a);
var a = [1,2,3,4,5,6];
var c = Object.prototype.toString.call(a);
print("[object Array]" == c);
var a = [1,2,3,4,5,6];
var c = Object.prototype.hasOwnProperty.call(a, 1);
print(c == true);
const v162 = [0,0,0,0,0];
const v164 = new Proxy(v162, {});
var p = v164;
p.length = 1;
print("0" == p.toString());
const v176 = [0,0,0,0,0];
const v178 = new Proxy(v176, {});
var q = v178;
q[0] = 1;
print("1,0,0,0,0" == q.toString());
