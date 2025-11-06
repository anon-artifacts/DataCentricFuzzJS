var x = 42;
function f() {
    const v4 = new Date();
    const v5 = new Date();
    const v6 = new Date();
    const v7 = new Date();
    const v8 = new Date();
    var a = [v4,v5,v6,v7,v8];
    for (let i12 = 0; i12 < 5; i12++) {
        function f18() {
            return x;
        }
        const t12 = a[i12];
        t12.m = f18;
    }
    for (i = 0; i < 4; i++) {
        if (a[i].m == a[i + 1].m) {
            throw "FAIL!";
        }
    }
}
f();
