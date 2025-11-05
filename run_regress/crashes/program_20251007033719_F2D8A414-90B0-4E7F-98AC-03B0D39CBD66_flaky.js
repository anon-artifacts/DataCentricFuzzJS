const v0 = {};
const v1 = {};
const v2 = {};
const v3 = [];
const v4 = /xyz/;
const v6 = new Date();
var arr = [v0,v1,v2,v3,v4,v6];
const v10 = new Set(arr);
var set = v10;
set.size;
arr.length;
var i = 0;
for (const v16 of set) {
    arr[i++];
}
arr.length;
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
// #FailureMessage Object: 0x7fabcc280700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x555e95793a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x555e957922a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x555e95786546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x555e95785d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x555e9729f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x555e9766a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x555e971fc3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x555e971aa150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x555e971a6fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x555e96efd5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x555e96ef47e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x555e95972cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x555e96ef7588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x555e9579714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x555e957a2925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x555e9578f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fabd5e38ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fabd5eca850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 135ms
