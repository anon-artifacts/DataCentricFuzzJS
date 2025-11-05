d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([makeField(kWasmI64, true), makeField(kWasmI32, false), makeField(wasmRefNullType(kWasmNullExternRef), true)]);
builder.startRecGroup();
builder.addStruct([makeField(kWasmI64, true), makeField(kWasmI32, false), makeField(wasmRefNullType(kWasmNullExternRef), true), makeField(wasmRefNullType(kWasmNullFuncRef), false)], 0);
builder.endRecGroup();
builder.addStruct([makeField(wasmRefNullType(2), false), makeField(wasmRefType(kWasmI31Ref), false), makeField(kWasmI32, false), makeField(wasmRefNullType(kWasmArrayRef), false)]);
builder.startRecGroup();
builder.addStruct([makeField(wasmRefNullType(2), false), makeField(wasmRefType(kWasmI31Ref), false), makeField(kWasmI32, false), makeField(wasmRefNullType(kWasmArrayRef), false)], 2);
builder.endRecGroup();
builder.addArray(wasmRefType(3), true);
builder.addArray(wasmRefType(3), true, 4);
builder.addArray(kWasmI16, true);
builder.startRecGroup();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addType(makeSig([wasmRefType(1), wasmRefNullType(kWasmNullFuncRef), kWasmF64, wasmRefNullType(0), wasmRefNullType(kWasmNullExternRef), wasmRefType(kWasmEqRef), kWasmS128, kWasmFuncRef, wasmRefNullType(kWasmStructRef)], [kWasmF64, kWasmFuncRef, wasmRefType(6), wasmRefType(kWasmEqRef), wasmRefType(kWasmAnyRef), kWasmI32, wasmRefType(8), wasmRefType(0), kWasmF64, wasmRefType(kWasmAnyRef)]));
builder.endRecGroup();
builder.addType(makeSig([kWasmI32, wasmRefNullType(4), kWasmS128, kWasmF32, wasmRefType(1), wasmRefNullType(kWasmArrayRef), wasmRefType(8)], [kWasmI32]));
builder.addType(makeSig([wasmRefType(kWasmExternRef), wasmRefType(1), wasmRefNullType(kWasmNullFuncRef), kWasmF64], []));
builder.addMemory(16, 32);
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addTable(kWasmFuncRef, 3, 3, undefined)
builder.addActiveElementSegment(0, wasmI32Const(0), [[kExprRefFunc, 0, ], [kExprRefFunc, 1, ], [kExprRefFunc, 2, ]], kWasmFuncRef);
builder.addTag(makeSig([wasmRefType(kWasmExternRef), wasmRefType(1), wasmRefNullType(kWasmNullFuncRef), kWasmF64], []));
// Generate function 1 (out of 3).
builder.addFunction(undefined, 7 /* sig */)
  .addLocals(wasmRefNullType(kWasmI31Ref), 1).addLocals(wasmRefType(1), 1).addLocals(kWasmI32, 2).addLocals(wasmRefNullType(6), 1).addLocals(wasmRefType(kWasmArrayRef), 1).addLocals(wasmRefNullType(9), 1).addLocals(wasmRefNullType(kWasmI31Ref), 1).addLocals(kWasmI32, 1).addLocals(wasmRefType(kWasmExternRef), 1).addLocals(wasmRefType(8), 1).addLocals(wasmRefNullType(kWasmArrayRef), 1).addLocals(wasmRefType(kWasmStructRef), 1).addLocals(kWasmFuncRef, 1).addLocals(wasmRefType(2), 1)
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprI64Const, 0xe4, 0xf5, 0x95, 0xdb, 0x99, 0xcd, 0x8d, 0xae, 0x95, 0x7f,  // i64.const
kExprI64Const, 0x38,  // i64.const
kExprI64Ne,  // i64.ne
kExprIf, 0x7d,  // if @51 f32
  kExprTry, 0x7d,  // try @53 f32
    kExprTry, 0x7d,  // try @55 f32
      kSimdPrefix, kExprS128Const, 0x7d, 0x9e, 0x3a, 0x2d, 0xb4, 0x04, 0xde, 0xf5, 0x42, 0x40, 0xf9, 0x92, 0x25, 0x8f, 0x2d, 0x4e,  // v128.const
      kSimdPrefix, kExprI8x16BitMask,  // i8x16.bitmask
      kExprI32Const, 0xd3, 0x84, 0xf8, 0x04,  // i32.const
      kExprI32Const, 0x08,  // i32.const
      kExprI32Const, 0x00,  // i32.const
      kExprReturnCallIndirect, 0x07, 0x00,  // return_call_indirect
    kExprCatch, 0x00,  // catch @89
      kExprDrop,  // drop
      kExprDrop,  // drop
      kExprDrop,  // drop
      kExprDrop,  // drop
      kExprF32Const, 0x90, 0x86, 0xbe, 0x25,  // f32.const
    kExprCatchAll,  // catch_all @100
      kExprF32Const, 0xd7, 0x3b, 0x64, 0x27,  // f32.const
      kExprEnd,  // end @106
  kExprCatch, 0x00,  // catch @107
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprF32Const, 0xdc, 0x7b, 0xea, 0x92,  // f32.const
  kExprCatchAll,  // catch_all @118
    kExprF32Const, 0x69, 0xbe, 0x13, 0x9e,  // f32.const
    kExprEnd,  // end @124
  kExprF32Const, 0x82, 0xa6, 0x04, 0x98,  // f32.const
  kExprI32Const, 0xca, 0xe2, 0x88, 0x90, 0x78,  // i32.const
  kExprI32Ctz,  // i32.ctz
  kExprI32Const, 0xb6, 0x7f,  // i32.const
  kExprI32ShrS,  // i32.shr_s
  kExprSelect,  // select
  kExprF32Sqrt,  // f32.sqrt
  kExprI32SConvertF32,  // i32.trunc_f32_s
  kExprI32Const, 0x97, 0x87, 0xb9, 0x95, 0x01,  // i32.const
  kExprTableGet, 0x00,  // table.get
  kGCPrefix, kExprRefCastNull, 0x07,  // ref.cast null
  kExprBrOnNull, 0x01,  // br_on_null
  kExprDrop,  // drop
  kExprF32SConvertI32,  // f32.convert_i32_s
  kExprI32SConvertF32,  // i32.trunc_f32_s
  kExprRefNull, 0x04,  // ref.null
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kExprF32Const, 0x95, 0x04, 0x04, 0x08,  // f32.const
  kExprI64Const, 0xb6, 0xbf, 0xdb, 0xf3, 0x98, 0xa4, 0xc3, 0xa8, 0x72,  // i64.const
  kExprI32Const, 0xc2, 0xbc, 0xf8, 0x80, 0x79,  // i32.const
  kExprRefNull, 0x72,  // ref.null
  kExprRefNull, 0x73,  // ref.null
  kGCPrefix, kExprStructNew, 0x01,  // struct.new
  kExprRefNull, 0x6a,  // ref.null
  kExprRefFunc, 0x01,  // ref.func
  kExprReturnCall, 0x02,  // return_call
  kExprF32SConvertI64,  // f32.convert_i64_s
  kExprF32Abs,  // f32.abs
kExprElse,  // else @202
  kExprF32Const, 0x34, 0x99, 0x11, 0xb7,  // f32.const
  kExprEnd,  // end @208
kExprF32Neg,  // f32.neg
kExprTry, 0x7d,  // try @210 f32
  kExprBlock, 0x7e,  // block @212 i64
    kExprI32Const, 0xf6, 0xaf, 0xc6, 0x9e, 0x78,  // i32.const
    kExprI64Const, 0x84, 0xa3, 0xc8, 0x82, 0xdd, 0xc8, 0xe7, 0xe0, 0x43,  // i64.const
    kAtomicPrefix, kExprI64AtomicSub32U, 0x01, 0xc3, 0x01,  // i64.atomic.rmw32.sub_u
    kExprEnd,  // end @235
  kExprI64Popcnt,  // i64.popcnt
  kExprI64Const, 0x80, 0x7f,  // i64.const
  kExprI32Const, 0xa4, 0xca, 0x8d, 0xdc, 0x03,  // i32.const
  kExprI32Const, 0xdf, 0xd7, 0xe5, 0xec, 0x06,  // i32.const
  kAtomicPrefix, kExprI32AtomicAnd16U, 0x01, 0xfa, 0x73,  // i32.atomic.rmw16.and_u
  kExprRefNull, 0x72,  // ref.null
  kExprRefNull, 0x73,  // ref.null
  kGCPrefix, kExprStructNew, 0x01,  // struct.new
  kExprRefNull, 0x73,  // ref.null
  kExprF64Const, 0xa2, 0xb5, 0x60, 0x0f, 0xc3, 0xf9, 0xa3, 0xb4,  // f64.const
  kExprI64Const, 0xbe, 0x99, 0xaf, 0x8b, 0x83, 0xe7, 0x9d, 0xdf, 0x67,  // i64.const
  kExprI32Const, 0xcd, 0xdc, 0xed, 0xb7, 0x78,  // i32.const
  kExprRefNull, 0x72,  // ref.null
  kGCPrefix, kExprStructNew, 0x00,  // struct.new
  kExprRefNull, 0x72,  // ref.null
  kExprI64Const, 0xf1, 0xec, 0xc1, 0x91, 0xe7, 0x8d, 0xbd, 0xdc, 0x33,  // i64.const
  kExprI32Const, 0xe7, 0xe6, 0xc7, 0xa3, 0x01,  // i32.const
  kExprRefNull, 0x72,  // ref.null
  kGCPrefix, kExprStructNew, 0x00,  // struct.new
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kExprRefNull, 0x70,  // ref.null
  kExprRefNull, 0x6b,  // ref.null
  kExprRefNull, 0x08,  // ref.null
  kExprCallRef, 0x08,  // call_ref: dnrrrirrdr_rndnnrsnn
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprNop,  // nop
  kExprF64Neg,  // f64.neg
  kExprF64Neg,  // f64.neg
  kExprF64Neg,  // f64.neg
  kExprF64Neg,  // f64.neg
  kNumericPrefix, kExprI32SConvertSatF64,  // i32.trunc_sat_f64_s
  kExprI64Const, 0xac, 0x3a,  // i64.const
  kAtomicPrefix, kExprI64AtomicAnd16U, 0x00, 0xab, 0x0d,  // i64.atomic.rmw16.and_u
  kExprF32Const, 0xf5, 0x25, 0x8e, 0xae,  // f32.const
  kExprI64Const, 0xbc, 0xf3, 0xee, 0xb2, 0xd8, 0xde, 0xe6, 0xfd, 0x00,  // i64.const
  kExprI32Const, 0x95, 0xfc, 0xd7, 0xe0, 0x7d,  // i32.const
  kExprLoop, 0x40,  // loop @376
    kExprEnd,  // end @378
  kExprRefNull, 0x72,  // ref.null
  kExprRefNull, 0x73,  // ref.null
  kGCPrefix, kExprStructNew, 0x01,  // struct.new
  kExprRefNull, 0x73,  // ref.null
  kExprF64Const, 0x06, 0xc2, 0xdf, 0x6c, 0x5e, 0x07, 0xc0, 0xcc,  // f64.const
  kExprRefNull, 0x00,  // ref.null
  kExprRefNull, 0x72,  // ref.null
  kExprI64Const, 0x8d, 0xf3, 0xc6, 0xb3, 0xed, 0xe8, 0x89, 0xbd, 0x4b,  // i64.const
  kExprI32Const, 0xfb, 0xa6, 0x9d, 0x94, 0x06,  // i32.const
  kExprRefNull, 0x72,  // ref.null
  kGCPrefix, kExprStructNew, 0x00,  // struct.new
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kExprRefNull, 0x70,  // ref.null
  kExprRefNull, 0x6b,  // ref.null
  kExprRefNull, 0x08,  // ref.null
  kExprCallRef, 0x08,  // call_ref: dnrrrirrdr_rndnnrsnn
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprF32ConvertF64,  // f32.demote_f64
  kExprF32CopySign,  // f32.copysign
  kExprF32Neg,  // f32.neg
  kExprI32SConvertF32,  // i32.trunc_f32_s
  kExprRefNull, 0x72,  // ref.null
  kExprRefNull, 0x73,  // ref.null
  kGCPrefix, kExprStructNew, 0x01,  // struct.new
  kExprRefNull, 0x73,  // ref.null
  kExprF64Const, 0x2c, 0x7b, 0xa0, 0x14, 0x1d, 0x76, 0x9e, 0xe8,  // f64.const
  kExprRefNull, 0x00,  // ref.null
  kExprRefNull, 0x72,  // ref.null
  kExprI64Const, 0x80, 0xdf, 0xa0, 0xf3, 0xcb, 0x8d, 0xa5, 0x8b, 0x52,  // i64.const
  kExprI32Const, 0xf2, 0xb6, 0xa2, 0x91, 0x01,  // i32.const
  kExprRefNull, 0x72,  // ref.null
  kGCPrefix, kExprStructNew, 0x00,  // struct.new
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kExprRefNull, 0x70,  // ref.null
  kExprRefNull, 0x6b,  // ref.null
  kExprI32Const, 0x01,  // i32.const
  kExprCallIndirect, 0x08, 0x00,  // call_indirect sig #8: dnrrrirrdr_rndnnrsnn
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprI64SConvertF64,  // i64.trunc_f64_s
  kExprI64DivU,  // i64.div_u
  kExprI64Const, 0x90, 0xf9, 0xf0, 0xf6, 0xfd, 0x80, 0xa0, 0x10,  // i64.const
  kExprI64DivS,  // i64.div_s
  kExprF64UConvertI64,  // f64.convert_i64_u
  kExprF32ConvertF64,  // f32.demote_f64
kExprCatch, 0x00,  // catch @526
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprDrop,  // drop
  kExprBlock, 0x7d,  // block @532 f32
    kExprGlobalGet, 0x26,  // global.get
    kExprF32SConvertI32,  // f32.convert_i32_s
    kExprEnd,  // end @537
  kExprF32Floor,  // f32.floor
  kExprEnd,  // end @539
kExprF32Lt,  // f32.lt
kExprI32LoadMem8S, 0x00, 0xb0, 0xe1, 0x02,  // i32.load8_s
kExprRefNull, 0x01,  // ref.null
kGCPrefix, kExprRefCastNull, 0x04,  // ref.cast null
kExprF64Const, 0xdf, 0x0a, 0xfd, 0x16, 0xd6, 0x2b, 0x55, 0x4e,  // f64.const
kExprF64Const, 0xcb, 0xba, 0x9f, 0x11, 0x1a, 0xf2, 0xeb, 0x3d,  // f64.const
kExprF64Const, 0xa3, 0x12, 0x51, 0x6e, 0x72, 0xdd, 0x4e, 0xad,  // f64.const
kExprF64CopySign,  // f64.copysign
kExprF64Lt,  // f64.lt
kSimdPrefix, kExprS128Load32Splat, 0x00, 0xf2, 0xee, 0x03,  // v128.load32_splat
kSimdPrefix, kExprI8x16Neg,  // i8x16.neg
kExprF32Const, 0x54, 0x6c, 0x65, 0xcb,  // f32.const
kExprI64Const, 0xf2, 0xdb, 0x91, 0x8d, 0x8b, 0xc0, 0xd1, 0xcf, 0xb1, 0x7f,  // i64.const
kExprI64Const, 0x97, 0xfb, 0xbe, 0xbc, 0xc2, 0xbc, 0xde, 0xbb, 0x9a, 0x7f,  // i64.const
kExprI64ShrS,  // i64.shr_s
kExprI32Const, 0xab, 0xcc, 0xf2, 0xf6, 0x04,  // i32.const
kExprRefNull, 0x72,  // ref.null
kExprRefNull, 0x73,  // ref.null
kGCPrefix, kExprStructNew, 0x01,  // struct.new
kExprRefNull, 0x6a,  // ref.null
kExprRefFunc, 0x01,  // ref.func
kExprReturnCall, 0x02,  // return_call
kExprI32Const, 0xd8, 0xc7, 0x86, 0xe0, 0x7d,  // i32.const
kExprRefNull, 0x72,  // ref.null
kExprRefNull, 0x73,  // ref.null
kGCPrefix, kExprStructNew, 0x01,  // struct.new
kExprLocalSet, 0x04,  // local.set
kExprRefNull, 0x02,  // ref.null
kExprI32Const, 0xf4, 0x86, 0x9c, 0xd5, 0x03,  // i32.const
kGCPrefix, kExprRefI31,  // ref.i31
kExprI32Const, 0xc3, 0xe5, 0x8d, 0x87, 0x7a,  // i32.const
kExprRefNull, 0x6a,  // ref.null
kGCPrefix, kExprStructNew, 0x03,  // struct.new
kExprI32Const, 0xc3, 0xd2, 0xb7, 0xff, 0x06,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x04,  // array.new
kExprLocalSet, 0x08,  // local.set
kExprRefNull, 0x6f,  // ref.null
kExprRefAsNonNull,  // ref.as_non_null
kExprLocalSet, 0x0c,  // local.set
kExprRefFunc, 0x01,  // ref.func
kExprLocalSet, 0x0d,  // local.set
kExprI64Const, 0xa9, 0xe1, 0x85, 0xc0, 0xfb, 0xc6, 0x8a, 0xee, 0x0a,  // i64.const
kExprI32Const, 0xc6, 0xf4, 0xdd, 0x9b, 0x79,  // i32.const
kExprRefNull, 0x72,  // ref.null
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprLocalSet, 0x0f,  // local.set
kExprRefNull, 0x02,  // ref.null
kExprI32Const, 0xd1, 0xe9, 0xff, 0xc7, 0x07,  // i32.const
kGCPrefix, kExprRefI31,  // ref.i31
kExprI32Const, 0x89, 0xcf, 0x9f, 0x95, 0x7a,  // i32.const
kExprRefNull, 0x6a,  // ref.null
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x11,  // local.set
kExprI32Const, 0xcd, 0xc2, 0xd7, 0xb2, 0x7e,  // i32.const
kExprEnd,  // end @746
]);
// Generate function 2 (out of 3).
builder.addFunction(undefined, 8 /* sig */)
  .addBodyWithEnd([
// signature: dnrrrirrdr_rndnnrsnn
// body:
kExprF64Const, 0x99, 0xa8, 0x86, 0x4b, 0xdc, 0x28, 0x7f, 0xb7,  // f64.const
kExprRefNull, 0x70,  // ref.null
kExprI32Const, 0xfe, 0xa3, 0xf1, 0x79,  // i32.const
kExprI32Const, 0xac, 0x92, 0xb2, 0xd2, 0x04,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x06,  // array.new
kExprI64Const, 0xcd, 0xbb, 0xda, 0xf9, 0xe5, 0xcf, 0x8b, 0xe1, 0xe1, 0x00,  // i64.const
kExprI32Const, 0xfe, 0xf5, 0xc8, 0x8e, 0x7f,  // i32.const
kExprRefNull, 0x72,  // ref.null
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprI64Const, 0xf4, 0xb0, 0xf1, 0x9c, 0xb5, 0xbd, 0xbc, 0xa2, 0xf1, 0x00,  // i64.const
kExprI32Const, 0xaa, 0xe6, 0xe3, 0xb7, 0x7c,  // i32.const
kExprRefNull, 0x72,  // ref.null
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprI32Const, 0xca, 0xcc, 0xe6, 0xb6, 0x78,  // i32.const
kExprRefFunc, 0x01,  // ref.func
kExprI64Const, 0x83, 0xac, 0xc4, 0xc6, 0xa4, 0xd9, 0xdd, 0x94, 0xec, 0x00,  // i64.const
kExprI32Const, 0xdf, 0xc6, 0xcf, 0x87, 0x79,  // i32.const
kExprRefNull, 0x72,  // ref.null
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprF64Const, 0x9e, 0xf4, 0x88, 0x59, 0x10, 0xad, 0xbb, 0x8b,  // f64.const
kExprI64Const, 0xe2, 0xf9, 0xff, 0xb9, 0xdf, 0xfd, 0xf0, 0xfb, 0x4b,  // i64.const
kExprI32Const, 0xc3, 0x9c, 0xe0, 0xb5, 0x78,  // i32.const
kExprRefNull, 0x72,  // ref.null
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprEnd,  // end @133
]);
// Generate function 3 (out of 3).
builder.addFunction(undefined, 9 /* sig */)
  .addLocals(kWasmI32, 4)
  .addBodyWithEnd([
// signature: i_insfrnr
// body:
kExprI32Const, 0xa5, 0x94, 0xe9, 0xe9, 0x78,  // i32.const
kExprEnd,  // end @9
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}
