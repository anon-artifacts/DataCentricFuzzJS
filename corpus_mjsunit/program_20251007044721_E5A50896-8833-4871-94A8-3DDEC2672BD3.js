const v2 = new Int32Array(1);
var a = v2;
var G = 2147483648;
function f(a7) {
    var v = a7;
    v = v + 1;
    a[0] = v;
    v = v - 1;
    return v;
}
f(G);
f(G);
f(G);
