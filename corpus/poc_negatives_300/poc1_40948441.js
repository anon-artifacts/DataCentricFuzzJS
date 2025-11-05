d8.file.execute('v8/test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addStruct([]);
builder.addStruct([makeField(kWasmI8, false), makeField(wasmRefNullType(kWasmArrayRef), false), makeField(kWasmI32, true), makeField(kWasmEqRef, false)]);
builder.addArray(kWasmF32, true);
builder.addArray(kWasmI16, true);
builder.addArray(kWasmI64, true);
builder.startRecGroup();
builder.addArray(wasmRefType(3), true);
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
builder.addType(makeSig([kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32], [kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32, kWasmF32]));
builder.endRecGroup();
builder.startRecGroup();
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32], [wasmRefType(0), wasmRefType(0), wasmRefType(0), wasmRefType(0), kWasmFuncRef, kWasmAnyRef, kWasmI64, wasmRefNullType(kWasmI31Ref), wasmRefNullType(0), kWasmAnyRef, wasmRefType(1), kWasmI32, kWasmI32, kWasmI32]));
builder.endRecGroup();
builder.startRecGroup();
builder.addType(makeSig([], []));
builder.endRecGroup();
builder.addType(makeSig([wasmRefNullType(kWasmI31Ref), wasmRefType(0), wasmRefType(0), wasmRefType(0), wasmRefType(0), wasmRefType(0), wasmRefType(0), wasmRefType(0), wasmRefType(0), wasmRefType(0), wasmRefType(0), wasmRefType(0), wasmRefType(0), wasmRefType(0)], []));
builder.addMemory(16, 32);
builder.addPassiveDataSegment([148, 214, 121, 65, 131, 123, 210, 221, 127, 176, 139, 240, 213, 245, 82, 93, 220, 209, 170, 119, 109, 171, 69, 252, 120, 97, 112, 245, 156, 30, 99, 138, 212, 236, 158, 85, 71, 25, 112, 106, 67, 43, 253, 182, 133, 31, 206, 105, 142, 63, 10, 151, 79, 94, 230, 161, 49, 124, 131, 85]);
builder.addTable(kWasmFuncRef, 4, 4, undefined)
builder.addActiveElementSegment(0, wasmI32Const(0), [[kExprRefFunc, 0, ], [kExprRefFunc, 1, ], [kExprRefFunc, 2, ], [kExprRefFunc, 3, ]], kWasmFuncRef);
builder.addTag(makeSig([], []));
// Generate function 1 (out of 4).
builder.addFunction(undefined, 6 /* sig */)
  .addLocals(wasmRefNullType(0), 1).addLocals(wasmRefType(9), 1).addLocals(kWasmS128, 1).addLocals(kWasmExternRef, 1).addLocals(wasmRefType(kWasmI31Ref), 1).addLocals(kWasmF64, 1).addLocals(wasmRefType(3), 1).addLocals(wasmRefNullType(0), 1).addLocals(wasmRefType(kWasmAnyRef), 1)
  .addBodyWithEnd([
// signature: i_iii
// body:
kExprRefFunc, 0x03,  // ref.func
kExprLocalSet, 0x04,  // local.set
kExprLoop, 0x7d,  // loop @29 f32
  kExprLoop, 0x7f,  // loop @31 i32
    kExprF64Const, 0x72, 0xe9, 0x8c, 0x45, 0x7d, 0xcc, 0xc2, 0x0c,  // f64.const
    kExprF64Const, 0x86, 0x02, 0xbc, 0x16, 0x94, 0xab, 0x8f, 0x3e,  // f64.const
    kExprF64Ne,  // f64.ne
    kExprF64Const, 0xa1, 0xce, 0x0a, 0xe0, 0xcd, 0x1d, 0x15, 0x7b,  // f64.const
    kExprF64Const, 0x50, 0xc3, 0xc6, 0xcf, 0x22, 0xa3, 0x92, 0x35,  // f64.const
    kExprF64Const, 0xe6, 0x7e, 0x5b, 0xe2, 0x05, 0xc8, 0x55, 0x1e,  // f64.const
    kExprF64Ne,  // f64.ne
    kExprI64Const, 0xde, 0x92, 0xdd, 0x83, 0x9c, 0xf1, 0xc5, 0x90, 0x8d, 0x7f,  // i64.const
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kAtomicPrefix, kExprI64AtomicStore8U, 0x00, 0x9a, 0x34,  // i64.atomic.store8
    kExprI32Const, 0xbf, 0xdd, 0xde, 0xaf, 0x02,  // i32.const
    kExprBrIf, 0x00,  // br_if depth=0
    kExprF64Const, 0x95, 0xa8, 0x25, 0x99, 0x61, 0x4e, 0xda, 0xe8,  // f64.const
    kExprF64Ne,  // f64.ne
    kNumericPrefix, kExprTableSize, 0x00,  // table.size
    kExprI64Const, 0xd1, 0xfe, 0xa0, 0xee, 0xe1, 0xe3, 0xa9, 0xa3, 0xbf, 0x7f,  // i64.const
    kAtomicPrefix, kExprI64AtomicAdd32U, 0x02, 0xfe, 0xfd, 0x03,  // i64.atomic.rmw32.add_u
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kExprI64Clz,  // i64.clz
    kAtomicPrefix, kExprI64AtomicStore8U, 0x00, 0x9a, 0x34,  // i64.atomic.store8
    kExprI32Const, 0x91, 0x8a, 0x89, 0xf7, 0x78,  // i32.const
    kExprBrIf, 0x00,  // br_if depth=0
    kExprF64Const, 0xec, 0x9a, 0x79, 0x48, 0x1f, 0x29, 0x9a, 0x96,  // f64.const
    kNumericPrefix, kExprTableSize, 0x00,  // table.size
    kExprRefNull, 0x6c,  // ref.null
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kGCPrefix, kExprStructNew, 0x00,  // struct.new
    kExprBlock, 0x0a,  // block @230
      kExprTryTable, 0x0a, 0x00,  // try_table entries=0
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
        kExprBlock, 0x40,  // block @249
          kExprBlock, 0x40,  // block @251
            kExprBlock, 0x40,  // block @253
              kExprTryTable, 0x09, 0x02, 0x02, 0x01, 0x02, 0x00,  // try_table entries=2
                kExprEnd,  // end @262
              kExprBr, 0x02,  // br depth=2
              kExprEnd,  // end @265
            kExprBr, 0x01,  // br depth=1
            kExprEnd,  // end @268
          kExprBr, 0x00,  // br depth=0
          kExprEnd,  // end @271
        kExprEnd,  // end @272
      kExprBr, 0x00,  // br depth=0
      kExprEnd,  // end @275
    kNumericPrefix, kExprTableSize, 0x00,  // table.size
    kExprI32Const, 0xe4, 0x99, 0xa8, 0xe0, 0x78,  // i32.const
    kExprI32Const, 0x80, 0x83, 0xbe, 0x96, 0x7a,  // i32.const
    kExprI32Mul,  // i32.mul
    kExprI32Const, 0x00,  // i32.const
    kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
    kSimdPrefix, kExprS128Store16Lane, 0x00, 0x9f, 0x3e, 0x07,  // v128.store16_lane
    kNumericPrefix, kExprTableSize, 0x00,  // table.size
    kExprI32Const, 0xc0, 0xd5, 0xa6, 0x90, 0x02,  // i32.const
    kExprI32Const, 0xcb, 0xaa, 0xaa, 0xcf, 0x7b,  // i32.const
    kExprI32Const, 0xd7, 0xd8, 0xff, 0xbe, 0x04,  // i32.const
    kExprI32Const, 0xd4, 0xed, 0xce, 0xbb, 0x04,  // i32.const
    kExprI32Const, 0x94, 0x91, 0x94, 0x88, 0x7e,  // i32.const
    kExprI32Const, 0xb0, 0xdd, 0xe4, 0x8f, 0x03,  // i32.const
    kExprI32Const, 0xc4, 0xe0, 0xbd, 0xd5, 0x7a,  // i32.const
    kExprI32Const, 0xab, 0xfb, 0x8d, 0xe9, 0x06,  // i32.const
    kExprI32Const, 0xff, 0x8b, 0xc2, 0xb5, 0x7b,  // i32.const
    kExprI32Const, 0xec, 0x9d, 0xc9, 0xd3, 0x02,  // i32.const
    kExprI32Const, 0xc0, 0xe2, 0x8e, 0xab, 0x01,  // i32.const
    kExprRefNull, 0x08,  // ref.null
    kExprCallRef, 0x08,  // call_ref: rrrrnnlnnnriii_iiiiiiiiiiiiii
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
    kExprF64Const, 0x5a, 0x76, 0x63, 0x0b, 0x70, 0xba, 0xdf, 0x27,  // f64.const
    kExprF64Ne,  // f64.ne
    kAtomicPrefix, kExprI32AtomicAnd16U, 0x01, 0x9a, 0x34,  // i32.atomic.rmw16.and_u
    kExprEnd,  // end @404
  kExprI32Const, 0x9f, 0x9c, 0xe2, 0xa2, 0x7a,  // i32.const
  kExprI32Const, 0xa5, 0x99, 0xd5, 0x1d,  // i32.const
  kExprI32Mul,  // i32.mul
  kExprI32Const, 0xa6, 0xb8, 0xca, 0x9d, 0x02,  // i32.const
  kExprI32Const, 0xdd, 0xb0, 0x8b, 0x89, 0x04,  // i32.const
  kExprI32Mul,  // i32.mul
  kExprI32Const, 0xd4, 0x97, 0x9a, 0xa8, 0x07,  // i32.const
  kExprI32Mul,  // i32.mul
  kExprI32Const, 0xc8, 0xde, 0xdc, 0x70,  // i32.const
  kExprI32Const, 0xf8, 0x9f, 0xfb, 0x83, 0x7a,  // i32.const
  kExprI32Mul,  // i32.mul
  kExprI32Const, 0xdf, 0xaf, 0x9c, 0x80, 0x7c,  // i32.const
  kExprI32Const, 0x99, 0x85, 0xec, 0xb5, 0x7c,  // i32.const
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kExprI32Const, 0x9c, 0xa1, 0x94, 0xa2, 0x02,  // i32.const
  kExprI32Const, 0xdd, 0xdc, 0x8d, 0x73,  // i32.const
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kExprI32Mul,  // i32.mul
  kExprI32Const, 0xbe, 0x8c, 0x87, 0xea, 0x06,  // i32.const
  kExprI32Const, 0x90, 0xff, 0xb0, 0xbf, 0x03,  // i32.const
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0x50,  // i32.atomic.rmw8.sub_u
  kExprI32Mul,  // i32.mul
  kExprI32Mul,  // i32.mul
  kExprI32Mul,  // i32.mul
  kExprI32Mul,  // i32.mul
  kExprI32Const, 0x88, 0xd9, 0x90, 0xeb, 0x04,  // i32.const
  kExprI32Const, 0xe2, 0x8a, 0xb9, 0x80, 0x06,  // i32.const
  kExprI32Const, 0x9b, 0xaa, 0xb5, 0xeb, 0x7a,  // i32.const
  kExprI32Const, 0x8b, 0xce, 0xad, 0xb7, 0x7d,  // i32.const
  kExprI32Const, 0xad, 0xac, 0xb7, 0xf9, 0x02,  // i32.const
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kExprI32Const, 0xff, 0xcc, 0x8c, 0xdb, 0x7e,  // i32.const
  kExprI32Const, 0xdf, 0x9a, 0xaf, 0xe0, 0x78,  // i32.const
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kExprI32Const, 0xac, 0xb1, 0xf3, 0x32,  // i32.const
  kExprI32Const, 0x93, 0x8e, 0x8c, 0xe9, 0x04,  // i32.const
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kExprI32Mul,  // i32.mul
  kExprI32Const, 0xc0, 0xb2, 0x93, 0xb8, 0x7f,  // i32.const
  kExprI32Const, 0xaf, 0xa4, 0xf7, 0x88, 0x02,  // i32.const
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kExprI32Const, 0xfa, 0x80, 0xa4, 0xd7, 0x7b,  // i32.const
  kExprI32Const, 0xc5, 0x85, 0xef, 0xfe, 0x7d,  // i32.const
  kExprI32Const, 0xa1, 0x86, 0xa8, 0x66,  // i32.const
  kExprI32Const, 0xf1, 0xd4, 0xd1, 0xbf, 0x07,  // i32.const
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kExprI32Const, 0xfa, 0x8e, 0x99, 0xbc, 0x7b,  // i32.const
  kExprI32Const, 0x93, 0x91, 0xa5, 0xbb, 0x7a,  // i32.const
  kExprI32Const, 0xb2, 0x97, 0xd6, 0x9d, 0x7b,  // i32.const
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0x9f, 0x3e,  // i32.atomic.rmw8.sub_u
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kExprI32Const, 0x85, 0x97, 0xc9, 0x89, 0x7a,  // i32.const
  kExprI32Const, 0xad, 0x8e, 0xf9, 0xfa, 0x05,  // i32.const
  kExprI32Mul,  // i32.mul
  kExprI32Const, 0xa6, 0xd8, 0x41,  // i32.const
  kExprI32Const, 0xb6, 0x87, 0xc6, 0xbd, 0x7f,  // i32.const
  kExprI32Mul,  // i32.mul
  kExprI32Const, 0xe8, 0xb5, 0xff, 0xe4, 0x7b,  // i32.const
  kExprI32Const, 0xe3, 0xac, 0xdf, 0x86, 0x79,  // i32.const
  kExprI32Const, 0x96, 0xd4, 0x81, 0xad, 0x07,  // i32.const
  kExprI32Mul,  // i32.mul
  kExprI32Mul,  // i32.mul
  kExprI32Mul,  // i32.mul
  kExprI32Mul,  // i32.mul
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kExprI32Const, 0xfe, 0x9f, 0xd4, 0xcc, 0x03,  // i32.const
  kExprI32Const, 0x8d, 0xc2, 0xe6, 0x99, 0x7c,  // i32.const
  kExprI32Mul,  // i32.mul
  kExprI32Const, 0x9d, 0xb3, 0xfa, 0x89, 0x02,  // i32.const
  kNumericPrefix, kExprTableSize, 0x00,  // table.size
  kExprI32Mul,  // i32.mul
  kExprI32Mul,  // i32.mul
  kNumericPrefix, kExprTableSize, 0x00,  // table.size
  kExprI32Mul,  // i32.mul
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kNumericPrefix, kExprTableSize, 0x00,  // table.size
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kNumericPrefix, kExprTableSize, 0x00,  // table.size
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kNumericPrefix, kExprTableSize, 0x00,  // table.size
  kAtomicPrefix, kExprI32AtomicSub8U, 0x00, 0xd0, 0xa0, 0x01,  // i32.atomic.rmw8.sub_u
  kExprI32Mul,  // i32.mul
  kNumericPrefix, kExprTableSize, 0x00,  // table.size
  kExprI32Mul,  // i32.mul
  kGCPrefix, kExprArrayNewData, 0x02, 0x00,  // array.new_data
  kNumericPrefix, kExprTableSize, 0x00,  // table.size
  kGCPrefix, kExprArrayGet, 0x02,  // array.get
  kExprEnd,  // end @835
kNumericPrefix, kExprI32UConvertSatF32,  // i32.trunc_sat_f32_u
kGCPrefix, kExprRefI31,  // ref.i31
kGCPrefix, kExprRefCastNull, 0x04,  // ref.cast null
kGCPrefix, kExprRefCast, 0x6c,  // ref.cast
kExprLocalSet, 0x07,  // local.set
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kExprI32Const, 0x14,  // i32.const
kExprI32RemS,  // i32.rem_s
kGCPrefix, kExprArrayNewDefault, 0x03,  // array.new_default
kExprLocalSet, 0x09,  // local.set
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kExprI32Const, 0x8f, 0xd6, 0xfd, 0xfb, 0x79,  // i32.const
kExprI32Const, 0x8d, 0x85, 0xa7, 0x0b,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0xc8, 0xa3, 0x91, 0xa4, 0x7f,  // i32.const
kExprI32Const, 0xba, 0xc4, 0xf1, 0xb0, 0x78,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0x83, 0xbd, 0xbc, 0xd9, 0x03,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0xc8, 0xa0, 0xee, 0xe4, 0x04,  // i32.const
kExprI32Const, 0xf8, 0xbd, 0xc5, 0x83, 0x06,  // i32.const
kExprI32Const, 0xdd, 0xf6, 0xc3, 0xc8, 0x7e,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0x98, 0x90, 0xb8, 0xdd, 0x7c,  // i32.const
kExprI32Const, 0xc5, 0x80, 0xa2, 0xc5, 0x00,  // i32.const
kExprI32Const, 0xfe, 0xd2, 0xbf, 0x8d, 0x07,  // i32.const
kExprI32RemS,  // i32.rem_s
kExprI32RemS,  // i32.rem_s
kExprI32Mul,  // i32.mul
kExprI32Const, 0xe7, 0xd9, 0x8c, 0xee, 0x07,  // i32.const
kExprI32Const, 0xa5, 0xe0, 0xd5, 0xbb, 0x7b,  // i32.const
kExprI32RemS,  // i32.rem_s
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xd4, 0x97, 0xfa, 0x6c,  // i32.const
kExprI32Const, 0xb5, 0x8a, 0xa0, 0x8e, 0x78,  // i32.const
kExprI32RemS,  // i32.rem_s
kExprI32Const, 0xc0, 0x97, 0xf1, 0x81, 0x7a,  // i32.const
kExprI32Const, 0xbb, 0x8e, 0x86, 0x9b, 0x7b,  // i32.const
kExprI32RemS,  // i32.rem_s
kExprI32Const, 0xfb, 0xa0, 0xca, 0xca, 0x06,  // i32.const
kExprI32Const, 0xe1, 0x84, 0xe5, 0xe7, 0x7a,  // i32.const
kExprI32RemS,  // i32.rem_s
kExprI32RemS,  // i32.rem_s
kExprI32RemS,  // i32.rem_s
kExprI32Const, 0xcf, 0xe9, 0xa5, 0xea, 0x07,  // i32.const
kExprI32Const, 0xdc, 0xab, 0x81, 0xa2, 0x78,  // i32.const
kExprI32RemS,  // i32.rem_s
kExprI32RemS,  // i32.rem_s
kExprI32Mul,  // i32.mul
kExprI32Const, 0xff, 0xe5, 0xa4, 0x9f, 0x78,  // i32.const
kExprI32Const, 0xb5, 0xe6, 0xc3, 0xdc, 0x7b,  // i32.const
kExprI32RemS,  // i32.rem_s
kExprI32Const, 0xec, 0xe2, 0xa5, 0xed, 0x7c,  // i32.const
kExprI32Const, 0xa6, 0xb0, 0xea, 0x6d,  // i32.const
kExprI32RemS,  // i32.rem_s
kExprI32Const, 0x9a, 0xbb, 0x89, 0xdc, 0x78,  // i32.const
kExprI32Const, 0xb8, 0xaa, 0xe6, 0xe7, 0x07,  // i32.const
kExprI32RemS,  // i32.rem_s
kExprI32RemS,  // i32.rem_s
kExprI32Const, 0xc9, 0xe0, 0x8f, 0xbd, 0x79,  // i32.const
kExprI32Const, 0x9d, 0x84, 0x87, 0x9f, 0x01,  // i32.const
kExprI32RemS,  // i32.rem_s
kExprI32Const, 0xe4, 0xa4, 0x95, 0xb2, 0x78,  // i32.const
kExprI32Const, 0xec, 0xb8, 0xe8, 0xd0, 0x79,  // i32.const
kExprI32RemS,  // i32.rem_s
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kExprI32RemS,  // i32.rem_s
kExprI32RemS,  // i32.rem_s
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kExprI32RemS,  // i32.rem_s
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kExprI32RemS,  // i32.rem_s
kExprI32RemS,  // i32.rem_s
kExprI32RemS,  // i32.rem_s
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kExprI32RemS,  // i32.rem_s
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kExprI32RemS,  // i32.rem_s
kExprI32Mul,  // i32.mul
kNumericPrefix, kExprTableSize, 0x00,  // table.size
kExprI32Mul,  // i32.mul
kExprI32Const, 0xf1, 0xe9, 0xcf, 0xf9, 0x07,  // i32.const
kExprI32Const, 0x88, 0xbe, 0xd1, 0x8d, 0x02,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0x81, 0x9a, 0xaa, 0xaa, 0x7b,  // i32.const
kExprI32Const, 0xf1, 0xc2, 0xd2, 0x82, 0x03,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0x94, 0xd3, 0x94, 0xb7, 0x06,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0xbf, 0xb2, 0xc0, 0xe1, 0x7e,  // i32.const
kExprI32Const, 0x9c, 0xa0, 0xa1, 0xfc, 0x7e,  // i32.const
kExprI32Const, 0xab, 0xb7, 0xfd, 0x6e,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0x94, 0xc9, 0xf2, 0xa1, 0x7b,  // i32.const
kExprI32Const, 0x83, 0xe6, 0xad, 0xd7, 0x05,  // i32.const
kExprI32Const, 0x84, 0xd8, 0xa5, 0x82, 0x04,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xe9, 0xcd, 0xca, 0xa6, 0x04,  // i32.const
kExprI32Const, 0xc9, 0x9b, 0x9d, 0x97, 0x07,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0x95, 0x7f,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32DivS,  // i32.div_s
kExprRefNull, 0x03,  // ref.null
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x02,  // ref.cast null
kExprI32Const, 0xe7, 0xf4, 0xcc, 0xc2, 0x7b,  // i32.const
kExprI32Const, 0xa5, 0xd8, 0xa7, 0xff, 0x03,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0xb8, 0xed, 0xa2, 0xb0, 0x7f,  // i32.const
kExprI32Const, 0xcc, 0x96, 0xf8, 0xe3, 0x04,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0xd5, 0xbd, 0x98, 0x86, 0x05,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0x8f, 0xd2, 0xd3, 0x95, 0x7f,  // i32.const
kExprI32Const, 0xd9, 0xd7, 0xca, 0xde, 0x7a,  // i32.const
kExprI32Const, 0xa1, 0xdd, 0xcf, 0x81, 0x06,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xfc, 0xb5, 0x97, 0x9b, 0x7c,  // i32.const
kExprI32Const, 0xcd, 0xbf, 0xcc, 0xad, 0x03,  // i32.const
kExprI32Const, 0x9b, 0xc1, 0xb9, 0x93, 0x7f,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xb5, 0xe9, 0xfc, 0xc9, 0x03,  // i32.const
kExprI32Const, 0xd9, 0xdd, 0xd9, 0xa9, 0x78,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xc9, 0x88, 0xba, 0xf7, 0x01,  // i32.const
kExprI32Const, 0x96, 0xd0, 0xa1, 0xef, 0x78,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0xfa, 0xaf, 0xc4, 0x92, 0x02,  // i32.const
kExprI32Const, 0xab, 0xa1, 0xe1, 0x2c,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0x8d, 0xf2, 0xd6, 0x8a, 0x7e,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0xa8, 0xc6, 0xe2, 0xeb, 0x05,  // i32.const
kExprI32Const, 0xfa, 0xc4, 0xee, 0xca, 0x02,  // i32.const
kExprI32Const, 0x9e, 0xda, 0x9a, 0xd3, 0x02,  // i32.const
kExprI32Const, 0x80, 0xa0, 0xe8, 0x88, 0x03,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xd4, 0x85, 0xd4, 0xb7, 0x7f,  // i32.const
kExprI32Const, 0x8d, 0xa3, 0xb2, 0x96, 0x07,  // i32.const
kExprI32Const, 0xd3, 0xd4, 0x9e, 0xe2, 0x78,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xff, 0xba, 0xa7, 0xbc, 0x01,  // i32.const
kExprI32Const, 0xed, 0x8e, 0xa5, 0x90, 0x02,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0x97, 0x85, 0xc9, 0xac, 0x07,  // i32.const
kExprI32Const, 0xaa, 0x85, 0xd1, 0xcb, 0x7c,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0xc6, 0x00,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0xde, 0x81, 0x85, 0xbf, 0x06,  // i32.const
kExprI32Const, 0xcf, 0xe3, 0xd3, 0xa6, 0x02,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0xe4, 0x82, 0xc3, 0xcc, 0x7b,  // i32.const
kExprI32Const, 0x8b, 0x9f, 0x80, 0xe7, 0x7d,  // i32.const
kExprI32Const, 0xaa, 0xa0, 0xbf, 0xba, 0x7a,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0x99, 0xac, 0xf1, 0xa4, 0x07,  // i32.const
kExprI32Const, 0x9c, 0x9c, 0xf1, 0x81, 0x7f,  // i32.const
kExprI32Const, 0xa6, 0xf0, 0x9f, 0xc0, 0x01,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xbf, 0xc1, 0xf0, 0xc6, 0x7d,  // i32.const
kExprI32Const, 0xb9, 0x88, 0xa0, 0x89, 0x7b,  // i32.const
kExprI32Const, 0x87, 0xc4, 0xe8, 0xb0, 0x7f,  // i32.const
kExprI32Const, 0x83, 0xc6, 0xad, 0xc9, 0x04,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xb8, 0x9a, 0x94, 0x86, 0x03,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xfd, 0x8d, 0xc9, 0x85, 0x7e,  // i32.const
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Const, 0xc8, 0xa6, 0x84, 0x8d, 0x01,  // i32.const
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32And,  // i32.and
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Clz,  // i32.clz
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprRefNull, 0x01,  // ref.null
kGCPrefix, kExprStructGet, 0x01, 0x03,  // struct.get
kGCPrefix, kExprStructNew, 0x01,  // struct.new
kGCPrefix, kExprStructGet, 0x01, 0x01,  // struct.get
kExprI32Const, 0x8b, 0x9f, 0xa3, 0xc9, 0x00,  // i32.const
kExprRefNull, 0x6d,  // ref.null
kGCPrefix, kExprStructNew, 0x01,  // struct.new
kGCPrefix, kExprStructGet, 0x01, 0x01,  // struct.get
kExprI32Const, 0xd6, 0x95, 0xc4, 0x47,  // i32.const
kExprRefNull, 0x6d,  // ref.null
kGCPrefix, kExprStructNew, 0x01,  // struct.new
kGCPrefix, kExprStructGet, 0x01, 0x01,  // struct.get
kExprI32Const, 0x94, 0xd8, 0x87, 0x80, 0x7b,  // i32.const
kExprRefNull, 0x6d,  // ref.null
kGCPrefix, kExprStructNew, 0x01,  // struct.new
kGCPrefix, kExprStructGet, 0x01, 0x01,  // struct.get
kExprI32Const, 0xc0, 0xbe, 0x96, 0xd2, 0x7b,  // i32.const
kExprRefNull, 0x6d,  // ref.null
kGCPrefix, kExprStructNew, 0x01,  // struct.new
kGCPrefix, kExprStructGet, 0x01, 0x01,  // struct.get
kExprI32Const, 0x9c, 0xc5, 0xe5, 0xf8, 0x04,  // i32.const
kExprRefNull, 0x6d,  // ref.null
kGCPrefix, kExprStructNew, 0x01,  // struct.new
kGCPrefix, kExprStructGet, 0x01, 0x01,  // struct.get
kExprI32Const, 0x9a, 0x84, 0xcd, 0xaf, 0x07,  // i32.const
kExprRefNull, 0x6d,  // ref.null
kGCPrefix, kExprStructNew, 0x01,  // struct.new
kGCPrefix, kExprStructGet, 0x01, 0x01,  // struct.get
kGCPrefix, kExprRefCastNull, 0x01,  // ref.cast null
kGCPrefix, kExprStructGet, 0x01, 0x01,  // struct.get
kGCPrefix, kExprRefCast, 0x6a,  // ref.cast
kExprLocalSet, 0x0b,  // local.set
kExprI32Const, 0x87, 0xfd, 0xab, 0xe1, 0x7a,  // i32.const
kExprEnd,  // end @1704
]);
// Generate function 2 (out of 4).
builder.addFunction(undefined, 7 /* sig */)
  .addLocals(kWasmI32, 12)
  .addBodyWithEnd([
// signature: ffffffffffffff_ffffffffffffff
// body:
kExprF32Const, 0x1c, 0xff, 0xa7, 0x8b,  // f32.const
kExprF32Const, 0x79, 0x33, 0xbf, 0x12,  // f32.const
kExprF32Const, 0x95, 0x94, 0xc7, 0x15,  // f32.const
kExprF32Const, 0x1c, 0x46, 0x29, 0xf7,  // f32.const
kExprF32Const, 0xe7, 0x36, 0xd0, 0x9b,  // f32.const
kExprRefNull, 0x6e,  // ref.null
kGCPrefix, kExprRefCastNull, 0x01,  // ref.cast null
kGCPrefix, kExprStructGet, 0x01, 0x01,  // struct.get
kGCPrefix, kExprRefCastNull, 0x02,  // ref.cast null
kExprI32Const, 0xfb, 0xfb, 0xf3, 0x94, 0x01,  // i32.const
kExprRefNull, 0x02,  // ref.null
kExprI32Const, 0xe0, 0x94, 0xf7, 0xa7, 0x7d,  // i32.const
kExprI32Const, 0xe5, 0xe5, 0xd4, 0xaf, 0x7b,  // i32.const
kGCPrefix, kExprArrayCopy, 0x02, 0x02,  // array.copy
kExprF32Const, 0x86, 0x4e, 0xbf, 0xe7,  // f32.const
kExprF32Const, 0xed, 0x95, 0xcf, 0xa4,  // f32.const
kExprF32Const, 0x31, 0x90, 0x7d, 0xac,  // f32.const
kExprF32Const, 0x6c, 0x77, 0xee, 0x5b,  // f32.const
kExprF32Const, 0x89, 0x6a, 0x39, 0xb6,  // f32.const
kExprF32Const, 0x83, 0xd3, 0x3e, 0xb2,  // f32.const
kExprF32Const, 0xa2, 0x08, 0x97, 0xdc,  // f32.const
kExprF32Const, 0x11, 0x5c, 0x1f, 0x65,  // f32.const
kExprF32Const, 0xc4, 0x0f, 0x17, 0x02,  // f32.const
kExprEnd,  // end @109
]);
// Generate function 3 (out of 4).
builder.addFunction(undefined, 8 /* sig */)
  .addLocals(kWasmI32, 7).addLocals(wasmRefType(8), 1).addLocals(kWasmI32, 4)
  .addBodyWithEnd([
// signature: rrrrnnlnnnriii_iiiiiiiiiiiiii
// body:
kExprRefNull, 0x70,  // ref.null
kGCPrefix, kExprRefCast, 0x08,  // ref.cast
kExprLocalSet, 0x15,  // local.set
kExprRefNull, 0x6a,  // ref.null
kGCPrefix, kExprRefCast, 0x00,  // ref.cast
kExprRefNull, 0x6e,  // ref.null
kGCPrefix, kExprRefCast, 0x00,  // ref.cast
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kGCPrefix, kExprStructNew, 0x00,  // struct.new
kExprRefNull, 0x70,  // ref.null
kExprI64Const, 0x85, 0xe2, 0x00,  // i64.const
kExprF32SConvertI64,  // f32.convert_i64_s
kExprI32Const, 0x97, 0x9f, 0xd2, 0x9a, 0x79,  // i32.const
kExprI64Const, 0xf0, 0xc0, 0x9b, 0xe9, 0xd4, 0xe1, 0x9e, 0xa6, 0x80, 0x7f,  // i64.const
kExprI64Const, 0xfb, 0xcc, 0xcc, 0xe3, 0xcc, 0xad, 0xee, 0xd6, 0xf7, 0x00,  // i64.const
kAtomicPrefix, kExprI64AtomicCompareExchange, 0x03, 0x94, 0xa9, 0x02,  // i64.atomic.rmw.cmpxchg
kExprF32SConvertI64,  // f32.convert_i64_s
kExprF32CopySign,  // f32.copysign
kExprF32Ceil,  // f32.ceil
kExprF32Const, 0xca, 0x24, 0x39, 0xcb,  // f32.const
kExprF32Min,  // f32.min
kExprI32SConvertF32,  // i32.trunc_f32_s
kGCPrefix, kExprRefI31,  // ref.i31
kGCPrefix, kExprRefCastNull, 0x02,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x01,  // ref.cast null
kGCPrefix, kExprStructGet, 0x01, 0x01,  // struct.get
kGCPrefix, kExprRefCastNull, 0x01,  // ref.cast null
kGCPrefix, kExprStructGet, 0x01, 0x01,  // struct.get
kGCPrefix, kExprRefCastNull, 0x01,  // ref.cast null
kGCPrefix, kExprStructGet, 0x01, 0x01,  // struct.get
kExprI32Const, 0xd3, 0xc1, 0x87, 0x9c, 0x7f,  // i32.const
kExprI64Const, 0xa7, 0x8b, 0xfa, 0x9e, 0xe4, 0xfc, 0xef, 0x91, 0x59,  // i64.const
kExprI64Const, 0xb5, 0xe7, 0xf1, 0xd9, 0xf0, 0xcd, 0x9e, 0xfd, 0xa4, 0x7f,  // i64.const
kAtomicPrefix, kExprI64AtomicCompareExchange, 0x00, 0x94, 0xe9, 0x02,  // i64.atomic.rmw.cmpxchg
kExprI32Const, 0xd4, 0xec, 0x95, 0xe3, 0x07,  // i32.const
kExprI64Const, 0xaa, 0xbd, 0xc1, 0xe1, 0xd6, 0xef, 0xa5, 0xdd, 0x0e,  // i64.const
kExprI64Const, 0xb9, 0xb3, 0xb0, 0x92, 0x90, 0xf8, 0xd4, 0x8a, 0xb7, 0x7f,  // i64.const
kAtomicPrefix, kExprI64AtomicCompareExchange, 0x02, 0x94, 0xa9, 0x02,  // i64.atomic.rmw.cmpxchg
kExprI32Const, 0xa1, 0xe3, 0x8b, 0xd4, 0x07,  // i32.const
kExprI64Const, 0xf9, 0xfd, 0x88, 0xd7, 0x8b, 0xe6, 0xc6, 0xd1, 0x5e,  // i64.const
kExprI64Const, 0x84, 0xdd, 0xb6, 0xb9, 0xc0, 0xa8, 0xd1, 0x99, 0xab, 0x7f,  // i64.const
kAtomicPrefix, kExprI64AtomicCompareExchange, 0x00, 0x85, 0xa9, 0x02,  // i64.atomic.rmw.cmpxchg
kExprI64GeU,  // i64.ge_u
kGCPrefix, kExprRefI31,  // ref.i31
kExprRefNull, 0x00,  // ref.null
kExprRefNull, 0x6e,  // ref.null
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x6b,  // ref.cast null
kGCPrefix, kExprStructNewDefault, 0x01,  // struct.new_default
kExprI32Const, 0xe0, 0xa6, 0x81, 0xa5, 0x7a,  // i32.const
kExprI32Const, 0xd9, 0x96, 0xe1, 0x9e, 0x7d,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0xfc, 0xdf, 0xcf, 0xe6, 0x01,  // i32.const
kExprI32Const, 0xf9, 0xf8, 0x97, 0x54,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xeb, 0x00,  // i32.const
kExprI32Const, 0xe5, 0xaf, 0x85, 0xf4, 0x05,  // i32.const
kExprI32Const, 0xbb, 0xde, 0xcf, 0xa1, 0x78,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0x96, 0xf6, 0xc6, 0xd7, 0x7c,  // i32.const
kExprI32Const, 0xfc, 0xa6, 0xe9, 0xce, 0x06,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xe0, 0xe0, 0x9f, 0xf0, 0x01,  // i32.const
kExprI32Const, 0x96, 0xac, 0xa6, 0x99, 0x02,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Const, 0xa2, 0x92, 0x86, 0x96, 0x06,  // i32.const
kExprI32Const, 0x94, 0x86, 0xb1, 0xea, 0x06,  // i32.const
kExprI32Const, 0xa9, 0xe3, 0xcb, 0x02,  // i32.const
kExprI32Const, 0xaf, 0x83, 0xfd, 0xb9, 0x7d,  // i32.const
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0x00,  // i32.const
kSimdPrefix, kExprI8x16Splat,  // i8x16.splat
kSimdPrefix, kExprF32x4ExtractLane, 0x03,  // f32x4.extract_lane
kExprRefNull, 0x6e,  // ref.null
kGCPrefix, kExprRefCastNull, 0x00,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x6e,  // ref.cast null
kGCPrefix, kExprRefCastNull, 0x02,  // ref.cast null
kExprI32Const, 0xba, 0xdc, 0xa0, 0xab, 0x7f,  // i32.const
kGCPrefix, kExprArrayGet, 0x02,  // array.get
kExprF32Ge,  // f32.ge
kExprI32Mul,  // i32.mul
kExprI32Mul,  // i32.mul
kExprI32Const, 0xe0, 0xd5, 0x91, 0x10,  // i32.const
kExprI64Const, 0x82, 0xfd, 0x81, 0xd8, 0xdd, 0xaf, 0xce, 0xe0, 0xe6, 0x00,  // i64.const
kExprI64Const, 0x9e, 0xea, 0xcf, 0xc9, 0xe2, 0xbe, 0xf2, 0xb8, 0x31,  // i64.const
kAtomicPrefix, kExprI64AtomicCompareExchange, 0x03, 0x94, 0xa9, 0x02,  // i64.atomic.rmw.cmpxchg
kExprI32Const, 0xf2, 0xdd, 0xaf, 0x85, 0x01,  // i32.const
kExprI64Const, 0xb0, 0x95, 0xf4, 0xd7, 0x8b, 0xd3, 0xf9, 0xf8, 0x64,  // i64.const
kExprI64Const, 0xb3, 0xb3, 0x8e, 0x98, 0xc2, 0xae, 0x93, 0xc0, 0xc4, 0x00,  // i64.const
kAtomicPrefix, kExprI64AtomicCompareExchange, 0x00, 0x94, 0x01,  // i64.atomic.rmw.cmpxchg
kExprI64GeU,  // i64.ge_u
kExprEnd,  // end @433
]);
// Generate function 4 (out of 4).
builder.addFunction(undefined, 9 /* sig */)
  .addLocals(wasmRefType(6), 1).addLocals(kWasmI32, 1).addLocals(wasmRefNullType(1), 1).addLocals(wasmRefNullType(kWasmNullRef), 2).addLocals(kWasmF32, 1).addLocals(kWasmI32, 14)
  .addBodyWithEnd([
// signature: v_v
// body:
kExprRefFunc, 0x00,  // ref.func
kExprLocalSet, 0x00,  // local.set
kExprEnd,  // end @19
]);
builder.addExport('main', 0);
const instance = builder.instantiate();
try {
  print(instance.exports.main(1, 2, 3));
} catch (e) {
  print('caught exception', e);
}
