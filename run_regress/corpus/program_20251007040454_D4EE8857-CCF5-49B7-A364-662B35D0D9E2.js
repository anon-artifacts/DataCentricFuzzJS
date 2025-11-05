function f0() {
    function f1(a2) {
        ~(+a2);
    }
    f = f1;
    const v7 = new Number();
    x = [v7];
    for (let i11 = 0; i11 < 3; ++i11) {
        for (let i18 = 0; i18 < 3; ++i18) {
            f(x[i18]);
        }
    }
}
f0();
