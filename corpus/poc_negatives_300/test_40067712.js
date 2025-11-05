d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();

builder.addStruct([makeField(kWasmI32, true)]);
builder.addStruct([makeField(wasmRefNullType(0), true)]);
builder.addStruct([makeField(wasmRefNullType(1), false)]);
builder.addStruct([makeField(wasmRefNullType(2), false)]);
builder.addStruct([makeField(wasmRefNullType(3), false)]);

builder.addTable(wasmRefType(4), 1, 2, [kGCPrefix, kExprStructNewDefault, 4]);

builder.addFunction(undefined, makeSig([], []) /* sig */)
  .addBodyWithEnd([
kExprI32Const, 0,  // i32.const
kExprTableGet, 0x0,  // table.get
kGCPrefix, kExprStructGet, 0x04, 0x00,  // struct.get
kGCPrefix, kExprStructGet, 0x03, 0x00,  // struct.get
kGCPrefix, kExprStructGet, 0x02, 0x00,  // struct.get
kGCPrefix, kExprStructGet, 0x01, 0x00,  // struct.get
kGCPrefix, kExprStructGet, 0x00, 0x00,  // struct.get
kExprDrop,
kExprEnd,
]);

builder.addExport('main', 0);
const instance = builder.instantiate();
print(instance.exports.main());