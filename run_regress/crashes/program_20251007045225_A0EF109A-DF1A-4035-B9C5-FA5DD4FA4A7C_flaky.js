console.log("Tests that deleting all properties from an object and then flattening it doesn't cause inconsistencies.");
var o = {};
for (let i6 = 0; i6 < 1000; ++i6) {
    o["a" + i6] = i6;
}
for (let i15 = 0; i15 < 1000; ++i15) {
    delete o["a" + i15];
}
var p = {};
p.__proto__ = o;
var q = { f: 42 };
o.__proto__ = q;
for (let i30 = 0; i30 < 100; ++i30) {
    p.f;
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
// #FailureMessage Object: 0x7fc003529700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x5600b68bba82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x5600b68ba2a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x5600b68ae546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x5600b68add95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5600b83c713e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x5600b87927a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x5600b83243eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5600b82d2150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5600b82cefd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x5600b80255d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5600b801c7e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x5600b6a9acb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x5600b801f588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x5600b68bf14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x5600b68ca925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x5600b68b7650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fc0100e7ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fc010179850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 147ms
