d8.file.execute('v8/test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([makeField(kWasmF64, true), makeField(kWasmI64, true), makeField(kWasmI64, true)]);
builder.addStruct([makeField(kWasmF64, true), makeField(kWasmI64, true), makeField(kWasmI64, true), makeField(kWasmI32, true), makeField(wasmRefNullType(kWasmArrayRef), true)], 0);
builder.addStruct([makeField(kWasmF64, true), makeField(kWasmI64, true), makeField(kWasmI64, true), makeField(kWasmI32, true), makeField(wasmRefNullType(kWasmArrayRef), true), makeField(wasmRefType(kWasmI31Ref), true), makeField(kWasmFuncRef, true), makeField(wasmRefType(kWasmFuncRef), false)], 1);
builder.addStruct([makeField(kWasmF64, true), makeField(kWasmI64, true), makeField(kWasmI64, true)], 0);
builder.addArray(wasmRefNullType(kWasmArrayRef), true);
builder.addArray(wasmRefNullType(kWasmArrayRef), true, 4);
builder.addArray(kWasmI32, true);
builder.startRecGroup();
builder.addArray(kWasmI32, true);
builder.endRecGroup();
builder.startRecGroup();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addType(makeSig([], []));
builder.endRecGroup();
builder.addMemory(16, 32);
builder.addTable(kWasmFuncRef, 2, 2, undefined)
builder.addActiveElementSegment(0, wasmI32Const(0), [[kExprRefFunc, 0, ], [kExprRefFunc, 1, ]], kWasmFuncRef);
builder.addTag(makeSig([], []));
// Generate function 1 (out of 2).
builder.addFunction(undefined, 8 /* sig */)
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x09, 0x00,  // call_indirect sig #9: v_v
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x09, 0x00,  // call_indirect sig #9: v_v
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x09, 0x00,  // call_indirect sig #9: v_v
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x09, 0x00,  // call_indirect sig #9: v_v
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x09, 0x00,  // call_indirect sig #9: v_v
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x09, 0x00,  // call_indirect sig #9: v_v
kExprI32Const, 0x01,  // i32.const
kExprCallIndirect, 0x09, 0x00,  // call_indirect sig #9: v_v
kExprTry, 0x7c,  // try @36 f64
  kExprMemorySize, 0x00,  // memory.size
  kExprI32Const, 0xbe, 0xa9, 0xd0, 0x94, 0x7f,  // i32.const
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kSimdPrefix, kExprF32x4Add, 0x01,  // f32x4.add
  kSimdPrefix, kExprI64x2ExtractLane, 0x00,  // i64x2.extract_lane
  kExprI64Const, 0xb2, 0x93, 0xfd, 0xe2, 0x97, 0xf5, 0xbe, 0xa3, 0x5b,  // i64.const
  kExprI64Shl,  // i64.shl
  kExprI64StoreMem, 0x01, 0xb6, 0xf7, 0x01,  // i64.store
  kExprF64Const, 0x47, 0x70, 0x5b, 0x34, 0x96, 0xa3, 0x25, 0x77,  // f64.const
  kExprTry, 0x7c,  // try @85 f64
    kExprLocalGet, 0x01,  // local.get
    kExprF64SConvertI32,  // f64.convert_i32_s
  kExprCatch, 0x00,  // catch @90
    kExprF64Const, 0x20, 0x48, 0xb2, 0xb7, 0x70, 0x51, 0x84, 0xbb,  // f64.const
    kExprI64Const, 0x84, 0xff, 0x9c, 0x06,  // i64.const
    kExprF64SConvertI64,  // f64.convert_i64_s
    kExprF64Abs,  // f64.abs
    kExprF64Abs,  // f64.abs
    kExprF64Mul,  // f64.mul
  kExprCatchAll,  // catch_all @110
    kExprLocalGet, 0x00,  // local.get
    kExprF64SConvertI32,  // f64.convert_i32_s
    kExprEnd,  // end @114
  kExprF64Abs,  // f64.abs
  kExprF64Abs,  // f64.abs
  kExprF64Abs,  // f64.abs
  kExprI32Const, 0x01,  // i32.const
  kExprCallIndirect, 0x09, 0x00,  // call_indirect sig #9: v_v
  kExprI32Const, 0xe8, 0xe3, 0xcc, 0x10,  // i32.const
  kExprI32Const, 0xf4, 0xa8, 0xfd, 0x9f, 0x02,  // i32.const
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kSimdPrefix, kExprS128Load32Lane, 0x00, 0xae, 0x5c, 0x02,  // v128.load32_lane
  kSimdPrefix, kExprI8x16Neg,  // i8x16.neg
  kSimdPrefix, ...kExprI32x4RelaxedTruncF64x2UZero,  // i32x4.relaxed_trunc_f64x2_u_zero
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kSimdPrefix, kExprI16x8MinS, 0x01,  // i16x8.min_s
  kSimdPrefix, kExprI16x8Abs, 0x01,  // i16x8.abs
  kSimdPrefix, kExprI16x8Abs, 0x01,  // i16x8.abs
  kSimdPrefix, kExprI16x8Abs, 0x01,  // i16x8.abs
  kSimdPrefix, kExprI16x8Abs, 0x01,  // i16x8.abs
  kSimdPrefix, kExprI16x8Abs, 0x01,  // i16x8.abs
  kSimdPrefix, kExprI16x8Abs, 0x01,  // i16x8.abs
  kSimdPrefix, kExprI16x8GeU,  // i16x8.ge_u
  kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
  kSimdPrefix, kExprS128Store16Lane, 0x00, 0xeb, 0xd7, 0x03, 0x06,  // v128.store16_lane
  kExprF64Mul,  // f64.mul
  kExprF64Abs,  // f64.abs
  kExprF64Abs,  // f64.abs
  kExprF64Abs,  // f64.abs
  kExprF64Abs,  // f64.abs
  kExprI64Const, 0xa9, 0xeb, 0xdc, 0x91, 0x81, 0xa1, 0xf2, 0xf4, 0x40,  // i64.const
  kExprI64Const, 0xea, 0xc6, 0xff, 0xa2, 0x8b, 0xed, 0xff, 0xda, 0x27,  // i64.const
  kExprI32Const, 0xca, 0xba, 0xc7, 0xff, 0x7a,  // i32.const
  kExprRefNull, 0x07,  // ref.null
  kGCPrefix, kExprStructNew, 0x01,  // struct.new
  kGCPrefix, kExprStructGet, 0x01, 0x03,  // struct.get
  kAtomicPrefix, kExprI32AtomicExchange, 0x02, 0xf4, 0x24,  // i32.atomic.rmw.xchg
  kExprIf, 0x7c,  // if @235 f64
    kExprF64Const, 0x75, 0xab, 0xcb, 0x60, 0xbe, 0x79, 0x2f, 0x75,  // f64.const
  kExprElse,  // else @246
    kExprF64Const, 0x9c, 0xe1, 0x2f, 0x0c, 0xad, 0x2b, 0x90, 0xea,  // f64.const
    kExprEnd,  // end @256
  kExprDelegate, 0x00,  // delegate
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kSimdPrefix, ...kExprF64x2RelaxedMax,  // f64x2.relaxed_max
  kExprTry, 0x7d,  // try @270 f32
    kExprF32Const, 0x8e, 0xa1, 0xef, 0x09,  // f32.const
  kExprCatchAll,  // catch_all @277
    kExprF32Const, 0xef, 0x15, 0x74, 0x54,  // f32.const
    kExprEnd,  // end @283
  kNumericPrefix, kExprI32UConvertSatF32,  // i32.trunc_sat_f32_u
  kSimdPrefix, kExprI8x16ShrU,  // i8x16.shr_u
  kSimdPrefix, kExprI32x4AllTrue, 0x01,  // i32x4.all_true
  kExprI32Const, 0x8c, 0xca, 0xc8, 0x32,  // i32.const
  kExprI32LtS,  // i32.lt_s
  kExprI32Const, 0xfc, 0x91, 0xc7, 0xf6, 0x7c,  // i32.const
  kExprI32Const, 0xe7, 0xa0, 0x91, 0x81, 0x7a,  // i32.const
  kExprReturnCall, 0x00,  // return_call
  kExprF64Const, 0x05, 0x10, 0x93, 0x2c, 0xc1, 0x2c, 0x66, 0x22,  // f64.const
  kExprI32Const, 0xb4, 0xd0, 0xc2, 0xc4, 0x7c,  // i32.const
  kExprSelectWithType, 0x01, 0x7c,  // select
  kExprI32Const, 0xe4, 0x88, 0x89, 0xf3, 0x07,  // i32.const
  kExprBr, 0x00,  // br depth=0
  kExprF64Add,  // f64.add
  kExprF64Ceil,  // f64.ceil
  kExprF64Sqrt,  // f64.sqrt
  kExprF64Sqrt,  // f64.sqrt
  kExprF64NearestInt,  // f64.nearest
  kExprF64Abs,  // f64.abs
  kExprF64Ceil,  // f64.ceil
  kExprI32Const, 0x00,  // i32.const
  kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
  kExprI32Const, 0xb2, 0xa0, 0x82, 0xc8, 0x78,  // i32.const
  kExprI32Const, 0xb6, 0xa9, 0x9c, 0xa5, 0x78,  // i32.const
  kAtomicPrefix, kExprI32AtomicXor8U, 0x00, 0xa2, 0x79,  // i32.atomic.rmw8.xor_u
  kSimdPrefix, kExprI8x16ReplaceLane, 0x01,  // i8x16.replace_lane
  kSimdPrefix, kExprF32x4SConvertI32x4, 0x01,  // f32x4.convert_i32x4_s
  kExprI32Const, 0xa1, 0xef, 0x01,  // i32.const
  kSimdPrefix, kExprI32x4ReplaceLane, 0x01,  // i32x4.replace_lane
  kSimdPrefix, kExprF64x2ExtractLane, 0x01,  // f64x2.extract_lane
  kExprF64Eq,  // f64.eq
  kExprEnd,  // end @382
]);
// Generate function 2 (out of 2).
builder.addFunction(undefined, 9 /* sig */)
  .addLocals(kWasmF32, 4)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprBlock, 0x40,  // block @3
  kExprBlock, 0x40,  // block @5
    kExprBlock, 0x40,  // block @7
      kExprBlock, 0x40,  // block @9
        kExprBlock, 0x40,  // block @11
          kExprBlock, 0x40,  // block @13
            kExprBlock, 0x40,  // block @15
              kExprI32Const, 0x00,  // i32.const
              kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
              kSimdPrefix, kExprS128Const, 0x79, 0x66, 0x26, 0x77, 0xf4, 0x58, 0x5c, 0xb9, 0x95, 0xc9, 0x39, 0xbb, 0x85, 0x18, 0xa3, 0x96,  // v128.const
              kExprI32Const, 0x00,  // i32.const
              kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
              kSimdPrefix, kExprF32x4Add, 0x01,  // f32x4.add
              kExprI32Const, 0x00,  // i32.const
              kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
              kExprF64Const, 0x37, 0x95, 0x25, 0x5c, 0xbb, 0x36, 0x85, 0xff,  // f64.const
              kSimdPrefix, kExprF64x2ReplaceLane, 0x00,  // f64x2.replace_lane
              kExprI32Const, 0x00,  // i32.const
              kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
              kSimdPrefix, kExprI8x16GtS,  // i8x16.gt_s
              kSimdPrefix, kExprF32x4Add, 0x01,  // f32x4.add
              kExprI32Const, 0x00,  // i32.const
              kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
              kExprI32Const, 0x00,  // i32.const
              kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
              kExprI32Const, 0xe6, 0xc1, 0xa2, 0x9f, 0x01,  // i32.const
              kExprI32Const, 0xef, 0xee, 0xd0, 0x82, 0x7e,  // i32.const
              kExprI32GeU,  // i32.ge_u
              kSimdPrefix, kExprS128Load8Splat, 0x00, 0x84, 0x49,  // v128.load8_splat
              kExprI32Const, 0x00,  // i32.const
              kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
              kSimdPrefix, kExprI8x16LtS,  // i8x16.lt_s
              kSimdPrefix, kExprI8x16Ne,  // i8x16.ne
              kSimdPrefix, kExprF64x2Mul, 0x01,  // f64x2.mul
              kSimdPrefix, kExprF64x2Div, 0x01,  // f64x2.div
              kSimdPrefix, kExprI16x8ExtMulHighI8x16U, 0x01,  // i16x8.extmul_high_i8x16_u
              kExprI32Const, 0x00,  // i32.const
              kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
              kSimdPrefix, kExprI64x2Eq, 0x01,  // i64x2.eq
              kSimdPrefix, kExprI32x4AllTrue, 0x01,  // i32x4.all_true
              kExprLocalGet, 0x02,  // local.get
              kExprF64ConvertF32,  // f64.promote_f32
              kExprF64StoreMem, 0x03, 0xa6, 0x15,  // f64.store
              kExprRefNull, 0x6f,  // ref.null
              kExprBrOnNull, 0x03,  // br_on_null
              kExprDrop,  // drop
              kExprMemorySize, 0x00,  // memory.size
              kExprI64Const, 0x1d,  // i64.const
              kExprI32Const, 0xde, 0x7b,  // i32.const
              kExprRefNull, 0x09,  // ref.null
              kExprI32Const, 0xbb, 0xa5, 0xc4, 0xf7, 0x04,  // i32.const
              kNumericPrefix, kExprTableGrow, 0x00,  // table.grow
              kExprF64Const, 0x6b, 0xe5, 0xf4, 0xf6, 0x2e, 0x3f, 0xe1, 0x4e,  // f64.const
              kExprLocalGet, 0x00,  // local.get
              kExprF64ConvertF32,  // f64.promote_f32
              kExprF64Sub,  // f64.sub
              kNumericPrefix, kExprI32SConvertSatF64,  // i32.trunc_sat_f64_s
              kExprTry, 0x7d,  // try @169 f32
                kExprTry, 0x7d,  // try @171 f32
                  kExprTry, 0x7d,  // try @173 f32
                    kExprTry, 0x7d,  // try @175 f32
                      kExprTry, 0x7d,  // try @177 f32
                        kExprTry, 0x7d,  // try @179 f32
                          kExprTry, 0x7d,  // try @181 f32
                            kExprTry, 0x7d,  // try @183 f32
                              kExprF64Const, 0x97, 0xc3, 0x00, 0x62, 0x5c, 0xa7, 0xe1, 0xde,  // f64.const
                              kExprF32ConvertF64,  // f32.demote_f64
                              kExprF32NearestInt,  // f32.nearest
                            kExprCatch, 0x00,  // catch @196
                              kExprF32Const, 0xaf, 0x80, 0xca, 0x5b,  // f32.const
                              kExprEnd,  // end @203
                          kExprCatch, 0x00,  // catch @204
                            kExprF32Const, 0x80, 0xed, 0xb9, 0x5e,  // f32.const
                          kExprCatchAll,  // catch_all @211
                            kExprF32Const, 0xda, 0x39, 0xc3, 0x04,  // f32.const
                            kExprEnd,  // end @217
                        kExprCatch, 0x00,  // catch @218
                          kExprF32Const, 0x22, 0xee, 0xff, 0x73,  // f32.const
                        kExprCatchAll,  // catch_all @225
                          kExprF32Const, 0xf1, 0x4e, 0xd6, 0x74,  // f32.const
                          kExprEnd,  // end @231
                      kExprCatch, 0x00,  // catch @232
                        kExprF32Const, 0xcc, 0x86, 0x89, 0xc3,  // f32.const
                      kExprCatchAll,  // catch_all @239
                        kExprF32Const, 0x10, 0x5e, 0x4f, 0x55,  // f32.const
                        kExprEnd,  // end @245
                    kExprCatch, 0x00,  // catch @246
                      kExprF32Const, 0x9c, 0xf8, 0x05, 0x34,  // f32.const
                    kExprCatchAll,  // catch_all @253
                      kExprF32Const, 0x0a, 0xec, 0xd3, 0x6f,  // f32.const
                      kExprEnd,  // end @259
                  kExprCatch, 0x00,  // catch @260
                    kExprF32Const, 0x23, 0xaa, 0x4d, 0x13,  // f32.const
                  kExprCatchAll,  // catch_all @267
                    kExprF32Const, 0x98, 0xe5, 0x41, 0x1f,  // f32.const
                    kExprEnd,  // end @273
                kExprCatch, 0x00,  // catch @274
                  kExprF32Const, 0x4d, 0x53, 0xdc, 0x7b,  // f32.const
                kExprCatchAll,  // catch_all @281
                  kExprF32Const, 0xe2, 0x8a, 0xc4, 0x5d,  // f32.const
                  kExprEnd,  // end @287
              kExprCatch, 0x00,  // catch @288
                kExprF32Const, 0x7d, 0x09, 0x51, 0x91,  // f32.const
              kExprCatchAll,  // catch_all @295
                kExprF32Const, 0x20, 0x4b, 0x37, 0x77,  // f32.const
                kExprEnd,  // end @301
              kExprLocalTee, 0x03,  // local.tee
              kExprI32SConvertF32,  // i32.trunc_f32_s
              kExprI32Ctz,  // i32.ctz
              kExprI32Ctz,  // i32.ctz
              kExprI32Ctz,  // i32.ctz
              kExprI32Ctz,  // i32.ctz
              kExprI32Ctz,  // i32.ctz
              kExprI32Ctz,  // i32.ctz
              kExprI32Ctz,  // i32.ctz
              kExprI32Ctz,  // i32.ctz
              kExprI32Ctz,  // i32.ctz
              kExprI64LoadMem32S, 0x00, 0xad, 0x5a,  // i64.load32_s
              kExprI32ConvertI64,  // i32.wrap_i64
              kExprI32Ctz,  // i32.ctz
              kExprI32Ctz,  // i32.ctz
              kExprI32LoadMem8S, 0x00, 0xad, 0x5a,  // i32.load8_s
              kSimdPrefix, kExprS128Load64Zero, 0x02, 0xbc, 0xe1, 0x03,  // v128.load64_zero
              kSimdPrefix, kExprI64x2ExtractLane, 0x00,  // i64x2.extract_lane
              kAtomicPrefix, kExprI64AtomicStore, 0x03, 0xff, 0xfe, 0x01,  // i64.atomic.store
              kExprI32Const, 0x97, 0x9a, 0xe6, 0x83, 0x7f,  // i32.const
              kExprBrIf, 0x00,  // br_if depth=0
              kExprI64Const, 0xfe, 0xe4, 0xf2, 0xb2, 0xa1, 0x89, 0x9d, 0xe7, 0x28,  // i64.const
              kAtomicPrefix, kExprI64AtomicAdd32U, 0x02, 0xee, 0xe4, 0x03,  // i64.atomic.rmw32.add_u
              kAtomicPrefix, kExprI64AtomicStore16U, 0x00, 0x81, 0x83, 0x02,  // i64.atomic.store16
              kExprI64StoreMem32, 0x02, 0xe0, 0xc3, 0x03,  // i64.store32
              kExprI32Const, 0x87, 0xc1, 0xdb, 0xbf, 0x07,  // i32.const
              kExprBrTable, 0x01, 0x00, 0x00,  // br_table entries=1
              kExprEnd,  // end @385
            kExprEnd,  // end @386
          kExprEnd,  // end @387
        kExprEnd,  // end @388
      kExprEnd,  // end @389
    kExprEnd,  // end @390
  kExprEnd,  // end @391
kExprEnd,  // end @392
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}
