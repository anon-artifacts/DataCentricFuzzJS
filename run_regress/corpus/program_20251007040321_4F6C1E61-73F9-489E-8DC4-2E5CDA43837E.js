var a = [1.5,,1.7];
var o = { a: 1.8 };
function f1(a9, a10, a11) {
    a9.a = a10[a11];
}
f1(o, a, 0);
f1(o, a, 0);
o.a;
f1(o, a, 1);
o.a;
var a = [1,,3];
var o = { ab: 5 };
function f2(a32, a33, a34) {
    a32.ab = a33[a34];
}
f2(o, a, 0);
f2(o, a, 0);
f2(o, a, 1);
o.ab;
