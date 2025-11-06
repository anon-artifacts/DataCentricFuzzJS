function f0(a1, a2) {
}
function f3() {
    let v6;
    try { v6 = Array(100); } catch (e) {}
    const target = v6;
    for (let i9 = 0; i9 < 10000; ++i9) {
        let v15;
        try { v15 = f0(target, i9); } catch (e) {}
        const value = v15;
        if (value !== undefined) {
            const v20 = "opaqueGetByVal1() case 1 failed for i = " + i9;
            const v23 = new Int32Array(1);
            var i32 = v23;
            Float32Array(i32.buffer);
            v20 + " value = ";
        }
    }
    Array();
    return Array;
}
f3();
