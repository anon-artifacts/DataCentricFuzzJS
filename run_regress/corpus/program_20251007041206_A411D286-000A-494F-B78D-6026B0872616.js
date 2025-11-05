function f0() {
    function f(a2, a3, a4) {
        a3[a4] = a2[a4];
    }
    const v8 = new ArrayBuffer(16);
    var buf = v8;
    const v11 = new Int32Array(buf);
    var view_int32 = v11;
    view_int32[1] = 4294443007;
    const v15 = new Float64Array(buf);
    var view_f64 = v15;
    var arr = [,0.1];
    f(view_f64, arr, -1);
    f(view_f64, arr, 0);
}
f0();
