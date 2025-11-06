var s = "0123456789ABCDEF";
for (let i3 = 0; i3 < 16; i3++) {
    s += s;
}
var count = 0;
function f() {
    try {
        f();
        if (count < 10) {
            f();
        }
    } catch(e16) {
        s.replace("+", "-");
    }
    count++;
}
f();
