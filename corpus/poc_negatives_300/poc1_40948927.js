d8.file.execute('v8/test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([makeField(wasmRefNullType(kWasmI31Ref), true), makeField(wasmRefNullType(kWasmI31Ref), true), makeField(wasmRefNullType(kWasmI31Ref), true)]);
builder.addStruct([makeField(wasmRefNullType(kWasmI31Ref), true), makeField(wasmRefNullType(kWasmI31Ref), true), makeField(wasmRefNullType(kWasmI31Ref), true), makeField(kWasmI8, true), makeField(kWasmI8, true), makeField(kWasmI64, true)], 0);
builder.addStruct([makeField(kWasmF32, false)]);
builder.addStruct([makeField(kWasmI8, false), makeField(kWasmI64, false), makeField(wasmRefNullType(kWasmNullRef), false)]);
builder.startRecGroup();
builder.addArray(wasmRefNullType(7), true);
builder.addArray(kWasmI16, true);
builder.addArray(wasmRefNullType(kWasmI31Ref), true);
builder.addArray(kWasmI16, true);
builder.endRecGroup();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addType(makeSig([kWasmF64, wasmRefNullType(6), kWasmI32], [kWasmEqRef, wasmRefType(2), wasmRefType(9), wasmRefNullType(kWasmNullExternRef), kWasmF64, kWasmFuncRef, wasmRefNullType(kWasmStructRef), wasmRefNullType(0), wasmRefType(0), kWasmI32, wasmRefType(kWasmArrayRef), wasmRefType(kWasmI31Ref)]));
builder.addType(makeSig([], []));
builder.startRecGroup();
builder.addType(makeSig([], []));
builder.endRecGroup();
builder.addType(makeSig([wasmRefType(kWasmExternRef), wasmRefType(3), wasmRefNullType(9), wasmRefType(5), wasmRefNullType(6)], [kWasmEqRef, wasmRefType(2), wasmRefType(9), wasmRefNullType(kWasmNullExternRef), kWasmF64, kWasmFuncRef, wasmRefNullType(kWasmStructRef), wasmRefNullType(0), wasmRefType(0), kWasmI32, wasmRefType(kWasmArrayRef)]));
builder.addMemory(16, 32);
builder.addTable(kWasmFuncRef, 4, 4, undefined)
builder.addActiveElementSegment(0, wasmI32Const(0), [[kExprRefFunc, 0, ], [kExprRefFunc, 1, ], [kExprRefFunc, 2, ], [kExprRefFunc, 3, ]], kWasmFuncRef);
builder.addTag(makeSig([], []));
// Generate function 1 (out of 4).
builder.addFunction(undefined, 8 /* sig */)
  .addLocals(wasmRefNullType(kWasmNullExternRef), 5)
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprI32Const, 0x8e, 0xf5, 0xbd, 0x88, 0x7d,  // i32.const
kExprLoop, 0x7d,  // loop @9 f32
  kExprTry, 0x40,  // try @11
  kExprCatchAll,  // catch_all @13
    kExprTry, 0x7f,  // try @14 i32
      kExprI32Const, 0xde, 0xb2, 0xb3, 0xc2, 0x7d,  // i32.const
    kExprCatchAll,  // catch_all @22
      kExprI32Const, 0x87, 0x8e, 0x8d, 0xd7, 0x05,  // i32.const
      kExprEnd,  // end @29
    kExprF64Const, 0x6a, 0x93, 0xe1, 0xc5, 0xa4, 0xa1, 0x72, 0xda,  // f64.const
    kExprRefNull, 0x6b,  // ref.null
    kGCPrefix, kExprRefCastNull, 0x06,  // ref.cast null
    kExprI32Const, 0x8d, 0x95, 0xce, 0xdb, 0x78,  // i32.const
    kExprRefNull, 0x09,  // ref.null
    kExprCallRef, 0x09,  // call_ref: nrrndnnnrirr_dni
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprI32Const, 0xc2, 0xf9, 0x80, 0xcf, 0x02,  // i32.const
    kAtomicPrefix, kExprI32AtomicOr8U, 0x00, 0xdd, 0x69,  // i32.atomic.rmw8.or_u
    kGCPrefix, kExprRefI31,  // ref.i31
    kGCPrefix, kExprRefCastNull, 0x05,  // ref.cast null
    kExprDrop,  // drop
    kExprI32Const, 0xf2, 0xf0, 0xab, 0x86, 0x05,  // i32.const
    kExprBrIf, 0x00,  // br_if depth=0
    kExprF32Const, 0xce, 0x3f, 0x5b, 0x9b,  // f32.const
    kExprI32ReinterpretF32,  // i32.reinterpret_f32
    kExprI32Const, 0xd2, 0x8a, 0xb0, 0xc9, 0x79,  // i32.const
    kExprI32Const, 0x98, 0xf3, 0xd9, 0xab, 0x04,  // i32.const
    kExprRefNull, 0x08,  // ref.null
    kExprReturnCallRef, 0x08,  // return_call_ref
    kExprEnd,  // end @113
  kExprRefNull, 0x6e,  // ref.null
  kExprBrOnNull, 0x00,  // br_on_null
  kExprDrop,  // drop
  kExprF32Const, 0xfc, 0x8d, 0x42, 0x79,  // f32.const
  kExprEnd,  // end @124
kExprI32UConvertF32,  // i32.trunc_f32_u
kExprRefNull, 0x6e,  // ref.null
kExprBrOnNull, 0x00,  // br_on_null
kExprDrop,  // drop
kExprF32SConvertI32,  // f32.convert_i32_s
kExprTry, 0x7d,  // try @132 f32
  kExprI64Const, 0x97, 0x82, 0xcd, 0xd0, 0xe5, 0xf6, 0x87, 0x84, 0x5c,  // i64.const
  kExprI32Const, 0x61,  // i32.const
  kExprI64Const, 0x80, 0x9c, 0xdf, 0xb7, 0xc0, 0xc3, 0xcc, 0x9f, 0x0a,  // i64.const
  kExprI64Const, 0xa2, 0x97, 0xf1, 0xe3, 0x86, 0x9e, 0xb9, 0xed, 0xc2, 0x00,  // i64.const
  kExprI64ShrS,  // i64.shr_s
  kExprI64Const, 0xf5, 0x00,  // i64.const
  kExprI32Const, 0xdc, 0xa5, 0xd4, 0xda, 0x06,  // i32.const
  kExprSelect,  // select
  kExprI64Const, 0xb5, 0xd1, 0x97, 0xf4, 0xae, 0xae, 0xb1, 0xf5, 0x5a,  // i64.const
  kAtomicPrefix, kExprI64AtomicCompareExchange8U, 0x00, 0x64,  // i64.atomic.rmw8.cmpxchg_u
  kExprI64GeS,  // i64.ge_s
  kExprI32Const, 0x9a, 0xf5, 0xf8, 0xf4, 0x7c,  // i32.const
  kExprI32Const, 0xfb, 0xef, 0xd5, 0xca, 0x04,  // i32.const
  kExprRefNull, 0x70,  // ref.null
  kGCPrefix, kExprRefCastNull, 0x08,  // ref.cast null
  kExprCallRef, 0x08,  // call_ref: i_iii
  kExprF32SConvertI32,  // f32.convert_i32_s
  kExprF32Floor,  // f32.floor
kExprCatch, 0x00,  // catch @214
  kExprF32Const, 0xbe, 0xde, 0xdb, 0xae,  // f32.const
kExprCatchAll,  // catch_all @221
  kExprF32Const, 0xd6, 0xb4, 0xea, 0xb7,  // f32.const
  kExprEnd,  // end @227
kExprF32CopySign,  // f32.copysign
kExprF64ConvertF32,  // f64.promote_f32
kExprBlock, 0x7f,  // block @230 i32
  kExprI64Const, 0x80, 0xcc, 0xb6, 0xd2, 0xac, 0xc3, 0xa2, 0x0b,  // i64.const
  kExprTry, 0x7f,  // try @241 i32
    kExprI32Const, 0x00,  // i32.const
    kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
    kSimdPrefix, kExprI64x2BitMask, 0x01,  // i64x2.bitmask
    kExprI32Const, 0x92, 0x88, 0x83, 0x87, 0x03,  // i32.const
    kAtomicPrefix, kExprI32AtomicOr16U, 0x01, 0x90, 0xfc, 0x01,  // i32.atomic.rmw16.or_u
    kExprCallFunction, 0x03,  // call function #3: v_v
    kExprI32Const, 0xc9, 0xd7, 0x97, 0x81, 0x06,  // i32.const
    kExprTry, 0x7e,  // try @270 i64
      kExprI64Const, 0xd2, 0xf0, 0xd1, 0xab, 0xfd, 0xbe, 0x95, 0xf9, 0x2c,  // i64.const
      kExprI64Const, 0xeb, 0xa9, 0xa8, 0x94, 0x90, 0xa7, 0xf0, 0xd7, 0x06,  // i64.const
      kExprI64And,  // i64.and
      kExprDelegate, 0x01,  // delegate
      kExprI64Const, 0xf2, 0xd4, 0xc7, 0xa6, 0xf4, 0xf1, 0x9d, 0x86, 0xc8, 0x00,  // i64.const
      kExprI64Const, 0xa4, 0xd9, 0xec, 0xf5, 0xcb, 0x91, 0x9c, 0xee, 0x85, 0x7f,  // i64.const
      kExprI32Const, 0xdd, 0xa0, 0x9b, 0xf4, 0x05,  // i32.const
      kExprI32Const, 0xdc, 0xa0, 0x88, 0xeb, 0x7a,  // i32.const
      kAtomicPrefix, kExprI32AtomicExchange, 0x00, 0xa3, 0x9f, 0x02,  // i32.atomic.rmw.xchg
      kExprSelect,  // select
      kExprI64Eq,  // i64.eq
      kExprI32GeS,  // i32.ge_s
      kExprI32Sub,  // i32.sub
    kExprCatchAll,  // catch_all @339
      kExprI32Const, 0xb4, 0x98, 0x9f, 0xc5, 0x7c,  // i32.const
      kExprEnd,  // end @346
    kExprI64LoadMem8S, 0x00, 0xee, 0xc8, 0x03,  // i64.load8_s
    kExprI64GeU,  // i64.ge_u
    kExprEnd,  // end @353
  kExprRefNull, 0x70,  // ref.null
  kExprBrOnNull, 0x00,  // br_on_null
  kExprDrop,  // drop
  kExprF64SConvertI32,  // f64.convert_i32_s
  kExprRefNull, 0x06,  // ref.null
  kExprI32Const, 0xfe, 0xb5, 0xdc, 0xb7, 0x7f,  // i32.const
  kExprRefNull, 0x09,  // ref.null
  kExprCallRef, 0x09,  // call_ref: nrrndnnnrirr_dni
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprF64Const, 0x5c, 0x43, 0xc7, 0x52, 0xf2, 0xec, 0x0d, 0x6f,  // f64.const
  kExprF64Ge,  // f64.ge
  kExprI32RemU,  // i32.rem_u
  kExprEnd,  // end @395
]);
// Generate function 2 (out of 4).
builder.addFunction(undefined, 9 /* sig */)
  .addLocals(kWasmEqRef, 1).addLocals(kWasmS128, 1).addLocals(wasmRefNullType(kWasmNullExternRef), 1).addLocals(wasmRefType(kWasmFuncRef), 1).addLocals(wasmRefType(9), 1).addLocals(wasmRefType(kWasmFuncRef), 1).addLocals(wasmRefType(kWasmAnyRef), 1).addLocals(wasmRefNullType(3), 1).addLocals(wasmRefType(1), 1).addLocals(wasmRefType(kWasmEqRef), 1).addLocals(wasmRefNullType(11), 1).addLocals(wasmRefNullType(3), 1).addLocals(wasmRefNullType(11), 1).addLocals(kWasmI64, 1).addLocals(wasmRefNullType(kWasmStructRef), 1).addLocals(kWasmF32, 1).addLocals(wasmRefNullType(kWasmArrayRef), 1).addLocals(wasmRefNullType(2), 1).addLocals(wasmRefType(kWasmArrayRef), 1)
  .addBodyWithEnd([
// signature: nrrndnnnrirr_dni
// body:
kExprRefNull, 0x6d,  // ref.null
kExprRefNull, 0x00,  // ref.null
kGCPrefix, kExprRefCastNull, 0x00,  // ref.cast null
kGCPrefix, kExprRefCast, 0x02,  // ref.cast
kExprRefNull, 0x0b,  // ref.null
kGCPrefix, kExprRefCast, 0x09,  // ref.cast
kExprRefNull, 0x72,  // ref.null
kExprTry, 0x7c,  // try @68 f64
  kExprF64Const, 0x76, 0x83, 0x33, 0xef, 0xf5, 0xe5, 0x81, 0xbe,  // f64.const
  kExprF32Const, 0x6d, 0xa6, 0xcb, 0x97,  // f32.const
  kExprF32Const, 0x86, 0x05, 0x66, 0x7a,  // f32.const
  kExprF32Div,  // f32.div
  kExprBlock, 0x7d,  // block @90 f32
    kExprF32Const, 0x71, 0x16, 0x7b, 0x69,  // f32.const
    kExprI32Const, 0x00,  // i32.const
    kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
    kExprI32Const, 0x00,  // i32.const
    kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
    kSimdPrefix, kExprI8x16Add,  // i8x16.add
    kSimdPrefix, kExprF32x4ExtractLane, 0x01,  // f32x4.extract_lane
    kExprF32Mul,  // f32.mul
    kExprF32Sqrt,  // f32.sqrt
    kExprEnd,  // end @112
  kExprF32Ge,  // f32.ge
  kExprI64LoadMem16U, 0x00, 0xda, 0x94, 0x01,  // i64.load16_u
  kExprF64UConvertI64,  // f64.convert_i64_u
  kExprF64Max,  // f64.max
  kExprRefNull, 0x06,  // ref.null
  kExprI32Const, 0xd1, 0xee, 0xa5, 0xd8, 0x7d,  // i32.const
  kExprCallFunction, 0x01,  // call function #1: nrrndnnnrirr_dni
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprF64Const, 0x8f, 0x39, 0x20, 0x7b, 0x9f, 0x27, 0x95, 0xb2,  // f64.const
kExprCatch, 0x00,  // catch @152
  kExprF64Const, 0x2f, 0xbd, 0x23, 0x69, 0x7c, 0x2f, 0xd5, 0xbc,  // f64.const
  kExprEnd,  // end @163
kExprF64Sqrt,  // f64.sqrt
kExprRefNull, 0x6f,  // ref.null
kExprRefAsNonNull,  // ref.as_non_null
kExprI32Const, 0xb3, 0xc6, 0x95, 0xd9, 0x07,  // i32.const
kExprI64Const, 0xda, 0xfd, 0x8c, 0xd6, 0xea, 0x96, 0x90, 0x88, 0xa3, 0x7f,  // i64.const
kExprRefNull, 0x71,  // ref.null
kGCPrefix, kExprStructNew, 0x03,  // struct.new
kExprRefNull, 0x09,  // ref.null
kExprF32Const, 0x64, 0x6e, 0x1a, 0xc8,  // f32.const
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kGCPrefix, kExprRefCast, 0x05,  // ref.cast
kExprRefNull, 0x6d,  // ref.null
kExprF32Const, 0x4f, 0xca, 0x81, 0x21,  // f32.const
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprRefFunc, 0x01,  // ref.func
kExprRefNull, 0x72,  // ref.null
kExprF64Const, 0x59, 0xb3, 0xdc, 0xbb, 0xad, 0x64, 0xc5, 0xbb,  // f64.const
kExprRefNull, 0x70,  // ref.null
kExprRefNull, 0x6b,  // ref.null
kExprRefNull, 0x00,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprI32Const, 0xee, 0x8b, 0x82, 0xee, 0x79,  // i32.const
kExprRefNull, 0x07,  // ref.null
kExprI32Const, 0xed, 0xd4, 0xf0, 0x9a, 0x01,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x04,  // array.new
kExprI32Const, 0x92, 0x98, 0xef, 0x87, 0x7a,  // i32.const
kGCPrefix, kExprRefI31,  // ref.i31
kGCPrefix, kExprBrOnCastFailGeneric, 0x00, 0x00, 0x6c, 0x6c,  // br_on_cast_fail
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprRefNull, 0x06,  // ref.null
kExprBlock, 0x0c,  // block @289 eqref (ref 2) (ref 9) nullexternref f64 funcref structref (ref null 0) (ref 0) i32 (ref array)
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprRefNull, 0x6d,  // ref.null
  kExprF32Const, 0x30, 0x0f, 0xe1, 0x41,  // f32.const
  kGCPrefix, kExprStructNew, 0x02,  // struct.new
  kExprRefFunc, 0x01,  // ref.func
  kExprRefNull, 0x72,  // ref.null
  kExprF64Const, 0x4f, 0x2e, 0x45, 0x01, 0x53, 0x6e, 0xdc, 0x19,  // f64.const
  kExprRefNull, 0x70,  // ref.null
  kExprRefNull, 0x6b,  // ref.null
  kExprRefNull, 0x00,  // ref.null
  kExprRefNull, 0x6c,  // ref.null
  kExprRefNull, 0x6c,  // ref.null
  kExprRefNull, 0x6c,  // ref.null
  kGCPrefix, kExprStructNew, 0x00,  // struct.new
  kExprI32Const, 0x86, 0xe0, 0xfe, 0xda, 0x7b,  // i32.const
  kExprRefNull, 0x07,  // ref.null
  kExprI32Const, 0xa3, 0xa0, 0xd8, 0xbb, 0x7d,  // i32.const
  kExprI32Const, 0x14,  // i32.const
  kExprI32RemS,  // i32.rem_s
  kGCPrefix, kExprArrayNew, 0x04,  // array.new
  kExprEnd,  // end @354
kGCPrefix, kExprStructNewDefault, 0x01,  // struct.new_default
kExprRefAsNonNull,  // ref.as_non_null
kGCPrefix, kExprRefCast, 0x6c,  // ref.cast
kExprBrOnNonNull, 0x00,  // br_on_non_null
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprF64Const, 0xd9, 0x1e, 0x2f, 0x94, 0x9a, 0xb0, 0x85, 0x3c,  // f64.const
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprI16x8ExtMulHighI8x16S, 0x01,  // i16x8.extmul_high_i8x16_s
kSimdPrefix, kExprF64x2ExtractLane, 0x01,  // f64x2.extract_lane
kExprF64Const, 0xbf, 0x3f, 0x04, 0xc5, 0x60, 0x38, 0x39, 0x64,  // f64.const
kExprF64Const, 0x06, 0x6a, 0x12, 0x0f, 0x89, 0xb9, 0xca, 0x32,  // f64.const
kExprF64Div,  // f64.div
kExprF64Min,  // f64.min
kExprF64Div,  // f64.div
kExprRefNull, 0x6d,  // ref.null
kExprF32Const, 0xe4, 0xd5, 0xf6, 0x4e,  // f32.const
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprRefFunc, 0x01,  // ref.func
kExprRefNull, 0x72,  // ref.null
kExprF64Const, 0x51, 0x41, 0xe1, 0xdd, 0xea, 0xee, 0x82, 0xda,  // f64.const
kExprRefNull, 0x70,  // ref.null
kExprRefNull, 0x6b,  // ref.null
kExprRefNull, 0x00,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprI32Const, 0xe5, 0x8c, 0x81, 0xee, 0x02,  // i32.const
kExprRefNull, 0x07,  // ref.null
kExprI32Const, 0x81, 0xb6, 0xe5, 0xae, 0x07,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x04,  // array.new
kExprI32Const, 0xac, 0xcd, 0xcb, 0xfe, 0x04,  // i32.const
kGCPrefix, kExprRefI31,  // ref.i31
kGCPrefix, kExprBrOnCastFailGeneric, 0x00, 0x00, 0x6c, 0x6c,  // br_on_cast_fail
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprRefNull, 0x06,  // ref.null
kExprI32Const, 0xce, 0xaa, 0xd0, 0xdb, 0x00,  // i32.const
kExprI32Const, 0x01,  // i32.const
kExprReturnCallIndirect, 0x09, 0x00,  // return_call_indirect
kExprF64Trunc,  // f64.trunc
kExprLocalTee, 0x00,  // local.tee
kExprF64Max,  // f64.max
kExprRefNull, 0x06,  // ref.null
kExprI32Const, 0xb1, 0xeb, 0xc6, 0xc3, 0x05,  // i32.const
kExprRefNull, 0x09,  // ref.null
kExprCallRef, 0x09,  // call_ref: nrrndnnnrirr_dni
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprF64Const, 0x08, 0x94, 0x5b, 0xa1, 0x01, 0x6a, 0x93, 0xf0,  // f64.const
kExprRefNull, 0x70,  // ref.null
kExprRefNull, 0x6b,  // ref.null
kExprRefNull, 0x00,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprI32Const, 0xf3, 0xff, 0xa3, 0xdf, 0x01,  // i32.const
kExprRefNull, 0x07,  // ref.null
kExprI32Const, 0xaf, 0xaa, 0xdc, 0x8b, 0x07,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x04,  // array.new
kExprI32Const, 0x9c, 0x91, 0xa3, 0xbf, 0x05,  // i32.const
kGCPrefix, kExprRefI31,  // ref.i31
kGCPrefix, kExprBrOnCastFailGeneric, 0x00, 0x00, 0x6c, 0x6c,  // br_on_cast_fail
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprDrop,  // drop
kExprRefNull, 0x70,  // ref.null
kGCPrefix, kExprRefCastNull, 0x09,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x0a,  // ref.cast null
kGCPrefix, kExprRefCast, 0x70,  // ref.cast
kExprLocalSet, 0x06,  // local.set
kExprRefFunc, 0x01,  // ref.func
kExprLocalSet, 0x07,  // local.set
kExprRefFunc, 0x00,  // ref.func
kExprLocalSet, 0x08,  // local.set
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprLocalSet, 0x09,  // local.set
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kExprI32Const, 0xd1, 0xdf, 0xfb, 0xce, 0x78,  // i32.const
kExprI32Const, 0xa9, 0xa3, 0xbb, 0xbb, 0x7f,  // i32.const
kExprI64Const, 0xf6, 0xd4, 0xf9, 0xbf, 0x90, 0xdf, 0xee, 0x8d, 0x15,  // i64.const
kGCPrefix, kExprStructNew, 0x01,  // struct.new
kExprLocalSet, 0x0b,  // local.set
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprLocalSet, 0x0c,  // local.set
kExprRefNull, 0x07,  // ref.null
kExprI32Const, 0xe0, 0xab, 0xfd, 0xe9, 0x01,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x04,  // array.new
kExprLocalSet, 0x15,  // local.set
kExprRefNull, 0x6d,  // ref.null
kExprF32Const, 0x9f, 0xbd, 0xa8, 0xaa,  // f32.const
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprRefFunc, 0x01,  // ref.func
kExprRefNull, 0x72,  // ref.null
kExprF64Const, 0x05, 0x63, 0xce, 0x34, 0xe2, 0x9f, 0x9a, 0xa0,  // f64.const
kExprRefNull, 0x70,  // ref.null
kExprRefNull, 0x6b,  // ref.null
kExprRefNull, 0x00,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kExprRefNull, 0x6c,  // ref.null
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprI32Const, 0x8a, 0xa4, 0xfe, 0x00,  // i32.const
kExprRefNull, 0x07,  // ref.null
kExprI32Const, 0xab, 0x8c, 0xc5, 0x9f, 0x7c,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x04,  // array.new
kExprI32Const, 0xbf, 0xce, 0xa9, 0xe5, 0x05,  // i32.const
kGCPrefix, kExprRefI31,  // ref.i31
kExprEnd,  // end @771
]);
// Generate function 3 (out of 4).
builder.addFunction(undefined, 10 /* sig */)
  .addLocals(kWasmI32, 22)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprEnd,  // end @3
]);
// Generate function 4 (out of 4).
builder.addFunction(undefined, 11 /* sig */)
  .addLocals(wasmRefNullType(1), 2).addLocals(kWasmI32, 27)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprEnd,  // end @6
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}
