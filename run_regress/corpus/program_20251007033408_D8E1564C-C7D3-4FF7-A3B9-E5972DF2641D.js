var A = 1;
var B = 2;
var C = 3;
function test() {
    var d = 0;
    d += A;
    d += B;
    d += C;
    return d;
}
print(test());
print(test());
C = 1;
print(test());
function test1(a18) {
    var d = 0;
    d += a18.P;
    d += a18.Q;
    d += a18.R;
    return d;
}
var obj = { P: 5, Q: 6, R: 7 };
print(test1(obj));
print(test1(obj));
obj.Q = 10;
print(test1(obj));
