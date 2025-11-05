d8.file.execute('v8/test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([]);
builder.addStruct([], 0);
builder.addStruct([], 1);
builder.addArray(kWasmI32, true);
builder.addArray(kWasmI32, true);
builder.addArray(kWasmI32, true);
builder.startRecGroup();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.endRecGroup();
builder.startRecGroup();
builder.addType(makeSig([], []));
builder.endRecGroup();
builder.startRecGroup();
builder.addType(makeSig([], []));
builder.endRecGroup();
builder.addMemory(16, 32);
builder.addTable(kWasmFuncRef, 3, 3, undefined)
builder.addActiveElementSegment(0, wasmI32Const(0), [[kExprRefFunc, 0, ], [kExprRefFunc, 1, ], [kExprRefFunc, 2, ]], kWasmFuncRef);
builder.addTag(makeSig([], []));
// Generate function 1 (out of 3).
builder.addFunction(undefined, 6 /* sig */)
  .addLocals(wasmRefNullType(kWasmI31Ref), 1).addLocals(kWasmF64, 2).addLocals(kWasmI32, 1).addLocals(kWasmS128, 1).addLocals(wasmRefNullType(2), 1).addLocals(wasmRefNullType(kWasmNullExternRef), 1).addLocals(wasmRefType(kWasmI31Ref), 1).addLocals(kWasmF32, 1).addLocals(wasmRefNullType(kWasmNullFuncRef), 1).addLocals(wasmRefNullType(kWasmStructRef), 1).addLocals(wasmRefType(8), 1).addLocals(kWasmI32, 1).addLocals(wasmRefType(4), 1).addLocals(wasmRefNullType(0), 1).addLocals(kWasmI32, 1).addLocals(wasmRefType(kWasmEqRef), 1).addLocals(wasmRefType(kWasmArrayRef), 1).addLocals(wasmRefNullType(5), 1).addLocals(wasmRefType(4), 1).addLocals(kWasmI32, 1)
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprLoop, 0x40,  // loop @50
  kExprLoop, 0x40,  // loop @52
    kExprI32Const, 0xb6, 0x7f,  // i32.const
    kExprI32Popcnt,  // i32.popcnt
    kExprBlock, 0x7e,  // block @58 i64
      kExprI64Const, 0x0a,  // i64.const
      kExprEnd,  // end @62
    kExprI32Const, 0xaa, 0x80, 0xb8, 0xb7, 0x79,  // i32.const
    kExprBlock, 0x7f,  // block @69 i32
      kExprBlock, 0x7f,  // block @71 i32
        kExprBlock, 0x7f,  // block @73 i32
          kExprI32Const, 0xed, 0xfd, 0xcc, 0x91, 0x7e,  // i32.const
          kExprI32Const, 0xf2, 0xc4, 0xb0, 0xd6, 0x01,  // i32.const
          kExprI32Const, 0xc6, 0x92, 0xb5, 0xc5, 0x06,  // i32.const
          kExprI32LtU,  // i32.lt_u
          kExprI32Const, 0x8c, 0xf9, 0xb7, 0x9b, 0x7e,  // i32.const
          kExprF32Const, 0x3f, 0x1e, 0x92, 0x4a,  // f32.const
          kExprF32Const, 0xde, 0x7d, 0x4b, 0x2d,  // f32.const
          kExprF32Ge,  // f32.ge
          kExprI32LtU,  // i32.lt_u
          kExprLoop, 0x7f,  // loop @112 i32
            kExprI32Const, 0xca, 0x8b, 0xf7, 0xa8, 0x7f,  // i32.const
            kExprEnd,  // end @120
          kExprI32Const, 0xaa, 0x88, 0xd4, 0x23,  // i32.const
          kExprI32Add,  // i32.add
          kExprI32LtU,  // i32.lt_u
          kExprI32LtU,  // i32.lt_u
          kExprRefFunc, 0x01,  // ref.func
          kExprCallRef, 0x07,  // call_ref: v_v
          kExprRefNull, 0x70,  // ref.null
          kGCPrefix, kExprRefCastNull, 0x08,  // ref.cast null
          kGCPrefix, kExprRefCastNull, 0x06,  // ref.cast null
          kGCPrefix, kExprRefCastNull, 0x07,  // ref.cast null
          kExprBrOnNull, 0x03,  // br_on_null
          kExprDrop,  // drop
          kExprI32Const, 0xd9, 0xd0, 0xd5, 0xee, 0x07,  // i32.const
          kExprI32Add,  // i32.add
          kExprI32LoadMem8U, 0x00, 0xfd, 0xa4, 0x02,  // i32.load8_u
          kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xfc, 0xdc, 0x02,  // i32.atomic.rmw8.sub_u
          kExprI32Const, 0x8d, 0xe0, 0xba, 0xb0, 0x06,  // i32.const
          kExprBrTable, 0x01, 0x00, 0x00,  // br_table entries=1
          kExprEnd,  // end @175
        kExprEnd,  // end @176
      kExprEnd,  // end @177
    kExprI32And,  // i32.and
    kExprI32Const, 0xf5, 0xa6, 0x85, 0x8f, 0x06,  // i32.const
    kExprI32Const, 0xb4, 0xc4, 0xed, 0xdb, 0x06,  // i32.const
    kExprI32Const, 0x00,  // i32.const
    kAtomicPrefix, kExprI32AtomicCompareExchange16U, 0x00, 0xe4, 0xbe, 0x01,  // i32.atomic.rmw16.cmpxchg_u
    kExprLocalSet, 0x00,  // local.set
    kAtomicPrefix, kExprI32AtomicLoad8U, 0x00, 0xe4, 0x7b,  // i32.atomic.load8_u
    kExprI64LoadMem16U, 0x00, 0xa9, 0xc2, 0x02,  // i64.load16_u
    kExprI64Ne,  // i64.ne
    kAtomicPrefix, kExprI32AtomicLoad, 0x02, 0xe7, 0xbc, 0x01,  // i32.atomic.load
    kAtomicPrefix, kExprI32AtomicStore8U, 0x00, 0xde, 0xf4, 0x02,  // i32.atomic.store8
    kExprEnd,  // end @224
  kExprEnd,  // end @225
kExprThrow, 0x00,  // throw
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI32x4SConvertI16x8High, 0x01,  // i32x4.extend_high_i16x8_s
kSimdPrefix, kExprF32x4Neg, 0x01,  // f32x4.neg
kSimdPrefix, ...kExprI32x4RelaxedTruncF64x2SZero,  // i32x4.relaxed_trunc_f64x2_s_zero
kSimdPrefix, kExprI8x16Add,  // i8x16.add
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI64x2Ne, 0x01,  // i64x2.ne
kSimdPrefix, kExprI8x16MaxS,  // i8x16.max_s
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprF32x4Pmax, 0x01,  // f32x4.pmax
kSimdPrefix, kExprI16x8SubSatS, 0x01,  // i16x8.sub_sat_s
kSimdPrefix, kExprI8x16MaxU,  // i8x16.max_u
kSimdPrefix, kExprI8x16GtS,  // i8x16.gt_s
kSimdPrefix, kExprI32x4ExtractLane, 0x00,  // i32x4.extract_lane
kGCPrefix, kExprRefI31,  // ref.i31
kExprLocalSet, 0x0a,  // local.set
kExprRefNull, 0x70,  // ref.null
kGCPrefix, kExprRefCast, 0x08,  // ref.cast
kExprLocalSet, 0x0e,  // local.set
kExprI32Const, 0xe7, 0xf6, 0xb4, 0xcc, 0x04,  // i32.const
kExprI32Const, 0xca, 0xd0, 0xd0, 0xdd, 0x7d,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x04,  // array.new
kExprLocalSet, 0x10,  // local.set
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprLocalSet, 0x13,  // local.set
kExprI32Const, 0xb6, 0xbd, 0xfb, 0x8a, 0x06,  // i32.const
kExprI32Const, 0xea, 0xb3, 0xbd, 0xf5, 0x7c,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x03,  // array.new
kExprLocalSet, 0x14,  // local.set
kExprI32Const, 0xfa, 0xb3, 0xaa, 0xed, 0x79,  // i32.const
kExprI32Const, 0xd4, 0xd7, 0xf7, 0xa2, 0x7e,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x04,  // array.new
kExprLocalSet, 0x16,  // local.set
kExprI32Const, 0x94, 0xef, 0xc9, 0xee, 0x79,  // i32.const
kExprEnd,  // end @371
]);
// Generate function 2 (out of 3).
builder.addFunction(undefined, 7 /* sig */)
  .addLocals(wasmRefNullType(kWasmStructRef), 1).addLocals(wasmRefNullType(kWasmNullRef), 1).addLocals(kWasmF32, 1).addLocals(kWasmEqRef, 1).addLocals(kWasmF64, 1)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprEnd,  // end @11
]);
// Generate function 3 (out of 3).
builder.addFunction(undefined, 8 /* sig */)
  .addLocals(wasmRefType(8), 1).addLocals(wasmRefType(kWasmI31Ref), 1).addLocals(kWasmF64, 1).addLocals(wasmRefNullType(1), 1).addLocals(wasmRefNullType(0), 1).addLocals(kWasmI32, 1).addLocals(wasmRefNullType(1), 1).addLocals(wasmRefNullType(2), 1).addLocals(wasmRefType(kWasmEqRef), 1).addLocals(kWasmI64, 1).addLocals(wasmRefNullType(kWasmNullRef), 1).addLocals(wasmRefType(5), 1).addLocals(wasmRefNullType(6), 1).addLocals(kWasmF64, 1).addLocals(wasmRefNullType(kWasmNullRef), 1).addLocals(wasmRefType(2), 1).addLocals(kWasmI64, 1).addLocals(wasmRefNullType(0), 1)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprRefFunc, 0x02,  // ref.func
kExprLocalSet, 0x00,  // local.set
kExprI32Const, 0xb7, 0xf2, 0xc1, 0xfa, 0x7a,  // i32.const
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kAtomicPrefix, kExprI32AtomicStore16U, 0x01, 0xfe, 0xfc, 0x01,  // i32.atomic.store16
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kGCPrefix, kExprRefI31,  // ref.i31
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprRefCast, 0x6c,  // ref.cast
kExprLocalSet, 0x01,  // local.set
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprLocalSet, 0x08,  // local.set
kExprI32Const, 0xc8, 0x96, 0xcf, 0x9e, 0x7d,  // i32.const
kExprI32Const, 0xf0, 0xe7, 0xf1, 0x88, 0x02,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x05,  // array.new
kExprLocalSet, 0x0b,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x0f,  // local.set
kExprEnd,  // end @110
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}