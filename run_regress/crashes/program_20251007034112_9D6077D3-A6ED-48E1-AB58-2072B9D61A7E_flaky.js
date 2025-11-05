function f0() {
    return f0;
}
const v3 = Array(10, f0);
Object.defineProperty(v3, 9, { value: 1 });
try { v3.sort(); } catch (e) {}
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
// #FailureMessage Object: 0x7f76db551700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x560331f5ea82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x560331f5d2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x560331f51546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x560331f50d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x560333a6a13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x560333e357a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5603339c73eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x560333975150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x560333971fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5603336c85d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5603336bf7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x56033213dcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5603336c2588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x560331f6214f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x560331f6d925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x560331f5a650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f76e610bac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f76e619d850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 113ms
