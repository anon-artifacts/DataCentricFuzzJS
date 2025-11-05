d8.file.execute('v8/test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([makeField(wasmRefNullType(kWasmNullRef), true), makeField(kWasmExternRef, true), makeField(kWasmI32, true)]);
builder.addStruct([makeField(wasmRefNullType(kWasmI31Ref), false), makeField(wasmRefNullType(1), true), makeField(kWasmF32, false), makeField(kWasmI32, true)]);
builder.addStruct([makeField(wasmRefNullType(kWasmNullRef), true), makeField(kWasmExternRef, true), makeField(kWasmI32, true), makeField(kWasmI32, false), makeField(kWasmF64, true), makeField(wasmRefNullType(1), false)], 0);
builder.addStruct([makeField(wasmRefNullType(kWasmI31Ref), false), makeField(wasmRefNullType(1), true), makeField(kWasmF32, false), makeField(kWasmI32, true), makeField(wasmRefType(kWasmI31Ref), false)], 1);
builder.addArray(wasmRefNullType(kWasmStructRef), true);
builder.addArray(wasmRefNullType(kWasmArrayRef), true);
builder.addArray(wasmRefNullType(kWasmArrayRef), true, 5);
builder.addArray(kWasmI32, true);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.startRecGroup();
builder.addType(makeSig([], []));
builder.endRecGroup();
builder.startRecGroup();
builder.addType(makeSig([], []));
builder.addType(makeSig([], []));
builder.endRecGroup();
builder.addMemory(16, 32);
builder.addTable(kWasmFuncRef, 4, 4, undefined)
builder.addActiveElementSegment(0, wasmI32Const(0), [[kExprRefFunc, 0, ], [kExprRefFunc, 1, ], [kExprRefFunc, 2, ], [kExprRefFunc, 3, ]], kWasmFuncRef);
builder.addTag(makeSig([], []));
// Generate function 1 (out of 4).
builder.addFunction(undefined, 8 /* sig */)
  .addBodyWithEnd([
// signature: i_iii
// body:
kSimdPrefix, kExprS128Const, 0xec, 0xcf, 0x3e, 0xad, 0x23, 0xb0, 0x4a, 0xc3, 0x38, 0xda, 0x69, 0xb8, 0x17, 0xe0, 0x76, 0x88,  // v128.const
kSimdPrefix, kExprV128AnyTrue,  // v128.any_true
kExprMemoryGrow, 0x00,  // memory.grow
kExprI32Const, 0x02,  // i32.const
kExprCallIndirect, 0x0a, 0x00,  // call_indirect sig #10: v_v
kExprCallFunction, 0x03,  // call function #3: v_v
kExprCallFunction, 0x02,  // call function #2: v_v
kExprCallFunction, 0x02,  // call function #2: v_v
kExprCallFunction, 0x02,  // call function #2: v_v
kExprCallFunction, 0x02,  // call function #2: v_v
kExprI32Const, 0xaa, 0x7f,  // i32.const
kExprI32Const, 0x48,  // i32.const
kExprI32GeS,  // i32.ge_s
kExprI32Const, 0x86, 0x7f,  // i32.const
kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xf2, 0xc8, 0x01,  // i32.atomic.rmw8.sub_u
kExprI32LoadMem, 0x00, 0x80, 0x08,  // i32.load
kExprI32Const, 0xbb, 0xfe, 0x99, 0x9b, 0x7c,  // i32.const
kExprI32Const, 0xdd, 0xe2, 0xff, 0xcd, 0x03,  // i32.const
kExprI32Const, 0x12,  // i32.const
kExprSelect,  // select
kExprI32Const, 0x94, 0x7f,  // i32.const
kExprCallFunction, 0x00,  // call function #0: i_iii
kExprNop,  // nop
kExprF32Const, 0x53, 0x48, 0xf8, 0x5c,  // f32.const
kExprF32Const, 0x1b, 0x88, 0xdc, 0x06,  // f32.const
kExprF32Eq,  // f32.eq
kExprI32Const, 0x8b, 0x8c, 0xb6, 0xa3, 0x07,  // i32.const
kExprI32LtU,  // i32.lt_u
kExprI32DivS,  // i32.div_s
kAtomicPrefix, kExprI32AtomicOr8U, 0x00, 0x91, 0xc3, 0x03,  // i32.atomic.rmw8.or_u
kExprIf, 0x7c,  // if @103 f64
  kExprF64Const, 0x37, 0xc0, 0x63, 0x2d, 0xf2, 0xe9, 0xf4, 0x3b,  // f64.const
kExprElse,  // else @114
  kExprF64Const, 0xad, 0xc9, 0xb3, 0x74, 0x0e, 0x32, 0x65, 0x6d,  // f64.const
  kExprEnd,  // end @124
kNumericPrefix, kExprI32SConvertSatF64,  // i32.trunc_sat_f64_s
kExprEnd,  // end @127
]);
// Generate function 2 (out of 4).
builder.addFunction(undefined, 9 /* sig */)
  .addLocals(kWasmI64, 1)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprRefNull, 0x6c,  // ref.null
kExprBrOnNull, 0x00,  // br_on_null
kExprDrop,  // drop
kExprI32Const, 0x9e, 0xf5, 0xa4, 0xe3, 0x7e,  // i32.const
kExprI32Const, 0xe6, 0xb8, 0x8d, 0xf2, 0x78,  // i32.const
kAtomicPrefix, kExprI32AtomicStore8U, 0x00, 0xa3, 0xea, 0x01,  // i32.atomic.store8
kExprEnd,  // end @26
]);
// Generate function 3 (out of 4).
builder.addFunction(undefined, 10 /* sig */)
  .addLocals(kWasmI32, 2)
  .addBodyWithEnd([
// signature: v_v
// body:
kSimdPrefix, kExprS128Const, 0xf1, 0xd8, 0xf2, 0x06, 0x6f, 0x27, 0xe2, 0x6c, 0xcc, 0x08, 0x2d, 0xb9, 0xc5, 0x10, 0x44, 0xbc,  // v128.const
kSimdPrefix, kExprF32x4NearestInt,  // f32x4.nearest
kSimdPrefix, kExprI64x2UConvertI32x4Low, 0x01,  // i64x2.extend_low_i32x4_u
kSimdPrefix, kExprI16x8ExtractLaneS, 0x02,  // i16x8.extract_lane_s
kExprIf, 0x40,  // if @29
  kExprRefNull, 0x70,  // ref.null
  kExprLoop, 0x7f,  // loop @33 i32
    kExprCallFunction, 0x02,  // call function #2: v_v
    kExprCallFunction, 0x01,  // call function #1: v_v
    kExprF32Const, 0xcf, 0xc0, 0x49, 0xa6,  // f32.const
    kExprLoop, 0x40,  // loop @44
      kExprEnd,  // end @46
    kExprRefNull, 0x71,  // ref.null
    kExprRefNull, 0x6f,  // ref.null
    kExprI32Const, 0xac, 0xd8, 0x8e, 0xbf, 0x03,  // i32.const
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kExprI32Const, 0xb8, 0xed, 0xde, 0xf2, 0x06,  // i32.const
    kGCPrefix, kExprStructSet, 0x00, 0x02,  // struct.set
    kNumericPrefix, kExprI64SConvertSatF32,  // i64.trunc_sat_f32_s
    kExprI64Const, 0xe5, 0x00,  // i64.const
    kExprI64LtS,  // i64.lt_s
    kSimdPrefix, kExprS128Load8x8U, 0x03, 0xc6, 0x8d, 0x02,  // v128.load8x8_u
    kExprI32Const, 0x00,  // i32.const
    kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
    kSimdPrefix, kExprS128Const, 0x8c, 0x98, 0x3c, 0x04, 0xbc, 0x94, 0x43, 0x50, 0x46, 0x6b, 0x67, 0xd4, 0xd9, 0x5d, 0x7f, 0x64,  // v128.const
    kSimdPrefix, kExprI8x16SubSatU,  // i8x16.sub_sat_u
    kSimdPrefix, kExprI32x4TruncSatF64x2UZero, 0x01,  // i32x4.trunc_sat_f64x2_u_zero
    kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
    kSimdPrefix, kExprF32x4NearestInt,  // f32x4.nearest
    kExprI32Const, 0x00,  // i32.const
    kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
    kExprI32Const, 0x8f, 0x9e, 0x9b, 0xb3, 0x7c,  // i32.const
    kExprI32Const, 0x45,  // i32.const
    kAtomicPrefix, kExprI32AtomicAnd8U, 0x00, 0x7f,  // i32.atomic.rmw8.and_u
    kSimdPrefix, kExprI8x16ReplaceLane, 0x00,  // i8x16.replace_lane
    kSimdPrefix, kExprF32x4Neg, 0x01,  // f32x4.neg
    kSimdPrefix, kExprF32x4Eq,  // f32x4.eq
    kSimdPrefix, kExprI8x16Ne,  // i8x16.ne
    kSimdPrefix, kExprV128AnyTrue,  // v128.any_true
    kExprIf, 0x7f,  // if @142 i32
      kExprTry, 0x7c,  // try @144 f64
        kExprCallFunction, 0x02,  // call function #2: v_v
        kExprCallFunction, 0x01,  // call function #1: v_v
        kExprRefNull, 0x01,  // ref.null
        kExprI32Const, 0x00,  // i32.const
        kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
        kSimdPrefix, kExprI64x2AllTrue, 0x01,  // i64x2.all_true
        kGCPrefix, kExprStructSet, 0x01, 0x03,  // struct.set
        kExprI32Const, 0x00,  // i32.const
        kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
        kSimdPrefix, kExprI64x2AllTrue, 0x01,  // i64x2.all_true
        kExprBrIf, 0x02,  // br_if depth=2
        kExprI32Const, 0xc6, 0xd0, 0xe2, 0xcf, 0x7d,  // i32.const
        kExprRefNull, 0x6e,  // ref.null
        kExprBrOnNull, 0x01,  // br_on_null
        kExprDrop,  // drop
        kExprF64SConvertI32,  // f64.convert_i32_s
        kExprF64Ceil,  // f64.ceil
        kExprF64NearestInt,  // f64.nearest
        kExprF64Const, 0xd2, 0x50, 0x0c, 0x93, 0xff, 0x80, 0xd7, 0x4a,  // f64.const
        kExprCallFunction, 0x03,  // call function #3: v_v
        kExprCallFunction, 0x02,  // call function #2: v_v
        kExprI32Const, 0xcd, 0xb4, 0xa4, 0xca, 0x79,  // i32.const
        kExprF64Const, 0x01, 0x27, 0x21, 0xfb, 0x76, 0x8d, 0x17, 0xf5,  // f64.const
        kExprF64StoreMem, 0x01, 0xf3, 0xe4, 0x01,  // f64.store
        kExprF64Max,  // f64.max
      kExprCatchAll,  // catch_all @220
        kExprF64Const, 0x1c, 0xe4, 0xa7, 0x89, 0x7e, 0xd6, 0x10, 0x6d,  // f64.const
        kExprEnd,  // end @230
      kNumericPrefix, kExprI32SConvertSatF64,  // i32.trunc_sat_f64_s
    kExprElse,  // else @233
      kExprCallFunction, 0x02,  // call function #2: v_v
      kExprI32Const, 0x00,  // i32.const
      kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
      kSimdPrefix, kExprI64x2AllTrue, 0x01,  // i64x2.all_true
      kExprEnd,  // end @243
    kExprEnd,  // end @244
  kExprIf, 0x7c,  // if @245 f64
    kExprF64Const, 0x2c, 0xd0, 0x61, 0x8a, 0xe8, 0xb2, 0x1c, 0x39,  // f64.const
  kExprElse,  // else @256
    kExprF64Const, 0x70, 0xe3, 0xab, 0xb5, 0x45, 0xdd, 0xe1, 0x25,  // f64.const
    kExprEnd,  // end @266
  kNumericPrefix, kExprI32SConvertSatF64,  // i32.trunc_sat_f64_s
  kNumericPrefix, kExprTableGrow, 0x00,  // table.grow
  kExprRefNull, 0x6e,  // ref.null
  kGCPrefix, kExprRefCastNull, 0x6c,  // ref.cast null
  kExprRefNull, 0x01,  // ref.null
  kExprF32Const, 0x9d, 0x84, 0x86, 0x0b,  // f32.const
  kExprI32Const, 0xcc, 0xce, 0xe7, 0x9a, 0x7d,  // i32.const
  kExprI32Const, 0xf4, 0xae, 0x80, 0x2d,  // i32.const
  kGCPrefix, kExprRefI31,  // ref.i31
  kGCPrefix, kExprStructNew, 0x03,  // struct.new
  kGCPrefix, kExprStructGet, 0x03, 0x03,  // struct.get
  kSimdPrefix, kExprI16x8Splat,  // i16x8.splat
  kSimdPrefix, kExprS128Const, 0x34, 0x6f, 0x64, 0xff, 0x6d, 0xe3, 0x85, 0x44, 0xa5, 0x13, 0xae, 0xa7, 0xb1, 0xca, 0x94, 0xa4,  // v128.const
  kSimdPrefix, kExprI8x16MaxU,  // i8x16.max_u
  kSimdPrefix, kExprS128Store8Lane, 0x00, 0x80, 0xfe, 0x03, 0x00,  // v128.store8_lane
  kExprEnd,  // end @333
kExprEnd,  // end @334
]);
// Generate function 4 (out of 4).
builder.addFunction(undefined, 11 /* sig */)
  .addLocals(wasmRefNullType(kWasmNullFuncRef), 1).addLocals(wasmRefType(kWasmAnyRef), 1).addLocals(wasmRefNullType(6), 1).addLocals(kWasmI32, 3).addLocals(kWasmI64, 1).addLocals(wasmRefNullType(8), 1).addLocals(wasmRefNullType(kWasmI31Ref), 1).addLocals(wasmRefNullType(8), 1).addLocals(wasmRefType(11), 1).addLocals(kWasmI32, 1).addLocals(wasmRefNullType(kWasmI31Ref), 1).addLocals(kWasmI32, 6)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprRefNull, 0x71,  // ref.null
kExprRefNull, 0x6f,  // ref.null
kExprI32Const, 0x80, 0xcf, 0x94, 0xb1, 0x04,  // i32.const
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprLocalSet, 0x01,  // local.set
kExprRefFunc, 0x03,  // ref.func
kExprLocalSet, 0x0a,  // local.set
kExprEnd,  // end @49
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}
