function f(a1, a2) {
    a1.push(a2);
}
function basic(a5) {
    const v22 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    a5.a = v22;
    var a = v22;
    Object.defineProperty(a, "length", { writable: false, value: 6 });
    f(a, 99);
}
var obj = {};
var a;
try {
    basic(obj);
    const v39 = new Error("didn't throw!");
    throw v39;
} catch(e40) {
    e40 instanceof TypeError;
    "expected TypeError, got " + e40;
    (a = obj.a).hasOwnProperty(6);
    a[6];
    a.length;
}
