z = {};
const v4 = new Uint8Array(3);
t = v4;
var m = 0;
var x = 10;
function k() {
    ++m;
    if ((m % 10) != 9) {
        if (m > 20) {
            x = "1";
        }
        t[2] = z;
    }
}
function f1() {
    z.toString = k;
    z.toString();
    z.toString();
    z.toString();
}
f1();
