// WasmModule Code:
// BeginWasmModule
//     v0 <- WasmDefineTag [Fuzzilli.Parameter.plain(.wasmf64), Fuzzilli.Parameter.plain(.wasmi64), Fuzzilli.Parameter.plain(.wasmf64), Fuzzilli.Parameter.plain(.wasmf32), Fuzzilli.Parameter.plain(.wasmf32), Fuzzilli.Parameter.plain(.wasmi64), Fuzzilli.Parameter.plain(.wasmi32)]
//     v1 <- WasmDefineTag [Fuzzilli.Parameter.plain(.wasmf64), Fuzzilli.Parameter.plain(.wasmi32), Fuzzilli.Parameter.plain(.wasmi32)]
//     v2 <- WasmDefineMemory [1,29563],
// v3 <- EndWasmModule
// 
const v3 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0x00, 0x61, 0x73, 0x6D, 0x01, 0x00, 0x00, 0x00, 0x01, 0x11,
    0x02, 0x60, 0x07, 0x7C, 0x7E, 0x7C, 0x7D, 0x7D, 0x7E, 0x7F,
    0x00, 0x60, 0x03, 0x7C, 0x7F, 0x7F, 0x00, 0x03, 0x01, 0x00,
    0x04, 0x01, 0x00, 0x05, 0x06, 0x01, 0x01, 0x01, 0xFB, 0xE6,
    0x01, 0x0D, 0x05, 0x02, 0x00, 0x00, 0x00, 0x01, 0x06, 0x01,
    0x00, 0x07, 0x01, 0x00, 0x09, 0x01, 0x00, 0x0A, 0x01, 0x00,
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
// #FailureMessage Object: 0x7fdde2a30700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55861d121a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55861d1202a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55861d114546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55861d113d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55861ec2d13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55861eff87a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55861eb8a3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55861eb38150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55861eb34fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55861e88b5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55861e8827e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55861d300cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55861e885588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55861d12514f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55861d130925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55861d11d650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fddef5eeac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fddef680850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 115ms
