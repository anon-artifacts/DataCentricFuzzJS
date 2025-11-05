console.log("This tests that sort() is a stable sort.");
function clone(a4, a5) {
    for (i = 0; i < a4.length; i++) {
        a5[i] = a4[i];
    }
}
var arr = [];
const v19 = new Number(1);
arr[0] = v19;
const v21 = new Number(2);
arr[1] = v21;
const v23 = new Number(1);
arr[2] = v23;
const v25 = new Number(2);
arr[3] = v25;
var sortArr = [];
clone(arr, sortArr);
sortArr.sort();
arr[0];
arr[1];
arr[2];
arr[3];
sortArr.sort();
arr[0];
arr[1];
arr[2];
arr[3];
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
// #FailureMessage Object: 0x7fe2aa0ce700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x556a5da5ca82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x556a5da5b2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x556a5da4f546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x556a5da4ed95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x556a5f56813e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x556a5f9337a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x556a5f4c53eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x556a5f473150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x556a5f46ffd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x556a5f1c65d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x556a5f1bd7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x556a5dc3bcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x556a5f1c0588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x556a5da6014f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x556a5da6b925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x556a5da58650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fe2b848fac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fe2b8521850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 147ms
