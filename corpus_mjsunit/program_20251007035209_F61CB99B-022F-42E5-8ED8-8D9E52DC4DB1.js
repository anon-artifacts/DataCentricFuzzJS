function f(a1, a2) {
    a1.formatToParts();
    a1.format();
}
const t4 = Intl.NumberFormat;
const v7 = new t4();
var a = v7;
f(a, []);
try {
    f();
} catch(e12) {
}
f(a, []);
try {
    f();
} catch(e16) {
}
