function f0() {
}
var o = { y: f0 };
var a = [o,o,o,o,o,o,o,o,o];
a[7] = {};
try {
    for (let i7 = 0; i7 < 9; i7++) {
        a[i7].y();
    }
} catch(e15) {
    e15.name;
}
