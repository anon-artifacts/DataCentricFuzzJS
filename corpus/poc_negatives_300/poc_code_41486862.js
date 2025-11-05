d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([makeField(kWasmF32, false), makeField(kWasmAnyRef, false), makeField(wasmRefType(kWasmI31Ref), false), makeField(kWasmI32, false)]);
builder.addStruct([]);
builder.addStruct([]);
builder.addStruct([]);
builder.addArray(kWasmI32, true);
builder.addArray(kWasmI32, true);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addType(makeSig([], []));
builder.addType(makeSig([], []));
builder.addMemory(16, 32);
builder.addTable(kWasmFuncRef, 3, 3, undefined)
builder.addActiveElementSegment(0, wasmI32Const(0), [[kExprRefFunc, 0, ], [kExprRefFunc, 1, ], [kExprRefFunc, 2, ]], kWasmFuncRef);
builder.addTag(makeSig([], []));
// Generate function 1 (out of 3).
builder.addFunction(undefined, 6 /* sig */)
  .addLocals(wasmRefNullType(kWasmNullExternRef), 1).addLocals(wasmRefType(2), 1).addLocals(kWasmF32, 1).addLocals(wasmRefType(2), 4).addLocals(kWasmI32, 1).addLocals(wasmRefType(2), 1).addLocals(kWasmI32, 1).addLocals(wasmRefType(kWasmArrayRef), 1).addLocals(wasmRefNullType(2), 1).addLocals(wasmRefNullType(0), 1).addLocals(wasmRefType(kWasmExternRef), 4).addLocals(kWasmI64, 1).addLocals(wasmRefType(2), 5).addLocals(wasmRefNullType(0), 1)
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprLoop, 0x7c,  // loop @38 f64
  kExprLoop, 0x7c,  // loop @40 f64
    kExprLoop, 0x7c,  // loop @42 f64
      kExprLoop, 0x7c,  // loop @44 f64
        kExprLoop, 0x7c,  // loop @46 f64
          kExprLoop, 0x7c,  // loop @48 f64
            kExprTry, 0x7c,  // try @50 f64
              kExprF64Const, 0x78, 0xcf, 0x65, 0x8e, 0x8c, 0x2d, 0x8c, 0x70,  // f64.const
            kExprCatch, 0x00,  // catch @61
              kExprF64Const, 0xea, 0x98, 0x1c, 0x38, 0x68, 0xc0, 0x3d, 0x8c,  // f64.const
              kExprEnd,  // end @72
            kExprEnd,  // end @73
          kExprEnd,  // end @74
        kExprEnd,  // end @75
      kExprEnd,  // end @76
    kExprEnd,  // end @77
  kExprEnd,  // end @78
kExprF64Const, 0x7a, 0x31, 0xe8, 0x0d, 0x63, 0xd4, 0x1a, 0x13,  // f64.const
kExprF64Const, 0x6a, 0x5d, 0x37, 0x3f, 0x8d, 0xf7, 0xae, 0xd4,  // f64.const
kExprF64Const, 0xb1, 0xfb, 0xd1, 0xcd, 0xb9, 0xf2, 0xb8, 0xcc,  // f64.const
kExprF64CopySign,  // f64.copysign
kExprF64CopySign,  // f64.copysign
kExprLoop, 0x7c,  // loop @108 f64
  kExprLoop, 0x7c,  // loop @110 f64
    kExprF64Const, 0x03, 0xc3, 0xbb, 0xa7, 0xbd, 0x9c, 0x3f, 0xf4,  // f64.const
    kExprEnd,  // end @121
  kExprEnd,  // end @122
kExprF64CopySign,  // f64.copysign
kExprF64Div,  // f64.div
kExprLoop, 0x7c,  // loop @125 f64
  kExprLoop, 0x7c,  // loop @127 f64
    kExprLoop, 0x7c,  // loop @129 f64
      kExprRefFunc, 0x00,  // ref.func
      kExprCallFunction, 0x02,  // call function #2: v_v
      kExprCallFunction, 0x02,  // call function #2: v_v
      kExprF64Const, 0xdf, 0x85, 0xce, 0xce, 0x1c, 0x46, 0x89, 0x5c,  // f64.const
      kExprI32Const, 0xb5, 0xab, 0xfe, 0xfb, 0x78,  // i32.const
      kExprI64Const, 0xb9, 0xcd, 0x8f, 0xf1, 0x80, 0x8e, 0xa8, 0xd5, 0x79,  // i64.const
      kExprI64StoreMem, 0x00, 0x90, 0x20,  // i64.store
      kExprI32Const, 0x9f, 0x81, 0xb6, 0xb5, 0x79,  // i32.const
      kExprI64Const, 0xac, 0xb2, 0xd5, 0xc2, 0x9f, 0xcb, 0xb5, 0x94, 0x65,  // i64.const
      kExprI64Const, 0xa1, 0xad, 0xaf, 0xa0, 0xc8, 0xc9, 0x8b, 0xf0, 0x7d,  // i64.const
      kExprI64RemS,  // i64.rem_s
      kExprI64StoreMem, 0x02, 0x90, 0x20,  // i64.store
      kExprF64Const, 0x16, 0x1e, 0xe5, 0xaa, 0x11, 0x40, 0x04, 0xbd,  // f64.const
      kExprF64Const, 0xbc, 0x1e, 0x72, 0x22, 0x46, 0x4a, 0x09, 0x4c,  // f64.const
      kExprF64Const, 0x36, 0xf9, 0xfd, 0x77, 0x1d, 0x0d, 0x93, 0xce,  // f64.const
      kExprF64CopySign,  // f64.copysign
      kExprF64CopySign,  // f64.copysign
      kExprF64Const, 0x1d, 0x24, 0x3d, 0xcf, 0xef, 0x8e, 0xe2, 0xaa,  // f64.const
      kExprF64Const, 0x5f, 0xce, 0xed, 0x46, 0x41, 0xe4, 0x9c, 0x95,  // f64.const
      kExprF64Div,  // f64.div
      kExprF64CopySign,  // f64.copysign
      kExprF64Div,  // f64.div
      kExprF64Const, 0x81, 0x03, 0xbe, 0x32, 0x14, 0x73, 0xe8, 0xa4,  // f64.const
      kExprF64Div,  // f64.div
      kNumericPrefix, kExprI32UConvertSatF64,  // i32.trunc_sat_f64_u
      kExprRefNull, 0x70,  // ref.null
      kExprI32Const, 0xcb, 0xf7, 0xdd, 0x92, 0x07,  // i32.const
      kNumericPrefix, kExprTableGrow, 0x00,  // table.grow
      kExprI32Const, 0x3a,  // i32.const
      kExprI64Const, 0xb5, 0xc7, 0xb9, 0xb7, 0xe7, 0xef, 0xa6, 0xe0, 0x28,  // i64.const
      kAtomicPrefix, kExprI64AtomicExchange, 0x00, 0xb8, 0x70,  // i64.atomic.rmw.xchg
      kAtomicPrefix, kExprI64AtomicOr16U, 0x01, 0xb8, 0x70,  // i64.atomic.rmw16.or_u
      kAtomicPrefix, kExprI64AtomicExchange, 0x00, 0xb8, 0x70,  // i64.atomic.rmw.xchg
      kExprF64ReinterpretI64,  // f64.reinterpret_i64
      kNumericPrefix, kExprI32UConvertSatF64,  // i32.trunc_sat_f64_u
      kExprF64SConvertI32,  // f64.convert_i32_s
      kExprF64NearestInt,  // f64.nearest
      kNumericPrefix, kExprI32UConvertSatF64,  // i32.trunc_sat_f64_u
      kNumericPrefix, kExprTableGrow, 0x00,  // table.grow
      kExprLocalTee, 0x0c,  // local.tee
      kExprF64SConvertI32,  // f64.convert_i32_s
      kExprEnd,  // end @310
    kExprEnd,  // end @311
  kExprEnd,  // end @312
kExprF64Div,  // f64.div
kNumericPrefix, kExprI32UConvertSatF64,  // i32.trunc_sat_f64_u
kGCPrefix, kExprRefI31,  // ref.i31
kGCPrefix, kExprRefCastNull, 0x6c,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x6c,  // ref.cast null
kGCPrefix, kExprRefCast, 0x02,  // ref.cast
kExprLocalSet, 0x04,  // local.set
kExprRefNull, 0x6e,  // ref.null
kGCPrefix, kExprRefCast, 0x02,  // ref.cast
kExprLocalSet, 0x06,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x07,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x08,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x09,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x0b,  // local.set
kExprI32Const, 0xe8, 0xd9, 0xc3, 0xc3, 0x01,  // i32.const
kExprI32Const, 0x92, 0x90, 0xe1, 0xfa, 0x79,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x04,  // array.new
kExprLocalSet, 0x0d,  // local.set
kExprRefNull, 0x6f,  // ref.null
kExprRefAsNonNull,  // ref.as_non_null
kExprLocalSet, 0x10,  // local.set
kExprRefNull, 0x6f,  // ref.null
kExprRefAsNonNull,  // ref.as_non_null
kExprLocalSet, 0x11,  // local.set
kExprRefNull, 0x6f,  // ref.null
kExprRefAsNonNull,  // ref.as_non_null
kExprLocalSet, 0x12,  // local.set
kExprRefNull, 0x6f,  // ref.null
kExprRefAsNonNull,  // ref.as_non_null
kExprLocalSet, 0x13,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x15,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x16,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x17,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x18,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x19,  // local.set
kExprI32Const, 0x9f, 0xa3, 0xcc, 0xc5, 0x07,  // i32.const
kExprEnd,  // end @427
]);
// Generate function 2 (out of 3).
builder.addFunction(undefined, 7 /* sig */)
  .addLocals(wasmRefNullType(kWasmNullExternRef), 1).addLocals(wasmRefType(2), 2).addLocals(kWasmF64, 1).addLocals(kWasmI32, 1).addLocals(wasmRefNullType(1), 1).addLocals(kWasmF64, 1).addLocals(wasmRefNullType(4), 1).addLocals(wasmRefType(kWasmExternRef), 2).addLocals(wasmRefType(2), 1).addLocals(wasmRefNullType(kWasmNullExternRef), 1).addLocals(wasmRefNullType(0), 2).addLocals(wasmRefType(2), 2).addLocals(kWasmI32, 4)
  .addBodyWithEnd([
// signature: v_v
// body:
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x01,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x02,  // local.set
kExprRefNull, 0x6f,  // ref.null
kExprRefAsNonNull,  // ref.as_non_null
kExprLocalSet, 0x08,  // local.set
kExprRefNull, 0x6f,  // ref.null
kExprRefAsNonNull,  // ref.as_non_null
kExprLocalSet, 0x09,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x0a,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x0e,  // local.set
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x0f,  // local.set
kExprEnd,  // end @69
]);
// Generate function 3 (out of 3).
builder.addFunction(undefined, 8 /* sig */)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI16x8SubSatU, 0x01,  // i16x8.sub_sat_u
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprF32x4Neg, 0x01,  // f32x4.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI16x8AddSatS, 0x01,  // i16x8.add_sat_s
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, ...kExprF32x4Qfma,  // f32x4.qfma
kExprI64Const, 0xa1, 0xbc, 0xf7, 0xb0, 0x9f, 0xc3, 0xcd, 0x8b, 0x4b,  // i64.const
kExprI32ConvertI64,  // i32.wrap_i64
kSimdPrefix, kExprI16x8Shl, 0x01,  // i16x8.shl
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI8x16GeU,  // i8x16.ge_u
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprI16x8Neg, 0x01,  // i16x8.neg
kSimdPrefix, kExprF32x4Max, 0x01,  // f32x4.max
kSimdPrefix, kExprI16x8SubSatU, 0x01,  // i16x8.sub_sat_u
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI16x8SubSatU, 0x01,  // i16x8.sub_sat_u
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4AllTrue, 0x01,  // i32x4.all_true
kSimdPrefix, kExprI32x4Splat,  // i32x4.splat
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI8x16GeS,  // i8x16.ge_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4ExtAddPairwiseI16x8S,  // i32x4.extadd_pairwise_i16x8_s
kSimdPrefix, kExprI32x4AllTrue, 0x01,  // i32x4.all_true
kExprF64Const, 0xad, 0x83, 0xa5, 0x76, 0x18, 0xc5, 0x55, 0xf6,  // f64.const
kExprF64Const, 0x86, 0x09, 0xf0, 0x8f, 0x94, 0xc0, 0x49, 0x94,  // f64.const
kExprF64Const, 0xd9, 0xb5, 0x7e, 0x69, 0x2f, 0x59, 0x86, 0xdb,  // f64.const
kExprF64Const, 0x8a, 0x97, 0x35, 0x31, 0x58, 0x13, 0x4a, 0xb1,  // f64.const
kExprF64Div,  // f64.div
kExprF64Div,  // f64.div
kExprF64Const, 0xfb, 0x9c, 0x53, 0xe4, 0x4b, 0xad, 0x6b, 0x5f,  // f64.const
kExprF64Div,  // f64.div
kExprF64Div,  // f64.div
kNumericPrefix, kExprI32UConvertSatF64,  // i32.trunc_sat_f64_u
kAtomicPrefix, kExprI32AtomicAdd8U, 0x00, 0x38,  // i32.atomic.rmw8.add_u
kExprIf, 0x40,  // if @272
  kExprI32Const, 0xbf, 0xd7, 0xaf, 0xf5, 0x05,  // i32.const
  kExprI32Const, 0xfa, 0x8c, 0x8f, 0xcf, 0x7c,  // i32.const
  kExprI32Const, 0xe2, 0x92, 0xec, 0xf7, 0x7c,  // i32.const
  kExprRefFunc, 0x00,  // ref.func
  kExprCallRef, 0x06,  // call_ref: i_iii
  kExprDrop,  // drop
  kExprEnd,  // end @297
kExprEnd,  // end @298
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}
