A = {};
A.i = [];
function f4() {
}
A.i.push(f4);
function f7() {
}
A.i.push(f7);
function f(a11) {
    for (let i15 = 0, i16 = A.i.length; i15 < i16; ++i15) {
        A.i[i15]();
    }
}
f(null);
