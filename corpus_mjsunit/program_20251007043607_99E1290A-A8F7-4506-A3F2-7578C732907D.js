function GetWebAssembly() {
    return WebAssembly;
}
let WASM_ON_BY_DEFAULT = true;
if (WASM_ON_BY_DEFAULT) {
    try {
        undefined === GetWebAssembly();
    } catch(e7) {
    }
} else {
    GetWebAssembly();
}
