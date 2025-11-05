function foo(a1, a2, a3) {
    var x = a1[a2] | 0;
    var z = a1[a2];
    var b = a1[a2];
    print("" + z);
    print("" + b);
    var m = (z + b) + x;
    return m;
}
const v26 = new ArrayBuffer(1 << 16);
var buffer = v26;
const v29 = new Int8Array(buffer);
var heapArr = v29;
heapArr[10] = 100;
print(foo(heapArr, 10, 1));
print(foo(heapArr, 10, 1));
print(isNaN(foo(heapArr, 1 << 17, 1)));
