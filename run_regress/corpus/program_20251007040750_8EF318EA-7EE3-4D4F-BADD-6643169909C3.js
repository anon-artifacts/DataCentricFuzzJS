var push = Array.prototype.push;
function f(a5) {
    push.call(a5, 99);
}
function basic(a9) {
    const v10 = [];
    a9.arrs = v10;
    var arrs = v10;
    for (let i13 = 0; i13 < 100; i13++) {
        arrs.push([]);
    }
    var a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    Object.defineProperty(a, "length", { writable: false, value: 6 });
    arrs.push(a);
    for (let i48 = 0, i49 = arrs.length; i48 < i49; i48++) {
        var arr = arrs[i48];
        f(arr);
    }
}
var obj = {};
var arrs;
var a;
try {
    basic(obj);
    const v68 = new Error("didn't throw!");
    throw v68;
} catch(e69) {
    e69 instanceof TypeError;
    "expected TypeError, got " + e69;
    (arrs = obj.arrs).length;
    for (let i79 = 0; i79 < 100; i79++) {
        arrs[i79].length;
        ("unexpected length for arrs[" + i79) + "]";
        arrs[i79][0];
        ("bad element for arrs[" + i79) + "]";
    }
    (a = arrs[100]).hasOwnProperty(6);
    a[6];
    a.length;
}
