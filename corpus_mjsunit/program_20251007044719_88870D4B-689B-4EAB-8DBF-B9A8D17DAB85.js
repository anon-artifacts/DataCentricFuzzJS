function assert(a1) {
}
function test() {
    function load(a4, a5) {
        let v6;
        try { v6 = a4.getUint8(a5); } catch (e) {}
        return v6;
    }
    try { noInline(load); } catch (e) {}
    let v11;
    try { v11 = new ArrayBuffer(4); } catch (e) {}
    let ab = v11;
    let v14;
    try { v14 = new Uint32Array(ab); } catch (e) {}
    let ta = v14;
    ta[0] = 2691758593;
    let v18;
    try { v18 = new DataView(ab); } catch (e) {}
    let dv = v18;
    for (let i21 = 0; i21 < 1000; ++i21) {
        let v28;
        try { v28 = load(dv, 0); } catch (e) {}
        v28 === 1;
    }
    try { transferArrayBuffer(ab); } catch (e) {}
    let e = null;
    try {
        try { load(dv, 0); } catch (e) {}
    } catch(e37) {
        e = e37;
    }
    e instanceof RangeError;
}
try { test(); } catch (e) {}
function test2() {
    function load(a43, a44) {
        let v45;
        try { v45 = a43.getUint8(a44); } catch (e) {}
        return v45;
    }
    try { noInline(load); } catch (e) {}
    let v50;
    try { v50 = new ArrayBuffer(4); } catch (e) {}
    let ab = v50;
    let v53;
    try { v53 = new Uint32Array(ab); } catch (e) {}
    let ta = v53;
    ta[0] = 2691758593;
    let v57;
    try { v57 = new DataView(ab); } catch (e) {}
    let dv = v57;
    for (let i60 = 0; i60 < 10000; ++i60) {
        let v67;
        try { v67 = load(dv, 0); } catch (e) {}
        v67 === 1;
    }
    try { transferArrayBuffer(ab); } catch (e) {}
    let e = null;
    try {
        try { load(dv, 0); } catch (e) {}
    } catch(e76) {
        e = e76;
    }
    e instanceof RangeError;
}
try { test2(); } catch (e) {}
