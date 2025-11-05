function f0() {
}
function viewToString(a2) {
    const v5 = String?.fromCharCode;
    let v6;
    try { v6 = v5.apply(null, a2); } catch (e) {}
    return v6;
}
function assertThrows(a8, a9) {
    try {
        try { a8(); } catch (e) {}
        ("expected " + a9) + " exception";
    } catch(e17) {
        e17?.name;
        a9?.name;
        try { e17.toString(); } catch (e) {}
    }
}
function test() {
    var filename = "file-mapped-arraybuffers.txt";
    let v25;
    try { v25 = createMappedArrayBuffer(filename); } catch (e) {}
    var buffer = v25;
    let v28;
    try { v28 = new Uint8Array(buffer); } catch (e) {}
    var view = v28;
    try { viewToString(view); } catch (e) {}
    let v33;
    try { v33 = createMappedArrayBuffer(filename, 8); } catch (e) {}
    var buffer2 = v33;
    let v35;
    try { v35 = new Uint8Array(buffer2); } catch (e) {}
    view = v35;
    try { viewToString(view); } catch (e) {}
    let v40;
    try { v40 = createMappedArrayBuffer(filename, 0, 8); } catch (e) {}
    var buffer3 = v40;
    let v42;
    try { v42 = new Uint8Array(buffer3); } catch (e) {}
    view = v42;
    try { viewToString(view); } catch (e) {}
    const v45 = () => {
        let v48;
        try { v48 = createMappedArrayBuffer("empty.txt", 8); } catch (e) {}
        return v48;
    };
    try { v45(); } catch (e) {}
    const v51 = () => {
        let v55;
        try { v55 = createMappedArrayBuffer("empty.txt", 0, 8); } catch (e) {}
        return v55;
    };
    try { v51(); } catch (e) {}
}
let v59;
try { v59 = getBuildConfiguration(); } catch (e) {}
if (v59?.["mapped-array-buffer"]) {
    try { test(); } catch (e) {}
}
try { f0(0, 0, "ok"); } catch (e) {}
