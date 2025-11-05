new WeakMap();
// WasmModule Code:
// BeginWasmModule
//     v2 <- WasmDefineGlobal wasmf64(-inf)
//     v3 <- WasmDefineTag [Fuzzilli.Parameter.plain(.wasmf32), Fuzzilli.Parameter.plain(.wasmf64), Fuzzilli.Parameter.plain(.wasmf64), Fuzzilli.Parameter.plain(.wasmi32), Fuzzilli.Parameter.plain(.wasmf64), Fuzzilli.Parameter.plain(.wasmi32), Fuzzilli.Parameter.plain(.wasmf32), Fuzzilli.Parameter.plain(.wasmi64), Fuzzilli.Parameter.plain(.wasmi64)]
//     v4 <- WasmDefineGlobal wasmf64(-333.9521075745737)
// v5 <- EndWasmModule
// 
const v5 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0x00, 0x61, 0x73, 0x6D, 0x01, 0x00, 0x00, 0x00, 0x01, 0x0D,
    0x01, 0x60, 0x09, 0x7D, 0x7C, 0x7C, 0x7F, 0x7C, 0x7F, 0x7D,
    0x7E, 0x7E, 0x00, 0x03, 0x01, 0x00, 0x04, 0x01, 0x00, 0x05,
    0x01, 0x00, 0x0D, 0x03, 0x01, 0x00, 0x00, 0x06, 0x19, 0x02,
    0x7C, 0x00, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xF0,
    0xFF, 0x0B, 0x7C, 0x01, 0x44, 0x16, 0xF1, 0x26, 0xD5, 0x3B,
    0xDF, 0x74, 0xC0, 0x0B, 0x07, 0x0D, 0x02, 0x03, 0x77, 0x67,
    0x30, 0x03, 0x00, 0x03, 0x77, 0x67, 0x31, 0x03, 0x01, 0x09,
    0x01, 0x00, 0x0A, 0x01, 0x00,
])));
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f230cd9e700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x564c4ff51a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x564c4ff502a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x564c4ff44546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x564c4ff43d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x564c51a5d13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x564c51e287a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x564c519ba3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x564c51968150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x564c51964fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x564c516bb5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x564c516b27e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x564c50130cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x564c516b5588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x564c4ff5514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x564c4ff60925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x564c4ff4d650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f2316155ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f23161e7850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 132ms
