function f(a1, a2) {
    var v;
    if (a1) {
        v = v | 0;
    }
    a2[v] = 1;
}
const v9 = new String();
var v = v9;
f(false, v);
f(false, v);
const v17 = new Int32Array(10);
f(true, v = v17);
