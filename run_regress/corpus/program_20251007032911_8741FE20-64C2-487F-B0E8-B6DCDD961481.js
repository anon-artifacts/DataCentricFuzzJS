var causeOSI = true;
function rec(a3, a4) {
    if ((a3 === 0) || (a3 !== a3)) {
        if (causeOSI) {
            causeOSI = false;
            a4(NaN, a4);
            causeOSI = true;
        }
        return;
    }
    a4(a3 - 1, a4);
}
causeOSI = false;
for (let i18 = 0; i18 < 20; ++i18) {
    rec(1, rec);
}
causeOSI = true;
rec(2, rec);
