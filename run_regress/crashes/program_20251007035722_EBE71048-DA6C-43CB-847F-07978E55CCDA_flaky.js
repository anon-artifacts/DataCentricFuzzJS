var bytes = [255,247,255,255,255,255,255,255];
bytes.reverse();
const v13 = new Uint8Array(bytes);
const v15 = new Float64Array(v13.buffer);
var result = v15[0];
isNaN(result + 0);
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
// #FailureMessage Object: 0x7f4b122ba700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5573dc2aba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5573dc2aa2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5573dc29e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5573dc29dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5573dddb713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5573de1827a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5573ddd143eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5573ddcc2150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5573ddcbefd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5573dda155d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5573dda0c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5573dc48acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5573dda0f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5573dc2af14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5573dc2ba925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5573dc2a7650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f4b1ae70ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f4b1af02850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 120ms
