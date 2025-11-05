d8.file.execute('../../v8/v8/test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([makeField(kWasmF32, false), makeField(kWasmF64, false)]);
builder.addStruct([]);
builder.addStruct([makeField(kWasmF32, false), makeField(kWasmF64, false), makeField(wasmRefNullType(kWasmArrayRef), false), makeField(kWasmEqRef, true), makeField(kWasmS128, true), makeField(wasmRefType(kWasmFuncRef), true)], 0);
builder.addStruct([]);
builder.addArray(kWasmS128, true);
builder.addArray(wasmRefType(kWasmFuncRef), true);
builder.addArray(kWasmS128, true, 4);
builder.addArray(kWasmI32, true);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addType(makeSig([], []));
builder.startRecGroup();
builder.addType(makeSig([], []));
builder.endRecGroup();
builder.addMemory(16, 32);
builder.addTable(kWasmFuncRef, 3, 3, undefined)
builder.addActiveElementSegment(0, wasmI32Const(0), [[kExprRefFunc, 0, ], [kExprRefFunc, 1, ], [kExprRefFunc, 2, ]], kWasmFuncRef);
builder.addTag(makeSig([], []));
// Generate function 1 (out of 3).
builder.addFunction(undefined, 8 /* sig */)
  .addLocals(kWasmF32, 1)
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprCallFunction, 0x02,  // call function #2: v_v
kExprRefFunc, 0x01,  // ref.func
kGCPrefix, kExprRefCastNull, 0x0a,  // ref.cast null
kExprCallRef, 0x0a,  // call_ref: v_v
kExprF64Const, 0x2b, 0x12, 0x17, 0xc2, 0x96, 0x8a, 0xd5, 0x2b,  // f64.const
kExprF64Const, 0x8a, 0x0e, 0xca, 0x81, 0x64, 0x09, 0x98, 0x83,  // f64.const
kExprF64Ne,  // f64.ne
kExprI32Const, 0xd0, 0xce, 0xfb, 0xb9, 0x7b,  // i32.const
kExprI32Const, 0xec, 0x84, 0xe2, 0xf2, 0x7c,  // i32.const
kExprI32RemU,  // i32.rem_u
kExprI32Const, 0x84, 0xa8, 0xa1, 0xde, 0x79,  // i32.const
kExprCallFunction, 0x00,  // call function #0: i_iii
kExprNop,  // nop
kExprF64UConvertI32,  // f64.convert_i32_u
kNumericPrefix, kExprI32UConvertSatF64,  // i32.trunc_sat_f64_u
kExprI32Const, 0xcf, 0x9a, 0xf5, 0xca, 0x02,  // i32.const
kExprBlock, 0x7f,  // block @62 i32
  kExprI32Const, 0xc6, 0xca, 0xc3, 0xfc, 0x78,  // i32.const
  kExprI32Const, 0xd5, 0xc4, 0x99, 0xc7, 0x7e,  // i32.const
  kExprBrTable, 0x01, 0x00, 0x00,  // br_table entries=1
  kExprEnd,  // end @80
kAtomicPrefix, kExprI32AtomicOr16U, 0x01, 0xc0, 0x95, 0x02,  // i32.atomic.rmw16.or_u
kExprI32ShrS,  // i32.shr_s
kExprEnd,  // end @88
]);
// Generate function 2 (out of 3).
builder.addFunction(undefined, 9 /* sig */)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprEnd,  // end @1
]);
// Generate function 3 (out of 3).
builder.addFunction(undefined, 10 /* sig */)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprS128Const, 0xa9, 0x9b, 0x34, 0xfe, 0x25, 0x27, 0x0c, 0xbb, 0x68, 0x12, 0x86, 0xbd, 0xd1, 0x3d, 0x20, 0xda,  // v128.const
kSimdPrefix, kExprS128AndNot,  // v128.andnot
kSimdPrefix, kExprI8x16ExtractLaneS, 0x04,  // i8x16.extract_lane_s
kExprIf, 0x40,  // if @28
  kExprTry, 0x40,  // try @30
    kExprI32Const, 0xef, 0x00,  // i32.const
    kExprI32Const, 0xb6, 0x9a, 0xb4, 0xff, 0x01,  // i32.const
    kExprI32Const, 0x9e, 0xfd, 0x8f, 0xd5, 0x79,  // i32.const
    kExprI32Const, 0x99, 0xaf, 0xcc, 0xe5, 0x7b,  // i32.const
    kAtomicPrefix, kExprI64AtomicLoad, 0x03, 0x91, 0xef, 0x03,  // i64.atomic.load
    kExprI64StoreMem, 0x02, 0x84, 0x84, 0x03,  // i64.store
    kExprI32Const, 0xd5, 0x8f, 0xcf, 0xfa, 0x01,  // i32.const
    kExprI32Const, 0x00,  // i32.const
    kExprCallIndirect, 0x08, 0x00,  // call_indirect sig #8: i_iii
    kExprDrop,  // drop
    kExprI32Const, 0xa8, 0xba, 0xac, 0xe4, 0x7d,  // i32.const
    kExprI32Const, 0x9d, 0xf0, 0xc4, 0xcf, 0x7a,  // i32.const
    kAtomicPrefix, kExprI32AtomicExchange16U, 0x01, 0xac, 0xe4, 0x01,  // i32.atomic.rmw16.xchg_u
    kExprI32Const, 0x82, 0xdb, 0x97, 0x26,  // i32.const
    kExprI32Shl,  // i32.shl
    kExprF64Const, 0x60, 0x09, 0xd0, 0x8d, 0xa8, 0x54, 0xf7, 0x67,  // f64.const
    kExprF32ConvertF64,  // f32.demote_f64
    kExprF32Const, 0x11, 0xee, 0xe8, 0x13,  // f32.const
    kExprF32Sub,  // f32.sub
    kSimdPrefix, kExprF32x4Splat,  // f32x4.splat
    kSimdPrefix, kExprI64x2BitMask, 0x01,  // i64x2.bitmask
    kExprI32Const, 0x90, 0xa9, 0xca, 0xa4, 0x06,  // i32.const
    kExprI64Const, 0xd0, 0xbc, 0xbd, 0xfb, 0xe7, 0x90, 0xb4, 0xb2, 0x5a,  // i64.const
    kAtomicPrefix, kExprI64AtomicSub32U, 0x02, 0xc0, 0x80, 0x01,  // i64.atomic.rmw32.sub_u
    kAtomicPrefix, kExprI64AtomicExchange32U, 0x02, 0xbe, 0xaf, 0x03,  // i64.atomic.rmw32.xchg_u
    kAtomicPrefix, kExprI64AtomicStore, 0x03, 0xf2, 0xd3, 0x03,  // i64.atomic.store
  kExprCatch, 0x00,  // catch @155
  kExprCatchAll,  // catch_all @157
    kExprEnd,  // end @158
  kExprEnd,  // end @159
kExprEnd,  // end @160
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}
