function getval(a1) {
    return obj.val;
}
function f(a5, a6) {
    var lhs = -(~a5 >>> 0);
    var rhs = getval(a6);
    return (lhs - rhs) >> 0;
}
function getObj(a18) {
    return { val: a18 };
}
var obj = getObj(1);
f(0, obj);
f(0, obj);
obj = getObj("can has bug?");
obj = getObj(0.5);
f(0, obj);
