var g = -1073741824;
function f() {
    var x = (((((g * g) * g) * g) * g) * g) * g;
    for (let i11 = g; i11 < 1;) {
        i11 += i11 * x;
    }
}
f();
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
// #FailureMessage Object: 0x7f691d878700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559935b70a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559935b6f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559935b63546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559935b62d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55993767c13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559937a477a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5599375d93eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x559937587150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x559937583fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5599372da5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5599372d17e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559935d4fcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5599372d4588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559935b7414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559935b7f925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559935b6c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f692ac37ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f692acc9850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 152ms
