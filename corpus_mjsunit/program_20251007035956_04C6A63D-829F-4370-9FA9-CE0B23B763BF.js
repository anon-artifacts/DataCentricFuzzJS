const v1 = new WeakMap();
var wm = v1;
var A = [];
for (let i6 = 0; i6 < 1024; ++i6) {
    var key = { i: i6 };
    wm.set(key, i6);
    A.push(key);
}
gc();
for (const v18 in A) {
    var key = A[v18];
    wm.has(key);
}
