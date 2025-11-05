d8.file.execute('../../v8/v8/test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
let $sig0 = builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
let f0 = builder.addImport('m', 'f', $sig0);

builder.addExport('boom', f0);

const instance = builder.instantiate({m: {f: () => {}}});
while (true) { instance.exports.boom(0, 0, 0, 0, 0x5deadbea, 0xdeadbeaf) }