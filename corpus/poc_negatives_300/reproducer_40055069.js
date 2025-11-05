load("../../v8/v8/test/mjsunit/mjsunit.js");
load("../../v8/v8/test/mjsunit/wasm/wasm-module-builder.js");
(function I64RorLoweringTest() {
  let builder = new WasmModuleBuilder();
  builder.addMemory(1000, 1000);

  builder.addFunction("main", makeSig([kWasmI32, kWasmI64], []))
    .addBody([
      kExprLoop, kWasmStmt,
        kExprLocalGet, 0x00,
        kExprI32LoadMem, 0x00, 0x00,
        kExprI64UConvertI32,
        kExprLocalGet, 0x01,
        kExprI64Ror,
        kExprI32ConvertI64,
        kExprBrIf, 0x00,
      kExprEnd])
    .exportFunc();

  let module = new WebAssembly.Module(builder.toBuffer());
  new WebAssembly.Instance(module);
})();
