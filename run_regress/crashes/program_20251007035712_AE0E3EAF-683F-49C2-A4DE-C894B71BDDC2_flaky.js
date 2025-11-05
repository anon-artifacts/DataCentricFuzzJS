a = [];
for (let i3 = 0; i3 < 1000; i3++) {
    a[i3] = i3;
}
function foo(a11) {
    for (const v12 in a11) {
    }
}
if (typeof schedulegc != "undefined") {
    schedulegc(100);
}
foo(a);
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
// #FailureMessage Object: 0x7f10bb5f0700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55f8bee66a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55f8bee652a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55f8bee59546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55f8bee58d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55f8c097213e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55f8c0d3d7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55f8c08cf3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55f8c087d150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55f8c0879fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55f8c05d05d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55f8c05c77e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55f8bf045cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55f8c05ca588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55f8bee6a14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55f8bee75925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55f8bee62650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f10ca1b2ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f10ca244850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 191ms
