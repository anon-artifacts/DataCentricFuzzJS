try {
    let v1;
    try { v1 = newGlobal(); } catch (e) {}
    x = v1;
    Int32Array = x?.Int32Array;
    let v7;
    try { v7 = new ArrayBuffer(); } catch (e) {}
    x.p = v7;
    try { schedulegc(29); } catch (e) {}
    let v13;
    try { v13 = new Function(); } catch (e) {}
    const v14 = { f: v13 };
    let v15;
    try { v15 = new ArrayBuffer(); } catch (e) {}
    function f16(a17, a18, a19) {
        'use asm';
        const v20 = a17?.Int32Array;
        let v21;
        try { v21 = new v20(a19); } catch (e) {}
        var Int32ArrayView = v21;
        function f() {
            Int32ArrayView?.[1];
        }
        return f;
    }
    try { f16(this, v14, v15); } catch (e) {}
} catch(e26) {
}
