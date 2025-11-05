var p = { f: true };
function foo(a4, a5, a6) {
    var c;
    if (p.f) {
        c = a5;
    }
    return a6[a4 + c];
}
var result = 0;
var array = [42,43,44];
for (let i20 = 0; i20 < 1000000; ++i20) {
    result += foo(1 - i20, i20 + 1, array);
}
if (result != 44000000) {
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
// #FailureMessage Object: 0x7fa5cd832700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55a76e837a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55a76e8362a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55a76e82a546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55a76e829d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55a77034313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55a77070e7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55a7702a03eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55a77024e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55a77024afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55a76ffa15d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55a76ff987e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55a76ea16cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55a76ff9b588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55a76e83b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55a76e846925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55a76e833650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fa5d93eeac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fa5d9480850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 140ms
