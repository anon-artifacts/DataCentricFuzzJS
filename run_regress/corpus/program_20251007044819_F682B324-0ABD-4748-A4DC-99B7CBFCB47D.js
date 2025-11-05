function returnTrue(a1, a2, a3) {
    print((((("value:" + a1) + " index:") + a2) + " Object:") + a3);
    return true;
}
function returnFalse(a16, a17, a18) {
    print((((("value:" + a16) + " index:") + a17) + " Object:") + a18);
    return false;
}
function returnRandom(a31, a32, a33) {
    print((((("value:" + a31) + " index:") + a32) + " Object:") + a33);
    return a32 != 1;
}
const t12 = Array.prototype;
t12[6] = 20;
var x = [1,2,3,4,5];
var y = x.forEach(returnTrue, this);
print(y);
x = [10,20,30,40,50];
y = x.forEach(returnFalse, this);
print(y);
x = [10,20,30,40,50];
y = x.forEach(returnRandom, this);
print(y);
x = { 0: "abc", 1: "def", 2: "xyz" };
x.length = 3;
y = Array.prototype.forEach.call(x, returnTrue, this);
print(y);
y = Array.prototype.forEach.call(x, returnFalse, this);
print(y);
y = Array.prototype.forEach.call(x, returnRandom, this);
print(y);
x = [10,20,30,40,50];
x[8] = 10;
y = x.forEach(returnTrue, this);
print(y);
