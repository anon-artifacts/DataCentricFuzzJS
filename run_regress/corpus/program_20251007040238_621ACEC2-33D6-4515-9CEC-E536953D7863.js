("").replace(/x/);
function f4() {
    for (let i6 = 0; i6 < 2000; ++i6) {
        /[^]/g.exec("abc")[0];
    }
}
f4();
