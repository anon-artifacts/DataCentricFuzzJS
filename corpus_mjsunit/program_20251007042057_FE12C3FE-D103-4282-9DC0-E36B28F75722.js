function f(a1, a2, a3) {
    var result;
    if (a3) {
        result = f2(a1, 2147483647, a2, a2, -2147483648);
    } else {
        result = f2(a1, -3, 4, a2, 0);
    }
    return result;
}
function f2(a18, a19, a20, a21, a22) {
    return (a18[a20 + a19] + a18[a20 - 0]) + a18[a21 - a22];
}
var a = [];
var i = 0;
a.push(i++);
a.push(i++);
a.push(i++);
a.push(i++);
a.push(i++);
f(a, 0, false);
f(a, 0, false);
f(a, 0, false);
