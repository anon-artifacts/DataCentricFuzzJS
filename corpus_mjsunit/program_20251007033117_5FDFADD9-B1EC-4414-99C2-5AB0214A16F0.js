var a = [1];
function f(a4) {
    var round = Math.round;
    for (let i9 = 0; i9 < 20; i9++) {
        a[0] = round(a[0]);
        if (a4 > 500) {
            a[0] = "a";
        }
    }
}
for (let i21 = 0; i21 < 550; i21++) {
    f(i21);
}
