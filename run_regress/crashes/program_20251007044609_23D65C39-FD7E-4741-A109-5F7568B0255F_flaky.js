var p = { f: true };
function foo(a4, a5) {
    var c;
    if (p.f) {
        c = a4;
    }
    return a5[Math.abs(c)];
}
var result = 0;
var array = [42,43,44];
for (let i20 = 0; i20 < 1000000; ++i20) {
    result += foo(-(i20 % 3), array);
}
if (result != 42999999) {
    throw "Bad result: " + result;
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
// #FailureMessage Object: 0x7fa8d6e92700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x564e75b7aa82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x564e75b792a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x564e75b6d546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x564e75b6cd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x564e7768613e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x564e77a517a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x564e775e33eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x564e77591150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x564e7758dfd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x564e772e45d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x564e772db7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x564e75d59cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x564e772de588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x564e75b7e14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x564e75b89925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x564e75b76650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa8e5253ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa8e52e5850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 144ms
