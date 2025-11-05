([1]).push(1);
function PushHoleBitPattern() {
    function g(a6, a7, a8) {
        a7[a8] = a6[a8];
    }
    const v12 = new ArrayBuffer(8);
    var b = v12;
    const v15 = new Int32Array(b);
    var i32 = v15;
    i32[0] = 4294443007;
    i32[1] = 4294443007;
    const v20 = new Float64Array(b);
    var f64 = v20;
    var a = [,2.5];
    a.push(f64[0]);
    Number.isNaN(a[2]);
}
PushHoleBitPattern();
