new Uint8ClampedArray();
new Int8Array();
new Int16Array();
function f8() {
    return arguments;
}
function f10(a11, a12, a13) {
    return (a11 + a12) + a13;
}
function f16(a17, a18, a19) {
    return f10.apply(0, f8(a18, a19, 42));
}
for (let i25 = 0; i25 < 10000; ++i25) {
    f16(1, 2, 3, 2, i25, 257) > 47;
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
// #FailureMessage Object: 0x7f9160e28700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55575a290a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55575a28f2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55575a283546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55575a282d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55575bd9c13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55575c1677a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55575bcf93eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55575bca7150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55575bca3fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55575b9fa5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55575b9f17e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55575a46fcb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55575b9f4588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55575a29414f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55575a29f925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55575a28c650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f916e9e8ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f916ea7a850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 151ms
