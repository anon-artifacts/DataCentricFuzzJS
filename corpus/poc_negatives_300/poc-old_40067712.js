var wasm_code = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 38, 6, 80, 0, 95, 1, 127, 1, 80, 0, 95, 1, 108, 0, 1, 80, 0, 95, 1, 108, 1, 0, 80, 0, 95, 1, 108, 2, 0, 80, 0, 95, 1, 108, 3, 0, 96, 0, 0, 3, 2, 1, 5, 4, 11, 1, 64, 107, 4, 1, 1, 2, 251, 8, 4, 11, 7, 8, 1, 4, 109, 97, 105, 110, 0, 0, 10, 29, 1, 27, 0, 65, 0, 37, 0, 251, 3, 4, 0, 251, 3, 3, 0, 251, 3, 2, 0, 251, 3, 1, 0, 251, 3, 0, 0, 26, 11]);
var wasm_module = new WebAssembly.Module(wasm_code);
var wasm_instance = new WebAssembly.Instance(wasm_module);
var wasm_function = wasm_instance.exports.main;
wasm_function();