const t0 = Object.prototype;
t0[3] = 3;
x = Array();
function f() {
    for (i = 0; i < 9; i++) {
        if (Object[x++] != 0) {
        }
    }
}
f();
