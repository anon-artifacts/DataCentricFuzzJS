function callee() {
    try { evalInFrame(1, "x = 'success'"); } catch (e) {}
}
function caller() {
    var x = { dana: "zuul" };
    try { callee(); } catch (e) {}
    return x;
}
caller();
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
// #FailureMessage Object: 0x7fbcf07f6700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55bdb8de8a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55bdb8de72a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55bdb8ddb546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55bdb8ddad95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55bdba8f413e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55bdbacbf7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55bdba8513eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55bdba7ff150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55bdba7fbfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55bdba5525d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55bdba5497e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55bdb8fc7cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55bdba54c588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55bdb8dec14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55bdb8df7925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55bdb8de4650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fbd05d12ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fbd05da4850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 118ms
