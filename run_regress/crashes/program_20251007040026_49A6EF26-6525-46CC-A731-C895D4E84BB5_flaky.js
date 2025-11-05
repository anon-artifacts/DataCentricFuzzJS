var big = 10000000000;
const v4 = new Float64Array(1);
var backup = v4;
function mult0(a7) {
    var prod = a7 * big;
    backup[0] = prod;
    var rounded = Math.round(prod);
    backup[0];
    return rounded;
}
var count = 5;
for (let i17 = 0; i17 < count; i17++) {
    var result = mult0(-1);
    -big;
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
// #FailureMessage Object: 0x7fabceb94700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55d9b71b0a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55d9b71af2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55d9b71a3546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55d9b71a2d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55d9b8cbc13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55d9b90877a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55d9b8c193eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55d9b8bc7150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55d9b8bc3fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55d9b891a5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55d9b89117e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55d9b738fcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55d9b8914588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55d9b71b414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55d9b71bf925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55d9b71ac650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fabd974eac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fabd97e0850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 128ms
