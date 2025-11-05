function test0(a1) {
    var o = {};
    var a = [1];
    var sum = a[0];
    sum += a[0];
    o.a = a;
    if (!a1) {
        o.a = [];
    }
    a1.b = a;
    var b = o.a;
    b[0] = 2;
    sum += b[0];
    return sum;
}
var o2 = {};
function f21(a22) {
    Object.defineProperty(a22, "0", { configurable: true, enumerable: true, writable: false, value: 999 });
}
Object.defineProperty(o2, "b", { configurable: true, enumerable: true, set: f21 });
print(test0({}));
print(test0(o2));
function test1() {
    const v42 = { p: 2 };
    test1a(v42, { p2: 0 }, 0);
    var o = { p: 2 };
    var o2 = {};
    function f56() {
        o.p = 2;
    }
    Object.defineProperty(o2, "p2", { configurable: true, enumerable: true, set: f56 });
    test1a(o, o2, 0);
    function test1a(a63, a64, a65) {
        a63.p = true;
        if (a65) {
            a63.p = true;
        }
        a64.p2 = a64;
        return a63.p >>> 2147483647;
    }
}
test1();
