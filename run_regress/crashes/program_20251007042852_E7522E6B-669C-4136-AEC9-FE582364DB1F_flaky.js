function dummy(a1) {
}
function g() {
    return g.arguments;
}
function f(a5) {
    var i = 0;
    var o = {};
    for (; i < a5; i++) {
        o.y = +o.y;
        g();
    }
}
f(1);
f(1);
dummy(f(1));
dummy(f(2));
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
// #FailureMessage Object: 0x7f26498d6700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55a771aa2a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55a771aa12a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55a771a95546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55a771a94d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55a7735ae13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55a7739797a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55a77350b3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55a7734b9150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55a7734b5fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55a77320c5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55a7732037e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55a771c81cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55a773206588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55a771aa614f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55a771ab1925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55a771a9e650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f2658c99ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f2658d2b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 137ms
