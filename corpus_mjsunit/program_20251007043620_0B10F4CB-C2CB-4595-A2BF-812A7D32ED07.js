function f1(a1, a2) {
    return a1[a2];
}
var a1 = [,,,,,,,,,,,,,,,,,,0.5];
f1(a1, 1);
f1(a1, 1);
f1(a1, 1);
f1(a1, 1);
function f2(a21, a22) {
    return a21[a22] + 0.5;
}
var a2_b = [0,,];
f2(a2_b, 0);
f2(a2_b, 0);
f2(a2_b, 0);
f2(a2_b, 1);
a2_b.__proto__ = [1.5,1.5,1.5];
f2(a2_b, 1);
f2(a2_b, 0);
