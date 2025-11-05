var onlySpace = String.fromCharCode(9, 10, 11, 12, 13, 32, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288, 65279);
onlySpace.trim();
(onlySpace + "aaaa").trim();
("aaaa" + onlySpace).trim();
((onlySpace + "aaaa") + onlySpace).trim();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
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
// #FailureMessage Object: 0x7f4be06eb700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5651270e5a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5651270e42a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5651270d8546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5651270d7d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x565128bf113e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x565128fbc7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x565128b4e3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x565128afc150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x565128af8fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56512884f5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5651288467e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5651272c4cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x565128849588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5651270e914f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5651270f4925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5651270e1650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f4beeaacac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f4beeb3e850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 107ms
