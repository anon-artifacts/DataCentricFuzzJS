d8.file.execute('test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([makeField(kWasmI64, false)]);
builder.addStruct([makeField(kWasmI64, false), makeField(kWasmS128, false), makeField(kWasmS128, false)], 0);
builder.addStruct([makeField(kWasmI16, false), makeField(kWasmI16, false), makeField(kWasmI16, false), makeField(kWasmI16, false)]);
builder.addArray(kWasmI64, true);
builder.startRecGroup();
builder.addArray(kWasmF32, true);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.endRecGroup();
builder.addType(makeSig([wasmRefType(4)], []));
builder.startRecGroup();
builder.addType(makeSig([kWasmF32, wasmRefNullType(1), wasmRefType(kWasmI31Ref), wasmRefNullType(3), kWasmExternRef, wasmRefType(kWasmExternRef), wasmRefNullType(1), wasmRefType(kWasmI31Ref), wasmRefNullType(2), kWasmS128, wasmRefType(4), wasmRefType(5)], [wasmRefNullType(kWasmI31Ref), kWasmI32]));
builder.endRecGroup();
builder.addType(makeSig([kWasmF32, wasmRefType(kWasmArrayRef), kWasmI32, wasmRefType(kWasmExternRef)], []));
builder.addType(makeSig([kWasmI32, wasmRefType(6), kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32], [wasmRefType(2), kWasmExternRef, kWasmExternRef, wasmRefType(kWasmAnyRef), wasmRefType(kWasmArrayRef), kWasmI64]));
builder.addType(makeSig([kWasmAnyRef, kWasmEqRef, wasmRefType(2), kWasmExternRef, kWasmExternRef, wasmRefType(kWasmAnyRef), wasmRefType(kWasmArrayRef), kWasmI64, kWasmI32, wasmRefType(kWasmStructRef), wasmRefNullType(kWasmNullFuncRef), wasmRefNullType(2), kWasmI32], [kWasmI32]));
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addMemory(16, 32);
builder.addPassiveDataSegment([206, 147, 45, 6, 115, 191, 34, 34, 219, 147, 251, 191, 179, 172, 10, 174, 187, 225, 123, 31, 241, 171, 153, 28, 186, 151, 214, 47, 248, 144, 31]);
builder.addGlobal(wasmRefType(1), 1, [kGCPrefix, kExprStructNewDefault, 1, ]);
builder.addGlobal(wasmRefNullType(kWasmStructRef), 1, [kExprRefNull, kStructRefCode]);
builder.addGlobal(wasmRefNullType(2), 1, [kExprRefNull, 2]);
builder.addGlobal(wasmRefType(kWasmArrayRef), 1, [...wasmI64Const(961349193400091184), ...wasmI64Const(-7684192766995726227), ...wasmI64Const(-7108474840689805349), kGCPrefix, kExprArrayNewFixed, 3, 3, ]);
builder.addGlobal(kWasmI64, 1, [...wasmI64Const(349870418256), ]);
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
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addGlobal(kWasmI32, 0, wasmI32Const(0));
builder.addTable(kWasmFuncRef, 3, 3, undefined)
builder.addActiveElementSegment(0, wasmI32Const(0), [[kExprRefFunc, 0, ], [kExprRefFunc, 1, ], [kExprRefFunc, 2, ]], kWasmFuncRef);
builder.addTag(makeSig([kWasmF32, wasmRefType(kWasmArrayRef), kWasmI32, wasmRefType(kWasmExternRef)], []));
// Generate function 1 (out of 3).
builder.addFunction(undefined, 5 /* sig */)
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprLoop, 0x7d,  // loop @25 f32
  kExprBlock, 0x7d,  // block @27 f32
    kExprBlock, 0x7d,  // block @29 f32
      kExprBlock, 0x7d,  // block @31 f32
        kExprBlock, 0x7d,  // block @33 f32
          kExprTry, 0x7e,  // try @35 i64
            kExprTry, 0x7e,  // try @37 i64
              kExprTry, 0x7e,  // try @39 i64
                kExprTry, 0x7e,  // try @41 i64
                  kExprTry, 0x7e,  // try @43 i64
                    kExprI64Const, 0xb5, 0xdc, 0xfb, 0xe4, 0xe2, 0xdc, 0xa8, 0xf9, 0x67,  // i64.const
                    kExprMemorySize, 0x00,  // memory.size
                    kExprI32LoadMem16S, 0x01, 0xeb, 0x85, 0x03,  // i32.load16_s
                    kExprIf, 0x7e,  // if @62 i64
                      kExprRefFunc, 0x01,  // ref.func
                      kExprI32Const, 0x00,  // i32.const
                      kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
                      kExprI32Const, 0x9a, 0xc5, 0x83, 0xa1, 0x78,  // i32.const
                      kGCPrefix, kExprRefI31,  // ref.i31
                      kGCPrefix, kExprI31GetU,  // i31.get_u
                      kAtomicPrefix, kExprI32AtomicLoad16U, 0x00, 0xa2, 0x98, 0x03,  // i32.atomic.load16_u
                      kExprF32Const, 0x7f, 0xfa, 0x4c, 0x95,  // f32.const
                      kExprRefNull, 0x6c,  // ref.null
                      kGCPrefix, kExprRefCastNull, 0x01,  // ref.cast null
                      kExprI32Const, 0xcc, 0xe2, 0xa9, 0xd6, 0x00,  // i32.const
                      kGCPrefix, kExprRefI31,  // ref.i31
                      kExprRefNull, 0x03,  // ref.null
                      kExprRefNull, 0x6f,  // ref.null
                      kExprRefNull, 0x6f,  // ref.null
                      kExprRefAsNonNull,  // ref.as_non_null
                      kExprRefNull, 0x01,  // ref.null
                      kExprI32Const, 0xce, 0x8f, 0xfb, 0xa9, 0x7c,  // i32.const
                      kGCPrefix, kExprRefI31,  // ref.i31
                      kExprRefNull, 0x02,  // ref.null
                      kExprI32Const, 0x00,  // i32.const
                      kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
                      kExprF32Const, 0xa6, 0x4e, 0x79, 0xa5,  // f32.const
                      kExprI32Const, 0xeb, 0xf1, 0xf0, 0xa9, 0x05,  // i32.const
                      kExprI32Const, 0x14,  // i32.const
                      kExprI32RemS,  // i32.rem_s
                      kGCPrefix, kExprArrayNew, 0x04,  // array.new
                      kExprRefFunc, 0x00,  // ref.func
                      kExprCallFunction, 0x02,  // call function #2: n_fnrnnrnrnsrr
                      kExprDrop,  // drop
                      kExprDrop,  // drop
                      kExprI32Const, 0xb3, 0x87, 0x81, 0xb1, 0x7d,  // i32.const
                      kExprI32Add,  // i32.add
                      kExprF32ReinterpretI32,  // f32.reinterpret_i32
                      kExprI32Const, 0xd0, 0x9e, 0xce, 0xb7, 0x01,  // i32.const
                      kExprBrIf, 0x06,  // br_if depth=6
                      kExprI32SConvertF32,  // i32.trunc_f32_s
                      kSimdPrefix, kExprI8x16ShrU,  // i8x16.shr_u
                      kSimdPrefix, kExprI16x8BitMask, 0x01,  // i16x8.bitmask
                      kNumericPrefix, kExprTableGrow, 0x00,  // table.grow
                      kExprI64LoadMem16U, 0x00, 0xaf, 0x82, 0x02,  // i64.load16_u
                    kExprElse,  // else @179
                      kExprI64Const, 0xba, 0x92, 0xe8, 0xe0, 0x8d, 0xdc, 0xff, 0x85, 0xf0, 0x00,  // i64.const
                      kExprEnd,  // end @191
                    kExprI64And,  // i64.and
                    kExprEnd,  // end @193
                  kExprEnd,  // end @194
                kExprEnd,  // end @195
              kExprEnd,  // end @196
            kExprEnd,  // end @197

          kExprTry, 0x7d,  // try @205 f32
            kExprGlobalGet, 0x06,  // global.get
            kExprF32SConvertI32,  // f32.convert_i32_s
            kExprI32ReinterpretF32,  // i32.reinterpret_f32
            kExprF32Const, 0xb0, 0xe2, 0x75, 0x79,  // f32.const
            kExprF32Const, 0x57, 0xd1, 0xdd, 0x5a,  // f32.const
            kExprF32Trunc,  // f32.trunc
            kExprF32Add,  // f32.add
            kExprF32Ceil,  // f32.ceil
            kExprI32Const, 0x00,  // i32.const
            kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
            kSimdPrefix, kExprI64x2AllTrue, 0x01,  // i64x2.all_true
            kExprI32Const, 0x14,  // i32.const
            kExprI32RemS,  // i32.rem_s
            kGCPrefix, kExprArrayNew, 0x04,  // array.new
            kExprCallFunction, 0x01,  // call function #1: v_r
            kExprI32Const, 0x00,  // i32.const
            kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
            kSimdPrefix, kExprV128AnyTrue,  // v128.any_true
            kExprI32Const, 0xed, 0xb8, 0xca, 0x96, 0x7b,  // i32.const
            kExprI32Const, 0xf0, 0xd6, 0xef, 0xea, 0x7d,  // i32.const
            kExprI32Rol,  // i32.rotl
            kExprI32Const, 0x00,  // i32.const
            kExprReturnCallIndirect, 0x05, 0x00,  // return_call_indirect
          kExprCatch, 0x00,  // catch @284
            kExprDrop,  // drop
            kExprDrop,  // drop
            kExprDrop,  // drop
            kExprEnd,  // end @290
        
          kExprI32Const, 0xde, 0x94, 0xa1, 0xb9, 0x7f,  // i32.const
          kExprI32Const, 0xbf, 0xe7, 0xe1, 0xfc, 0x7e,  // i32.const
          kGCPrefix, kExprArrayNewData, 0x04, 0x00,  // array.new_data
          kExprRefNull, 0x06,  // ref.null
          kExprCallRef, 0x06,  // call_ref: v_r

          kExprDrop,
          kExprDrop,
          kExprF32Const, 0x1c, 0xf0, 0x41, 0x56,  // f32.const
          kExprEnd,  // end @425
        kExprEnd,  // end @426
      kExprEnd,  // end @427
    kExprEnd,  // end @428
  kExprEnd,  // end @429

kExprF64Const, 0x2b, 0x87, 0xac, 0x1c, 0xa0, 0xd2, 0x5c, 0x1f,  // f64.const
kExprRefNull, 0x00,  // ref.null
kExprRefAsNonNull,  // ref.as_non_null
kGCPrefix, kExprRefCastNull, 0x6e,  // ref.cast null
kGCPrefix, kExprRefCast, 0x04,  // ref.cast
kExprRefNull, 0x06,  // ref.null
kExprCallRef, 0x06,  // call_ref: v_r
kExprF64Const, 0x94, 0x77, 0xb3, 0x5d, 0x6e, 0xbe, 0x5d, 0x11,  // f64.const
kExprI32Const, 0x80, 0x8b, 0xaf, 0x9b, 0x79,  // i32.const
kExprI32Ctz,  // i32.ctz
kExprI32Const, 0xc5, 0x8e, 0xd5, 0x83, 0x7a,  // i32.const
kExprI32StoreMem8, 0x00, 0xb3, 0xf9, 0x02,  // i32.store8
kExprF64Trunc,  // f64.trunc
kExprF64Sub,  // f64.sub
kExprF32ConvertF64,  // f32.demote_f64
kExprF32Const, 0x81, 0x12, 0x0d, 0x90,  // f32.const
kExprF32Const, 0x7c, 0x24, 0x23, 0xb5,  // f32.const
kExprF32Mul,  // f32.mul
kExprF32Div,  // f32.div
kExprRefNull, 0x6a,  // ref.null
kGCPrefix, kExprRefCastNull, 0x01,  // ref.cast null
kExprI32Const, 0xcb, 0xcb, 0xbe, 0xf3, 0x04,  // i32.const
kGCPrefix, kExprRefI31,  // ref.i31
kExprRefNull, 0x03,  // ref.null
kExprRefNull, 0x6f,  // ref.null
kExprRefNull, 0x6f,  // ref.null
kExprRefAsNonNull,  // ref.as_non_null
kExprRefNull, 0x01,  // ref.null
kExprI32Const, 0xa7, 0x82, 0x80, 0xae, 0x78,  // i32.const
kGCPrefix, kExprRefI31,  // ref.i31
kExprRefNull, 0x02,  // ref.null
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kExprF32Const, 0x73, 0xc4, 0x5c, 0x39,  // f32.const
kExprI32Const, 0xaf, 0xa9, 0xd1, 0xe8, 0x03,  // i32.const
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNew, 0x04,  // array.new
kExprRefFunc, 0x00,  // ref.func
kExprCallFunction, 0x02,  // call function #2: n_fnrnnrnrnsrr
kExprDrop,  // drop
kExprDrop,  // drop

kExprI32Const, 0xfb, 0xac, 0xbf, 0x7b,  // i32.const
kExprI32Const, 0xad, 0xbf, 0xac, 0xd2, 0x7b,  // i32.const
kExprI32Const, 0xd4, 0xbe, 0x82, 0x65,  // i32.const
kExprRefNull, 0x05,  // ref.null
kExprCallRef, 0x05,  // call_ref: i_iii

kExprDrop,
kExprDrop,
kExprI32Const, 0xfb, 0xc4, 0x90, 0x82, 0x7c,  // i32.const
kExprEnd,  // end @1987
]);
// Generate function 2 (out of 3).
builder.addFunction(undefined, 6 /* sig */)
  .addBodyWithEnd([
// signature: v_r
// body:
kExprEnd,  // end @3
]);
// Generate function 3 (out of 3).
builder.addFunction(undefined, 7 /* sig */)
  .addLocals(kWasmI32, 22)
  .addBodyWithEnd([
// signature: n_fnrnnrnrnsrr
// body:
kExprRefNull, 0x6c,  // ref.null
...wasmI32Const(1),
kExprEnd,  // end @5
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}
