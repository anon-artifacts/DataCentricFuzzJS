for (let i1 = 0; i1 < 3; i1++) {
    const v8 = new Int32Array();
    z = v8;
}
function f() {
    z.__proto__ = 2;
}
for (let i14 = 0; i14 < 3; i14++) {
    f();
}
