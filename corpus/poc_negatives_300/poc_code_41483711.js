d8.file.execute('v8/test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([]);
builder.addStruct([]);
builder.addStruct([]);
builder.addArray(kWasmI32, true);
builder.addArray(kWasmI32, true);
builder.addArray(kWasmI32, true);
builder.addArray(kWasmI32, true);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addType(makeSig([], []));
builder.startRecGroup();
builder.addType(makeSig([], []));
builder.endRecGroup();
builder.addType(makeSig([], []));
builder.addMemory(16, 32);
builder.addTable(kWasmFuncRef, 4, 4, undefined)
builder.addActiveElementSegment(0, wasmI32Const(0), [[kExprRefFunc, 0, ], [kExprRefFunc, 1, ], [kExprRefFunc, 2, ], [kExprRefFunc, 3, ]], kWasmFuncRef);
builder.addTag(makeSig([], []));
// Generate function 1 (out of 4).
builder.addFunction(undefined, 7 /* sig */)
  .addLocals(wasmRefType(kWasmStructRef), 1).addLocals(wasmRefType(5), 1).addLocals(kWasmI32, 2).addLocals(wasmRefNullType(kWasmNullRef), 1).addLocals(kWasmAnyRef, 1).addLocals(wasmRefNullType(kWasmArrayRef), 1).addLocals(kWasmI32, 1).addLocals(kWasmFuncRef, 1).addLocals(kWasmF64, 1).addLocals(wasmRefNullType(10), 1).addLocals(wasmRefType(kWasmEqRef), 1).addLocals(wasmRefType(kWasmAnyRef), 1).addLocals(kWasmExternRef, 1).addLocals(wasmRefNullType(kWasmNullRef), 1).addLocals(wasmRefNullType(9), 1).addLocals(kWasmI32, 2).addLocals(wasmRefType(5), 1).addLocals(wasmRefType(9), 1).addLocals(wasmRefNullType(5), 1).addLocals(wasmRefType(9), 1).addLocals(kWasmF64, 1).addLocals(wasmRefNullType(9), 1)
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprI32Const, 0x03,  // i32.const
kExprCallIndirect, 0x0a, 0x00,  // call_indirect sig #10: v_v
kExprI32Const, 0x3c,  // i32.const
kExprI32Const, 0xee, 0x00,  // i32.const
kExprI32Const, 0x55,  // i32.const
kExprI32Const, 0x00,  // i32.const
kExprCallIndirect, 0x07, 0x00,  // call_indirect sig #7: i_iii
kExprNop,  // nop
kExprI32Const, 0x03,  // i32.const
kExprCallIndirect, 0x0a, 0x00,  // call_indirect sig #10: v_v
kExprI32Const, 0x03,  // i32.const
kExprCallIndirect, 0x0a, 0x00,  // call_indirect sig #10: v_v
kExprRefNull, 0x6e,  // ref.null
kGCPrefix, kExprRefCastNull, 0x00,  // ref.cast null
kExprRefAsNonNull,  // ref.as_non_null
kGCPrefix, kExprRefCastNull, 0x6e,  // ref.cast null
kGCPrefix, kExprRefTest, 0x00,  // ref.test
kExprI32Const, 0xb4, 0xed, 0xde, 0xee, 0x07,  // i32.const
kExprI32Const, 0xf6, 0xdc, 0xfa, 0x89, 0x07,  // i32.const
kExprI32Const, 0x00,  // i32.const
kExprCallIndirect, 0x07, 0x00,  // call_indirect sig #7: i_iii
kExprNop,  // nop
kExprF64Const, 0x78, 0x51, 0x59, 0xf8, 0xf3, 0x52, 0xc6, 0x15,  // f64.const
kExprF64Const, 0x0b, 0x6d, 0xc9, 0x35, 0xa1, 0x52, 0x3a, 0x72,  // f64.const
kExprF64Lt,  // f64.lt
kExprI32Const, 0xf7, 0xe4, 0xd1, 0x9a, 0x7c,  // i32.const
kExprI32Const, 0x85, 0xbe, 0xd0, 0x05,  // i32.const
kAtomicPrefix, kExprI32AtomicSub, 0x01, 0x80, 0x01,  // i32.atomic.rmw.sub
kAtomicPrefix, kExprI32AtomicXor16U, 0x00, 0xde, 0xf5, 0x02,  // i32.atomic.rmw16.xor_u
kExprI64LoadMem32U, 0x01, 0xb9, 0xda, 0x01,  // i64.load32_u
kAtomicPrefix, kExprI64AtomicExchange8U, 0x00, 0xae, 0xf2, 0x03,  // i64.atomic.rmw8.xchg_u
kExprI32ConvertI64,  // i32.wrap_i64
kExprF32Const, 0xfa, 0x06, 0x3a, 0x49,  // f32.const
kExprCallFunction, 0x03,  // call function #3: v_v
kExprF32Const, 0xa8, 0x4b, 0x8d, 0xbb,  // f32.const
kExprI32Const, 0x03,  // i32.const
kExprCallIndirect, 0x0a, 0x00,  // call_indirect sig #10: v_v
kExprI32Const, 0xb9, 0xf9, 0xfa, 0xf1, 0x00,  // i32.const
kExprI32Const, 0x03,  // i32.const
kExprCallIndirect, 0x0a, 0x00,  // call_indirect sig #10: v_v
kExprI32Const, 0xd8, 0xf9, 0x87, 0x92, 0x7f,  // i32.const
kExprI32StoreMem, 0x02, 0xf3, 0xe6, 0x01,  // i32.store
kExprF32CopySign,  // f32.copysign
kExprI32SConvertF32,  // i32.trunc_f32_s
kAtomicPrefix, kExprI32AtomicXor8U, 0x00, 0xc3, 0xab, 0x03,  // i32.atomic.rmw8.xor_u
kExprI32Const, 0x03,  // i32.const
kExprCallIndirect, 0x0a, 0x00,  // call_indirect sig #10: v_v
kExprI32Const, 0x03,  // i32.const
kExprCallIndirect, 0x0a, 0x00,  // call_indirect sig #10: v_v
kExprI32Const, 0x03,  // i32.const
kExprCallIndirect, 0x0a, 0x00,  // call_indirect sig #10: v_v
kExprI32Const, 0x03,  // i32.const
kExprCallIndirect, 0x0a, 0x00,  // call_indirect sig #10: v_v
kExprI32Const, 0x03,  // i32.const
kExprCallIndirect, 0x0a, 0x00,  // call_indirect sig #10: v_v
kExprI32Const, 0x03,  // i32.const
kExprCallIndirect, 0x0a, 0x00,  // call_indirect sig #10: v_v
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI64x2ExtMulLowI32x4S, 0x01,  // i64x2.extmul_low_i32x4_s
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI64x2ExtMulLowI32x4S, 0x01,  // i64x2.extmul_low_i32x4_s
kSimdPrefix, kExprI64x2ExtMulLowI32x4S, 0x01,  // i64x2.extmul_low_i32x4_s
kSimdPrefix, kExprS128Const, 0xef, 0xe8, 0x6e, 0xa1, 0x64, 0xb4, 0xa1, 0xa1, 0x6f, 0x45, 0x66, 0x8e, 0xf9, 0x41, 0x3a, 0x4f,  // v128.const
kSimdPrefix, kExprI64x2ExtMulLowI32x4S, 0x01,  // i64x2.extmul_low_i32x4_s
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprF32x4Gt,  // f32x4.gt
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI32x4MinS, 0x01,  // i32x4.min_s
kSimdPrefix, kExprI8x16LeU,  // i8x16.le_u
kSimdPrefix, kExprI16x8ExtAddPairwiseI8x16S,  // i16x8.extadd_pairwise_i8x16_s
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprF64x2Le,  // f64x2.le
kSimdPrefix, kExprI64x2ExtMulLowI32x4S, 0x01,  // i64x2.extmul_low_i32x4_s
kSimdPrefix, kExprI64x2ExtMulLowI32x4S, 0x01,  // i64x2.extmul_low_i32x4_s
kSimdPrefix, kExprI64x2ExtMulLowI32x4S, 0x01,  // i64x2.extmul_low_i32x4_s
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprF32Const, 0x4f, 0xad, 0xbb, 0xdd,  // f32.const
kExprF32Const, 0x36, 0xe7, 0xe5, 0xb9,  // f32.const
kExprF32Lt,  // f32.lt
kSimdPrefix, kExprI16x8Splat,  // i16x8.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, ...kExprI8x16RelaxedLaneSelect,  // i8x16.relaxed_laneselect
kExprI64Const, 0xa7, 0xd3, 0xe2, 0xe8, 0x98, 0xdc, 0xfc, 0xca, 0x18,  // i64.const
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Const, 0xc2, 0x98, 0xb2, 0x9b, 0xc0, 0xa8, 0x8a, 0xab, 0x7d,  // i64.const
kExprI64Ctz,  // i64.ctz
kExprI64And,  // i64.and
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kExprI64Ctz,  // i64.ctz
kSimdPrefix, kExprI64x2ReplaceLane, 0x00,  // i64x2.replace_lane
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI64x2ExtMulHighI32x4U, 0x01,  // i64x2.extmul_high_i32x4_u
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI64x2ExtMulHighI32x4U, 0x01,  // i64x2.extmul_high_i32x4_u
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI64x2ExtMulHighI32x4U, 0x01,  // i64x2.extmul_high_i32x4_u
kSimdPrefix, kExprI8x16MinS,  // i8x16.min_s
kSimdPrefix, kExprI8x16Eq,  // i8x16.eq
kSimdPrefix, kExprI64x2ExtMulLowI32x4S, 0x01,  // i64x2.extmul_low_i32x4_s
kSimdPrefix, kExprI64x2ExtMulLowI32x4S, 0x01,  // i64x2.extmul_low_i32x4_s
kSimdPrefix, kExprI64x2ExtMulLowI32x4S, 0x01,  // i64x2.extmul_low_i32x4_s
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI64x2ExtMulHighI32x4U, 0x01,  // i64x2.extmul_high_i32x4_u
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI64x2ExtMulHighI32x4U, 0x01,  // i64x2.extmul_high_i32x4_u
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI64x2ExtMulHighI32x4U, 0x01,  // i64x2.extmul_high_i32x4_u
kSimdPrefix, kExprS128Const, 0xd2, 0x21, 0xc5, 0xd3, 0x8f, 0xa2, 0x9b, 0x8f, 0xaa, 0x16, 0x07, 0xe4, 0x3c, 0xd4, 0x1e, 0x21,  // v128.const
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprRefNull, 0x70,  // ref.null
kExprI32Const, 0xdd, 0xbf, 0xa0, 0xbf, 0x7a,  // i32.const
kNumericPrefix, kExprTableGrow, 0x00,  // table.grow
kSimdPrefix, kExprI8x16ShrU,  // i8x16.shr_u
kSimdPrefix, kExprI8x16MaxU,  // i8x16.max_u
kSimdPrefix, kExprI32x4MaxU, 0x01,  // i32x4.max_u
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprRefNull, 0x70,  // ref.null
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI16x8SubSatU, 0x01,  // i16x8.sub_sat_u
kSimdPrefix, kExprI8x16BitMask,  // i8x16.bitmask
kNumericPrefix, kExprTableGrow, 0x00,  // table.grow
kSimdPrefix, kExprI16x8ShrU, 0x01,  // i16x8.shr_u
kSimdPrefix, kExprI64x2GeS, 0x01,  // i64x2.ge_s
kSimdPrefix, kExprF64x2Sqrt, 0x01,  // f64x2.sqrt
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI16x8UConvertI32x4, 0x01,  // i16x8.narrow_i32x4_u
kSimdPrefix, kExprI8x16LtU,  // i8x16.lt_u
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI8x16Ne,  // i8x16.ne
kSimdPrefix, kExprF32x4Sqrt, 0x01,  // f32x4.sqrt
kSimdPrefix, kExprS128Not,  // v128.not
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI16x8AddSatU, 0x01,  // i16x8.add_sat_u
kSimdPrefix, kExprF32x4Pmax, 0x01,  // f32x4.pmax
kSimdPrefix, kExprI64x2ExtMulHighI32x4U, 0x01,  // i64x2.extmul_high_i32x4_u
kSimdPrefix, kExprI64x2ExtMulHighI32x4U, 0x01,  // i64x2.extmul_high_i32x4_u
kSimdPrefix, kExprF32x4Abs, 0x01,  // f32x4.abs
kSimdPrefix, kExprI64x2ExtMulLowI32x4S, 0x01,  // i64x2.extmul_low_i32x4_s
kSimdPrefix, kExprI64x2AllTrue, 0x01,  // i64x2.all_true
kExprI32StoreMem, 0x01, 0xf3, 0xc6, 0x01,  // i32.store
kGCPrefix, kExprRefI31,  // ref.i31
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprRefCast, 0x6b,  // ref.cast
kExprLocalSet, 0x03,  // local.set
kExprI32Const, 0xa9, 0xac, 0xab, 0x89, 0x7d,  // i32.const
kExprI32Const, 0x8c, 0xfa, 0xc1, 0xf3, 0x02,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x05,  // array.new
kExprLocalSet, 0x04,  // local.set
kExprI32Const, 0xa6, 0xf0, 0xd1, 0xf8, 0x01,  // i32.const
kGCPrefix, kExprRefI31,  // ref.i31
kExprLocalSet, 0x0e,  // local.set
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprLocalSet, 0x0f,  // local.set
kExprI32Const, 0xc4, 0xec, 0xcb, 0xd1, 0x7a,  // i32.const
kExprI32Const, 0xf9, 0xe4, 0x8d, 0xff, 0x7a,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x05,  // array.new
kExprLocalSet, 0x15,  // local.set
kExprRefFunc, 0x02,  // ref.func
kExprLocalSet, 0x16,  // local.set
kExprRefFunc, 0x02,  // ref.func
kExprLocalSet, 0x18,  // local.set
kExprI32Const, 0x9f, 0x82, 0xee, 0xe7, 0x7e,  // i32.const
kExprEnd,  // end @695
]);
// Generate function 2 (out of 4).
builder.addFunction(undefined, 8 /* sig */)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprThrow, 0x00,  // throw
kExprEnd,  // end @3
]);
// Generate function 3 (out of 4).
builder.addFunction(undefined, 9 /* sig */)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprEnd,  // end @1
]);
// Generate function 4 (out of 4).
builder.addFunction(undefined, 10 /* sig */)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprI32Const, 0xc2, 0xad, 0xb3, 0xa7, 0x01,  // i32.const
kExprI32Const, 0xf9, 0x99, 0x86, 0xe4, 0x05,  // i32.const
kExprI32Xor,  // i32.xor
kExprI32Const, 0xae, 0xa6, 0x8d, 0x9b, 0x01,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x03,  // array.new
kExprRefAsNonNull,  // ref.as_non_null
kExprRefNull, 0x6c,  // ref.null
kExprRefEq,  // ref.eq
kExprI32Const, 0x02,  // i32.const
kExprCallIndirect, 0x09, 0x00,  // call_indirect sig #9: v_v
kExprTry, 0x7d,  // try @35 f32
  kExprI32Const, 0x02,  // i32.const
  kExprCallIndirect, 0x09, 0x00,  // call_indirect sig #9: v_v
  kExprI32Const, 0x02,  // i32.const
  kExprCallIndirect, 0x09, 0x00,  // call_indirect sig #9: v_v
  kExprI32Const, 0x02,  // i32.const
  kExprCallIndirect, 0x09, 0x00,  // call_indirect sig #9: v_v
  kExprTry, 0x7d,  // try @52 f32
    kExprF32Const, 0x3c, 0x14, 0x07, 0x93,  // f32.const
    kExprRefFunc, 0x01,  // ref.func
    kExprRefAsNonNull,  // ref.as_non_null
    kExprRefAsNonNull,  // ref.as_non_null
    kExprRefAsNonNull,  // ref.as_non_null
    kExprRefAsNonNull,  // ref.as_non_null
    kExprRefAsNonNull,  // ref.as_non_null
    kExprRefAsNonNull,  // ref.as_non_null
    kExprRefAsNonNull,  // ref.as_non_null
    kExprCallRef, 0x08,  // call_ref: v_v
    kExprI32Const, 0xec, 0xc5, 0xc0, 0xe5, 0x05,  // i32.const
    kExprI32Const, 0x9f, 0xfe, 0xed, 0xda, 0x78,  // i32.const
    kExprI32Const, 0xb7, 0x9e, 0x8c, 0xc1, 0x02,  // i32.const
    kExprI32Mul,  // i32.mul
    kExprI32StoreMem8, 0x00, 0xb5, 0xf5, 0x03,  // i32.store8
    kExprRefNull, 0x6e,  // ref.null
    kGCPrefix, kExprRefCastNull, 0x6c,  // ref.cast null
    kGCPrefix, kExprI31GetU,  // i31.get_u
    kExprIf, 0x40,  // if @101
      kExprEnd,  // end @103
    kExprEnd,  // end @104
kExprCatch, 0x00,  // catch @105
  kExprF32Const, 0xc7, 0x12, 0x51, 0x9b,  // f32.const
kExprCatchAll,  // catch_all @112
  kExprF32Const, 0x11, 0x4e, 0x0c, 0x1f,  // f32.const
  kExprEnd,  // end @118
kExprF32StoreMem, 0x02, 0xb5, 0xbd, 0x01,  // f32.store
kExprBr, 0x00,  // br depth=0
kExprBlock, 0x40,  // block @126
  kExprEnd,  // end @128
kExprEnd,  // end @129
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}
