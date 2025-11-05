d8.file.execute('v8/test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([makeField(wasmRefType(kWasmFuncRef), true), makeField(kWasmF32, false), makeField(kWasmF32, true)]);
builder.addStruct([makeField(wasmRefType(kWasmI31Ref), true), makeField(wasmRefNullType(kWasmStructRef), false), makeField(kWasmI32, false)]);
builder.addStruct([makeField(wasmRefType(kWasmI31Ref), true), makeField(wasmRefNullType(kWasmStructRef), false), makeField(kWasmI32, false)], 1);
builder.addArray(wasmRefNullType(kWasmStructRef), true);
builder.addArray(kWasmExternRef, true);
builder.addArray(kWasmI32, true);
builder.addArray(kWasmExternRef, true, 4);

builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], []));

builder.addType(makeSig([], []));

builder.addType(makeSig([], [wasmRefType(7), wasmRefType(6), kWasmAnyRef, wasmRefType(kWasmEqRef), wasmRefType(kWasmArrayRef), kWasmI32]));

builder.addMemory(16, 32);
builder.addTable(kWasmFuncRef, 3, 3, undefined)

builder.addTag(makeSig([], []));
// Generate function 1 (out of 3).
builder.addFunction(undefined, 7 /* sig */)
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprLoop, 0x7f,  // loop @69 i32
  kExprLoop, 0x7f,  // loop @85 i32
    kExprTry, 0x7c,  // try @87 f64
      kExprTry, 0x7c,  // try @89 f64
        kExprF64Const, 0x43, 0xd1, 0xa4, 0x52, 0xf1, 0x7b, 0xf1, 0x9b,  // f64.cons
      kExprCatchAll,  // catch_all @106
        kExprF64Const, 0x43, 0xd1, 0xa4, 0x52, 0xf1, 0x7b, 0xf1, 0x9b,  // f64.const

        kExprRefNull, 0x08,  // ref.null
        kExprCallRef, 0x08,  // call_ref: v_rnrrrrrd

        kExprEnd,  // end @269
      kExprF64Sqrt,  // f64.sqrt
      kExprEnd,  // end @292
    kNumericPrefix, kExprI32UConvertSatF64,  // i32.trunc_sat_f64_u
    
    kExprCallFunction, 0x02,  // call function #2: rrnrriiiiii_iiiiiiiiiiiiiii
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    
    kExprI32Const, 0xc0, 0x91, 0xc0, 0xb6, 0x78,  // i32.const
    kExprBrIf, 0x01,  // br_if depth=1
    kExprEnd,  // end @420
  kExprEnd,  // end @421
kExprDrop,
kExprEnd,  // end @596
]);
// Generate function 2 (out of 3).
builder.addFunction(undefined, 8 /* sig */)
  .addBodyWithEnd([
// signature: v_rnrrrrrd
// body:
kExprEnd,  // end @10
]);
// Generate function 3 (out of 3).
builder.addFunction(undefined, 9 /* sig */)
  .addBodyWithEnd([
// signature: rrnrriiiiii_iiiiiiiiiiiiiii
// body:
kExprRefFunc, 0x00,  // ref.func
kExprRefNull, 0x6f,  // ref.null
kExprI32Const, 0x88, 0xc7, 0xb9, 0xe1, 0x07,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x06,  // array.new
kExprRefNull, 0x6e,  // ref.null
kExprRefFunc, 0x00,  // ref.func
kExprF32Const, 0xe5, 0x5a, 0xe8, 0x39,  // f32.const
kExprF32Const, 0x3d, 0x9d, 0x3d, 0x7c,  // f32.const
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprRefNull, 0x6b,  // ref.null
kExprI32Const, 0xc4, 0xed, 0xda, 0xfe, 0x02,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x03,  // array.new
kExprI32Const, 0x1,
kExprEnd,  // end @197
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}