function f0() {
}
var o = { y: f0 };
var a = [o,o,o,o,o,o,o,o,o];
const t4 = Number.prototype;
t4.y = 0;
a[7] = 0;
try {
    for (let i10 = 0; i10 < 9; i10++) {
        a[i10].y();
    }
} catch(e18) {
    e18.name;
}
