d8.file.execute('v8/test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([makeField(kWasmI64, false), makeField(kWasmI32, false), makeField(kWasmS128, false)]);
builder.addStruct([makeField(kWasmF32, true)]);
builder.addStruct([makeField(kWasmI64, false), makeField(kWasmI32, false), makeField(kWasmS128, false), makeField(kWasmS128, false), makeField(kWasmF32, true)], 0);
builder.startRecGroup();
builder.addArray(wasmRefNullType(kWasmArrayRef), true);
builder.addArray(wasmRefNullType(3), true);
builder.endRecGroup();
builder.addArray(kWasmI32, true);
builder.startRecGroup();
builder.addArray(kWasmI32, true, 5);
builder.endRecGroup();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addType(makeSig([kWasmF64, wasmRefNullType(kWasmNullFuncRef), wasmRefType(5), wasmRefType(kWasmStructRef), kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32], []));
builder.addType(makeSig([wasmRefType(4), kWasmI32, kWasmI64, kWasmI64, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32], []));
builder.addMemory(16, 32);
builder.addTable(kWasmFuncRef, 1, 1, undefined)
builder.addActiveElementSegment(0, wasmI32Const(0), [[kExprRefFunc, 0, ]], kWasmFuncRef);
builder.addTag(makeSig([kWasmF64, wasmRefNullType(kWasmNullFuncRef), wasmRefType(5), wasmRefType(kWasmStructRef), kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32], []));
// Generate function 1 (out of 1).
builder.addFunction(undefined, 7 /* sig */)
  .addLocals(wasmRefNullType(2), 1).addLocals(wasmRefNullType(0), 1).addLocals(kWasmAnyRef, 1).addLocals(wasmRefNullType(kWasmNullRef), 1).addLocals(wasmRefNullType(6), 1).addLocals(wasmRefType(1), 1).addLocals(kWasmExternRef, 1).addLocals(wasmRefType(4), 1).addLocals(wasmRefType(kWasmArrayRef), 2).addLocals(kWasmI64, 1).addLocals(kWasmI32, 1).addLocals(wasmRefType(kWasmArrayRef), 1).addLocals(kWasmI32, 1).addLocals(kWasmFuncRef, 1).addLocals(kWasmF32, 1).addLocals(wasmRefType(2), 1).addLocals(wasmRefNullType(7), 1).addLocals(kWasmF64, 1).addLocals(wasmRefNullType(kWasmArrayRef), 1).addLocals(wasmRefType(6), 1).addLocals(kWasmAnyRef, 1).addLocals(wasmRefNullType(kWasmNullRef), 1).addLocals(wasmRefNullType(6), 1).addLocals(wasmRefType(kWasmI31Ref), 1).addLocals(kWasmI32, 1).addLocals(kWasmF32, 1).addLocals(wasmRefNullType(kWasmStructRef), 1)
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprLoop, 0x7d,  // loop @67 f32
  kExprRefNull, 0x70,  // ref.null
  kGCPrefix, kExprRefCastNull, 0x70,  // ref.cast null
  kExprBrOnNull, 0x00,  // br_on_null
  kExprDrop,  // drop
  kExprRefNull, 0x03,  // ref.null
  kExprI32Const, 0xcf, 0xdd, 0x8a, 0xa9, 0x7b,  // i32.const
  kExprI32Const, 0x14,  // i32.const
  kExprI32RemS,  // i32.rem_s
  kGCPrefix, kExprArrayNew, 0x04,  // array.new
  kExprI32Const, 0xb4, 0xa3, 0xd1, 0xba, 0x05,  // i32.const
  kExprI64Const, 0xc2, 0xee, 0xf9, 0x88, 0xb7, 0xbb, 0xd9, 0xe0, 0x98, 0x7f,  // i64.const
  kExprI64Const, 0xeb, 0xd0, 0xdb, 0xca, 0x93, 0xad, 0xd2, 0xb5, 0xd5, 0x00,  // i64.const
  kExprI32Const, 0xae, 0x99, 0xc9, 0xe5, 0x06,  // i32.const
  kExprI32Const, 0x96, 0xe9, 0xc0, 0x92, 0x03,  // i32.const
  kExprI32Const, 0xdf, 0xdc, 0x82, 0x9c, 0x02,  // i32.const
  kExprI32Const, 0x96, 0xf2, 0x9f, 0xa0, 0x06,  // i32.const
  kExprI32Const, 0xbc, 0xe1, 0xdb, 0x9d, 0x78,  // i32.const
  kExprI32Const, 0x95, 0xef, 0xcc, 0x9f, 0x7d,  // i32.const
  kExprI32Const, 0xcb, 0xc7, 0x97, 0xfb, 0x7c,  // i32.const
  kExprI32Const, 0xa2, 0xc3, 0xde, 0xa3, 0x78,  // i32.const
  kExprI32Const, 0xdd, 0xad, 0xe5, 0xf5, 0x7a,  // i32.const
  kExprI32Const, 0xd5, 0x84, 0xe9, 0xac, 0x7b,  // i32.const
  kExprBlock, 0x09,  // block @179
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
    kExprDrop,  // drop
    kExprDrop,  // drop
    kExprEnd,  // end @195
  kExprRefNull, 0x6e,  // ref.null
  kExprBrOnNull, 0x00,  // br_on_null
  kExprDrop,  // drop
  kExprF32Const, 0xe1, 0xde, 0x50, 0x74,  // f32.const
  kExprF32Const, 0xb2, 0xf1, 0x49, 0x93,  // f32.const
  kExprF32CopySign,  // f32.copysign
  kExprF32Ceil,  // f32.ceil
  kExprF32Const, 0x11, 0xff, 0x7a, 0x68,  // f32.const
  kExprF32Const, 0xd5, 0xb0, 0xf6, 0x79,  // f32.const
  kExprF32Floor,  // f32.floor
  kExprF32Const, 0xd6, 0x71, 0xa4, 0x79,  // f32.const
  kExprF32Add,  // f32.add
  kExprF32Const, 0x26, 0x89, 0xb2, 0xf8,  // f32.const
  kExprF32Const, 0xf7, 0xd4, 0x73, 0x2a,  // f32.const
  kExprF32Max,  // f32.max
  kExprF32Trunc,  // f32.trunc
  kExprF32Abs,  // f32.abs
  kExprF32Ceil,  // f32.ceil
  kExprF32Div,  // f32.div
  kExprF32Div,  // f32.div
  kExprF64Const, 0x35, 0xae, 0x35, 0x1c, 0x5d, 0x8d, 0xbe, 0xd7,  // f64.const
  kExprTry, 0x7d,  // try @255 f32
    kExprTry, 0x7d,  // try @257 f32
      kExprTry, 0x7d,  // try @259 f32
        kExprTry, 0x7d,  // try @261 f32
          kExprF32Const, 0x33, 0x85, 0x18, 0x49,  // f32.const
          kExprRefNull, 0x70,  // ref.null
          kExprI32Const, 0x80, 0xcd, 0xce, 0xec, 0x78,  // i32.const
          kNumericPrefix, kExprTableGrow, 0x00,  // table.grow
          kExprI32Const, 0x88, 0xa5, 0x8a, 0xfb, 0x02,  // i32.const
          kExprI32Const, 0xd7, 0xf5, 0x9c, 0x37,  // i32.const
          kAtomicPrefix, kExprI32AtomicSub16U, 0x00, 0xaa, 0xa2, 0x02,  // i32.atomic.rmw16.sub_u
          kExprI32Ne,  // i32.ne
          kExprRefNull, 0x6e,  // ref.null
          kGCPrefix, kExprRefCastNull, 0x6a,  // ref.cast null
          kGCPrefix, kExprRefTestNull, 0x03,  // ref.test null
          kAtomicPrefix, kExprI32AtomicStore16U, 0x00, 0x8c, 0x83, 0x02,  // i32.atomic.store16
          kExprF32Const, 0x6c, 0x77, 0xe8, 0x67,  // f32.const
          kExprF32Const, 0x0e, 0xa6, 0x43, 0x53,  // f32.const
          kExprF32Mul,  // f32.mul
          kExprI32SConvertF32,  // i32.trunc_f32_s
          kExprI32Const, 0x14,  // i32.const
          kExprI32RemS,  // i32.rem_s
          kGCPrefix, kExprArrayNewDefault, 0x04,  // array.new_default
          kExprI32Const, 0xac, 0x80, 0xce, 0xf4, 0x04,  // i32.const
          kExprRefNull, 0x6e,  // ref.null
          kGCPrefix, kExprRefCastNull, 0x03,  // ref.cast null
          kExprI32Const, 0xb5, 0xe5, 0xb1, 0xca, 0x02,  // i32.const
          kGCPrefix, kExprArrayFill, 0x04,  // array.fill
          kExprF32Floor,  // f32.floor
        kExprCatch, 0x00,  // catch @350
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
        kExprCatchAll,  // catch_all @362
          kExprF32Const, 0xed, 0x56, 0x12, 0x11,  // f32.const
          kExprEnd,  // end @368
        kExprF32Floor,  // f32.floor
      kExprCatch, 0x00,  // catch @370
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
        kExprEnd,  // end @382
      kExprEnd,  // end @383
  kExprCatch, 0x00,  // catch @384
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
  kExprCatchAll,  // catch_all @396
    kExprF32Const, 0xfe, 0x17, 0x68, 0x5b,  // f32.const
    kExprEnd,  // end @402
  kExprF64ConvertF32,  // f64.promote_f32
  kExprF64Max,  // f64.max
  kExprF64Const, 0x13, 0x6e, 0x14, 0x64, 0x5e, 0xd4, 0xce, 0x13,  // f64.const
  kExprF64Eq,  // f64.eq
  kExprI32LoadMem16U, 0x00, 0xba, 0x92, 0x02,  // i32.load16_u
  kExprSelectWithType, 0x01, 0x7d,  // select
  kExprBlock, 0x7f,  // block @423 i32
    kExprLocalGet, 0x00,  // local.get
    kExprF64SConvertI32,  // f64.convert_i32_s
    kExprI32Const, 0x9a, 0x94, 0xee, 0x90, 0x78,  // i32.const
    kExprI32Const, 0x13,  // i32.const
    kAtomicPrefix, kExprI32AtomicOr16U, 0x00, 0xf7, 0x8c, 0x02,  // i32.atomic.rmw16.or_u
    kExprI32LoadMem16S, 0x00, 0xc0, 0x82, 0x03,  // i32.load16_s
    kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
    kSimdPrefix, kExprI32x4BitMask, 0x01,  // i32x4.bitmask
    kAtomicPrefix, kExprI32AtomicLoad, 0x01, 0xff, 0x22,  // i32.atomic.load
    kExprF64Const, 0xc0, 0x8b, 0x4a, 0xdf, 0x54, 0x20, 0x80, 0x2b,  // f64.const
    kExprI32Const, 0xbc, 0x9f, 0xc4, 0x9b, 0x79,  // i32.const
    kExprI32Const, 0xab, 0x7f,  // i32.const
    kExprF32LoadMem, 0x01, 0x87, 0x01,  // f32.load
    kExprI32ReinterpretF32,  // i32.reinterpret_f32
    kExprIf, 0x7f,  // if @480 i32
      kExprI32Const, 0x4d,  // i32.const
      kExprI32Const, 0x95, 0xfa, 0xa4, 0xef, 0x04,  // i32.const
      kExprI32Eq,  // i32.eq
    kExprElse,  // else @491
      kExprI32Const, 0xb9, 0xf0, 0x95, 0xb0, 0x03,  // i32.const
      kExprEnd,  // end @498
    kAtomicPrefix, kExprI32AtomicExchange8U, 0x00, 0x00,  // i32.atomic.rmw8.xchg_u
    kExprI32Const, 0xdf, 0xe6, 0xaf, 0xba, 0x06,  // i32.const
    kExprI32Const, 0xd6, 0x8f, 0xbf, 0xda, 0x04,  // i32.const
    kExprCallFunction, 0x00,  // call function #0: i_iii
    kExprF64SConvertI32,  // f64.convert_i32_s
    kExprF64Ge,  // f64.ge
    kExprI32Const, 0x99, 0x81, 0xfd, 0xe7, 0x06,  // i32.const
    kExprI32Const, 0x00,  // i32.const
    kExprReturnCallIndirect, 0x07, 0x00,  // return_call_indirect
    kExprF64UConvertI64,  // f64.convert_i64_u
    kExprRefNull, 0x07,  // ref.null
    kExprF64Const, 0xcc, 0x8e, 0x26, 0xe6, 0x78, 0x64, 0xfb, 0x5a,  // f64.const
    kNumericPrefix, kExprI32UConvertSatF64,  // i32.trunc_sat_f64_u
    kExprMemorySize, 0x00,  // memory.size
    kAtomicPrefix, kExprI32AtomicAdd8U, 0x00, 0xc6, 0x1e,  // i32.atomic.rmw8.add_u
    kNumericPrefix, kExprTableGrow, 0x00,  // table.grow
    kExprI32Const, 0xb6, 0xf2, 0xa7, 0x54,  // i32.const
    kExprI32Const, 0xd2, 0xab, 0xb2, 0xfd, 0x05,  // i32.const
    kExprI32Add,  // i32.add
    kAtomicPrefix, kExprI32AtomicExchange, 0x01, 0xb8, 0xff, 0x03,  // i32.atomic.rmw.xchg
    kExprI32LoadMem16U, 0x01, 0xdf, 0xa7, 0x02,  // i32.load16_u
    kExprI32Const, 0x99, 0xbd, 0x86, 0xe7, 0x02,  // i32.const
    kExprI32Const, 0xd1, 0xdd, 0x9c, 0xd3, 0x00,  // i32.const
    kExprI32Const, 0x00,  // i32.const
    kExprCallIndirect, 0x07, 0x00,  // call_indirect sig #7: i_iii
    kExprNop,  // nop
    kExprI32LoadMem, 0x01, 0xc0, 0xc8, 0x03,  // i32.load
    kExprIf, 0x7e,  // if @600 i64
      kExprI64Const, 0x80, 0xfd, 0x92, 0xe4, 0xd7, 0xf6, 0xcd, 0xe9, 0xf4, 0x00,  // i64.const
    kExprElse,  // else @613
      kExprI64Const, 0xba, 0x95, 0xdb, 0xfa, 0x9e, 0xc7, 0x90, 0xc5, 0x1d,  // i64.const
      kExprEnd,  // end @624
    kExprF64SConvertI64,  // f64.convert_i64_s
    kExprF64Mul,  // f64.mul
    kExprBlock, 0x7c,  // block @627 f64
      kExprBlock, 0x7c,  // block @629 f64
        kExprI32Const, 0xc3, 0xe5, 0x9d, 0xd4, 0x02,  // i32.const
        kExprI32Const, 0xb4, 0xb3, 0x9a, 0xf5, 0x78,  // i32.const
        kExprI32Add,  // i32.add
        kExprI32Const, 0x99, 0x94, 0xf2, 0xf0, 0x04,  // i32.const
        kExprI32Add,  // i32.add
        kExprI32Const, 0xaf, 0xce, 0xed, 0x89, 0x7e,  // i32.const
        kExprI32Add,  // i32.add
        kSimdPrefix, kExprS128Const, 0x47, 0xfa, 0xa0, 0x97, 0xa1, 0x59, 0xee, 0x2f, 0x86, 0xfe, 0xb9, 0x23, 0x7d, 0x81, 0xb5, 0xd5,  // v128.const
        kExprI32Const, 0x00,  // i32.const
        kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
        kSimdPrefix, kExprF32x4Le,  // f32x4.le
        kSimdPrefix, kExprS128StoreMem, 0x03, 0x81, 0xc5, 0xa6, 0xcc, 0x07,  // v128.store
        kExprBlock, 0x7c,  // block @690 f64
          kExprBlock, 0x7c,  // block @692 f64
            kExprBlock, 0x7c,  // block @694 f64
              kExprBlock, 0x7c,  // block @696 f64
                kExprI32Const, 0xf5, 0xfc, 0xce, 0x52,  // i32.const
                kExprF32Const, 0xe9, 0x60, 0x55, 0xe8,  // f32.const
                kExprF32StoreMem, 0x01, 0xd3, 0xd3, 0x02,  // f32.store
                kExprF64Const, 0x5f, 0x58, 0xb3, 0xed, 0x26, 0x97, 0x43, 0xc1,  // f64.const
                kExprI32Const, 0xff, 0xb6, 0xf3, 0x88, 0x06,  // i32.const
                kExprBrTable, 0x01, 0x00, 0x00,  // br_table entries=1
                kExprEnd,  // end @732
              kExprEnd,  // end @733
            kExprEnd,  // end @734
          kExprEnd,  // end @735
        kExprEnd,  // end @736
      kExprEnd,  // end @737
    kExprF64Add,  // f64.add
    kExprF64Lt,  // f64.lt
    kExprEnd,  // end @740
  kExprI32Const, 0x88, 0x9c, 0xe0, 0xa9, 0x7d,  // i32.const
  kExprI32Const, 0xbb, 0xc0, 0xa1, 0xee, 0x79,  // i32.const
  kExprRefNull, 0x07,  // ref.null
  kExprCallRef, 0x07,  // call_ref: i_iii
  kExprNop,  // nop
  kExprI64Const, 0xd5, 0xd8, 0xea, 0xae, 0xa6, 0x9f, 0xe8, 0x0a,  // i64.const
  kExprI64Eqz,  // i64.eqz
  kExprBlock, 0x7e,  // block @768 i64
    kExprI64Const, 0xaa, 0xb5, 0xa5, 0x8c, 0xa1, 0xfd, 0xd7, 0xa3, 0xce, 0x00,  // i64.const
    kExprEnd,  // end @781
  kExprI64Const, 0xf1, 0xe0, 0x8a, 0xb2, 0x05,  // i64.const
  kExprI64DivU,  // i64.div_u
  kExprI32Const, 0xfe, 0x84, 0xd5, 0xa2, 0x03,  // i32.const
  kExprI64Const, 0x99, 0xe3, 0xbb, 0xb8, 0xfd, 0x80, 0x86, 0xd6, 0x23,  // i64.const
  kAtomicPrefix, kExprI64AtomicExchange8U, 0x00, 0xd4, 0xe0, 0x02,  // i64.atomic.rmw8.xchg_u
  kExprI32Const, 0xbd, 0xe6, 0x98, 0xfe, 0x7b,  // i32.const
  kExprIf, 0x7f,  // if @817 i32
    kExprI32Const, 0xd6, 0xe1, 0xba, 0x92, 0x05,  // i32.const
  kExprElse,  // else @825
    kExprI32Const, 0xf1, 0x8c, 0xf4, 0x2c,  // i32.const
    kExprEnd,  // end @831
  kExprRefNull, 0x6e,  // ref.null
  kGCPrefix, kExprRefCastNull, 0x05,  // ref.cast null
  kExprRefAsNonNull,  // ref.as_non_null
  kExprI32Const, 0xf8, 0xc0, 0xe4, 0xc7, 0x79,  // i32.const
  kGCPrefix, kExprArrayGet, 0x05,  // array.get
  kExprI32LtS,  // i32.lt_s
  kExprRefNull, 0x6e,  // ref.null
  kGCPrefix, kExprRefCastNull, 0x6e,  // ref.cast null
  kGCPrefix, kExprRefTestNull, 0x00,  // ref.test null
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kSimdPrefix, kExprV128AnyTrue,  // v128.any_true
  kExprI32LoadMem8U, 0x00, 0xc6, 0xdc, 0x03,  // i32.load8_u
  kAtomicPrefix, kExprI32AtomicAnd8U, 0x00, 0xe0, 0xd6, 0x03,  // i32.atomic.rmw8.and_u
  kAtomicPrefix, kExprI32AtomicOr, 0x01, 0xe4, 0xcd, 0x02,  // i32.atomic.rmw.or
  kExprRefNull, 0x00,  // ref.null
  kExprRefNull, 0x6d,  // ref.null
  kExprRefEq,  // ref.eq
  kExprI32LoadMem16U, 0x00, 0xf0, 0xd5, 0x03,  // i32.load16_u
  kGCPrefix, kExprRefI31,  // ref.i31
  kGCPrefix, kExprRefCastNull, 0x03,  // ref.cast null
  kGCPrefix, kExprRefCastNull, 0x04,  // ref.cast null
  kGCPrefix, kExprArrayLen,  // array.len
  kAtomicPrefix, kExprI32AtomicSub16U, 0x01, 0xac, 0xac, 0x03,  // i32.atomic.rmw16.sub_u
  kExprSelectWithType, 0x01, 0x7e,  // select
  kAtomicPrefix, kExprI64AtomicSub8U, 0x00, 0x86, 0x50,  // i64.atomic.rmw8.sub_u
  kAtomicPrefix, kExprI64AtomicExchange16U, 0x01, 0x9f, 0x98, 0x03,  // i64.atomic.rmw16.xchg_u
  kExprF32SConvertI64,  // f32.convert_i64_s
  kExprF32Add,  // f32.add
  kExprEnd,  // end @921
kExprI32Const, 0xf5, 0xf2, 0x91, 0xbb, 0x7c,  // i32.const
kExprI32Const, 0xd1, 0xa0, 0xaf, 0xdf, 0x06,  // i32.const
kExprI32ShrS,  // i32.shr_s
kExprI32Const, 0xdf, 0xfd, 0xb5, 0xac, 0x7a,  // i32.const
kExprI32Const, 0xef, 0xf3, 0xfa, 0xa0, 0x01,  // i32.const
kExprI32GeS,  // i32.ge_s
kAtomicPrefix, kExprI32AtomicLoad8U, 0x00, 0xd0, 0xa2, 0x02,  // i32.atomic.load8_u
kExprI32Add,  // i32.add
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprF32Const, 0x4c, 0xaf, 0x8c, 0xeb,  // f32.const
kExprF32Const, 0xe3, 0xf9, 0x67, 0x32,  // f32.const
kExprI64Const, 0xbe, 0x9c, 0xd9, 0xe5, 0xfc, 0x95, 0xbe, 0x82, 0xa7, 0x7f,  // i64.const
kExprI32Const, 0xf5, 0x91, 0x94, 0xc0, 0x03,  // i32.const
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprF32Const, 0x86, 0xd9, 0x94, 0x19,  // f32.const
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kGCPrefix, kExprStructGet, 0x02, 0x04,  // struct.get
kExprF32Max,  // f32.max
kExprF32Max,  // f32.max
kSimdPrefix, kExprF32x4Splat,  // f32x4.splat
kSimdPrefix, kExprF32x4Neg, 0x01,  // f32x4.neg
kSimdPrefix, kExprI32x4LtU,  // i32x4.lt_u
kSimdPrefix, kExprF64x2Min, 0x01,  // f64x2.min
kSimdPrefix, kExprI8x16ExtractLaneU, 0x00,  // i8x16.extract_lane_u
kExprI32LoadMem16S, 0x00, 0xaf, 0x0c,  // i32.load16_s
kExprI32Add,  // i32.add
kExprF32ReinterpretI32,  // f32.reinterpret_i32
kExprF32Div,  // f32.div
kGCPrefix, kExprStructNew, 0x01,  // struct.new
kExprLocalSet, 0x08,  // local.set
kExprRefNull, 0x03,  // ref.null
kExprI32Const, 0xd4, 0xbf, 0xd3, 0xf7, 0x7a,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x04,  // array.new
kExprLocalSet, 0x0a,  // local.set
kExprRefNull, 0x6a,  // ref.null
kExprI32Const, 0x80, 0xd7, 0xd4, 0xe3, 0x7b,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x03,  // array.new
kExprLocalSet, 0x0b,  // local.set
kExprRefNull, 0x6a,  // ref.null
kExprI32Const, 0xa0, 0x94, 0xe8, 0xde, 0x79,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x03,  // array.new
kExprLocalSet, 0x0c,  // local.set
kExprRefNull, 0x6a,  // ref.null
kExprI32Const, 0x88, 0xf4, 0xe7, 0x91, 0x7c,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x03,  // array.new
kExprLocalSet, 0x0f,  // local.set
kExprI64Const, 0xe3, 0xc5, 0x91, 0xed, 0xa2, 0xfe, 0xe4, 0xbf, 0x27,  // i64.const
kExprI32Const, 0xa9, 0xc9, 0xb8, 0xea, 0x7e,  // i32.const
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprF32Const, 0xef, 0xef, 0x97, 0xdf,  // f32.const
kGCPrefix, kExprStructNew, 0x02,  // struct.new
kExprLocalSet, 0x13,  // local.set
kExprI32Const, 0xf9, 0xfa, 0xcc, 0xe3, 0x02,  // i32.const
kExprI32Const, 0xbc, 0xb4, 0xfa, 0xd3, 0x06,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x06,  // array.new
kExprLocalSet, 0x17,  // local.set
kExprI32Const, 0xf2, 0xd3, 0xdf, 0xe0, 0x7e,  // i32.const
kGCPrefix, kExprRefI31,  // ref.i31
kExprLocalSet, 0x1b,  // local.set
kExprI32Const, 0xc3, 0xc2, 0x80, 0xdd, 0x79,  // i32.const
kExprEnd,  // end @1171
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}
