function StoreHoleBitPattern() {
    function g(a2, a3, a4) {
        a3[a4] = a2[a4];
    }
    const v8 = new ArrayBuffer(16);
    var b = v8;
    const v11 = new Int32Array(b);
    var i32 = v11;
    i32[0] = 4294443007;
    i32[1] = 4294443007;
    i32[3] = 4294443007;
    i32[4] = 4294443007;
    const v18 = new Float64Array(b);
    var f64 = v18;
    var a = [,0.1];
    g(f64, a, 1);
    g(f64, a, 1);
    g(f64, a, 0);
    Number.isNaN(a[0]);
}
StoreHoleBitPattern();
function ConvertHoleToNumberAndStore() {
    function g(a36, a37) {
        var x = a36[a37];
        a36[a37] = +x;
    }
    var a = [,0.1];
    g(a, 1);
    g(a, 1);
    g(a, 0);
    Number.isNaN(a[0]);
}
ConvertHoleToNumberAndStore();
