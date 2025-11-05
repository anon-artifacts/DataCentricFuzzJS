function f0(a1) {
    return Math.abs(a1);
}
var do_abs = f0;
var i;
for ((() => {
        i = 0;
    })();
    i < 50;
    i++) {
    do_abs(-1.5);
}
do_abs(-2.5);
