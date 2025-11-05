function f() {
}
f = 5;
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
// #FailureMessage Object: 0x7f1cc5ff1700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x558ce6b17a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x558ce6b162a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x558ce6b0a546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x558ce6b09d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x558ce862313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x558ce89ee7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x558ce85803eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x558ce852e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x558ce852afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x558ce82815d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x558ce82787e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x558ce6cf6cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x558ce827b588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x558ce6b1b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x558ce6b26925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x558ce6b13650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f1cde7d0ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f1cde862850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 185ms
