d8.file.execute('../../v8/v8/test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.startRecGroup();
builder.addStruct([makeField(wasmRefNullType(kWasmNullExternRef), false), makeField(kWasmI32, false), makeField(kWasmI32, false)]);
builder.addStruct([]);
builder.addArray(kWasmI32, true);
builder.addArray(kWasmI32, true);
builder.endRecGroup();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.startRecGroup();
builder.addType(makeSig([], []));
builder.endRecGroup();
builder.addMemory(16, 32);
builder.addTable(kWasmFuncRef, 2, 2, undefined)
builder.addActiveElementSegment(0, wasmI32Const(0), [[kExprRefFunc, 0, ], [kExprRefFunc, 1, ]], kWasmFuncRef);
builder.addTag(makeSig([], []));
// Generate function 1 (out of 2).
builder.addFunction(undefined, 4 /* sig */)
  .addLocals(wasmRefNullType(4), 1).addLocals(wasmRefType(kWasmEqRef), 1).addLocals(wasmRefType(kWasmI31Ref), 1).addLocals(wasmRefType(1), 1).addLocals(wasmRefNullType(3), 1).addLocals(wasmRefNullType(1), 1).addLocals(kWasmI32, 1).addLocals(wasmRefType(kWasmArrayRef), 1).addLocals(wasmRefNullType(3), 1).addLocals(kWasmI32, 1).addLocals(wasmRefType(kWasmEqRef), 1).addLocals(wasmRefType(2), 1).addLocals(kWasmF32, 1).addLocals(wasmRefType(kWasmEqRef), 1).addLocals(wasmRefNullType(2), 1)
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x05, 0x00,  // call_indirect sig #5: v_v
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x05, 0x00,  // call_indirect sig #5: v_v
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x05, 0x00,  // call_indirect sig #5: v_v
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x05, 0x00,  // call_indirect sig #5: v_v
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x05, 0x00,  // call_indirect sig #5: v_v
kExprI32Const, 0xd6, 0x00,  // i32.const
kExprI32Const, 0xa3, 0x2b,  // i32.const
kExprI32Const, 0xd8, 0x00,  // i32.const
kExprI32Const, 0x00,  // i32.const
kExprReturnCallIndirect, 0x04, 0x00,  // return_call_indirect
kExprI32Const, 0xe5, 0xb9, 0xd3, 0x9e, 0x01,  // i32.const
kExprI32LoadMem8S, 0x00, 0xc1, 0x01,  // i32.load8_s
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x03,  // array.new
kGCPrefix, kExprRefCastNull, 0x03,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x03,  // ref.cast null
kGCPrefix, kExprRefCast, 0x03,  // ref.cast
kExprLocalSet, 0x04,  // local.set
kExprI32Const, 0xb3, 0xe7, 0xa4, 0xce, 0x02,  // i32.const
kGCPrefix, kExprRefI31,  // ref.i31
kExprLocalSet, 0x05,  // local.set
kGCPrefix, kExprStructNew, 0x01,  // struct.new
kExprLocalSet, 0x06,  // local.set
kExprI32Const, 0xae, 0xaa, 0xb3, 0xa3, 0x02,  // i32.const
kExprI32Const, 0xd0, 0xbd, 0xfd, 0xa8, 0x01,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x02,  // array.new
kExprLocalSet, 0x0a,  // local.set
kExprRefNull, 0x72,  // ref.null
kExprI32Const, 0xf5, 0xc3, 0x9b, 0x81, 0x04,  // i32.const
kExprI32Const, 0xaa, 0xba, 0x9c, 0xee, 0x05,  // i32.const
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprLocalSet, 0x0d,  // local.set
kExprI32Const, 0x95, 0xfa, 0x97, 0x8c, 0x78,  // i32.const
kExprI32Const, 0x97, 0xf3, 0x86, 0x9b, 0x78,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x02,  // array.new
kExprLocalSet, 0x0e,  // local.set
kExprRefNull, 0x72,  // ref.null
kExprI32Const, 0xf8, 0xb9, 0x80, 0x9c, 0x7d,  // i32.const
kExprI32Const, 0x92, 0xe2, 0xf7, 0xe7, 0x7c,  // i32.const
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprLocalSet, 0x10,  // local.set
kExprI32Const, 0x95, 0xbc, 0xec, 0xab, 0x7e,  // i32.const
kExprEnd,  // end @208
]);
// Generate function 2 (out of 2).
builder.addFunction(undefined, 5 /* sig */)
  .addLocals(kWasmS128, 1)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprI32Const, 0x8c, 0xc7, 0xae, 0x8d, 0x7c,  // i32.const
kExprF64Const, 0x8a, 0x7a, 0xd4, 0x2c, 0xc6, 0xf6, 0xf3, 0x15,  // f64.const
kExprF64Const, 0xed, 0xe1, 0x25, 0x16, 0x3f, 0xca, 0x88, 0x7d,  // f64.const
kExprF64Ne,  // f64.ne
kExprI64Const, 0xb9, 0xdf, 0xd6, 0xda, 0xf3, 0x99, 0x35,  // i64.const
kExprTry, 0x7e,  // try @36 i64
  kExprF32Const, 0xb3, 0xb6, 0xf4, 0x92,  // f32.const
  kExprF32Trunc,  // f32.trunc
  kExprF32Trunc,  // f32.trunc
  kExprF32NearestInt,  // f32.nearest
  kExprI32SConvertF32,  // i32.trunc_f32_s
  kAtomicPrefix, kExprI64AtomicLoad32U, 0x02, 0xe0, 0xe8, 0x01,  // i64.atomic.load32_u
  kExprEnd,  // end @53
kExprI64ShrS,  // i64.shr_s
kAtomicPrefix, kExprI64AtomicStore16U, 0x01, 0x8f, 0xd4, 0x03,  // i64.atomic.store16
kExprRefNull, 0x6e,  // ref.null
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprExternConvertAny,  // extern.convert_any
kExprBrOnNull, 0x00,  // br_on_null
kExprDrop,  // drop
kExprI64Const, 0xb4, 0x8f, 0x89, 0xc9, 0x87, 0xfd, 0xed, 0xb7, 0xc5, 0x00,  // i64.const
kAtomicPrefix, kExprI64AtomicOr, 0x03, 0x10,  // i64.atomic.rmw.or
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x05, 0x00,  // call_indirect sig #5: v_v
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x05, 0x00,  // call_indirect sig #5: v_v
kExprI32Const, 0x64,  // i32.const
kExprI32Const, 0xbd, 0x7f,  // i32.const
kExprI32Const, 0xff, 0x00,  // i32.const
kExprI32Const, 0x00,  // i32.const
kExprCallIndirect, 0x04, 0x00,  // call_indirect sig #4: i_iii
kExprNop,  // nop
kExprF32Const, 0xa5, 0x7b, 0x4e, 0x98,  // f32.const
kExprF32Const, 0xd9, 0x68, 0xb6, 0x3c,  // f32.const
kExprF32NearestInt,  // f32.nearest
kExprF32Add,  // f32.add
kExprF32NearestInt,  // f32.nearest
kExprF32NearestInt,  // f32.nearest
kExprI32ReinterpretF32,  // i32.reinterpret_f32
kExprF32Const, 0x65, 0x88, 0x01, 0x5e,  // f32.const
kExprF32Const, 0xe1, 0xcb, 0xe3, 0x1d,  // f32.const
kExprF32Eq,  // f32.eq
kExprI64LoadMem8U, 0x00, 0x95, 0x2a,  // i64.load8_u
kAtomicPrefix, kExprI64AtomicStore16U, 0x01, 0xb4, 0xe9, 0x02,  // i64.atomic.store16
kExprI32Const, 0x85, 0x85, 0xc9, 0xa3, 0x02,  // i32.const
kExprI32Const, 0x81, 0xae, 0xf8, 0x99, 0x07,  // i32.const
kExprI32Const, 0x00,  // i32.const
kExprCallIndirect, 0x04, 0x00,  // call_indirect sig #4: i_iii
kExprNop,  // nop
kExprI64Const, 0xd1, 0x91, 0xf8, 0xff, 0xe8, 0x84, 0xc1, 0xb8, 0x12,  // i64.const
kExprI64Const, 0xe1, 0x82, 0xc9, 0xb6, 0xd8, 0x83, 0x9e, 0xbf, 0xf3, 0x00,  // i64.const
kExprI64Shl,  // i64.shl
kExprI64Const, 0x95, 0xfb, 0xe4, 0xae, 0xce, 0xb2, 0xad, 0xd8, 0x47,  // i64.const
kExprI64Const, 0xde, 0xff, 0xe4, 0x98, 0x96, 0xe3, 0xa2, 0x99, 0x3b,  // i64.const
kExprI64Const, 0x8b, 0xb5, 0xb0, 0x87, 0xe3, 0xb8, 0xf4, 0xa0, 0xc7, 0x00,  // i64.const
kExprI64Shl,  // i64.shl
kExprI64Shl,  // i64.shl
kExprI64Const, 0xcc, 0x91, 0xfd, 0x9d, 0xbf, 0xe7, 0xdc, 0xbf, 0x5e,  // i64.const
kExprI32Const, 0xc7, 0x8a, 0xe2, 0xd5, 0x78,  // i32.const
kExprI64Const, 0xbe, 0xee, 0xf3, 0xcd, 0x8f, 0xa4, 0x9d, 0x84, 0x14,  // i64.const
kAtomicPrefix, kExprI64AtomicSub16U, 0x01, 0x9d, 0x01,  // i64.atomic.rmw16.sub_u
kExprI32Const, 0x89, 0x99, 0x86, 0x97, 0x7c,  // i32.const
kExprI64Const, 0x8f, 0xca, 0xca, 0xee, 0x85, 0x81, 0xd4, 0x9a, 0x43,  // i64.const
kAtomicPrefix, kExprI64AtomicSub16U, 0x01, 0x9d, 0xbb, 0x02,  // i64.atomic.rmw16.sub_u
kExprI64Shl,  // i64.shl
kExprI64Shl,  // i64.shl
kExprI64Shl,  // i64.shl
kExprI64Shl,  // i64.shl
kExprI32Const, 0xaf, 0x9f, 0xcd, 0x89, 0x06,  // i32.const
kExprI32Const, 0xb1, 0xd4, 0xc7, 0x8a, 0x04,  // i32.const
kExprI32Add,  // i32.add
kExprI32Const, 0xd5, 0xe8, 0xbb, 0xb2, 0x7e,  // i32.const
kExprI32Const, 0xfd, 0xab, 0x9f, 0x8d, 0x7c,  // i32.const
kExprI32Add,  // i32.add
kExprI32Const, 0xe5, 0xea, 0x89, 0x84, 0x05,  // i32.const
kExprI64Const, 0x8a, 0xf1, 0xe3, 0xf0, 0xab, 0x93, 0xf0, 0xf8, 0x12,  // i64.const
kAtomicPrefix, kExprI64AtomicSub16U, 0x01, 0x9d, 0xbb, 0x02,  // i64.atomic.rmw16.sub_u
kAtomicPrefix, kExprI64AtomicSub16U, 0x01, 0x9d, 0xbb, 0x02,  // i64.atomic.rmw16.sub_u
kAtomicPrefix, kExprI64AtomicSub16U, 0x01, 0x9d, 0xbb, 0x02,  // i64.atomic.rmw16.sub_u
kExprI64Shl,  // i64.shl
kAtomicPrefix, kExprI64AtomicOr8U, 0x00, 0xfa, 0xe6, 0x01,  // i64.atomic.rmw8.or_u
kExprI32Const, 0xcb, 0xab, 0x8b, 0x8d, 0x7d,  // i32.const
kExprI32Const, 0xe3, 0x87, 0xe2, 0xcf, 0x03,  // i32.const
kExprI32Add,  // i32.add
kExprI32Const, 0xbb, 0xed, 0xa4, 0xc4, 0x7b,  // i32.const
kExprI32LoadMem8U, 0x00, 0x33,  // i32.load8_u
kExprI32LoadMem16U, 0x00, 0xe7, 0xca, 0x03,  // i32.load16_u
kExprI64Const, 0x34,  // i64.const
kExprRefNull, 0x6e,  // ref.null
kExprBrOnNull, 0x00,  // br_on_null
kExprDrop,  // drop
kExprI64Const, 0xb4, 0xb3, 0xa8, 0xde, 0xd3, 0xab, 0xc6, 0xef, 0xb3, 0x7f,  // i64.const
kExprI64DivU,  // i64.div_u
kAtomicPrefix, kExprI64AtomicXor, 0x03, 0xf0, 0xaa, 0x01,  // i64.atomic.rmw.xor
kAtomicPrefix, kExprI64AtomicAdd32U, 0x02, 0x9d, 0xbb, 0x02,  // i64.atomic.rmw32.add_u
kExprI64RemS,  // i64.rem_s
kExprI64Eq,  // i64.eq
kSimdPrefix, kExprS128Load32Splat, 0x01, 0x64,  // v128.load32_splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI16x8UConvertI32x4, 0x01,  // i16x8.narrow_i32x4_u
kSimdPrefix, kExprI8x16MaxU,  // i8x16.max_u
kSimdPrefix, kExprI16x8UConvertI32x4, 0x01,  // i16x8.narrow_i32x4_u
kSimdPrefix, kExprI16x8UConvertI32x4, 0x01,  // i16x8.narrow_i32x4_u
kSimdPrefix, kExprI16x8ExtMulLowI8x16S, 0x01,  // i16x8.extmul_low_i8x16_s
kSimdPrefix, kExprF32x4Neg, 0x01,  // f32x4.neg
kSimdPrefix, kExprI16x8Abs, 0x01,  // i16x8.abs
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI16x8LeU,  // i16x8.le_u
kSimdPrefix, kExprF64x2Eq,  // f64x2.eq
kSimdPrefix, kExprF64x2Trunc,  // f64x2.trunc
kSimdPrefix, kExprI16x8UConvertI8x16Low, 0x01,  // i16x8.extend_low_i8x16_u
kSimdPrefix, kExprF32x4Abs, 0x01,  // f32x4.abs
kSimdPrefix, kExprI16x8ExtractLaneS, 0x00,  // i16x8.extract_lane_s
kExprI32LoadMem8S, 0x00, 0xfc, 0xc2, 0x03,  // i32.load8_s
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprS128Const, 0xf3, 0x13, 0xf7, 0x8a, 0xf2, 0x49, 0xc5, 0xb3, 0xb3, 0xc2, 0xe2, 0xb2, 0x50, 0xf4, 0x74, 0x23,  // v128.const
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4Pmin, 0x01,  // f32x4.pmin
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI16x8SubSatU, 0x01,  // i16x8.sub_sat_u
kSimdPrefix, kExprI8x16Shuffle, 0x0f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  // i8x16.shuffle
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprF64x2Lt,  // f64x2.lt
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprI16x8AddSatU, 0x01,  // i16x8.add_sat_u
kExprRefNull, 0x6b,  // ref.null
kGCPrefix, kExprRefCastNull, 0x01,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x03,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x03,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x03,  // ref.cast null
kExprRefIsNull,  // ref.is_null
kSimdPrefix, kExprS128Load8x8S, 0x02, 0xbe, 0xe7, 0x03,  // v128.load8x8_s
kSimdPrefix, kExprI16x8SConvertI8x16Low, 0x01,  // i16x8.extend_low_i8x16_s
kSimdPrefix, kExprI16x8SConvertI8x16Low, 0x01,  // i16x8.extend_low_i8x16_s
kSimdPrefix, kExprI16x8SConvertI8x16Low, 0x01,  // i16x8.extend_low_i8x16_s
kSimdPrefix, kExprI16x8SConvertI8x16Low, 0x01,  // i16x8.extend_low_i8x16_s
kSimdPrefix, kExprI16x8UConvertI8x16Low, 0x01,  // i16x8.extend_low_i8x16_u
kSimdPrefix, kExprI16x8SConvertI8x16Low, 0x01,  // i16x8.extend_low_i8x16_s
kSimdPrefix, kExprI16x8SConvertI8x16Low, 0x01,  // i16x8.extend_low_i8x16_s
kSimdPrefix, kExprI16x8SConvertI8x16Low, 0x01,  // i16x8.extend_low_i8x16_s
kSimdPrefix, kExprI16x8SConvertI8x16Low, 0x01,  // i16x8.extend_low_i8x16_s
kSimdPrefix, kExprI16x8SConvertI8x16Low, 0x01,  // i16x8.extend_low_i8x16_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
kSimdPrefix, kExprI16x8Ne,  // i16x8.ne
kSimdPrefix, kExprS128Store8Lane, 0x00, 0xb7, 0x8b, 0x01, 0x00,  // v128.store8_lane
kExprEnd,  // end @656
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}
