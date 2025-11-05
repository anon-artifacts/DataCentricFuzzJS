function f() {
    const v3 = new Int32Array(1);
    var i32 = v3;
    const v7 = new Float32Array(i32.buffer);
    var f32 = v7;
    for (let i10 = 0; i10 < 3; i10++) {
        var a0 = +1;
        var a3 = +4;
        i32[0] = a0;
        var b0 = f32[0];
        i32[0] = a3;
        var b3 = f32[0];
        b0 != b3;
    }
}
f();
