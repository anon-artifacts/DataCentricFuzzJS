for (let i1 = 0; i1 < 9; i1++) {
    Symbol() ? 1 : 0;
}
var a = [0,0,0,0,0,Symbol(),Symbol()];
var b = [];
function f(a27, a28) {
    b[a27] = a28 ? "yes" : "no";
}
for (let i33 = 0; i33 < a.length; i33++) {
    f(i33, a[i33]);
}
b[b.length - 3];
b[b.length - 2];
b[b.length - 1];
