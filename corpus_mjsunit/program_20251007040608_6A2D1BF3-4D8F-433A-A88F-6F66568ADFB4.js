function returnSum(a1, a2, a3, a4) {
    print((((((("accumulator:" + a1) + " value:") + a2) + " index:") + a3) + " Object:") + a4);
    return a1 + a2;
}
function returnSquare(a20, a21, a22, a23) {
    print((((((("accumulator:" + a20) + " value:") + a21) + " index:") + a22) + " Object:") + a23);
    return a20 + (a21 * a21);
}
function returnStringSquare(a40, a41, a42, a43) {
    print((((((("accumulator:" + a40) + " value:") + a41) + " index:") + a42) + " Object:") + a43);
    return (a40 + a41) + a41;
}
function returnRandom(a60, a61, a62, a63) {
    print((((((("accumulator:" + a60) + " value:") + a61) + " index:") + a62) + " Object:") + a63);
    return (a60 + a61) + a62;
}
const t16 = Array.prototype;
t16[6] = 20;
var x = [1,2,3,4,5];
var y = x.reduceRight(returnSum, 0);
print(y);
x = [10,20,30,40,50];
y = x.reduceRight(returnSquare, 0);
print(y);
x = [10,20,30,40,50];
y = x.reduceRight(returnRandom);
print(y);
x = { 0: "abc", 1: "def", 2: "xyz" };
x.length = 3;
y = Array.prototype.reduceRight.call(x, returnSum, "");
print(y);
y = Array.prototype.reduceRight.call(x, returnStringSquare, "");
print(y);
y = Array.prototype.reduceRight.call(x, returnRandom, "");
print(y);
x = [10,20,30,40,50];
x[8] = 10;
y = x.reduceRight(returnSum, 30);
print(y);
