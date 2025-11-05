class C0 {
}
function f1(a2) {
    if (false) {
        return arguments;
    }
}
for (let i6 = 0; i6 < 10000; ++i6) {
    var result = f1();
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
// #FailureMessage Object: 0x7fb082ddf700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x558870869a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5588708682a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55887085c546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55887085bd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55887237513e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5588727407a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5588722d23eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x558872280150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55887227cfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x558871fd35d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x558871fca7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x558870a48cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x558871fcd588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55887086d14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x558870878925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x558870865650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fb08b194ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fb08b226850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 122ms
