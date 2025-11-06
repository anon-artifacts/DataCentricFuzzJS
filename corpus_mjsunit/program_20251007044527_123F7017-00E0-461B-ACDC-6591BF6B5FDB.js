function optimize(a1, a2) {
    a1 = a1 | 0;
    a2 = a2 | 0;
    if ((a1 & 3) === 0) {
        a1 = (a1 + 1) | 0;
    }
    if ((a1 & 7) !== 0) {
        a1 = (a1 + 1) | 0;
    }
    return (a1 + a2) | 0;
}
for (let i27 = 0; i27 < 20; i27++) {
    optimize(4 | 0, 6 | 0);
    optimize(7 | 0, 11 | 0);
}
function not_optimizable(a50, a51) {
    a50 = a50 | 0;
    a51 = a51 | 0;
    if ((a50 & 3) > 0) {
        a50 = (a50 + 1) | 0;
    }
    if ((a50 & 3) >= 0) {
        a50 = (a50 + 1) | 0;
    }
    if ((a50 & 7) < 0) {
        a50 = (a50 + 1) | 0;
    }
    if ((a50 & 7) <= 0) {
        a50 = (a50 + 1) | 0;
    }
    if ((a51 & 3) === 1) {
        a51 = (a51 + 1) | 0;
    }
    if ((a51 & 7) !== 3) {
        a51 = (a51 + 1) | 0;
    }
    return (a50 + a51) | 0;
}
for (let i108 = 0; i108 < 20; i108++) {
    not_optimizable(4 | 0, 6 | 0);
    not_optimizable(7 | 0, 11 | 0);
}
