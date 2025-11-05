function f(a1, a2) {
    var a = 0;
    if (a2) {
        var c = 1 << a1;
        a = c + c;
    }
    var x = a >> 3;
    return a;
}
f(1, false);
f(1, true);
(1 << 30) * 2;
f(30, true);
var global = 1;
function f2(a29) {
    var a = 0;
    if (a29) {
        a = global;
    }
    var x = a >> 3;
    return a;
}
f2(false);
f2(true);
global = 2.5;
f2(true);
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
// #FailureMessage Object: 0x7f80de371700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x559d6ba6aa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x559d6ba692a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x559d6ba5d546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x559d6ba5cd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x559d6d57613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x559d6d9417a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x559d6d4d33eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x559d6d481150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x559d6d47dfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x559d6d1d45d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x559d6d1cb7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x559d6bc49cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x559d6d1ce588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x559d6ba6e14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x559d6ba79925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x559d6ba66650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f80ecf33ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f80ecfc5850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 117ms
