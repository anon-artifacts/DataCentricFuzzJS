const v2 = new Int32Array(10);
var a = v2;
function f(a5) {
    a5["-1"] = 15;
}
for (let i9 = 0; i9 < 3; i9++) {
    f(a);
}
a[-1];
