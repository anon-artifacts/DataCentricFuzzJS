var Q = 0;
try {
    function f(a4) {
        Q = a4;
        if (a4 == 100000) {
            return;
        }
        f(a4 + 1);
    }
    f(1);
} catch(e12) {
}
if (Q == 100000) {
}
