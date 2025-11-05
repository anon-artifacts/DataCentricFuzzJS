function f(a1) {
    var a;
    var b = ([1]).length;
    var c = a1;
    var d = b + 1;
    AA = a1;
    a = d;
    b + d;
}
f();
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
// #FailureMessage Object: 0x7f1f437ff700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55eb1f6d2a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55eb1f6d12a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55eb1f6c5546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55eb1f6c4d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55eb211de13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55eb215a97a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55eb2113b3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55eb210e9150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55eb210e5fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55eb20e3c5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55eb20e337e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55eb1f8b1cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55eb20e36588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55eb1f6d614f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55eb1f6e1925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55eb1f6ce650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f1f4e3b9ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f1f4e44b850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 186ms
