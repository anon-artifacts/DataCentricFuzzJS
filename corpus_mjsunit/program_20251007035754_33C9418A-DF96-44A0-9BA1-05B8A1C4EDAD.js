function f() {
    for (let i2 = 0;; i2++) {
        if (i2 == 55) {
            break;
        }
    }
    return y;
}
try { f(); } catch (e) {}
