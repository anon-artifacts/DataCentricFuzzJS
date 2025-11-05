function __f_2(a1) {
    return a1.field.b.x;
}
try {
    __v_1 = __f_2();
} catch(e7) {
}
function __f_3() {
    __f_3(/./.test());
}
try {
    __f_3();
} catch(e13) {
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
// #FailureMessage Object: 0x7f3b82035700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55af0970ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55af0970a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55af096fe546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55af096fdd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55af0b21713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55af0b5e27a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55af0b1743eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55af0b122150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55af0b11efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55af0ae755d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55af0ae6c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55af098eacb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55af0ae6f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55af0970f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55af0971a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55af09707650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f3b90bf7ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f3b90c89850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 144ms
