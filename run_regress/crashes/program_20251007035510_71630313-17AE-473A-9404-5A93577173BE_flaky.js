var my_identity = "id";
function cp(a3, a4) {
    'id';
    this.my_identity;
    return 0;
}
([1,2]).sort(cp);
function r(a13) {
    return this.my_identity;
}
("hello").replace("hello", r);
("hello").replace(/hello/, r);
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
// #FailureMessage Object: 0x7fcc486dc700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x565000807a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5650008062a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5650007fa546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5650007f9d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x56500231313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5650026de7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5650022703eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x56500221e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x56500221afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x565001f715d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x565001f687e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5650009e6cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x565001f6b588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x56500080b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x565000816925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x565000803650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fcc57a9fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fcc57b31850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 196ms
