let arr = [];
arr[1000] = 4660;
function f4() {
    delete arr[256];
    arr.unshift(1.1);
}
arr.__defineGetter__(256, f4);
let results = Object.entries(arr);
let str = results.toString();
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
// #FailureMessage Object: 0x7f85e0eb2700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55fbb951ba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55fbb951a2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55fbb950e546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55fbb950dd95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55fbbb02713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55fbbb3f27a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55fbbaf843eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55fbbaf32150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55fbbaf2efd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55fbbac855d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55fbbac7c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55fbb96facb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55fbbac7f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55fbb951f14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55fbb952a925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55fbb9517650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f85eda70ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f85edb02850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 329ms
