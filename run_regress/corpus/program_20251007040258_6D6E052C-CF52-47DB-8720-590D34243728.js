function f() {
    var a = [];
    var i;
    var N = 10;
    for ((() => {
            i = 0;
        })();
        i < N;
        i++) {
        a[i] = { m: i };
    }
    for ((() => {
            i = 0;
        })();
        i < N;
        i++) {
        function f14() {
            return 0;
        }
        const t19 = a[i];
        t19.m = f14;
    }
    a[N - 2].m === a[N - 1].m;
}
f();
f();
