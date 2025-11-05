var N = 10;
function f(a3) {
    var a = [];
    for (let i7 = 0; i7 < N; i7++) {
        a[i7] = {};
    }
    a[N - 1] = arguments;
    for (let i17 = 0; i17 < N; i17++) {
        const t8 = a[i17];
        t8[0] = i17;
    }
    N - 1;
}
f(null);
