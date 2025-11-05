let v0 = undefined;
function f1(a2, a3) {
    v0 = a3;
    return a2;
}
for (let v4 = 0; v4 < 50; v4++) {
    f1();
}
f1(true, 6);
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
// #FailureMessage Object: 0x7fb03241d700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563d92377a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563d923762a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563d9236a546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563d92369d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x563d93e8313e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563d9424e7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x563d93de03eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x563d93d8e150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x563d93d8afd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x563d93ae15d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x563d93ad87e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563d92556cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563d93adb588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563d9237b14f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563d92386925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563d92373650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fb03a7d2ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fb03a864850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 151ms
