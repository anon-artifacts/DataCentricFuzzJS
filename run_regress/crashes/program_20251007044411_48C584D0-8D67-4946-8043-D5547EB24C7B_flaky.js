var x = [,];
var n = [,];
var np = 18229;
sa = Array;
function copy_(a11, a12) {
    var i;
    var k = a11 < a12 ? a11.length : a12.length;
    for ((() => {
            i = 0;
        })();
        i < k;
        i--) {
        a11[i];
        if (i == -100) {
            return;
        }
    }
}
function mont_(a28, a29, a30, a31) {
    copy_(a28, sa);
}
mont_(x, x, n, np);
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
// #FailureMessage Object: 0x7fcf067fa700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55ac88512a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55ac885112a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55ac88505546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55ac88504d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55ac8a01e13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55ac8a3e97a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55ac89f7b3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55ac89f29150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55ac89f25fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55ac89c7c5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55ac89c737e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55ac886f1cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55ac89c76588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55ac8851614f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55ac88521925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55ac8850e650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fcf20231ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fcf202c3850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 115ms
